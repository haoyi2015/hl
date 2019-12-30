import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'

import './config/rem'
import components from './components'
import Loading from './components/loading'
Vue.use(Vuex);

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

//跳转前设置title
router.beforeEach((to, from, next) => {
    window.document.title = 'vue实在栗子🌰' //to.meta.title;
    next();
});
//跳转后设置scroll为原点
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
//配置Vuex状态管理
const store = new Vuex.Store({
    state: {
        //商品列表信息
        productList: [],
        //购物车数据，数组形式，数据元素为对象（商品id，购买数量count）
        cartList: [],
        //当前用户账号
        username: window.localStorage.getItem('username'),
        //登录状态
        loginStatus: !!window.localStorage.getItem('loginStatus'),
        // 显示列表数据
        products: [
            { name: '鼠标', price: 20 },
            { name: '键盘', price: 40 },
            { name: '耳机', price: 60 },
            { name: '显示屏', price: 80 }
        ]
    },
    getters: {
        //品牌、颜色筛选
        brands: state => {
            const brands = state.productList.map(item => item.brand);
            return util.getFilterArray(brands);
        },
        colors: state => {
            const colors = state.productList.map(item => item.color);
            return util.getFilterArray(colors);
        },
        // 改变列表数据集
        saleProducts: state => {
            let saleProducts = state.products.map(product => {
                return {
                    name: product.name,
                    price: product.price / 2
                }
            })
            return saleProducts;
        }
    },
    //mutations只能以同步方式
    mutations: {
        //添加商品列表
        setProductList(state, data) {
            state.productList = data;
        },
        //添加购物车
        addCart(state, id) {
            const isAdded = state.cartList.find(item => item.id === id);
            //如果不存在设置购物车为1，存在count++
            if (isAdded) {
                isAdded.count++;
            } else {
                state.cartList.push({
                    id: id,
                    count: 1
                })
            }
        },
        //修改购物车商品数量
        editCartCount(state, payload) {
            const product = state.cartList.find(item => item.id === payload.id);
            product.count += payload.count;
        },
        //删除购物车商品
        deleteCart(state, id) {
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index, 1)
        },
        //清空购物车
        emptyCart(state) {
            state.cartList = [];
        },
        getUser(state, username) {
            console.log('username', username)
            state.username = username;
        },
        getLoginStatus(state, flag) {
            state.loginStatus = flag;
        },
        // 列表每个值减少
        minusPrice(state, payload) {
            let newPrice = state.products.forEach(product => {
                if (product.price <= 0) return
                product.price -= payload
            })
        }
    },
    actions: {
        //异步请求商品列表，暂且使用setTimeout
        getProductList(context) {
            setTimeout(() => {
                context.commit('setProductList', product_data)
            }, 500);
        },
        //购买
        buy(context) {
            //生产环境使用ajax请求服务端响应后再清空购物车
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('emptyCart');
                    resolve();
                }, 500);
            });
        },
        // 改变价格值
        minusPriceAsync(context, payload) {
            setTimeout(() => {
                context.commit('minusPrice', payload); //context提交
            }, 2000)
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')