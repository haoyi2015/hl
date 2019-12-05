import Vue from 'vue'
import router from './router'
import App from './App.vue'

import './config/rem'
import components from './components'
import Loading from './components/loading'

//import VueLazyLoad from './components/ImageSlider/lazyload';
// import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件

// Vue.use(VueLazyload, {
//   error: 'http://img.ishequ360.com/images/test/Loading.png',
//   loading: 'http://img.ishequ360.com/images/test/Loading.png',
//   attempt: 1
// });

Vue.use(Loading)
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
