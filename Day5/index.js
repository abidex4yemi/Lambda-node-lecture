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
		.where({ id })
		.first();
};

const createUser = user => {
	return db('users').insert(user);
};

const updateUserById = (id, body) => {
	return db('users')
		.where({ id })
		.update(body)
		.then(count => (count > 0 ? getUserById(id) : null));
};

const deleteUserById = id => {
	return db('users')
		.where({ id })
		.del();
};

app.get('/', (req, res) => {
	return res.json('success!');
});

app.get('/users', async (req, res, next) => {
	try {
		const users = await getAllUsers();

		return res.status(200).json({
			users
		});
	} catch (error) {
		next(error);
	}
});

app.get('/users/:id', async (req, res, next) => {
	try {
		const { id } = req.params;

		if (id) {
			const user = await getUserById(id);

			return res.status(200).json(user);
		}

		return next(new Error('User id is invalid'));
	} catch (error) {
		next(error);
	}
});

app.post('/users', async (req, res, next) => {
	try {
		const newUserId = await createUser(req.body);

		const newUser = await getUserById(newUserId[0]);

		return res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
});

app.put('/users/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const updatedUser = await updateUserById(id, req.body);

		return res.status(201).json(updatedUser);
	} catch (error) {
		next(error);
	}
});

app.delete('/users/:id', async (req, res, next) => {
	try {
		const { id } = req.params;

		await deleteUserById(id);

		return res.status(201).json({
			message: 'User deleted successfully'
		});
	} catch (error) {
		next(error);
	}
});

app.use((err, req, res) => {
	return res.status(500).json({
		message: err.message,
		stack: err.stack
	});
});

app.listen(4000, () => console.log('listening on 4000'));
