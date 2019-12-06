<template>
  <section>
    <test :copyCont="msg" copyBnt="复制内容" @copyCall="copyCall"></test>
  </section>
</template>
<style>
  .copy-bnt{
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    cursor: pointer;
  }
</style>
<script>
import test from '@/componentss/clipboard/clipboard.vue'
export default {
  data () {
    return {
      msg : Math.random(1,5)
    }
  },
  components: {
    test
  },
  methods: {
    copyCall (falg) {
      console.log(falg+' copyCall')
    }
  }
}
</script>