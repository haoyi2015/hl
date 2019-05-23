<template>
  <div id="app">
    <headerWarp/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="hl-content p-t-80">
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
}
.hl-content{
  min-height: 100%;
  // background: #f1f4f5;
  background: rgba(51, 51, 51, .5);
}
</style>
<script>
import headerWarp from "./components/header.vue";
export default {
  components:{
    headerWarp
  }
}
</script>

