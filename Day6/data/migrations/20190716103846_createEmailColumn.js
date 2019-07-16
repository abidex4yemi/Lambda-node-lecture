// eslint-disable-next-line func-names
exports.up = function (knex, Promise) {
  return knex.schema.alterTable('users', (table) => {
    table.text('email', 128);
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex, Promise) {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('email');
  });
};
