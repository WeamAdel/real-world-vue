import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { GLOBAL_STORE } from './store';

import 'nprogress/nprogress.css';

createApp(App).use(router).provide('GLOBAL_STORE', GLOBAL_STORE).mount('#app');
