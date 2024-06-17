const mongoose = require('mongoose')

const launchesSchema = mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    launchDate: {
        type: Date,
        required: true
    },
    target: {
        type: String,
    },
    customers: [String],
    upcoming: {
        type: Boolean,
        required: true
    },
    success: {
        type: Boolean,
        default: true,
        required: true
    },
});

// Connects launchesSchema with the "launches" colletion
module.exports = mongoose.model('Launch', launchesSchema);
