const mongoose = require('mongoose');
const { Schema } = mongoose;

const TrackSchema = new Schema({
    pattern: [{
        type: Boolean,
        default: [false, false, false, false, false, false, false, false]
    }],
    sample: {
        type: Schema.Types.ObjectId,
        ref: 'Sample',
        required: true,
    },
    volume: {
        type: Number,
        default: 11
    },
    pitch: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const SequenceSchema = new Schema({
    tracks: [{
        type: TrackSchema,
        default: [null, null, null, null, null, null, null, null]
    }],
    tempo: {
        type: Number,
        default: 120
    },
    masterVolume: {
        type: Number,
        default: 11
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Sequence = mongoose.model('Sequence', SequenceSchema)