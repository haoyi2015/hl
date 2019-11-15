<template>
  <div class="m-header">
    <h1 class="text">vue-music</h1>
    <router-link to="/user" class="mine" tag="div">
     <i class="iconfont icon-caidan"></i>
    </router-link>
    <router-link to="/search" class="search" tag="div">
      <i class="iconfont icon-sousuo"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// 颜色定义规范
$color-background: #F2F3F4;
$color-background-d: rgba(0, 0, 0, 0.3);
$color-highlight-background: rgb(253, 108, 98);
$color-dialog-background: rgb(204, 204, 204);
$color-theme: rgb(212, 68, 57);
$color-theme-l: rgb(241, 241, 241);
$color-theme-g: rgb(219, 219, 219);
$color-theme-d: rgba(19, 19, 19, 0.6);
$color-sub-theme: rgb(240, 116, 107);
$color-text: #2E3030;
$color-text-g: #757575;
$color-text-ggg: #c7c7c7;
$color-text-gg: rgb(219, 219, 219);
$color-text-l: rgb(241, 241, 241);
$color-text-lm: rgb(228, 228, 228);
$color-text-ll: rgba(255, 255, 255, 0.8);

//字体定义规范
$font-size-small-ss: 9px;
$font-size-small-s: 10px;
$font-size-small: 11px;
$font-size-small-x: 12px;
$font-size-medium: 14px;
$font-size-medium-x: 16px;
$font-size-large-s: 17px;
$font-size-large: 18px;
$font-size-large-x: 22px;

.m-header {
  position: relative;
  height: 44px;
  width: 100%;
  text-align: center;
  background: $color-theme;
  .text {
    line-height: 44px;
    font-weight: bold;
    color: $color-text-l;
    letter-spacing: 3px;
  }
  .mine {
    position: absolute;
    top: -1.5px;
    left: 0;
    .iconfont {
        display: block;
        padding: 11px;
        font-size: 22px;
        color: $color-theme-l;
        font-weight: bold;
    }
  }
  .search {
    position: absolute;
    top: 0;
    right: 2px;
    .iconfont {
        display: block;
        font-size: 24px;
        padding: 7px 12px;
        color: $color-theme-l;
        font-weight: bold;
    }
  }
}
</style>
