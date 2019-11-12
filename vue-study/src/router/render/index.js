const vueRender = r => require.ensure([], () => r(require('@/pages/vueRender.vue')), 'vueRender')
const vueExtend = r => require.ensure([], () => r(require('@/pages/vueExtend.vue')), 'vueExtend')
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
        path: '/vue-extend',
        name: 'vueExtend',
        component: vueExtend,
        meta: {
            title: 'Vue.extend',
            keepAlive: true
        }
    }
]
