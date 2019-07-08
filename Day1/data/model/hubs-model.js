/**
 * Module dependencies
 */
const knex = require('knex');
const config = require('../../knexfile');

// Initialize database
const db = knex(config.development);

const find = async (query = {}) => {
	const { page = 1, limit = 10, sortby = 'id', sortdir = 'asc' } = query;
	const offset = limit * (page - 1);

	const rows = await db('hubs')
		.orderBy(sortby, sortdir)
		.limit(limit)
		.offset(offset);

	return rows;
};

const findById = async id => {
	return db('hubs')
		.where({ id })
		.first();
};

const add = async hub => {
	const [id] = await db('hubs').insert(hub);

	return findById(id);
};

const remove = async id => {
	const removed = findById(id);

	await db('hubs')
		.where({ id })
		.del();

	return removed;
};

const update = async (id, changes) => {
	await db('hubs')
		.where({ id })
		.update(changes);

	return findById(id);
};

module.exports = {
	find,
	findById,
	add,
	remove,
	update
};
