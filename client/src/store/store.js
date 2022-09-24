import { makeAutoObservable } from 'mobx';
import AuthService from '../services/Auth-Service';
import axios from 'axios';
import PostService from '../services/Post-Service';
import UserService from '../services/User-Service';

export default class Store {
  user = {};
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
  setsearchData(words) {
    this.searchData = words;
  }
  setAuth(bool) {
    this.isAuth = bool;
  }
  setUser(user) {
    this.user = user;
  }
  setLoading(bool) {
    this.isLoading = bool;
  }
  setError(error) {
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

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
      return;
    }
  }

  async registration(firstName, lastName, email, password) {
    try {
      const response = await AuthService.registration(firstName, lastName, email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.setError('');
    } catch (e) {}
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {}
  }
  async checkAuth() {
    try {
      this.setError('');
      const response = await axios.get(`http://localhost:5000/api/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  async createPost(userId, title, text, file) {
    try {
      await PostService.addPost(userId, title, text, file);
    } catch (e) {
      this.checkAuth();
      console.log(e);
    }
  }
  async deletePost(userId, postId) {
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
  async changeUserData(dataForChange, file) {
    try {
      const response = await UserService.sendUserData(this.user._id, dataForChange, file);
      if (response.data) {
        this.setUser(response.data);
      }
      return response;
    } catch (e) {
      return e;
    }
  }
  async addComment(comment) {
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
