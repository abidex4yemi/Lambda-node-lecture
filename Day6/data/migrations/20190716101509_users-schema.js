// eslint-disable-next-line func-names
exports.up = function (knex, Promise) {
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('name', 128);
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
