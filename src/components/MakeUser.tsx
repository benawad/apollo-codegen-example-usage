import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import {
  CreateUserMutationVariables,
  CreateUserMutation
} from "../operation-result-types";
import createUser from "../mutations/createUser";

interface Props {
  color: string;
}

class MakeUser extends React.Component<
  ChildProps<Props, CreateUserMutation, CreateUserMutationVariables>
> {
  callMutate = () => {
    const { mutate, color } = this.props;
    if (!mutate) {
      return;
    }

    mutate({
      variables: {
        firstName: "bob",
        profile: {
          favoriteColor: color
        }
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

export default graphql<Props, CreateUserMutation, CreateUserMutationVariables>(
  createUser
)(MakeUser);
