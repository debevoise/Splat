const mongoose = require('mongoose');
const { Schema } = mongoose;

const TrackSchema = new Schema({
    pattern: {
        type: Array,
        required: true,
        default: [false, false, false, false, false, false, false, false]
    },
    sample: {
        type: SampleSchema,
        required: true
    },
    volume: {
        type: Number,
        required: true,
        default: 11
    },
    pitch: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Track = mongoose.model('Track', TrackSchema)