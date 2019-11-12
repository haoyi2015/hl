<template>
    <section>
        <div v-change-color="color">{{color}}</div>
        <input type="text" @keyup.f2="add"/>
        <span v-pre>{{ this will not be compiled }}</span>
        <span v-pre>{{msg}}</span>     即使data里面定义了msg这里仍然是显示的{{msg}}
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
            color:'green'
        }
    },
    methods: {
        add() {
            console.log('----')
        }
    }
}
</script>