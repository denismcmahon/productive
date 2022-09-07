import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

const app = createApp(App).use(store).use(router);
// setting up default vue's http modules for api calls
app.config.globalProperties.$http = axios;
app.mount('#app');

// load the token from the localStorage
const token = localStorage.getItem('token');

// if there is a token append to the default axios authorization headers
if (token) {
  app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token;
}
