const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: Check if they are logged in
    console.log(Object.keys(context.db.item));
    const item = await context.db.item.create(
      {
        data: { ...args },
      },
      info
    );

    return item;
  },
};

module.exports = Mutations;
