const mongoose = require('mongoose');
const { Schema } = mongoose;

const ThemeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    samples: {
        type: [SampleSchema],
        required: true,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Theme = mongoose.model('Theme', ThemeSchema)