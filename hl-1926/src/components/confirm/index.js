import Vue from 'vue'
import ConfirmContainer from '../confirm.vue'

let instance;
let globalConfig = {};
let ConfirmConstructor = Vue.extend(ConfirmContainer);
let q = []
let isShow = false

let Confirm = (options) => {
  if (!isShow) {
    instance = new ConfirmConstructor({
      el: document.createElement('div')
    //   propsData: options
    });
    document.body.appendChild(instance.$el);
    isShow = true
  } else {
    q.push(options);
    return;
  }
  return new Promise((resolve, reject) => {
    instance.isShow = true;
    console.log(instance.isShow)
    // 设置参数
    instance.title = options.title||'设置标题';
    instance.contant = options.contant||'设置内容';
    instance.okBntText = options.okBntText||'确定';
    instance.cancelBntText = options.cancelBntText||'取消';
    /* 对 save 函数包裹一层 */
    let save = instance.save;
    let close = instance.close;
    instance.save = () => {
      save();
      resolve(options);
      isShow = false
      instance.isShow = false;
      if (q.length > 0) {
        Confirm(q.shift())
      }
    }
    instance.close = () => {
      close();
      reject('fail');
      isShow = false
      instance.isShow = false;
      if (q.length > 0) {
        Confirm(q.shift())
      }
    }
  });
}
export default {
  install(Vue, options = {}) {
    globalConfig = options;
    Vue.prototype.$confirm = Confirm;
  }
};