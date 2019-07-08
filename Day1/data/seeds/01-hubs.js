exports.seeds = function(knex, Promise) {
	// Delete all existing entries
	return knex('hubs')
		.truncate()
		.then(function() {
			// Insert seed entries
			return knex('hubs').insert([
				{ name: 'api-1' }, // 1
				{ name: 'api-2' }, // 2
				{ name: 'api-3' }, // 3
				{ name: 'api-4' } // 4
			]);
		});
};
