import $api from '../http';

export default class PostService {
  static async addPost(userId, title, text, file) {
    const formData = new FormData();
    const newFile = file[1];
    console.log(newFile);

    formData.append('file', newFile);
    formData.append('data', JSON.stringify({ userId, title, text }));

    const res = await $api.post('/add-post', formData);

    return res;
  }

  static async getPosts() {
    const res = $api.get('/get-post');
    return res;
  }

  static async deletePost(userId, postId) {
    const res = await $api.post('/delete-post', { userId, postId });
    console.log(res);
    return res;
  }
  static async addComment(comment) {
    const res = await $api.post('/add-comment', { comment });
    return res;
  }
  static async getComments() {
    return await $api.get('/get-comments');
  }
}
