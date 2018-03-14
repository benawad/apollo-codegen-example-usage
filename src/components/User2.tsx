import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import user from "../queries/user";
import { UserQuery, UserQueryVariables } from "../operation-result-types";

interface Props {
  color: string;
}

const User2 = ({
  color,
  data
}: ChildProps<Props, UserQuery, UserQueryVariables>) => {
  if (!data) {
    return null;
  }
  const { loading, user: u } = data;

  if (loading || !u) {
    return null;
  }

  return <div style={{ color }}>{u.firstName}</div>;
};

export default graphql<Props, UserQuery, UserQueryVariables>(user)(User2);
