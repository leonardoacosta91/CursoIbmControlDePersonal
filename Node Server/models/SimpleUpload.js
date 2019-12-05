const mongoose = require('mongoose');
const { Schema } = mongoose;

const SimpleUpload = new Schema({
    source: String,
    name: String,
    createdAt: Date
});

module.exports = mongoose.model('SimpleUpload', SimpleUpload);