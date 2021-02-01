const { hasPermission, isLoggedIn } = require("../utils");

const Query = {
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
    return context.db.user.findOne(
      {
        where: { id: context.request.userId },
      },
      info
    );
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
};

module.exports = Query;
