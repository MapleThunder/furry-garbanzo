import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "./styles/PaginationStyles";
import { perPage } from "../config";

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemCount
  }
`;

export const Pagination = ({ page }) => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        const count = data.itemCount;
        const pages = Math.ceil(count / perPage);

        return (
          <PaginationStyles data-testid="pagination">
            <Head>
              <title>
                Sick Fits — Page {page} of {pages}
              </title>
            </Head>
            <Link
              href={{
                pathname: "items",
                query: { page: page - 1 },
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                &larr; Prev
              </a>
            </Link>
            <p>
              Page {page} of <span className="totalPages">{pages}</span>
            </p>
            <p>{count} Items Total</p>
            <Link
              href={{
                pathname: "items",
                query: { page: page + 1 },
              }}
            >
              <a className="next" aria-disabled={page >= pages}>
                Next &rarr;
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};
