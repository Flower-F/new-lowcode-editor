import app from './app';
import { router } from './router';
import { createPinia } from 'pinia';
import './main.scss';

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
