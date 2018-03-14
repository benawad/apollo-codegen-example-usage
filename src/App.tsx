import * as React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import User1 from "./components/User1";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <User1 color="red" id={1} />
      </ApolloProvider>
    );
  }
}

export default App;
