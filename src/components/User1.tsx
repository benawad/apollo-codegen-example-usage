import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import user from "../queries/user";
import { UserQuery, UserQueryVariables } from "../operation-result-types";

interface Props {
  color: string;
  id: number;
}

class User1 extends React.Component<
  ChildProps<Props, UserQuery, UserQueryVariables>
> {
  render() {
    console.log(this.props);
    const { color, data } = this.props;
    if (!data) {
      return null;
    }
    const { loading, user: u } = data;

    if (loading || !u) {
      return null;
    }

    return <div style={{ color }}>{u.firstName}</div>;
  }
}

export default graphql<Props, UserQuery, UserQueryVariables>(user, {
  options: ({ id }) => ({ variables: { id } })
})(User1);
