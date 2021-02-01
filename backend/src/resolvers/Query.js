const Query = {
  async items(parent, args, context, info) {
    const items = context.db.item.findMany(args);
    return items;
  },
  async item(parent, args, context, info) {
    const item = context.db.item.findOne(args);
    // console.log(args);

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
};

module.exports = Query;
