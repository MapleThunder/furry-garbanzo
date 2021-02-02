import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import formatMoney from "../lib/formatMoney";
import { RemoveFromCart } from "./RemoveFromCart";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

export const CartItem = ({ cartItem }) => {
  if (!cartItem.Item) {
    return (
      <CartItemStyles>
        <p>This item has been removed.</p>
        <RemoveFromCart id={cartItem.id} />
      </CartItemStyles>
    );
  }
  return (
    <CartItemStyles>
      <img width="100px" src={cartItem.Item.image} alt={cartItem.Item.title} />
      <div className="cart-item-details">
        <h3>{cartItem.Item.title}</h3>
        <p>
          {formatMoney(cartItem.Item.price * cartItem.quantity)}
          {" - "}
          <em>
            {cartItem.quantity} &times; {formatMoney(cartItem.Item.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={parseFloat(cartItem.id)} />
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};
