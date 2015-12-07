/**
 * Post Model
 */

var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String },
    tags: { type: Array },
    des: { type: String },
    content: { type: String },
    pv: { type: Number },
    commentId: { type: Schema.ObjectId, ref: 'Comment' },
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: Schema.ObjectId, ref: 'User'},
    updatedAt: {type: Date, default: Date.now},
    updatedBy: {type: Schema.ObjectId, ref: 'User'}
});

PostSchema.index({loginName: 1}, {unique: true});

mongoose.model('Post', PostSchema);
