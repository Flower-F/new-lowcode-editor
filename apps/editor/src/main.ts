import { createApp } from 'vue';
import App from './App.vue';
import { add } from '@lc/shared';

console.log(add(1, 2));

createApp(App).mount('#app');
