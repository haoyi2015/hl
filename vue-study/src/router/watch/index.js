const vueWatch = r => require.ensure([], () => r(require('@/pages/vueWatch.vue')), 'vueWatch')
export default [
    {
        path: '/vue-watch',
        name: 'vueWatch',
        component: vueWatch,
        meta: {
            title: 'watch应用',
            keepAlive: true
        }
    }
]
