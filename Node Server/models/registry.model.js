const mongoose = require('mongoose');

const reg = mongoose.Schema({
    source: String,
    name: String,
    score: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Registry', reg);