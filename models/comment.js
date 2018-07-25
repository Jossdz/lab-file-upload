const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CommentSchema = new Schema({
  content: String,
  _postId: { type: Schema.Types.ObjectId, ref: 'Comment' },
  picPath: String,
  picName: String
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
