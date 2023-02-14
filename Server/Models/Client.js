const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
});

module.exports = Client = mongoose.model('Client', ClientSchema);