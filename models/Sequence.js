const mongoose = require('mongoose');
const { Schema } = mongoose;

const TrackSchema = new Schema({
    pattern: [{
        type: Boolean,
        default: [
            false, false, false, false, 
            false, false, false, false, 
            false, false, false, false, 
            false, false, false, false
        ]
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const SequenceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tracks: [{
        type: TrackSchema,
        default: [null, null, null, null, null, null, null, null]
    }],
    tempo: {
        type: Number,
        default: 120
    },
    theme: {
        type: Schema.Types.ObjectId,
        ref: 'Theme',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Sequence = mongoose.model('Sequence', SequenceSchema);