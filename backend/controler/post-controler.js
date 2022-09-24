const ApiError = require('../exceptions/api-error');
const postService = require('../service/post-service');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const commentService = require('../service/comment-service');

class PostControler {
  async addPost(req, res, next) {
    try {
      if (!req.body) {
        return res.json('Нет данных для поста');
      }
      const bodyAsJson = JSON.parse(req.body.data);
      const { userId, title, text } = bodyAsJson;
      if (!userId) {
        return next(ApiError.BadRequest('Нет автора поста!!', errors, array()));
      }
      let time = new Date();
      let date =
        String(time.getDate()).padStart(2, '0') +
        '.' +
        String(time.getMonth() + 1).padStart(2, '0') +
        '.' +
        time.getFullYear();

      if (!req.files) {
        const imgUrl = '';
        const post = await postService.createPost(userId, date, title, text, imgUrl);
        return res.json(post);
      }

      const file = req.files.file;

      var id = crypto.randomBytes(20).toString('hex');
      const fileExt = path.extname(file.name);

      const imgUrl = process.env.API_URL + '/images/' + id + fileExt;
      const pathToSave = 'uploads/images/' + id + fileExt;
      file.mv(pathToSave, (error) => {
        if (error) {
          console.log(error);
        }
      });

      const post = await postService.createPost(userId, date, title, text, imgUrl);
      return res.json(post);
    } catch (e) {
      next(e);
    }
  }
  async deletePost(req, res) {
    const userId = req.body.userId;
    const postId = req.body.postId;

    if (!userId || !postId) {
      return res.json('Нет данных о посте или пользователе!!!');
    }
    const status = await postService.deletePost(userId, postId);
    return res.json(status);
  }
  async getPost(req, res, next) {
    try {
      const allPosts = await postService.getPosts();

      return res.json(allPosts.reverse());
    } catch (e) {
      next(e);
    }
  }
  async addComment(req, res, next) {
    try {
      const comment = req.body.comment;
      const adedComment = await commentService.addComment(comment);
      return res.json(adedComment);
    } catch (e) {
      console.log(e);
    }
  }
  async getComments(req, res, next) {
    try {
      const comments = await commentService.getComments();
      return res.json(comments.reverse());
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new PostControler();
