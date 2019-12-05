import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Social from './views/social/index.vue'
import Blog from './views/blog/index.vue'
import BlogDetail from './views/blog/detail.vue'
import ScrollTop from './views/examples/scrollTop/scrollTop.vue'
import Examples from './views/examples/index.vue'
import ScrollTopVelocity from './views/examples/scrollTop/velocity.vue'
import Calendar from './views/examples/calendar.vue'
//js 相关路由
import Javascript from './views/JS/index.vue'
import StringCont from './views/JS/string.vue'
import Content from './views/content/index.vue'

// 记录
import Record from './views/record/index.vue'

// 共同盒子
import Layout from './components/Layout/index.vue'

// web导航站
import NavItem from './views/webNav/index.vue'

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
    // {
    //   path: '/social',
    //   name: 'social',
    //   component: Social
    // },
    {
      path: '/',
      component: Layout,
      redirect: '/nav-item',
      children: [{
          path: 'nav-item',
          name: 'NavItem',
          component: NavItem,
          meta: { title: 'web资源导航站', icon: 'dashboard' }
      }]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/social',
      children: [{
          path: 'social',
          name: 'Social',
          component: Social,
          meta: { title: '社交活动', icon: 'dashboard' }
      }]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/blog',
        children: [{
            path: 'blog',
            name: 'Blog',
            component: Blog,
            meta: { title: '博客主页', icon: 'dashboard' }
        }]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/blog-detail',
      children: [{
          path: 'blog-detail',
          name: 'BlogDetail',
          component: BlogDetail,
          meta: { title: '博文章详情', icon: 'dashboard' }
      }]
  },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: Blog
    // },
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
