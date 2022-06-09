export interface ICategory {
  name: string;
}

export interface IMaterialData {
  // 物料版本
  version: string;
  // 物料源
  source: string;
}

// 继承以获得默认的物料源
export interface IMaterial extends IMaterialData {
  id: number;
  // 物料类型，如 component
  type: string;
  // 物料的类目，如基础组件、自定义组件
  category: ICategory;
  // 物料被使用时的名称，如 LcImage
  name: string;
  // 物料名称，如图片
  title: string;
  // 缩略图
  thumbnail: string;
  // 物料数组
  data: IMaterialData[];
}

// 物料加载
export interface IMaterialLoader {
  type: string;
  load(material: IMaterial): Promise<any>;
}

// 物料示例
// const exampleMaterial: IMaterial = {
//   id: 1,
//   type: 'component',
//   category: {
//     name: '基础组件'
//   },
//   name: 'LcImage',
//   title: '图片',
//   version: '0.0.1',
//   source: '/lc-image.0.0.1.umd.js',
//   thumbnail: 'lc-image-thumbnail.jpg',
//   data: [
//     {
//       version: '0.0.1',
//       source: '/lc-image.0.0.1.umd.js'
//     }
//   ]
// };
