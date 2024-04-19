const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    title: String,
    company: String,
    startDate: Date,
    endDate: Date,
    bulletPoints: [String],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;