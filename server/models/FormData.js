// models/FormData.js (optional)
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  personalityRatings: {
    kindness: Number,
    intelligence: Number,
    humor: Number,
    caring: Number,
  },
  loveMessage: String,
});

module.exports = mongoose.model('FormData', formDataSchema);
