const mongoose = require('mongoose');
const { Schema } = mongoose;

const SampleSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        
    }
})