/**
 * Post Model
 */

var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String },
    tag: { type: String },
    des: { type: String },
    content: { type: String },
    pv: { type: Number },
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: Schema.ObjectId, ref: 'User'},
    updatedAt: {type: Date, default: Date.now},
    updatedBy: {type: Schema.ObjectId, ref: 'User'}
});

PostSchema.index({unique: true});

mongoose.model('Post', PostSchema);
