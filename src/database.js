const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern-stack-diablo', { useNewUrlParser: true })
    .then(console.log("Database on"))
    .catch(err => console.log(err));