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
};

module.exports = Mutations;
