import { createApp } from 'vue';
import App from './App.vue';

import { Project } from '@lc/shared';
import { loadScript } from './utils';

import { router } from './router';

import './main.scss';
import { materialList } from './data';

console.log(Project.create());

Promise.all(materialList.map((material) => loadScript(material.source))).then(() => {
  const app = createApp(App);
  materialList.forEach((material) => {
    const { render } = (window as any)[material.name];
    app.component(material.name, render);
  });
  app.use(router);
  app.mount('#app');
});
