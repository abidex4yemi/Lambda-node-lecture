const express = require('express');
const knex = require('knex');
const app = express();

app.use(express.json());

const db = knex({
	client: 'sqlite3',
	connection: {
		filename: './db/database.db3',
		useNullAsDefault: false
	}
});

const getAllUsers = db => {
	return db('users');
};

app.get('/', (req, res, next) => {
	res.json('success!');
});

app.get('/users', async (req, res) => {
	const users = await getAllUsers(db);

	return res.status(200).json({
		users
	});
});

app.use(function errorHandler(err, req, res, next) {
	console.error('ERROR:', err);
	res.status(500).json({
		message: err.message,
		stack: err.stack
	});
});

app.listen(4000, () => console.log('listening on 4000'));
