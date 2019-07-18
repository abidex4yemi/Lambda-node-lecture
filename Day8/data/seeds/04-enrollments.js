exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('enrollments')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('enrollments').insert([
				{ user_id: 1, course_id: 2 },
				{ user_id: 2, course_id: 4 },
				{ user_id: 3, course_id: 1 },
				{ user_id: 4, course_id: 4 },
				{ user_id: 1, course_id: 3 }
			]);
		});
};
