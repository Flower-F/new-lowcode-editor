import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import viteMocker from 'vite-plugin-mocker';

export default defineConfig({
  plugins: [
    viteMocker({
      delay: [0, 1000]
    }),
    vue(),
    pages({
      exclude: ['**/components/*']
    })
  ]
});
