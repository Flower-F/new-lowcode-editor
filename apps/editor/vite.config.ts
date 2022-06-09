import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  // TODO: paths 插件不生效
  plugins: [vue(), Pages({
    exclude: ['**/components/*']
  })]
});
