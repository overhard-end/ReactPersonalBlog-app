const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  imgUrl: { type: String },
});

module.exports = model('Post', PostSchema);
