const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const AuditorSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  is_admin: { type: Boolean, required: true, default: false },
  is_active: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('Auditor', AuditorSchema);
