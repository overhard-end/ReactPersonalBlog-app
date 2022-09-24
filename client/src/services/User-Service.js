import $api from '../http';

export default class UserService {
  static fetchUsers() {
    return $api.get('/users');
  }
  static sendUserData(id, dataForChange, file) {
    const request = new FormData();
    request.append('id', id);
    request.append('dataForChange', JSON.stringify(dataForChange));
    request.append('file', file[0]);

    return $api.post('/change-user', request);
  }
}
