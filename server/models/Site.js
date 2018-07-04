const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//site schema
const SiteSchema = new Schema({
    _id: {type: Number},
    description: {type: String},
    createdAt: {type: Date},
    status: {
        userId: {type: Number}
    },
    isDeleted: { type: String },
    audit_data: {
        flagged: { type: Boolean },
        reason: { type: Array },
        result: { type: String },
        auditedBy: { type: String }
    }
}, {collection: 'site'});

module.exports = mongoose.model('Site', SiteSchema);