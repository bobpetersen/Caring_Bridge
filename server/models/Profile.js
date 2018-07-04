const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//profile schema
const ProfileSchema = new Schema({
    _id: {type: Number},
    bio: { type: String },
    email: {
        address: { type: String }
    },
    firstName: { type: String },
    lastName: { type: String },
    ip: { type: String },
    createdAt: { type: Date },
    isDeleted: { type: String },
    audit_data: {
        flagged: { type: Boolean },
        reason: { type: Array },
        result: { type: String },
        auditedBy: { type: String }
    }
}, { collection: 'profile' });

module.exports = mongoose.model('Profile', ProfileSchema);