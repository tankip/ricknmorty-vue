import { gql } from "@apollo/client/core";

const GET_LOCATIONS_QUERY = gql`
  query GetLocations($page: Int!) {
    locations(page: $page) {
      info {
        count
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
`;

export default GET_LOCATIONS_QUERY;
