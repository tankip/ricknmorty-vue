import { gql } from "@apollo/client/core";

export const GET_COUNT_QUERY = gql`
  query GetCount {
    characters(page: null) {
      info {
        count
      }
    }
    episodes(page: null) {
      info {
        count
      }
    }
    locations(page: null) {
      info {
        count
      }
    }
  }
`;
