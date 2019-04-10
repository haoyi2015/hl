<template>
  <div id="app">
    <headerWarp/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="hl-content m-t-105">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/mixin";
#app,html,body{
  height: 100%;
  font-family: Roboto,sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.57142857;
  color: #76838f;
}
.hl-content{
  // @include px2rem(ma, 100);
  min-height: 100%;
  background: #f1f4f5;
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

