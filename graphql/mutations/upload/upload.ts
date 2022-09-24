import { gql } from 'graphql-request';
import { RequestDocument, Variables } from 'graphql-request/dist/types';
import { client } from 'lib/graphql-request';

interface IUploadResponse {
  multipleUpload: {
    data: {
      id: number;
      attributes: {
        name: string;
      };
    };
  }[];
}

const UPLOAD: RequestDocument = gql`
  mutation upload($files: [Upload]!) {
    multipleUpload(files: $files) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

async function upload(variables: Variables) {
  const { multipleUpload }: IUploadResponse = await client.request(UPLOAD, variables);
  return multipleUpload.map((u) => ({ id: u.data.id, name: u.data.attributes.name }));
}

export default upload;
