const express = require('express');
const { popularRepositories } = require('../controllers/repositoriesController');

const routesRepositories = express.Router();

routesRepositories.get('/repositories', popularRepositories);

module.exports = routesRepositories;