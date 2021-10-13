import { gql } from "@apollo/client";

export const LINKS_LIST = gql`
  query LinksList($skip: Int!, $take: Int!) {
    feed(skip: $skip, take: $take) {
      id
      links {
        id
        description
        url
        postedBy {
          id
          name
        }
        votes {
          id
        }
        createdAt
      }
      count
    }
  }
`;

export const NEWS_LINKS_LIST = gql`
  query NewsLinksList($createdAt: Sort!, $skip: Int!, $take: Int!) {
    feed(orderBy: { createdAt: $createdAt }, skip: $skip, take: $take) {
      id
      links {
        id
        description
        url
        postedBy {
          id
          name
        }
        votes {
          id
        }
        createdAt
      }
      count
    }
  }
`;

export const SEARCH_LINKS_LIST = gql`
  query SearchLinksList($filter: String!) {
    feed(filter: $filter) {
      id
      links {
        id
        description
        url
        postedBy {
          id
          name
        }
        votes {
          id
        }
        createdAt
      }
      count
    }
  }
`;
