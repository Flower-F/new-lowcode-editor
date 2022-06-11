import App from './index.vue';
import './index.css';

export default {
  render: App,
  editorProps: {
    src: {
      // 类型对应需要编辑的方式，比如 string 通过表单进行编辑
      type: 'string',
      defaultValue: 'https://p6-passport.byteacctimg.com/img/user-avatar/7345204b47d6504d75aaf755ebdb936f~300x300.image'
    }
  }
};
