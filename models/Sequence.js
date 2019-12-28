const mongoose = require('mongoose');
const { Schema } = mongoose;

const SequenceSchema = new Schema({
    tracks: {
        type: [TrackSchema],
        required: true,
        default: [null, null, null, null, null, null, null, null]
    },
    tempo: {
        type: Number,
        required: true,
        default: 120
    },
    masterVolume: {
        type: Number,
        required: true,
        default: 11
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Sequence = mongoose.model('Sequence', SequenceSchema)