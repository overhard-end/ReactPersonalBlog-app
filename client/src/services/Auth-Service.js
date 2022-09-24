import $api from '../http';

export default class AuthService {
  static async login(email, password) {
    return $api.post('/login', { email, password });
  }

  static async registration(firstName, lastName, email, password) {
    return $api.post('/sign-up', { firstName, lastName, email, password });
  }

  static async logout() {
    return $api.post('/logout');
  }
}
