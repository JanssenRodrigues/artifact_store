const createArtifact = count => ({
  name: `Artefato ${count}`
});

exports.seed = async knex => {
  // Delete ALL existing entries
  await knex("artifacts").del();
  const desiredArtifacts = 10;
  const initialArtifacts = [];
  for (let i = 0; i < desiredArtifacts; i++) {
    initialArtifacts.push(createArtifact(i));
  }

  await knex("artifacts").insert(initialArtifacts);
};
