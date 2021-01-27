const Query = {
  async items(parent, args, context, info) {
    const items = context.db.item.findMany();
    return items;
  },
};

module.exports = Query;
