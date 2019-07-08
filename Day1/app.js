/**
 * Module dependencies
 */
const express = require('express');
const knex = require(knex);

/**
 * Module constants
 */
const PORT = process.env.PORT || 8000;

const app = express();

// Handle home route request
app.get('/', (req, res) => {
	return res.status(200).json({
		error: null,
		data: [{ message: 'Home route' }]
	});
});

// start and serve server using port `8000`
app.listen(PORT, console.log(`Server running on port: ${PORT}`));
