const Mutations = {
  async createItem(parent, args, context, info) {
    // TODO: Check if they are logged in
    console.log(context.db.mutation);
    const item = await context.db.mutation.createItem(
      {
        ...args,
      },
      info
    );
    return item;
  },
};

module.exports = Mutations;
