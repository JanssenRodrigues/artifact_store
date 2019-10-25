exports.up = async knex => {
  await knex.schema.createTable("artifacts", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("name", 255).notNullable();
    table.string("description", 255).notNullable();
    table.string("datetime", 255).notNullable();
    table.text("comments");
    table.dateTime("deleted_at");
  });
};

exports.down = async knex => knex.schema.dropTableIfExists("artifacts");
