<template>
  <div class="hello">
    <h1 class="fontsize">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
/**
 * ts 写法
 * vue-class-component插件是对 Vue 组件进行了一层封装，
 * 让 Vue 组件语法在结合了 TypeScript 语法之后更加扁平化
 * vue-property-decorator插件是在 vue-class-component 上增强了更多的结合 
 * Vue 特性的装饰器，新增了这 7 个装饰器
 * @Emit
   @Inject
   @Model
   @Prop
   @Provide
   @Watch
   @Component (从 vue-class-component 继承)
*/
import { Component, Prop, Vue } from 'vue-property-decorator';

import $http from '../service/api'
console.log($http)

//@Component
@Component({
  components: {
      //MyComponentTest
  }
})
export default class App extends Vue {
  // 初始化数据
  msg = '123'
  aaa = 'abcsd'
  aas = 302
  strings = 'stringstringstring'
  childs = 'childs'
  styleHeight = ''
  // 申明生命周期
  mounted () {
    this.greet()
    console.log(document.documentElement.clientHeight)
    let height = document.documentElement.clientHeight
    //this.styleHeight = `height:${height}px`
  }
  // 计算属性
  get computedMsg () {
    return 'computed ' + this.msg
  }
  // 方法定义
  greet () {
    console.log('greeting: ' + this.msg)
    this.childs = 'childschildschildschilds'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/scss/mixin";
  .fontsize {
      @include px2rem(font-size, 300);
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Zilla Slab', serif;
    background: #577386;
    overflow: hidden;
  }
  p {
    margin: 0 0 3px;
    line-height: 1;
    letter-spacing: 1px;
    pointer-events: none;
  }
  .calendar {
    position: relative;
    width: 152px;
    cursor: default;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  .calendar::before,
  .calendar::after {
    content: '';
    position: absolute;
    top: -28px;
    left: 40px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #ddd;
    z-index: 3;
  }
  .calendar::after {
    left: initial;
    right: 40px;
  }
  .pages {
    position: relative;
    text-align: center;
    background: #eee;
    box-shadow: 0 10px 0 0px #a5a4a4;
  }
  .pages::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 45px;
    background: indianred;
    bottom: 100%;
    left: 0;
    z-index: 2;
  }
  .page {
    position: relative;
    padding: 20px 30px 15px;
    background: #eee;
  }
  .page::before {
    content: '';
    position: absolute;
    bottom: 99%;
    left: 0;
    display: block;
    background: linear-gradient(-45deg, #eee 10px, #eee 10px, #eee 10px, transparent 0), linear-gradient(45deg, #eee 10px, transparent 0);
    background-position: left top;
    background-repeat: repeat-x;
    background-size: 10px 18px;
    height: 10px;
    width: 100%;
  }
  .month,
  .day-name {
    text-transform: uppercase;
    font-weight: 600;
  }
  .day {
    font-size: 60px;
    font-weight: 700;
    margin: 0 0 15px;
  }
  .year {
    font-size: 12px;
  }
  .tear {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    -webkit-transform-origin: top left;
            transform-origin: top left;
    box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.5);
    pointer-events: none;
    -webkit-animation: tear-animation 0.8s linear forwards;
            animation: tear-animation 0.8s linear forwards;
  }
  @-webkit-keyframes tear-animation {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
      top: 0;
      opacity: 1;
    }
    20% {
      -webkit-transform: rotate(9deg);
              transform: rotate(9deg);
      top: 0;
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      top: 200px;
      opacity: 0;
    }
  }
  @keyframes tear-animation {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
      top: 0;
      opacity: 1;
    }
    20% {
      -webkit-transform: rotate(9deg);
              transform: rotate(9deg);
      top: 0;
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      top: 200px;
      opacity: 0;
    }
  }
</style>
