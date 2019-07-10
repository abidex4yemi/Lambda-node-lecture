const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
	const nameInsert = req.name ? ` ${req.name}` : '';

	res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

server.get('/error', function(req, res, next) {
	const error = new Error('SHiiiiiiiittttt');
	error.status = 400;
	next(error);
});

server.all('*', function(req, res, next) {
	const error = new Error('Ohh!! Something went wrong');
	error.status = 404;
	next(error);
});

server.use(function(err, req, res, next) {
	return res.status(err.status || 500).json({ message: err.message });
});

module.exports = server;
