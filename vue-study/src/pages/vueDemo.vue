<template>
    <section>
        <div v-change-color="color">{{color}}</div>
        <input type="text" @keyup.f2="add"/><br />
        有些 template 中的静态 dom 没有改变,这时就只需要渲染一次,可以降低性能开销<br />
        <span v-once> 这时只需要加载一次的标签</span>
        <div>v-once只渲染一次；v-pre不编译,原样输出</div><br />
        <h2 class="h2-title-name">事件修饰符: </h2>
        <pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">.stop:</span>阻止冒泡
<span class="token keyword">.prevent</span>:阻止默认行为
<span class="token keyword">.self</span>:仅绑定元素自身触发
<span class="token keyword">.once</span>: 2.1.4 新增,只触发一次
<span class="token keyword">.passive</span>: 2.3.0 新增,滚动事件的默认行为 (即滚动行为) 将会立即触发,不能和.prevent 一起使用</code></pre>
        <h2 class="h2-title-name">按键修饰符和按键码: </h2>
		// 对应键盘上的关键字<br />
<pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">.enter</span>
<span class="token keyword">.tab</span>
<span class="token keyword">.delete (捕获“删除”和“退格”键)</span>
<span class="token keyword">.esc</span>
<span class="token keyword">.space</span>
<span class="token keyword">.up</span>
<span class="token keyword">.down</span>
<span class="token keyword">.left</span>
<span class="token keyword">.right</span></code></pre><br />
<h2 class="h2-title-name">全局路由钩子 (beforeEach,afterEach,beforeResolve)</h2>
<pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">.beforeEach</span><br />router.beforeEach((to, from, next) => {
  console.log('全局前置守卫：beforeEach -- next需要调用') //一般登录拦截用这个,也叫导航钩子守卫
  if (path === '/login') {
    next()
    return
  }
  if (token) {
    next();
  } 
})</code></pre><br />
<h2 class="h2-title-name">组件路由钩子 (beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave)</h2>
beforeRouteEnter说明：<br>
<pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">在渲染该组件的对应路由被确认前调用，用法和参数与router.beforeEach类似，next需要被主动调用
此时组件实例还未被创建，不能访问this
可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数</span><br >beforeRouteEnter (to, from, next) {
  // 这里还无法访问到组件实例，this === undefined
  next( vm => {
    // 通过 `vm` 访问组件实例
  })
}<br>beforeRouteUpdate说明：<br>在当前路由改变，并且该组件被复用时调用，可以通过this访问实例， next需要被主动调用，不能传回调<br>beforeRouteLeave说明：<br>导航离开该组件的对应路由时调用，可以访问组件实例 this，next需要被主动调用，不能传回调</code></pre><br />
<h2 class="h2-title-name">路由模式 （mode 属性:hash或 history）</h2>
<h2 class="h2-title-name">Vue.$router</h2>
<pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">this.$router.push()</span>:跳转到不同的url，但这个方法回向history栈添加一个记录，点击后退会返回到上一个页面
<span class="token keyword">this.$router.replace()</span>:不会有记录
<span class="token keyword">this.$router.go(n)</span>:n可为正数可为负数。正数返回上一个页面,类似 window.history.go(n)</code></pre>
<h2 class="h2-title-name">Vue.$route</h2>
<pre class=" language-javascript"><code class=" language-javascript">表示当前跳转的路由对象,属性有:
name:路由名称
path:路径
query:传参接收值
params:传参接收值
fullPath:完成解析后的 URL，包含查询参数和 hash 的完整路径
matched:路由记录副本
redirectedFrom:如果存在重定向，即为重定向来源的路由的名字<br /><span class="token keyword">this.$route.params.id</span>:获取通过 params 或/:id传参的参数
<span class="token keyword">this.$route.query.id</span>:获取通过 query 传参的参数</code></pre>
<h2 class="h2-title-name">Object.freeze</h2>
<pre class=" language-javascript"><code class=" language-javascript">场景:一个长列表数据,一般不会更改,但是vue会做getter和setter的转换
用法:是ES5新增的特性，可以冻结一个对象，防止对象被修改
支持:vue 1.0.18+对其提供了支持，对于data或vuex里使用freeze冻结了的对象，vue不会做getter和setter的转换
注意:冻结只是冻结里面的单个属性,引用地址还是可以更改<br /><span class="token keyword">new Vue({
    data: {
        // vue不会对list里的object做getter、setter绑定
        list: Object.freeze([
            { value: 1 },
            { value: 2 }
        ])
    },
    mounted () {
        // 界面不会有响应,因为单个属性被冻结
        this.list[0].value = 100;

        // 下面两种做法，界面都会响应
        this.list = [
            { value: 100 },
            { value: 200 }
        ];
        this.list = Object.freeze([
            { value: 100 },
            { value: 200 }
        ]);
    }
})</span></code></pre>
<h2 class="h2-title-name">调试 template</h2>
<pre class=" language-javascript"><code class=" language-javascript">场景:在Vue开发过程中, 经常会遇到template模板渲染时JavaScript变量出错的问题, 此时也许你会通过console.log来进行调试
这时可以在开发环境挂载一个 log 函数<br><span class="token keyword">// main.js
Vue.prototype.$log = window.console.log;
// 组件内部使用
<div> $log(info)<!--{{$log(info)}} --></div>
</span></code></pre>
<h2 class="h2-title-name">transformToRequire</h2>
<pre class=" language-javascript"><code class=" language-javascript">以前在写 Vue 的时候经常会写到这样的代码：把图片提前 require 传给一个变量再传给组件<br />// page 代码
template
  <div>
    avatar img-src="imgSrc" avatar
  </div>
