import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';


export default client = new ApolloClient({
    uri: `https://ikt-prosel-gj.herokuapp.com/v1/graphql/`,
    cache: new InMemoryCache(),
  });