//require('dotenv').config();
const mongoose = require('mongoose');
//const encrypt = require("mongoose-encryption");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
});

// encrypt the password field
//userSchema.plugin(encrypt, {secret: process.env.ENCRYPTION_SECRET, encryptedFields: ["password"]});

// Create the User object
const User = mongoose.model('User', userSchema);

module.exports = User;
