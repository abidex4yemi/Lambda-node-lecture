const express = require('express');
const knex = require('knex');
const app = express();

app.use(express.json());

const db = knex({
	client: 'sqlite3',
	connection: {
		filename: './db/database.db3',
		useNullAsDefault: true
	}
});

const getAllUsers = () => {
	return db.select().from('users');
};

const getUserById = id => {
	return db
		.select()
		.from('users')
		.where({ id });
};

app.get('/', (req, res) => {
	return res.json('success!');
});

app.get('/users', async (req, res) => {
	const users = await getAllUsers();

	return res.status(200).json({
		users
	});
});

app.get('/users/:id', async (req, res, next) => {
	const { id } = req.params;

	if (id) {
		const user = await getUserById(id);

		return res.status(200).json({
			user
		});
	}

	return next(new Error('User id is invalid'));
});

app.use(function errorHandler(err, req, res, next) {
	console.error('ERROR:', err);
	res.status(500).json({
		message: err.message,
		stack: err.stack
	});
});

app.listen(4000, () => console.log('listening on 4000'));
