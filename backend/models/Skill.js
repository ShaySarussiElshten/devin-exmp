const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  duration: Number,
  tags: [String]
});

module.exports = mongoose.model('Skill', skillSchema);
