require('dotenv').config();
const mongoose = require('mongoose');

const uri = encodeURIComponent(process.env.MONGODB_URI);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to Nathan Hammond MongoDB');
});

module.exports = mongoose;