import { createApp } from 'vue';
import App from './App.vue';

import { IMaterial, Project } from '@lc/shared';
import { loadScript } from './utils';

import { router } from './router';

import './main.scss';

console.log(Project.create());

const materialList: IMaterial[] = [
  {
    id: 1,
    type: 'component',
    category: {
      name: '基础组件'
    },
    name: 'LcImage',
    title: '图片',
    version: '0.0.1',
    source: '/lc-image.0.0.1.umd.js',
    thumbnail: 'lc-image-thumbnail.jpg',
    data: [
      {
        version: '0.0.1',
        source: '/lc-image.0.0.1.umd.js'
      }
    ]
  }
];

Promise.all(materialList.map((material) => loadScript(material.source))).then(() => {
  const app = createApp(App);
  materialList.forEach((material) => {
    const { render } = (window as any)[material.name];
    app.component(material.name, render);
  });
  app.use(router);
  app.mount('#app');
});

// loadScript('/lc-image.0.0.1.umd.js').then(() => {
//   const { render, editorProps } = (window as any).LcImage;
//   const app = createApp(App);
//   app.component('lc-image', render);
//   app.mount('#app');
// });

