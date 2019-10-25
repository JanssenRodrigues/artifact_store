import { gql } from "apollo-boost";

export const GET_ALL_ARTIFACTS = gql`
  query getArtifacts($offset: Int, $limit: Int) {
    artifacts(offset: $offset, limit: $limit) {
      list {
        id
        name
        description
        datetime
        comments
      }
    }
  }
`;

export default {
  GET_ALL_ARTIFACTS
};
