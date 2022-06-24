import $api from '../http';
import { AxiosResponse } from 'axios';
import AuthResponse from '../models/responses/Auth-Response';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/login', { email, password });
  }

  static async registration(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/sign-up', { firstName, lastName, email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