template
  export default {
    created () {
      this.imgSrc = require('./assets/default-avatar.png')
    }
  }<br />通过配置 transformToRequire 后，就可以直接配置，这样vue-loader会把对应的属性自动 require 之后传给组件<br />// vue-cli 2.x在vue-loader.conf.js 默认配置是
<span class="token keyword">transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
}

// 配置文件,如果是vue-cli2.x 在vue-loader.conf.js里面修改
  avatar: ['default-src']

// vue-cli 3.x 在vue.config.js
// vue-cli 3.x 将transformToRequire属性换为了transformAssetUrls
module.exports = {
  pages,
  chainWebpack: config => {
    config
      .module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
      options.transformAssetUrls = {
        avatar: 'img-src',
      }
      return options;
      });
  }
}

// page 代码可以简化为
img-src="./assets/default-avatar.png"</span></code></pre>
<div class="demo"><span class="content">content</span></div>
    </section>
</template>
<script>
import Vue from 'vue'
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{extendData}}</br>实例传入的数据为:{{propsExtend}}</p>',//template对应的标签最外层必须只有一个标签
  data: function () {
    return {
      extendData: '这是extend扩展的数据',
    }
  },
  props:['propsExtend']
})

// 创建的构造器可以挂载到元素上,也可以通过 components 或 Vue.component()注册使用
// 挂载到一个元素上。可以通过propsData传参.
// new Profile({propsData:{propsExtend:'我是实例传入的数据'}}).$mount('#app-extend')

// 通过 components 或 Vue.component()注册
// Vue.component('Profile',Profile)

// 全局定义
Vue.directive("change-color",function(el,binding,vnode){
  el.style["color"]= binding.value;
})

const mixin={
    created(){
      this.dealTime()
    },
    methods:{
      dealTime(){
        console.log('这是mixin的dealTime里面的方法');
      }
  }
}
const extend={
    created(){
      this.dealTime()
    },
    methods:{
      dealTime(){
        console.log('这是extend----mixin的dealTime里面的方法');
      }
  }
}
// 将键码为 113 定义为 f2
Vue.config.keyCodes.f2 = 113;

export default {
    mixins:[mixin],
    extends:extend,
    data() {
        return {
			color:'green',
			// vue不会对list里的object做getter、setter绑定
			list: Object.freeze([
				{ value: 1 },
				{ value: 2 }
			])
        }
    },
    methods: {
        add() {
            console.log('----')
        }
	},
	mounted () {
		// 界面不会有响应,因为单个属性被冻结
		this.list = 100;
		// 下面两种做法，界面都会响应
        this.list = [
            { value: 100 },
            { value: 200 }
        ];
        this.list = Object.freeze([
            { value: 100 },
            { value: 200 }
        ]);
	}
}
</script>
<style lang="scss" scoped>
	.demo {
		width: 100px;
		>>>.content {
			border: 0;
			color: #000;
		}
	}
</style>