<template>
  <div class="progress-circle">
    <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
      <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray"
              :stroke-dashoffset="dashOffset"/>
    </svg>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    radius: {
      type: Number,
      default: 100
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      dashArray: Math.PI * 100
    }
  },
  computed: {
    dashOffset () {
      return (1 - this.percent) * this.dashArray
    }
  }
}
</script>

<style scoped lang="scss" >
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
.progress-circle {
  position: relative;
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background {
      transform: scale(0.9);
      stroke: $color-theme-d;
    }
    &.progress-bar {
      transform: scale(0.9) rotate(-90deg);
      stroke: $color-highlight-background;
    }
  }
}
</style>
