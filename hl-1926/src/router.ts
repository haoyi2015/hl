import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Social from './social/index.vue'
import Blog from './blog/index.vue'
import ScrollTop from './examples/scrollTop/scrollTop.vue'
import Examples from './examples/index.vue'
import ScrollTopVelocity from './examples/scrollTop/velocity.vue'
import Calendar from './examples/calendar.vue'
//js 相关路由
import Javascript from './JS/index.vue'
import StringCont from './JS/string.vue'
import Content from './content/index.vue'

// 记录
import Record from './record/index.vue'


Vue.use(Router)

// let routers = []
// const routerContext = require.context('./',true,/index\.js$/)
// routerContext.keys().forEach(route => {
//     //如果是根目录路由(过滤)
//     if(route.startsWith('./index')){
//         return
//     }
//     const routerModule = routerContext(route)
//     /**
//      * 兼容 import export 和require module.export
//      */
//     routers = [...routers,...(routerModule.default || routerModule)]
// });

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/social',
      name: 'social',
      component: Social
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/examples',
      name: 'Examples',
      component: Examples,
      children:[
        {
            path: '/scrollTop',
            meta: { requiresAuth: true },
            component: ScrollTop
            // component: resolve => require(['../components/chat/chatRecord.vue'], resolve)
        },
        {
          path: '/scrollTop-velocity',
          meta: { requiresAuth: true },
          component: ScrollTopVelocity
          // component: resolve => require(['../components/chat/chatRecord.vue'], resolve)
      }
      ]
    },
    {
      path: '/javascript',
      name: 'Javascript',
      component: Javascript,
      children:[
        {
            path: '/string-cont',
            meta: { requiresAuth: true },
            component: StringCont
            // component: resolve => require(['../components/chat/chatRecord.vue'], resolve)
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
