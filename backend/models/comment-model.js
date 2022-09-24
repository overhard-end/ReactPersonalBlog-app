const { Schema, model } = require('mongoose');
const CommentsShema = new Schema({
  userId: { type: String, required: true },
  postId: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: new Date() },
});
module.exports = model('Comments', CommentsShema);
