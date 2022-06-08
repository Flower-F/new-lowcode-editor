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
  // 物料类型
  type: string;
  // 物料的类目
  category: ICategory;
  // 物料数组
  data: IMaterialData[];
}

// 物料加载
export interface IMaterialLoader {
  type: string;
  load(material: IMaterial): Promise<any>;
}
