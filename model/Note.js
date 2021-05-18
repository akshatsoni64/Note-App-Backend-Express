const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create Schema
const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    labels: {
        type: Array,
        required: true
    },
    text: {
        type: String,
        required: true
    },
});

module.exports = Note = mongoose.model('note', NoteSchema);