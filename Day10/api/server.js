const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const knex = require('../database/dbConfig');
const knexSessionStore = require('connect-session-knex')(session);

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const store = new knexSessionStore({ knex });

const server = express();

server.use(
	session({
		store,
		name: 'whatwig',
		secret: 'Keep it secret, simple',
		cookie: {
			maxAge: 1000 * 60 * 60,
			secure: false,
			httpOnly: true
		},
		resave: false,
		saveUninitialized: true
	})
);

server.use(helmet());
server.use(express.json());
// server.use(cookieParser());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
	res.json({ api: 'up' });
});

module.exports = server;
