const vueRender = r => require.ensure([], () => r(require('@/pages/vueRender.vue')), 'vueRender')
const vueDemo = r => require.ensure([], () => r(require('@/pages/vueDemo.vue')), 'vueDemo')
export default [
    {
        path: '/vue-render',
        name: 'vueRender',
        component: vueRender,
        meta: {
            title: 'render 函数',
            keepAlive: true
        }
    },
    {
        path: '/vue-demo',
        name: 'vueDemo',
        component: vueDemo,
        meta: {
            title: 'Vue.extend',
            keepAlive: true
        }
    }
]
