import { gql } from "apollo-boost";

export default gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id)
  }
`;
