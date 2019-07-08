exports.up = function(knex, Promise) {
	return knex.schema.createTable('hubs', table => {
		table.increments();
		table
			.string('name')
			.notNullable()
			.unique();
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('hubs');
};
