import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';

// Creating new apollo client

const link = new HttpLink({ uri: 'http://localhost:4000/' }) as any;
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
