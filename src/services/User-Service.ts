import $api from '../http';
import { AxiosResponse } from 'axios';
import { IUser } from '../models/I-User';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }
  static sendUserData(
    id: string,
    dataForChange: object,
    file: object,
  ): Promise<AxiosResponse<IUser>> {
    const request = new FormData();
    request.append('id', id);
    request.append('dataForChange', JSON.stringify(dataForChange));
    request.append('file', file[0]);

    return $api.post<IUser>('/change-user', request);
  }
}
