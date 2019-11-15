<template functional>
  <div class="w-overlay">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    opacity: {
      type: Number,
      default: 0.35
    }
  }
}
</script>
<style scoped>
    .w-overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.35;
    }
</style>
