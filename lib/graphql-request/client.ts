import { GraphQLClient } from 'graphql-request';
import { backendUrl } from 'utils/env';

const endpoint = backendUrl + '/graphql';

const headers = { authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}` };

const client = new GraphQLClient(endpoint, { headers });

export default client;
