const express = require('express');
const settings = require('./server/settings');
const app = settings(express());

const morgan = require('morgan')
const path = require('path')


require('./server/database');

// Statics files
    app.use(express.static(path.join(__dirname, '/public')))


// Listening
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})