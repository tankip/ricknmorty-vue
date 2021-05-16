import { gql } from "@apollo/client/core";

export const GET_LOCATIONS_QUERY = gql`
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

export const GET_LOCATION_QUERY = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      created
      residents {
         id
         name
         image
      }
    }
  }
`;
