import * as ApolloServer from "apollo-server";

const gql = "gql" in ApolloServer ? ApolloServer.gql : ApolloServer.default.gql;

const Artifact = gql`
  extend type Query {
    artifact(id: Int, name: String): Artifact
    artifacts(offset: Int, limit: Int): Artifacts
  }

  type Artifacts {
    list: [Artifact]
  }

  type Artifact {
    id: Int!
    name: String!
    description: String
    datetime: String
    comments: String
  }

  extend type Mutation {
    createArtifact(artifact: ArtifactInput): Artifact
    updateArtifact(artifact: UpdateArtifactInput): Artifact
    deleteArtifact(id: Int!): Int
  }

  input ArtifactInput {
    name: String
    description: String
    datetime: String
    comments: String
  }

  input UpdateArtifactInput {
    id: Int!
    name: String
    description: String
    datetime: String
    comments: String
  }
`;

export default Artifact;
