const FieldResolvers = {
  User: {
    cart: (parent, args, context, info) => {
      return context.db.cartItem.findMany({
        where: { userId: parent.id },
      });
    },
  },
  CartItem: {
    Item: (parent, args, context, info) => {
      return context.db.item.findOne({ where: { id: parent.itemId } });
    },
    User: (parent, args, context, info) => {
      return context.db.user.findOne({ where: { id: parent.userId } });
    },
  },
  Order: {
    items: (parent, args, context, info) => {
      return context.db.orderItem.findMany({ where: { orderId: parent.id } });
    },
  },
};

module.exports = FieldResolvers;
