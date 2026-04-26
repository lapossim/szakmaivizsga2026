import api from './api';

const register = (username, email, password) => {
    return api.post('/auth/register', { username, email, password });
};

const login = (username, password) => {
    return api.post('/auth/login', { username, password });
};

const authService = { register, login };

export default authService;
