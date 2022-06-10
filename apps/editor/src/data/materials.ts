import { IMaterial } from '@lc/shared';

export const materialList: IMaterial[] = [
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

export const materialMap: { [key: string]: IMaterial } = materialList.reduce((prev, item) => {
  prev[item.id] = item;
  return prev;
}, {});

export function getMaterialEditorProps(material: IMaterial) {
  return (window as any)[material.name].editorProps;
}

export function getMaterialRenderFunction(material: IMaterial) {
  return (window as any)[material.name].render;
}

export function getMaterialDefaultProps(material: IMaterial) {
  const props = getMaterialEditorProps(material);
  return Object.keys(props).reduce((prev, key) => {
    prev[key] = props[key].defaultValue;
    return prev;
  }, {});
}
