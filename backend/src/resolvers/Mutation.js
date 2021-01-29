const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: Check if they are logged in
    const item = await context.db.item.create(
      {
        data: { ...args },
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
    const item = await context.db.item.findOne({ where }, `{id title}`);
    // 2. Check if they own that item, or have permissions
    // TODO:
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
    const token = jwt.sign({ usserId: user.id }, process.env.APP_SECRET);
    // Set the token as a cookie in the response
    context.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // Return user to the browser
    return user;
  },
};

module.exports = Mutations;
