import { gql } from 'graphql-request';
import { RequestDocument, Variables } from 'graphql-request/dist/types';
import { client } from 'lib/graphql-request';

interface ICreateResponse {
  createCommercialQuoteForm: {
    data: {
      id: number;
    };
  };
}

const SUBMIT: RequestDocument = gql`
  mutation create($data: CommercialQuoteFormInput!) {
    createCommercialQuoteForm(data: $data) {
      data {
        id
      }
    }
  }
`;

export async function create(variables: Variables) {
  const { createCommercialQuoteForm }: ICreateResponse = await client.request(SUBMIT, variables);
  return createCommercialQuoteForm.data.id;
}
