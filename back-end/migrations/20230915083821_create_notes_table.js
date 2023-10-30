exports.up = function (knex) {
  return knex.schema.createTable('notes', function (table) {
    table.increments('id').primary();
    table.string('title');
    table.string('name');
    table.text('description');
    table.integer('user_id').unsigned().references('id').inTable('users'); // Replace 'users' with the actual name of your users table
    table.timestamps(true, true); // Adds 'created_at' and 'updated_at' columns
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('notes');
};
