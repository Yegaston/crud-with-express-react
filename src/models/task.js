const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema ({
    title: { type: String, require: true},
    description: { type: String, require: true},
    data: {type: Date, require: true, default: Date.now}
});

module.exports = mongoose.model('Task', taskSchema)