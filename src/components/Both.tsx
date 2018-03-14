import * as React from "react";
import { graphql, compose, ChildProps } from "react-apollo";
import {
  CreateUserMutationVariables,
  CreateUserMutation,
  UserQuery,
  UserQueryVariables
} from "../operation-result-types";
import createUser from "../mutations/createUser";
import user from "../queries/user";

interface Props {
  color: string;
}

type QueryProps = ChildProps<Props, UserQuery, UserQueryVariables>;

class MakeUser extends React.Component<
  ChildProps<QueryProps, CreateUserMutation, CreateUserMutationVariables>
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
    const { color, data } = this.props;
    if (!data) {
      return null;
    }
    const { loading, user: u } = data;

    if (loading || !u) {
      return null;
    }
    return (
      <button style={{ color }} onClick={this.callMutate}>
        click me
      </button>
    );
  }
}

export default compose(
  graphql<Props, CreateUserMutation, CreateUserMutationVariables>(createUser),
  graphql<Props, UserQuery, UserQueryVariables>(user)
)(MakeUser);
