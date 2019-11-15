import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Examples from './views/Examples.vue'



import Slider from './views/Verification/Verification.vue'
import Player from './views/player/index.vue'
import H5Player from './views/h5.vue'
import ChangeList from './views/city/citiesLinkage.vue'
import Components from './views/components.vue'
import Pay from './views/pay.vue'
import bTab from './views/cTab.vue'
import Progress from './views/progress.vue'
import TabSlider from './views/slider.vue'
import Pulldown from './views/Pulldown.vue'
import h5Slider from './views/h5Slider.vue'
import h5a from './views/player/h5a.vue'
import Digitalbeat from './views/digitalBeat.vue'
import sliderBox from './views/sliderBox.vue'
import progressBar from './views/progressBar.vue'
import recommend from './views/recommend.vue'
import MusicList from './components/vueMusic/musicList.vue'
// import toast from './views/toast.vue'
import demo from './views/demo.vue'
import search from './views/search.vue'
import Tests from './views/test.vue'
import abs from './FM/audio.vue'
import clipboard from './views/clipboard.vue'
import Broadcast from './views/broadcast.vue'
import indexList from './views/indexList.vue'
import limitTextarea from './views/limitTextarea.vue'
import skeleton from './views/skeleton.vue'
import Sticky from './views/sticky.vue'
//弹窗组件
import Alert from './dialogBox/alert.vue'
import Confirm from './dialogBox/confirm.vue'
import Toast from './dialogBox/toast.vue'
import Popup from './dialogBox/popup.vue'
import Popuppicker from './dialogBox/popuppicker.vue'
import Actionsheet from './dialogBox/actionsheet.vue'
import toastLoad from './views/toastLoad.vue'


//图片资源
import Img from './imgBox/img.vue'

//联动选择
import vuePicker from './vuePicker/vue-picker.vue'

Vue.use(Router)

let routes = [
      {
        path: '/',
        name: 'home',
        component: Home
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
          path: '/tab-slider',
          name: 'TabSlider',
          component: TabSlider
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
          path: '/h5a',
          name: 'h5a',
          component: h5a
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
        path: '/broadcast',
        name: 'Broadcast',
        component: Broadcast
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
          children: [
            {
              path: ':id',
              component: MusicList
            }
          ]
      }
]
export default new Router({
    routes: routes
})
