
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';

const hslUri = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

export const client = new ApolloClient({
    uri: hslUri,
    cache: new InMemoryCache()
});