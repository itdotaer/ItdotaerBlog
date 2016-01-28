/**
 * Comment Model
 */

var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var CommentSchema = new Schema({
    email: { type: String },
    content: { type: String },
    goodStars: { type: Number },
    badStars: { type: Number },
    createdAt: { type: Date, default: Date.now },
    post: { type: Schema.ObjectId, ref: 'Post' }
});

CommentSchema.index({email: 1});

mongoose.model('Comment', CommentSchema);
