import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import routes from '~pages';

export const router = createRouter({
  routes,
  history: createWebHistory()
});
