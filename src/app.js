const express = require('express');
const routesRepositories = require('./routes/repositories');
const app = express();

//Definimos el motor de las vistas.
app.set('view engine', 'ejs');

// Middleware para verificar las rutas.
app.use(express.json());

// Usamos las rutas.
app.use('/', routesRepositories);

module.exports = app;