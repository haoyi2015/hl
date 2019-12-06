import Vue from 'vue'
import Router from 'vue-router'
// import Home from './home'

// import userSet from './view/user/userSet'

const Home = resolve => require(['./home'], resolve) //r => require.ensure([], () => r(require('home')), 'Home');
const userSet = resolve => require(['./view/user/userSet'], resolve)
const AboutDemo = resolve => require(['./view/about'], resolve)
const ExamplesDemo = resolve => require(['./examples/examples'], resolve)
const Broadcast = resolve => require(['./examples/broadcast'], resolve)
const CheckBox = resolve => require(['./examples/checkbox'], resolve)
const TabSlider = resolve => require(['./examples/tabSlider'], resolve)
const IndexList = resolve => require(['./examples/indexList'], resolve)
const HedBottom = resolve => require(['./examples/hedBottom'], resolve)
const SwiperDemo = resolve => require(['./examples/swiperDemo'], resolve)
const ViewportDemo = resolve => require(['./examples/viewport'], resolve)
const simpScroller = resolve => require(['./examples/simpScroller'], resolve)
const imgLary = resolve => require(['./examples/imgLay'], resolve)
const MtIndexList = resolve => require(['./examples/mtIndexList'], resolve)
const Drag = resolve => require(['./drag/index'], resolve)
    // 个人中心
const UserCenter = resolve => require(['./userApp/userCenter'], resolve)
const UserMusic = resolve => require(['./userApp/userMusic'], resolve)
const ShopDetail = resolve => require(['./userApp/shopDetail'], resolve)
const TaskCenter = resolve => require(['./userApp/taskCenter'], resolve)
const ShopStation = resolve => require(['./userApp/shopStation'], resolve)
const UserInfo = resolve => require(['./userApp/userInfo'], resolve)

import About from './demo/About.vue'
import Examples from './demo/Examples.vue'



import Slider from './demo/Verification/Verification.vue'
import Player from './demo/player/index.vue'
import H5Player from './demo/h5.vue'
import ChangeList from './demo/city/citiesLinkage.vue'
import Components from './demo/components.vue'
import Pay from './demo/pay.vue'
import bTab from './demo/cTab.vue'
import Progress from './demo/progress.vue'
import TabSliderList from './demo/slider.vue'
import Pulldown from './demo/Pulldown.vue'
import h5Slider from './demo/h5Slider.vue'
import phonePlayer from './demo/player/h5a.vue'
import Digitalbeat from './demo/digitalBeat.vue'
import sliderBox from './demo/sliderBox.vue'
import progressBar from './demo/progressBar.vue'
import recommend from './demo/recommend.vue'
import MusicList from './componentss/vueMusic/musicList.vue'
// import toast from './views/toast.vue'
import demo from './demo/demo.vue'
import search from './demo/search.vue'
import Tests from './demo/test.vue'
import abs from './FM/audio.vue'
import clipboard from './demo/clipboard.vue'
import BroadcastDemo from './demo/broadcast.vue'
import indexList from './demo/indexList.vue'
import limitTextarea from './demo/limitTextarea.vue'
import skeleton from './demo/skeleton.vue'
import Sticky from './demo/sticky.vue'
//弹窗组件
import Alert from './dialogBox/alert.vue'
import Confirm from './dialogBox/confirm.vue'
import Toast from './dialogBox/toast.vue'
import Popup from './dialogBox/popup.vue'
import Popuppicker from './dialogBox/popuppicker.vue'
import Actionsheet from './dialogBox/actionsheet.vue'
import toastLoad from './demo/toastLoad.vue'


//图片资源
import Img from './imgBox/img.vue'

//联动选择
import vuePicker from './vuePicker/vue-picker.vue'

Vue.use(Router)

