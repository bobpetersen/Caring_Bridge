const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//profile schema
const ScanSchema = new Schema({
    scanTime: { type: Date },
    sitesScanned: { type: Number },
}, { collection: 'scan' });

module.exports = mongoose.model('Scan', ScanSchema);