const express = require('express');
const keys = require('./keys');
const morgan = require('morgan');

module.exports = app => {
    
    // Settings
    app.set('port', process.env.PORT || 3000);

    // Middlewares
    app.use(morgan('dev'));
    app.use(express.json());

    // Routes
    app.use('/api/tasks', require('../routes/task.routes'));
    
    return app
}