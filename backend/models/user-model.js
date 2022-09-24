const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  imgUrl: { type: String },
  role: { type: String, required: true, default: 'user' },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model('User', UserSchema);
