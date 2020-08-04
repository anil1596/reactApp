import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-ed25f.firebaseio.com/'
});

export default instance;