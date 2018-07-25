const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// Actualizar el modelo, picPath, picName, posts
const UserSchema = Schema({
  username: String,
  email:    String,
  password: String,
  picPath: String,
  picName: String,
  posts: [ { type: Schema.Types.ObjectId, ref: 'Post' } ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
