import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/**
 * Reactive global storage
 */
const GLOBAL_STORE = reactive({ flashMessage: '' });

createApp(App)
    .use(store)
    .use(router)
    .provide('GLOBAL_STORE', GLOBAL_STORE)
    .mount('#app');
