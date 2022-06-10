import { createApp } from 'vue';
import App from './App.vue';
import { loadMaterials } from './utils';
import { router } from './router';
import { getMaterialRenderFunction, materialList } from './data';
import { createPinia } from 'pinia';
import './main.scss';

const pinia = createPinia();

loadMaterials(materialList).then(() => {
  const app = createApp(App);
  materialList.forEach((m) => {
    const renderFunction = getMaterialRenderFunction(m);
    app.component(m.name, renderFunction);
  });

  app.use(router);
  app.use(pinia);
  app.mount('#app');
});
