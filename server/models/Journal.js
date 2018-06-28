const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// journal schema
const JournalSchema = new Schema({
  body: { type: String },
  createdAt: { type: Date },
  siteId: { type: Number },
  userId: { type: Number },
});

module.exports = mongoose.model('Journal', JournalSchema);