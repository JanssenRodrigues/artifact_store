import * as ApolloServer from "apollo-server";
import GraphQLJSON from "graphql-type-json";
import merge from "lodash/merge";

// CORE
import getConnection from "./core/services/database";

// RESOLVERS
import { resolvers as artifactResolvers } from "./artifact/resolvers";

// TYPES
import Artifact from "./artifact/types";

// DATASOURCES
import ArtifactDatasource from "./artifact/datasources.mjs";
import ArtifactLoader from "./artifact/loaders.mjs";

const gql = "gql" in ApolloServer ? ApolloServer.gql : ApolloServer.default.gql;

const Query = gql`
  scalar DateTime
  scalar JSON

  directive @AuthUser on FIELD_DEFINITION

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [Artifact, Query];

export const resolvers = merge({ JSON: GraphQLJSON }, artifactResolvers);

export const mountLoaders = datasource => ({
  artifact: new ArtifactLoader(datasource.artifact)
});

export const mountDatasource = () => ({
  artifact: ArtifactDatasource()
});

export async function buildContext({ req }) {
  const datasource = mountDatasource();
  const loaders = mountLoaders(datasource);

  return {
    loaders,
    datasource,
    db: getConnection(),
    headers: req.headers
  };
}

export default {
  resolvers,
  typeDefs,
  buildContext
};
