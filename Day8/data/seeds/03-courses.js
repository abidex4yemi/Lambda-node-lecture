exports.seed = function (knex) {
  return knex('courses').truncate()
    .then(function () {
      return knex('courses').insert([
        { name: 'JavaScript 101' },
        { name: 'DOM 101' },
        { name: 'React 101' },
        { name: 'Redux 101' },
        { name: 'Express 101' },
        { name: 'Knex 101' },
      ]);
    });
};
