interface ICategory {
  name: string;
}

interface IMaterialData {
  version: string;
  source: string;
}

// 继承以获得默认的物料源
interface IMaterial extends IMaterialData {
  // 物料类型
  type: string;
  // 物料的类目
  category: ICategory;
  // 物料数组
  data: IMaterialData[];
}
