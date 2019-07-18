exports.up = function(knex) {
	return knex.schema.createTable('enrollments', table => {
		table.increments();
		table.integer('user_id');
		table.integer('course_id');
		table
			.foreign('user_id')
			.references('id')
			.inTable('users');
		table
			.foreign('course_id')
			.references('id')
			.inTable('courses');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('enrollments');
};
