<template>
  <section class="app">
    <!--left-->
    <left-warp></left-warp>
    <div class="blog-container main-container">
      <ul class="label-list" ref="hedWarp">
        <li>
          <span class="tag" style="background-color: rgb(53, 147, 242);">ALL</span>
        </li>
        <li>
          <span class="tag tag-unchecked">Axios</span>
        </li>
        <li>
          <span class="tag tag-unchecked">CSS</span>
        </li>
        <li>
          <span class="tag tag-unchecked">ES6</span>
        </li>
        <li>
          <span class="tag tag-unchecked">GIT</span>
        </li>
        <li>
          <span class="tag tag-unchecked">HTML5</span>
        </li>
        <li>
          <span class="tag tag-unchecked">JQUERY</span>
        </li>
        <li>
          <span class="tag tag-unchecked">JS</span>
        </li>
        <li>
          <span class="tag tag-unchecked">NODE</span>
        </li>
        <li>
          <span class="tag tag-unchecked">SASS</span>
        </li>
        <li>
          <span class="tag tag-unchecked">VUE</span>
        </li>
        <li>
          <span class="tag tag-unchecked">webpack</span>
        </li>
        <li>
          <span class="tag tag-unchecked">旅游攻略</span>
        </li>
        <li>
          <span class="tag tag-unchecked">随笔</span>
        </li>
      </ul>
      <div class="blog-list-container" :style="setHeight">
        <div class="table-header">
          <span>名称</span>
          <span>创建时间</span>
        </div>
        <ul class="issue-list">
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/84" class>jqGrid 上下左右拖动</a>
            <ul>
              <li class="tag tag-small" style="background-color: rgb(194, 224, 198);">JS</li>
            </ul>
            <span class="time">2019-04-11 15:22</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/83" class>tuipress</a>
            <ul></ul>
            <span class="time">2019-03-27 23:14</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/82" class>成就 Mutations</a>
            <ul>
              <li class="tag tag-small" style="background-color: rgb(14, 138, 22);">VUE</li>
            </ul>
            <span class="time">2019-03-26 21:33</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/81" class>成就state</a>
            <ul>
              <li class="tag tag-small" style="background-color: rgb(14, 138, 22);">VUE</li>
            </ul>
            <span class="time">2019-03-24 20:35</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/80" class>音效</a>
            <ul></ul>
            <span class="time">2019-03-23 23:24</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/79" class>FARM （七）金币过滤器</a>
            <ul>
              <li class="tag tag-small" style="background-color: rgb(14, 138, 22);">VUE</li>
            </ul>
            <span class="time">2019-03-22 21:46</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/78" class>FARM （六）土地相关操作Mutations</a>
            <ul></ul>
            <span class="time">2019-03-21 22:31</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/77" class>FARM （五）初始化默认植物以及土地列表</a>
            <ul>
              <li class="tag tag-small" style="background-color: rgb(14, 138, 22);">VUE</li>
            </ul>
            <span class="time">2019-03-20 22:48</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/76" class>FARM （四）菜单，植物列表，土地组件</a>
            <ul>
              <li class="tag tag-small" style="background-color: rgb(14, 138, 22);">VUE</li>
            </ul>
            <span class="time">2019-03-19 23:02</span>
          </li>
          <li class="issue-item">
            <a href="#/Blog/BlogDetail/75" class>FARM （三）植物基本数据</a>
            <ul>
              <li class="tag tag-small" style="background-color: rgb(14, 138, 22);">VUE</li>
            </ul>
            <span class="time">2019-03-18 22:36</span>
          </li>
        </ul>
        <div class="bottom-bar">
          <input type="text" placeholder="按文章标题或内容搜索..." class="fl query">
          <div class="paginataion-container">
            <span class="total-num">共&nbsp;78&nbsp;条</span>
            <img class="pre-page-disabled">
            <input type="number" class="current-page">
            <span class="page-count">/&nbsp;&nbsp;&nbsp;8</span>
            <img class="next-page">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import url("/css/b40bdc.css");
.app,
.blog-container {
  background: #fff;
}
</style>
<script>
import LeftWarp  from './left'
export default {
    components: {
        LeftWarp
    },
    data () {
        return {

        }
    }
}
</script>