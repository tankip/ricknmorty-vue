import { gql } from "@apollo/client/core";

export const GET_CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER_QUERY = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      type
      status
      species
      image
      gender
      created
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;
