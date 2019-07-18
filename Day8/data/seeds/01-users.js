exports.seed = function (knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { fname: 'Awa', lname: 'Melvine' },
        { fname: 'Anna', lname: 'Winther' },
        { fname: 'Sorin', lname: 'Chis' },
        { fname: 'Gabriel', lname: 'Cabrejas' },
        { fname: 'Josemaria', lname: 'Chukwuebuka' }
      ]);
    });
};
