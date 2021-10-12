import { gql } from "@apollo/client";

export const LINKS_LIST = gql`
  {
    feed {
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
  query NewsLinksList($createdAt: Sort!) {
    feed(orderBy: { createdAt: $createdAt }) {
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
