import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index'], // 注意此处入口文件不需要添加后缀
  declaration: true, // ts 声明文件
  rollup: {
    emitCJS: true
  }
});
