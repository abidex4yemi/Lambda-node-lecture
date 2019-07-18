exports.seed = function (knex) {
  return knex('emails').truncate()
    .then(function () {
      return knex('emails').insert([
        { email: 'apple@apple.com', user_id: 1 },
        { email: 'orange@orange.com', user_id: 2 },
        { email: 'pear@pear.com', user_id: 3 },
        { email: 'carrot@carrot.com', user_id: 3 },
        { email: 'tomato@tomato.com', user_id: 4 },
        { email: 'garlic@garlic.com', user_id: 5 },
      ]);
    });
};
