import $api from '../http';
import { AxiosResponse } from 'axios';
import { PostModel } from '../models/responses/Posts-model';

export default class PostService {
  static async addPost(
    userId: string,
    title: string,
    text: string,
    file: object,
  ): Promise<AxiosResponse<PostModel>> {
    const formData = new FormData();

    formData.append('file', file[0]);
    formData.append('data', JSON.stringify({ userId, title, text }));

    const res = await $api.post('/add-post', formData);

    return res;
  }

  static async getPosts(): Promise<AxiosResponse<PostModel>> {
    const res = $api.get('/get-post');
    return res;
  }

  static async deletePost(userId: string, postId: string) {
    const res = await $api.post('/delete-post', { userId, postId });
    console.log(res);
    return res;
  }
  static async addComment(comment: object) {
    const res = await $api.post('/add-comment', { comment });
    return res;
  }
  static async getComments() {
    return await $api.get('/get-comments');
  }
}
