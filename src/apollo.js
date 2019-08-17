import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: `https://ikt-prosel-gj.herokuapp.com/v1/graphql/`,
});

export default client;
