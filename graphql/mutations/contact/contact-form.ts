import { gql } from 'graphql-request';
import { RequestDocument, Variables } from 'graphql-request/dist/types';
import { client } from 'lib/graphql-request';

interface ICreateResponse {
  createContactForm: {
    data: {
      id: number;
    };
  };
}

const SUBMIT: RequestDocument = gql`
  mutation create($data: ContactFormInput!) {
    createContactForm(data: $data) {
      data {
        id
      }
    }
  }
`;

export async function create(variables: Variables) {
  const { createContactForm }: ICreateResponse = await client.request(SUBMIT, variables);
  return createContactForm.data.id;
}
