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
};

module.exports = Query;
