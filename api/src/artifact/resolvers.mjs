import * as ApolloServer from "apollo-server";

const { UserInputError } =
  "UserInputError" in ApolloServer ? ApolloServer : ApolloServer.default;

export const resolvers = {
  Query: {
    artifact: async (_, { id }, { loaders }) => {
      const artifactResult = loaders.artifact.getById.load({ id });

      console.log({
        data: artifactResult,
        message: "get artifact by id",
        query: "artifact"
      });

      return artifactResult;
    },

    artifacts: async (_, { offset = 0, limit = 100 }, { loaders }) => {
      const artifactResult = await loaders.artifact.getAll.load({
        offset,
        limit
      });

      console.log({
        data: artifactResult,
        message: "get all artifacts ",
        query: "artifacts"
      });

      return artifactResult;
    }
  },

  Mutation: {
    createArtifact: async (_, { artifact }, { datasource }) => {
      const artifactResult = await datasource.artifact.create(artifact);

      console.log({
        data: artifactResult,
        message: "create new artifact",
        query: "createArtifact"
      });

      return artifactResult;
    },

    updateArtifact: async (_, { artifact }, { datasource }) => {
      const artifactResult = await datasource.artifact.update(artifact);

      if ("errors" in artifactResult) {
        throw new UserInputError("Validation error", {
          validationErrors: artifactResult.errors
        });
      }

      console.log({
        data: artifactResult,
        message: "update artifact",
        query: "updateArtifact"
      });

      return artifactResult;
    },

    deleteArtifact: async (_, { id }, { datasource }) => {
      const artifactResult = await datasource.artifact.delete(id);

      if (typeof artifactResult === "object" && "errors" in artifactResult) {
        throw new UserInputError("Validation error", {
          validationErrors: artifactResult.errors
        });
      }

      console.log({
        data: artifactResult,
        message: "delete artifact by id",
        query: "deleteArtifact"
      });

      return artifactResult;
    }
  }
};

export default { resolvers };
