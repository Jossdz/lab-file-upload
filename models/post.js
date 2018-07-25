const mongoose = require('mongoose');
const Comment  = require('./comment');
const Schema   = mongoose.Schema;

const PostSchema = new Schema({
    content: String,
    _creatorId: { type: Schema.Types.ObjectId, ref: 'Comment' },
    creatorPic: String,
    creatorName: String,
    picPath: String,
    picName: String,
    comments: [ Comment.schema ],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
