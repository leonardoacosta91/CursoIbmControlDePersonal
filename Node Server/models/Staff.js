const mongoose = require('mongoose');
const { Schema } = mongoose;

const Employee = new Schema ({
    name: String,
    vrName: String,
    Position: String
});

module.exports = mongoose.model('Employee', Employee);