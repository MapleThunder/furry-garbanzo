const Query = {
  async items(parent, args, context, info) {
    const items = context.db.item.findMany();
    return items;
  },
  async item(parent, args, context, info) {
    const item = context.db.item.findOne(args);
    // console.log(args);

    return item;
  },
};

module.exports = Query;
