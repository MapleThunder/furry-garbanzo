import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

export const RemoveFromCart = ({ id }) => {
  // This is called when a response is returned from the server
  // after performing the mutation
  const update = (cache, payload) => {
    // 1. Read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    // 2. Remove item from cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(
      (cartItem) => cartItem.id !== cartItemId
    );
    // 3. Write back to cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  return (
    <Mutation
      mutation={REMOVE_FROM_CART_MUTATION}
      variables={{ id }}
      update={update}
      optimisticResponse={{
        __typename: "Mutation",
        removeFromCart: {
          __typename: "CartItem",
          id,
        },
      }}
    >
      {(removeFromCart, { loading, error }) => {
        return (
          <BigButton
            title="Delete Item"
            disabled={loading}
            onClick={() => {
              removeFromCart().catch((err) => alert(err.message));
            }}
          >
            &times;
          </BigButton>
        );
      }}
    </Mutation>
  );
};

RemoveFromCart.propTypes = {
  id: PropTypes.number.isRequired,
};
