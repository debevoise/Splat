const mongoose = require('mongoose');
const { Schema } = mongoose;

const ThemeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    samples: [{
        type: Schema.Types.ObjectId,
        ref: 'Sample',
        default: []
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Theme = mongoose.model('Theme', ThemeSchema)