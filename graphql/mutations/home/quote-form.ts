import { gql } from 'graphql-request';
import { RequestDocument, Variables } from 'graphql-request/dist/types';
import { client } from 'lib/graphql-request';

interface ICreateResponse {
  createQuoteForm: {
    data: {
      id: number;
    };
  };
}

const SUBMIT: RequestDocument = gql`
  mutation create($data: QuoteFormInput!) {
    createQuoteForm(data: $data) {
      data {
        id
      }
    }
  }
`;

export async function create(variables: Variables) {
  const { createQuoteForm } = await client.request<ICreateResponse>(SUBMIT, variables);
  return createQuoteForm.data.id;
}
