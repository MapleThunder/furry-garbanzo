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
    // console.log(context.db.item);
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
};

module.exports = Mutations;
