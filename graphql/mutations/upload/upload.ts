import { gql } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
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

async function upload(variables: { files: File[] }) {
  if (!variables.files.length) return [];
  const { multipleUpload } = await client.request<IUploadResponse>(UPLOAD, variables);
  return multipleUpload.map((u) => ({ id: u.data.id, name: u.data.attributes.name }));
}

export default upload;
