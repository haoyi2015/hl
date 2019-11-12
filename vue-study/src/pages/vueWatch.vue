<template>
    <div class="code-content">
        <h1 class="h1-font">常用用法:</h1>
        <pre class=" language-javascript"><code class=" language-javascript">created(){
  this.getList()
},
watch: {
  inpVal(){
    this.getList()
  }
}</code></pre>
        <h1 class="h1-font">立即执行:</h1>
        <pre class=" language-javascript"><code class=" language-javascript">watch: {
  inpVal:{
    handler: 'getList',
      immediate: true
  }
}</code></pre>
        <h1 class="h1-font">深度监听:</h1>
                <pre class=" language-javascript"><code class=" language-javascript">watch:{
  inpValObj:{
    handler(newVal,oldVal){
      console.log(newVal)
      console.log(oldVal)
    },
    deep:true
  }
}</code></pre>
    </div>
</template>
<script>
export default {
    components:{
    }
}
</script>
<style lang="scss" scoped>
    
</style>