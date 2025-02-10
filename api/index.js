const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importer les routes
const userRoutes = require('../routes/user.routes');
const categoriesRoutes = require('../routes/categories.routes');
const worksRoutes = require('../routes/works.routes');

// Utiliser les routes
app.use('/api/users', userRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/works', worksRoutes);

// Exporter l'application
module.exports = app;