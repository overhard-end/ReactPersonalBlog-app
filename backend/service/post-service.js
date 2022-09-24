const PostDto = require('../dtos/post-dto');
const ApiError = require('../exceptions/api-error');
const postModel = require('../models/post-model');

class PostService {
  async createPost(userId, date, title, text, imgUrl) {
    if (!userId) {
      throw ApiError.BadRequest('user of post not faund');
    }
    if (!date || !title || !text) {
      throw ApiError.BadRequest('отсутствуют данные поста');
    }

    const post = await postModel.create({ userId, date, title, text, imgUrl });
    const postDto = new PostDto(post);
    return postDto;
  }

  async getPosts() {
    const allPosts = await postModel.find();
    return allPosts;
  }
  async deletePost(userId, postId) {
    const deletesPost = await postModel.deleteOne({ userId: userId, _id: postId });
    if (deletesPost.acknowledged) {
      return deletesPost.acknowledged;
    }
    return;
  }
}
module.exports = new PostService();
