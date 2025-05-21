const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' },
  scheduledAt: Date,
  duration: Number,
});

module.exports = mongoose.model('Session', sessionSchema);
