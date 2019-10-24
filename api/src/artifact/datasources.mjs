import getConnection from "../core/services/database.mjs";

const config = {
  connection: getConnection(),
  tableName: "artifacts"
};

export const ArtifactDatasource = ({ connection, tableName } = config) => ({
  getById: async id => {
    const [artifactResult] = await connection
      .select()
      .from(tableName)
      .where("id", id)
      .whereNull("deleted_at");

    return artifactResult;
  },

  getAll: async ({ offset, limit }) => {
    const artifactResult = await connection
      .select()
      .from(tableName)
      .whereNull("deleted_at")
      .offset(offset)
      .limit(limit);

    return {
      list: artifactResult
    };
  },

  create: async artifact => {
    const [newArtifactId = null] = await connection
      .insert(artifact)
      .into(tableName);

    return {
      id: newArtifactId,
      ...artifact
    };
  },

  update: async artifact => {
    const databaseArtifact = await connection
      .select()
      .from(tableName)
      .where("id", artifact.id)
      .whereNull("deleted_at");

    if (!databaseArtifact) {
      return { errors: ["Artifact does not exists on database"] };
    }

    try {
      const updatedArtifact = await connection(tableName)
        .where("id", artifact.id)
        .update(artifact);

      return updatedArtifact ? artifact : { errors: "Cannot update artifact" };
    } catch (e) {
      return { errors: e.sqlMessage };
    }
  },

  delete: async id => {
    const deletedArtifact = await connection(tableName)
      .where("id", id)
      .update("deleted_at", new Date());

    return deletedArtifact;
  }
});

export default ArtifactDatasource;
