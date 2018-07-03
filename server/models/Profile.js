const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//profile schema
const ProfileSchema = new Schema({
    _id: {type: Number},
    bio: { type: String },
    ip: { type: String },
    createdAt: { type: Date },
    isFlagged: { type: Boolean },
    deactivated: { type: Boolean },
    deactivatedBy: { type: String },
}, { collection: 'profile' });

module.exports = mongoose.model('Profile', ProfileSchema);