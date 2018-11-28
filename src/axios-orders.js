import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-bilder-bed25.firebaseio.com/'
});

export default instance;
