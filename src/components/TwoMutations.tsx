import * as React from "react";
import { graphql, compose, MutationFunc } from "react-apollo";
import {
  CreateUserMutationVariables,
  CreateUserMutation,
  DeleteUserMutation,
  DeleteUserMutationVariables
} from "../operation-result-types";
import createUser from "../mutations/createUser";
import deleteUser from "../mutations/deleteUser";

interface Props {
  color: string;
  makeUser: MutationFunc<CreateUserMutation, CreateUserMutationVariables>;
  removeUser: MutationFunc<DeleteUserMutation, DeleteUserMutationVariables>;
}

class TwoMutations extends React.Component<Props> {
  callMutate = () => {
    const { removeUser, makeUser, color } = this.props;
    if (!makeUser || !removeUser) {
      return;
    }

    makeUser({
      variables: {
        firstName: "bob",
        profile: {
          favoriteColor: color
        }
      }
    });

    removeUser({
      variables: {
        id: 1
      }
    });
  };

  render() {
    const { color } = this.props;
    return (
      <button style={{ color }} onClick={this.callMutate}>
        click me
      </button>
    );
  }
}

export default compose(
  graphql<Props, CreateUserMutation, CreateUserMutationVariables>(createUser, {
    name: "makeUser"
  }),
  graphql<Props, DeleteUserMutation, DeleteUserMutationVariables>(deleteUser, {
    name: "removeUser"
  })
)(TwoMutations);
