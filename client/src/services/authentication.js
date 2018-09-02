import apiService from './api-service';

export default {
  register (credentials) {
    return apiService().post('register', credentials);
  },
  login (credentials) {
    return apiService().post('login', credentials);
  },
};
