/**
 * Module dependencies
 */
const express = require('express');

/**
 * Module constants
 */
const PORT = process.env.PORT || 8000;

const app = express();

/**
 * Module middleware setup
 */

// parse application/json
app.use(express.json());

// Handle home route request
app.get('/', (req, res) => {
	return res.status(200).json({
		error: null,
		data: [{ message: 'Home route' }]
	});
});

app.all('*', (req, res, next) => {
	return res.status(404).json({
		data: [],
		error: 'Route does not exist'
	});
});

// Handle and response error to users
app.use((req, res, err) => {
	return res.status(err.status || 500).json({
		data: [],
		error: err.message
	});
});

// start and serve server using port `8000`
app.listen(PORT, console.log(`Server running on port: ${PORT}`));
