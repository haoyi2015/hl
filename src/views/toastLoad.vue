<template>
    <section>
        
    </section>
</template>
<script>
// import Vue from 'vue';
// import { Toast } from '@/components/toastLod/index';
// console.log(Toast)
// Vue.use(Toast);

export default {
  data () {
    return {
    }
  },
  methods: {
    swFun (value) {
      console.log(value)
      this.$toast.bottom('要显示内容'); //在顶部显示
    }
  }
}
</script>