<template>
  <div id="app">
    <!-- <headerWarp/> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <div class="hl-content p-t-60" :style="hlHeight"> -->
    <div class="hl-content">
      <transition name="fade">
        <router-view ></router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./assets/scss/mixin";
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
  #app,html,body{
    height: 100%;
    font-family: Roboto,sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.57142857;
    color: #76838f;
    overflow: auto;
  }
  ::-webkit-scrollbar-track{
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
  }
  .hl-content{
    position: relative;
    -webkit-transition: all .2s;
    transition: all .2s;
    min-height: 100vh;
    overflow: auto;
  }
  ::-webkit-scrollbar  
  {  
      width: 5px;
      background-color: #F5F5F5;  
  }
  .content-warp-box{
    min-width: 1080px;
    margin: 0 56px;
  }
  .cont-pad-top{
    padding-top: 60px;
    margin-bottom: 36px;
  }
  body{
    margin: 0;
    overflow: auto;
  }
  </style>
<script>
export default {
  data () {
    return {
      hlHeight: ''
    }
  },
  mounted () {
    this.hlHeight = `height: ${document.body.scrollHeight - 60}px`;
  }
}
</script>

