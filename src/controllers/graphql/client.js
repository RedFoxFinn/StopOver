
import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
  name: 'RFF - StopOver'
});