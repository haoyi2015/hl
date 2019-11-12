const vueRequireContext = r => require.ensure([], () => r(require('@/pages/vueRequireContext.vue')), 'vueRequireContext')
export default [
    {
        path: '/vue-require-context',
        name: 'vueRequireContext',
        component: vueRequireContext,
        meta: {
            title: '组件引入方式简化',
            keepAlive: true
        }
    }
]
