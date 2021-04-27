const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String
});

module.exports = mongoose.model('User', UserSchema);