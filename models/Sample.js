const mongoose = require('mongoose');
const { Schema } = mongoose;

const SampleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Sample = mongoose.model('Sample', SampleSchema)