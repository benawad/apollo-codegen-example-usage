import { gql } from "apollo-boost";

export default gql`
  mutation CreateUser($firstName: String!, $profile: ProfileInput) {
    createUser(firstName: $firstName, profile: $profile) {
      id
      firstName
      profile {
        favoriteColor
      }
    }
  }
`;
