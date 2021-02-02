const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeANiceEmail } = require("../mail");
const { isLoggedIn, hasPermission } = require("../utils");

const Mutations = {
  Mutation: {
    async createItem(parent, args, context, info) {
      // 1. Check if they are logged in
      isLoggedIn(context);

      const item = await context.db.item.create(
        {
          data: {
            // This is how to create a relationship between
            // the item and the user
            user: {
              connect: {
                id: context.request.userId,
              },
            },
            ...args,
          },
        },
        info
      );

      return item;
    },
    async updateItem(parent, args, context, info) {
      // Make a copy of the updates
      const updates = { ...args };
      // Remove the ID from the update obj
      delete updates.id;
      // Run the update method
      return context.db.item.update({
        where: { id: parseFloat(args.id) },
        data: updates,
      });
    },
    async deleteItem(parent, args, context, info) {
      const where = { id: parseFloat(args.id) };
      // 1. Find the item
      const item = await context.db.item.findOne(
        { where },
        `{id title user { id }}`
      );
      // 2. Check if they own that item, or have permissions
      const ownsItem = item.userId === context.request.userId;
      const hasPermissions = context.request.user.permissions.some(
        (permission) => ["ADMIN", "ITEM_DELETE"].includes(permission)
      );
      if (!ownsItem && !hasPermissions) {
        throw new Error("You don't have permissions");
      }
      // 3. Delete it !
      return context.db.item.delete({ where }, info);
    },
    async signup(parent, args, context, info) {
      args.email = args.email.toLowerCase();
      // Hash the password
      const password = await bcrypt.hash(args.password, 10);
      // Create the user in the db
      const user = await context.db.user.create(
        {
          data: {
            ...args,
            password,
            permissions: { set: ["USER"] },
          },
        },
        info
      );
      // create a JWT token for the user
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      // Set the token as a cookie in the response
      context.response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
      });
      // Return user to the browser
      return user;
    },
    async signin(parent, { email, password }, context, info) {
      // 1. Check if there is a user with that email
      const user = await context.db.user.findOne({ where: { email } });
      if (!user) {
        throw new Error(`No such user found for email ${email}`);
      }
      // 2. Check that their password is correct
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password!");
      }
      // 3. Generate the JWT
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      // 4. Set the cookie with the token
      context.response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
      });
      // 5. Return the user
      return user;
    },
    async signout(parent, args, context, info) {
      context.response.clearCookie("token");

      return { message: "Successfully signed out !" };
    },
    async requestReset(parent, args, context, info) {
      // 1. Check if this is a real user
      const user = await context.db.user.findOne({
        where: { email: args.email },
      });
      if (!user) {
        throw new Error(`No such user found for email ${args.email}`);
      }
      // 2. Set a reset token and expiry
      const resetToken = (await promisify(randomBytes)(20)).toString("hex");
      const resetTokenExpiry = Date.now() + 3_600_000; // 1 hour from now
      const res = await context.db.user.update({
        where: { email: args.email },
        data: { resetToken, resetTokenExpiry },
      });
      // 3. Email them the reset token
      const mailResponse = await transport.sendMail({
        from: "niko@maplestorm.ca",
        to: user.email,
        subject: "Your password reset token",
        html: makeANiceEmail(
          `Your password reset token is here: \n\n 
        <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">
          Click here to reset your password
        </a>`
        ),
      });

      return { message: "Success !" };
    },
    async resetPassword(parent, args, context, info) {
      // 1. Check if the passwords match
      if (args.password !== args.confirmPassword) {
        throw new Error("The passwords do not match.");
      }
      // 2. Check if it's a legit reset token
      // 3. Check to see if it's expired
      const [user] = await context.db.user.findMany({
        where: {
          resetToken: {
            equals: args.resetToken,
          },
          resetTokenExpiry: {
            gte: Date.now() - 3_600_000,
          },
        },
      });
      if (!user) {
        throw new Error("This token is either invalid or expired !");
      }
      // 4. Hash the new password
      const password = await bcrypt.hash(args.password, 10);
      // 5. Add password to user and remove old token fields
      const updatedUser = context.db.user.update({
        where: {
          email: user.email,
        },
        data: {
          password,
          resetToken: null,
          resetTokenExpiry: null,
        },
      });
      // 6. Generate JWT
      const token = jwt.sign(
        { userId: updatedUser.id },
        process.env.APP_SECRET
      );
      // 7. Set JWT cookie
      context.response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });
      // 8. Return new user
      return updatedUser;
    },
    async updatePermissions(parent, args, context, info) {
      // 1. Check if they are logged in
      isLoggedIn(context);
      // 2. Query the current user
      // const user = context.request.user;
      // 3. Check if they have permissions to do this
      hasPermission(context.request.user, ["ADMIN", "PERMISSION_UPDATE"]);
      // 4. Update the permission
      return context.db.user.update(
        {
          data: {
            permissions: {
              set: args.permissions,
            },
          },
          where: {
            id: parseFloat(args.userId),
          },
        },
        info
      );
    },
    async addToCart(parent, args, context, info) {
      // 1. Make sure the user is logged in
      isLoggedIn(context);
      const id = parseFloat(args.id);
      // 2. Query the users current cart
      const [existingCartItem] = await context.db.cartItem.findMany({
        where: {
          User: { id: context.request.userId },
          Item: { id },
        },
      });
      // 3. Check if that item is already in the cart, increment by 1 if it is
      if (existingCartItem) {
        console.log("This item is already in their cart");
        return context.db.cartItem.update({
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 },
        });
      }
      // 4. If it's not, add the item
      return context.db.cartItem.create({
        data: {
          User: {
            connect: { id: context.request.userId },
          },
          Item: {
            connect: { id: id },
          },
        },
      });
    },
    async removeFromCart(parent, args, context, info) {
      const id = parseFloat(args.id);
      // 1. Find the cart item
      const cartItem = await context.db.cartItem.findOne(
        {
          where: { id },
        },
        `{id, User { id }}`
      );
      if (!cartItem) {
        throw new Error("Cart item not found");
      }
      // 2. Make sure they own the cart item
      if (cartItem.userId !== context.request.userId) {
        throw new Error("You can't remove items from others' carts.");
      }
      // 3. Delete the cart item
      await context.db.cartItem.delete({ where: { id } }, info);
      // 4. Return deleted cart item
      return cartItem;
    },
  },
};

module.exports = Mutations;
