<template>
  <li class="index-indexsection">
    <p class="index-indexsection-index">{{ index }}</p>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<style lang="less" scoped>
    .index-indexsection {
        padding: 0;
        margin: 0
    }
    .index-indexsection-index {
        margin: 0;
        padding: 10px;
        background-color: #fafafa
    }
    .index-indexsection-index + ul {
        padding: 0
    }
</style>

<script>
  export default {
    name: 'index-section',
    props: {
      index: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.$parent.sections.push(this);
    },
    beforeDestroy() {
      let index = this.$parent.sections.indexOf(this);
      if (index > -1) {
        this.$parent.sections.splice(index, 1);
      }
    }
  };
</script>