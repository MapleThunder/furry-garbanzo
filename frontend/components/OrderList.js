import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import Error from "./ErrorMessage";
import { formatDistance } from "date-fns";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import OrderItemStyles from "./styles/OrderItemStyles";

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders {
      id
      total
      createdAt
      items {
        id
        quantity
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

export const OrderList = () => {
  return (
    <Query query={USER_ORDERS_QUERY}>
      {({ data: { orders }, error, loading }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        console.log(orders);
        return (
          <div>
            <h2>You have {orders.length} orders.</h2>
            <OrderUl>
              {orders.map((order) => (
                <OrderItemStyles key={order.id}>
                  <Link
                    href={{
                      pathname: "/order",
                      query: { id: order.id },
                    }}
                  >
                    <a>
                      Order {order.id}
                      <div className="order-meta">
                        <p>
                          {order.items.reduce((a, b) => a + b.quantity, 0)}{" "}
                          Items
                        </p>
                        <p>{formatDistance(order.createdAt, new Date())} ago</p>
                        <p>Total: {formatMoney(order.total)}</p>
                      </div>
                      <div className="images">
                        {order.items.map((item) => (
                          <img src={item.image} alt={item.title} />
                        ))}
                      </div>
                    </a>
                  </Link>
                </OrderItemStyles>
              ))}
            </OrderUl>
          </div>
        );
      }}
    </Query>
  );
};
