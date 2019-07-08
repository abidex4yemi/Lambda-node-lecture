const express = require('express');
const Router = express.Router();

Router.get('/hubs/:id?', (req, res) => {});

Router.put('/hubs/:id', (req, res) => {});

Router.post('/hubs', (req, res) => {});

Router.delete('/hub/:id', (req, res) => {});

module.exports.hubsRoute = Router;
