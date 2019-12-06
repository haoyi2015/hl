<template functional>
  <div :class="['w-layout', data.staticClass, data.class]" :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style" v-bind="data.attrs" v-on="listeners">
    <div class="w-layout--flexbox" direction="column">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Layout'
}
</script>
