<template functional>
  <div :class="['w-actionsheet-item',{'is-disabled':disabled}]"
    :data-value="value"
    v-on="">
    <div class="w-actionsheet-item-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  componentName: 'ActionsheetItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
