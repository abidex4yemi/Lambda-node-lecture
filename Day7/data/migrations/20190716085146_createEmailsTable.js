exports.up = function(knex) {
  return knex.schema.createTable('emails', table => {
    table.increments();
    table.text('email', 128).unique().notNullable();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('emails');
};
