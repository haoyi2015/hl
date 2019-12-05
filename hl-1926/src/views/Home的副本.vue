<template>
  <section class="main-wrapper">
    <div class="content">
      {{dayTime}}
      <div class="wrapper">
        <div class="light"><i></i></div>
        <hr class="line-left">
        <hr class="line-right">
        <div class="main">
          <section v-for="(item,index) in homeData">
            <h1 class="title">{{ item.titleName }}</h1>
            <div class="year">
              <h2><a href="#">{{ item.yearVal }}年<i></i></a></h2>
              <div class="list">
                <ul>
                  <li class="cls" :class="{'highlight':inx==0}" v-for="(items,inx) in item.itemList">
                    <p class="date">{{ items.date }}</p>
                    <p class="intro">{{ items.eventTitle }}</p>
                    <p class="version">&nbsp;</p>
                    <div class="more">
                      <p>{{ items.decCont }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import headerWarp from "../components/header.vue";
import $http from '../service/api.ts'
import home from '../../public/mock/home'
import { dayTime } from '@/util/time'
// console.log(home)
export default {
  data() {
    return {
      homeData: '',
      dayTime: dayTime
    }
  },
  components: {
    // headerWarp
  },
  created () {
    this.homeData = home.list
    /*$http.getHomeList({}).then(res => {
        console.log(res)
        this.homeData = res.list
    })
    .catch(error => {
        console.log(error)
    })*/
  }
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  font: 12px 微软雅黑, 宋体, Arial, sans-serif;
}
html,
body {
  -webkit-text-size-adjust: none;
  background: #f7f7f7;
}
div,
form,
input,
textarea,
p,
ul,
li,
dl,
dt,
dd,
h1,
table,
h2 {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
ol,
ul {
  list-style: none;
}
input {
  vertical-align: middle;
  font-size: 100%;
}
img {
  vertical-align: top;
  border: 0;
}
em,
i {
  font-style: normal;
}
.l {
  float: left;
}
.r {
  float: right;
}
.c {
  clear: both;
}
.o {
  overflow: hidden;
}
.left {
  float: left;
}
.right {
  float: right;
}
a {
  color: #666;
  text-decoration: none;
}
a:hover {
  color: #f60;
  text-decoration: underline;
}
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.content {
  position: relative;
  width: 1000px;
  margin: 0 auto;
}

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  cursor: point;
}
hr {
  height: 0;
  border-left: none;
  border-right: 0;
  border-top: 1px dashed #2d2f34;
  border-bottom: 1px dashed #474954;
}
.top {
  margin-top: 60px;
}
.top img {
  width: 100%;
  margin-top: -10px;
}
.content {
  padding: 50px 0;
  min-height: 720px;
  background: #3a3c48 url("../assets/images/home/content-bg.png");
  width: 100%;
}
.content .wrapper {
  position: relative;
  background: url("../assets/images/home/release-bg.png") no-repeat right top;
  width: 960px;
  margin: 0 auto;
}
.content .light {
  position: absolute;
  left: 55px;
  top: -50px;
  width: 152px;
  height: 191px;
  background: url("../assets/images/home/light-top.png") no-repeat top center;
}
.content .light i {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: url("../assets/images/home/light.png") no-repeat top center;
}
.content .line-left {
  position: absolute;
  left: 0;
  top: 15px;
  width: 70px;
}
.content .line-right {
  position: absolute;
  right: 0;
  top: 15px;
  width: 460px;
}
.content .main {
  background: url("../assets/images/home/line-bg.png") repeat-y 249px 0;
}
.content .main .title {
  position: absolute;
  line-height: 40px;
  padding-left: 67px;
  left: 230px;
  top: 0;
  color: #58a6fb;
  font-size: 24px;
  background: url("../assets/images/home/clock.png") no-repeat left top;
}
.content .main .year {
  position: relative;
  z-index: 100;
}
.content .main .year h2 {
  height: 40px;
  width: 170px;
  padding-right: 30px;
  font-size: 24px;
  line-height: 40px;
  text-align: right;
}
.content .main .year h2 a {
  color: #58a6fb;
}
.content .main .year h2 i {
  display: block;
  position: relative;
  height: 0;
  width: 0;
  left: 190px;
  top: -20px;
  border-width: 6px;
  border-style: solid;
  border-color: #59a7fb transparent transparent transparent;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  -webkit-transform-origin: 6px 3px;
  -moz-transform-origin: 6px 3px;
  -ms-transform-origin: 6px 3px;
  -o-transform-origin: 6px 3px;
  transform-origin: 6px 3px;
}
.content .main .year .list {
  margin: 10px 0;
  position: relative;
  overflow: hidden;
  -webkit-transition: height 1s cubic-bezier(0.025, 0.025, 0, 1.115), opacity 1s;
  -moz-transition: height 1s cubic-bezier(0.025, 0.025, 0, 1.115), opacity 1s;
  -ms-transition: height 1s cubic-bezier(0.025, 0.025, 0, 1.115), opacity 1s;
  -o-transition: height 1s cubic-bezier(0.025, 0.025, 0, 1.115), opacity 1s;
  transition: height 1s cubic-bezier(0.025, 0.025, 0, 1.115), opacity 1s;
}
.content .main .year .list ul {
  bottom: 0;
}
.content .main .year .list ul li {
  background: url("../assets/images/home/circle.png") no-repeat 235px 31px;
  padding: 30px 0;
  color: #a1a4b8;
}
.content .main .year .list ul li.highlight {
  background-image: url("../assets/images/home/circle_h.png");
}
.cls {
  zoom: 1;
}
.cls:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.content .main .year .list ul li.highlight .date,
.content .main .year .list ul li.highlight .intro {
  color: #ec6a13;
}
.content .main .year .list ul li .date,
.content .main .year .list ul li .version {
  float: left;
  display: block;
  clear: left;
  width: 200px;
  line-height: 24px;
  text-align: right;
}
.content .main .year .list ul li .date {
  font-size: 18px;
  line-height: 32px;
  color: #bec1d5;
}
.content .main .year .list ul li .intro,
.content .main .year .list ul li .more {
  float: left;
  display: block;
  width: 400px;
  margin-left: 100px;
  line-height: 24px;
}
.content .main .year .list ul li .intro {
  font-size: 18px;
  line-height: 32px;
  color: #63d029;
}
.content .wrapper:first-child .main .year.close h2 i {
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
}
.content .wrapper:first-child .main .year.close .list {
  opacity: 0;
  height: 0 !important;
}
.ie7 .content .main .year h2 i {
  left: 40px;
}
</style>
