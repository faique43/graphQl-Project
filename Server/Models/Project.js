const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        required: true
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = Project = mongoose.model('Project', ProjectSchema);