import { gql } from "apollo-boost";

export const CREATE_ARTIFACT = gql`
  mutation CreateArtifact($artifactInput: ArtifactInput!) {
    createArtifact(artifact: $artifactInput) {
      id
      name
      description
      datetime
      comments
    }
  }
`;

export default {
  CREATE_ARTIFACT
};