let routes = [{
        path: '/',
        name: 'home',
        component: Home //resolve => require(['./home'],resolve)
    }, {
        path: '/user-setting',
        name: 'userSet',
        component: userSet
    }, {
        path: '/about-demo',
        name: 'AboutDemo',
        component: AboutDemo
    }, {
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
    }, {
        path: '/tab-slider',
        name: 'TabSlider',
        component: TabSlider
    }, {
        path: '/index-list',
        name: 'IndexList',
        component: IndexList
    }, {
        path: '/hed-bottom',
        name: 'HedBottom',
        component: HedBottom
    }, {
        path: '/swiper-demo',
        name: 'SwiperDemo',
        component: SwiperDemo
    }, {
        path: '/viewport-demo',
        name: 'ViewportDemo',
        component: ViewportDemo
    }, {
        path: '/simpScroller-demo',
        name: 'simpScroller',
        component: simpScroller
    }, {
        path: '/img-lary',
        name: 'imgLary',
        component: imgLary
    }, {
        path: '/mint-index-list',
        name: 'MtIndexList',
        component: MtIndexList
    }, {
        path: '/drag-list',
        name: 'Drag',
        component: Drag
    }, {
        path: '/user-center',
        name: 'UserCenter',
        component: UserCenter
    }, {
        path: '/user-music',
        name: 'UserMusic',
        component: UserMusic
    }, {
        path: '/shop-detail',
        name: 'ShopDetail',
        component: ShopDetail
    }, {
        path: '/task-center',
        name: 'TaskCenter',
        component: TaskCenter
    }, {
        path: '/shop-station',
        name: 'ShopStation',
        component: ShopStation
    }, {
        path: '/user-info',
        name: 'UserInfo',
        component: UserInfo
    },
    {
        path: '/examples',
        name: 'examples',
        component: Examples
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/tab',
        name: 'bTab',
        component: bTab
    },
    {
        path: '/ver-slider',
        name: 'Slider',
        component: Slider
    },
    {
        path: '/vue-player',
        name: 'Player',
        component: Player
    },
    {
        path: '/h5-player',
        name: 'H5Player',
        component: H5Player
    },
    {
        path: '/change-list',
        name: 'ChangeList',
        component: ChangeList
    },
    {
        path: '/components',
        name: 'Components',
        component: Components
    },
    {
        path: '/pay',
        name: 'Pay',
        component: Pay
    },
    {
        path: '/progress',
        name: 'progress',
        component: Progress
    },
    {
        path: '/tab-slider_list',
        name: 'TabSliderList',
        component: TabSliderList
    },
    {
        path: '/pull-down',
        name: 'Pulldown',
        component: Pulldown
    },
    {
        path: '/h5-slider',
        name: 'h5Slider',
        component: h5Slider
    },
    {
        path: '/phone-player',
        name: 'phonePlayer',
        component: phonePlayer
    },
    {
        path: '/digital-beat',
        name: 'Digitalbeat',
        component: Digitalbeat
    },
    {
        path: '/slider-box',
        name: 'sliderBox',
        component: sliderBox
    },
    {
        path: '/progress-bar',
        name: 'progressBar',
        component: progressBar
    },
    {
        path: '/demo',
        name: 'demo',
        component: demo
    },
    {
        path: '/search',
        name: 'search',
        component: search
    },
    {
        path: '/test-demo',
        name: 'Tests',
        component: Tests
    },
    {
        path: '/a-demo',
        name: 'abs',
        component: abs
    },
    {
        path: '/clipboard',
        name: 'clipboard',
        component: clipboard
    },
    {
        path: '/broadcast-demo',
        name: 'BroadcastDemo',
        component: BroadcastDemo
    },
    {
        path: '/index-list',
        name: 'indexList',
        component: indexList
    },
    {
        path: '/limit-textarea',
        name: 'limitTextarea',
        component: limitTextarea
    },
    {
        path: '/skeleton',
        name: 'skeleton',
        component: skeleton
    },
    {
        path: '/sticky',
        name: 'Sticky',
        component: Sticky
    },
    {
        path: '/Alert',
        name: 'Alert',
        component: Alert
    },
    {
        path: '/confirm',
        name: 'Confirm',
        component: Confirm
    },
    {
        path: '/toast',
        name: 'Toast',
        component: Toast
    },
    {
        path: '/popup',
        name: 'Popup',
        component: Popup
    },
    {
        path: '/popuppicker',
        name: 'Popuppicker',
        component: Popuppicker
    },
    {
        path: '/actionsheet',
        name: 'Actionsheet',
        component: Actionsheet
    },
    {
        path: '/img',
        name: 'Img',
        component: Img
    },
    {
        path: '/vue-picker',
        name: 'vuePicker',
        component: vuePicker
    },
    {
        path: '/toast-load',
        name: 'toastLoad',
        component: toastLoad
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: recommend,
        children: [{
            path: ':id',
            component: MusicList
        }]
    }
]

const router = new Router({
    //history: false,
    //hashbang: true,
    //mode: 'history',//去除#
    base: '/h5/',
    routes: routes
});
export default router;