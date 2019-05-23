<template>
  <section>
    <!-- <section class="div_content">
    <div class="ul-header border-1px">
      <div class="left-menu">
        <a href="/home">首页</a>
      </div>
    </div>
    </section>
    <div class="fixedbg"></div> -->
  </section>
</template>
<script>
export default {
  data () {
    return {
      showLeftMenu: false,
      showWeatherList: false
    }
  }
}
</script>
<style lang="scss">
  .div_content{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    z-index: 6;
  }
  .ul-header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    z-index: 111;
    margin: 0;
    font-size: 0;
    padding: 0 20px;
  }
  .left-menu a {
    list-style: none;
    display: inline-block;
    font-size: 14px;
    padding: 0 14px;
    margin: 0;
    color: #fff;
    cursor: pointer;
    font-family: Segoe UI,Segoe,Tahoma,Arial,Verdana,sans-serif;
    text-decoration: none;
  }
  .fixedbg {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    background-image: url(http://www.bing.com/th?id=OHR.SeaCliffBridge_ZH-CN5362667487_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp);
    background-size: cover;
    background-position: center center;
    height: 100%;
    width: 100%;
  }
  .div_content .ul-header .left-menu a.router-link-active li {
    color: #ccc;
    border-bottom: 1px solid #f4c2ec;
}
</style>