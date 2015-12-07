/**
 * User Model
 */

var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    loginName: { type: String },
    password: { type: String },
    email: { type: String },
    avatar: { type: String },
    cratedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

UserSchema.index({loginName: 1}, {unique: true});

mongoose.model('User', UserSchema);
