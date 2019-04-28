import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Social from './social/index.vue'
import Blog from './blog/index.vue'
import ScrollTop from './examples/scrollTop/scrollTop.vue'
import Examples from './examples/index.vue'
import ScrollTopVelocity from './examples/scrollTop/velocity.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      component: ScrollTop
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
