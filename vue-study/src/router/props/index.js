const vueProps = r => require.ensure([], () => r(require('@/pages/vueProps.vue')), 'vueProps')
export default [
    {
        path: '/vue-props',
        name: 'vueProps',
        component: vueProps,
        meta: {
            title: '各种组件通讯',
            keepAlive: true
        }
    }
]
