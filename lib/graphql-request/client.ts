import { GraphQLClient } from 'graphql-request';

const endpoint =
  (process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_BACKEND_LH_URL
    : process.env.NEXT_PUBLIC_BACKEND_URL) + '/graphql';

const headers = { authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}` };

const client = new GraphQLClient(endpoint, { headers });

export default client;
