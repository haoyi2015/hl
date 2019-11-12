import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routerObject:any = []
const routerContext = require.context('./',true,/index\.js$/)
routerContext.keys().forEach(route => {
    //如果是根目录路由(过滤)
    if(route.startsWith('./index')){
        return
    }
    const routerModule = routerContext(route)
    /**
     * 兼容 import export 和require module.export
     */
    routerObject = [...routerObject,...(routerModule.default || routerModule)]
});
const router = new VueRouter({
    mode: 'history',//去除#
    routes: routerObject
})

export default router