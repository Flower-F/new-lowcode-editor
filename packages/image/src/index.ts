import App from './index.vue';

export default {
  render: App,
  editorProps: {
    src: {
      // 类型对应需要编辑的方式，比如 string 通过表单进行编辑
      type: 'string',
      defaultValue: '//cdn.lowcode.cn/default.png'
    }
  }
};
