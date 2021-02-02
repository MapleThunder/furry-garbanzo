export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.Item) return tally;
    return tally + cartItem.quantity * cartItem.Item.price;
  }, 0);
}
