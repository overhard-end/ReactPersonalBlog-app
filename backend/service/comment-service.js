const { ObjectId } = require('mongodb');
const commentModel = require('../models/comment-model');

class CommentService {
  async addComment(comment) {
    const { userId, postId, content } = comment;

    return await commentModel.create({ userId, postId, content });
  }
  async getComments() {
    return await commentModel.find({});
  }
}
module.exports = new CommentService();
