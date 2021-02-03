const Orders = require("stripe/lib/resources/Orders");
const { hasPermission, isLoggedIn } = require("../utils");

const Query = {
  Query: {
    async items(parent, args, context, info) {
      const items = context.db.item.findMany(args);
      return items;
    },
    async item(parent, args, context, info) {
      const item = context.db.item.findOne(args);
      return item;
    },
    async itemCount(parent, args, context, info) {
      return await context.db.item.count(args);
    },
    async me(parent, args, context, info) {
      // Check if there is a current user ID
      if (!context.request.userId) {
        return null;
      }
      const user = await context.db.user.findOne(
        {
          where: { id: context.request.userId },
        },
        info
      );
      return user;
    },
    async users(parent, args, context, info) {
      // 1. Check if they are logged in
      isLoggedIn(context);
      // 2.  Check if the user has permissions to query all users
      hasPermission(context.request.user, ["ADMIN", "PERMISSION_UPDATE"]);
      // 3. If they do, query all the users
      return context.db.user.findMany(
        {
          orderBy: [{ id: "asc" }],
        },
        info
      );
    },
    async order(parent, args, context, info) {
      // 1. Make sure they are logged in
      isLoggedIn(context);
      // 2. Query the current order
      const order = await context.db.order.findOne({
        where: { id: parseFloat(args.id) },
        select: {
          id: true,
          charge: true,
          total: true,
          createdAt: true,
          user: {
            select: { id: true },
          },
          items: {
            select: {
              id: true,
              title: true,
              description: true,
              price: true,
              image: true,
              quantity: true,
            },
          },
        },
      });

      // 3. Check if they have permissions to see the order
      const ownsOrder = order.user.id === context.request.userId;
      const hasPermissionToSeeOrder = context.request.user.permissions.includes(
        "ADMIN"
      );
      if (!ownsOrder || !hasPermissionToSeeOrder) {
        throw new Error("Insufficient permissions to see this order.");
      }
      // 4. Return the order
      return order;
    },
    async orders(parent, args, context, info) {
      isLoggedIn(context);

      const orders = await context.db.order.findMany({
        where: { user: { id: context.request.userId } },
        select: {
          id: true,
          total: true,
          createdAt: true,
          items: {
            select: {
              id: true,
              quantity: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return orders;
    },
  },
};

module.exports = Query;
