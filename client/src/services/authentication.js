import ApiService from 'api-service';

export default {
    register (credentials) {
        return ApiService().post('register', credentials);
    }
}