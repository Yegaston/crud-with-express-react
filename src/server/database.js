const mongoose = require('mongoose');
const { dbkeys } = require('./keys');

mongoose.connect(dbkeys.URIlocal, { useNewUrlParser: true })
    .then(console.log("Database on"))
    .catch(err => console.log(err));