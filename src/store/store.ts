import { IUser } from '../models/I-User';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/Auth-Service';
import axios from 'axios';
import AuthResponse from '../models/responses/Auth-Response';
import PostService from '../services/Post-Service';
import UserService from '../services/User-Service';

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;
  error = {};
  posts = [];
  users = [];
  comments = [];
  searchData = '';

  constructor() {
    makeAutoObservable(this);
  }
  setsearchData(words: string) {
    this.searchData = words;
  }
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }
  setUser(user: IUser) {
    this.user = user;
  }
  setLoading(bool: boolean) {
    this.isLoading = bool;
  }
  setError(error: string) {
    this.error = error;
  }
  setPosts(postsArr) {
    this.posts = postsArr;
  }
  setUsers(users) {
    this.users = users;
  }
  setComments(comments) {
    this.comments = comments;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      this.setError(e.response?.data?.messege);
      console.log(e);
      return;
    }
  }

  async registration(firstName: string, lastName: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(firstName, lastName, email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.setError('');
    } catch (e) {
      if (e.response.data) {
        this.setError(e.response.data.messege);
      }
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      console.log(e.response?.data?.messege);
    }
  }
  async checkAuth() {
    try {
      this.setError('');
      const response = await axios.get<AuthResponse>(`http://localhost:5000/api/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  async createPost(userId: string, title: string, text: string, file: object) {
    try {
      await PostService.addPost(userId, title, text, file);
    } catch (e) {
      this.checkAuth();
      console.log(e);
    }
  }
  async deletePost(userId: string, postId: string) {
    try {
      const res = await PostService.deletePost(userId, postId);
      if (res) {
        this.getPosts();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getPosts() {
    try {
      this.setLoading(true);
      const response = await PostService.getPosts();
      if (!response) {
        throw Error();
      }
      this.setLoading(false);
      this.setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  async getUsers() {
    try {
      const users = await UserService.fetchUsers();
      this.setUsers(users.data);
    } catch (e) {
      console.log(e);
    }
  }
  async changeUserData(dataForChange: object, file: object) {
    try {
      const response = await UserService.sendUserData(this.user.id, dataForChange, file);
      if (response?.data) {
        this.setUser(response.data);
      }
      return response;
    } catch (e) {
      return e;
    }
  }
  async addComment(comment: object) {
    try {
      await PostService.addComment(comment);
      this.getComments();
    } catch (e) {
      console.log(e);
    }
  }
  async getComments() {
    try {
      const res = await PostService.getComments();

      this.setComments(res);
    } catch (e) {
      console.log(e);
    }
  }
}
