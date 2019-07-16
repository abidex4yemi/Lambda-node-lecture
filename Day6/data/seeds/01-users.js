// eslint-disable-next-line func-names
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate() // Inserts seed entries
    .then(() => knex('users').insert([
      { name: 'Wasiu', email: 'abidex4yemi@gmail.com' },
      { name: 'Jane', email: 'abidex4yemi@gmail.com' },
      { name: 'John', email: 'abidex4yemi@gmail.com' },
    ]));
};
