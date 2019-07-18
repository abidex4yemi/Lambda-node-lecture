exports.up = function (knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments();
      table.text('fname', 128).notNullable();
      table.text('lname', 128).notNullable();
    })
    .createTable('emails', table => {
      table.increments();
      table.text('email', 128).unique().notNullable();
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
    })
    .createTable('courses', table => {
      table.increments();
      table.text('name', 256).unique().notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('courses')
    .dropTableIfExists('emails')
    .dropTableIfExists('users');
};
