exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.text('fname', 128).notNullable();
    table.text('lname', 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
