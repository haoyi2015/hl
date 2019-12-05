import Vue from 'vue'
import Router from 'vue-router'
// import Home from './home'

// import userSet from './view/user/userSet'

const Home = resolve => require(['./home'],resolve) //r => require.ensure([], () => r(require('home')), 'Home');
const userSet = resolve => require(['./view/user/userSet'],resolve)
const VipplDemo = resolve => require(['./view/vippl'],resolve)
const ExamplesDemo = resolve => require(['./examples/examples'],resolve)
const Broadcast = resolve => require(['./examples/broadcast'],resolve)
const CheckBox = resolve => require(['./examples/checkbox'],resolve)
const TabSlider = resolve => require(['./examples/tabSlider'],resolve)
const IndexList = resolve => require(['./examples/indexList'],resolve)
const HedBottom = resolve => require(['./examples/hedBottom'],resolve)
const SwiperDemo = resolve => require(['./examples/swiperDemo'],resolve)
const ViewportDemo = resolve => require(['./examples/viewport'],resolve)
const simpScroller = resolve => require(['./examples/simpScroller'],resolve)
const imgLary = resolve => require(['./examples/imgLay'],resolve)
const MtIndexList = resolve => require(['./examples/mtIndexList'],resolve)
const Drag = resolve => require(['./drag/index'],resolve)
// 个人中心
const UserCenter = resolve => require(['./userApp/userCenter'],resolve)
const UserMusic = resolve => require(['./userApp/userMusic'],resolve)
const ShopDetail = resolve => require(['./userApp/shopDetail'],resolve)
const TaskCenter = resolve => require(['./userApp/taskCenter'],resolve)
const ShopStation = resolve => require(['./userApp/shopStation'],resolve)
const UserInfo = resolve => require(['./userApp/userInfo'],resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home//resolve => require(['./home'],resolve)
    },{
        path: '/user-setting',
        name: 'userSet',
        component: userSet
    },{
        path: '/vippl-demo',
        name: 'VipplDemo',
        component: VipplDemo
    },{
        path: '/examples-demo',
        name: 'ExamplesDemo',
        component: ExamplesDemo,
        // children: [
        //     {
        //         path: '/broadcast',
        //         name: 'Broadcast',
        //         component: Broadcast
        //     }
        // ]
    },
    {
        path: '/broadcast',
        name: 'Broadcast',
        component: Broadcast
    },
    {
        path: '/checkbox',
        name: 'CheckBox',
        component: CheckBox
    },{
        path: '/tab-slider',
        name: 'TabSlider',
        component: TabSlider
    },{
        path: '/index-list',
        name: 'IndexList',
        component: IndexList
    },{
        path: '/hed-bottom',
        name: 'HedBottom',
        component: HedBottom
    },{
        path: '/swiper-demo',
        name: 'SwiperDemo',
        component: SwiperDemo
    },{
        path: '/viewport-demo',
        name: 'ViewportDemo',
        component: ViewportDemo
    },{
        path: '/simpScroller-demo',
        name: 'simpScroller',
        component: simpScroller
    },{
        path: '/img-lary',
        name: 'imgLary',
        component: imgLary
    },{
        path: '/mint-index-list',
        name: 'MtIndexList',
        component: MtIndexList
    },{
        path: '/drag-list',
        name: 'Drag',
        component: Drag
    },{
        path: '/user-center',
        name: 'UserCenter',
        component: UserCenter
    },{
        path: '/user-music',
        name: 'UserMusic',
        component: UserMusic
    },{
        path: '/shop-detail',
        name: 'ShopDetail',
        component: ShopDetail
    },{
        path: '/task-center',
        name: 'TaskCenter',
        component: TaskCenter
    },{
        path: '/shop-station',
        name: 'ShopStation',
        component: ShopStation
    },{
        path: '/user-info',
        name: 'UserInfo',
        component: UserInfo
    }
]

const router = new Router({
  //history: false,
  //hashbang: true,
  //mode: 'history',//去除#
  base: '/h5/',
  routes : routes
});
export default router;
