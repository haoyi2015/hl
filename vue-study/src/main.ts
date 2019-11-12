import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 捕获错误的处理函数
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
// 为 Vue 的运行时警告赋予一个自定义处理函数
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
}

// 在 main.js
// EventBus组件传值
Vue.prototype.$eventBus=new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
