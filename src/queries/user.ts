import { gql } from "apollo-boost";

export default gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      firstName
    }
  }
`;
