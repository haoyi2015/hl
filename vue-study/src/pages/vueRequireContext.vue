<template>
    <div>
        <titleCom />
        <bannerCom />
        <cellCom />
        <h1 class="h1-font">导入多个组件,原始写法:</h1>
        <pre class=" language-javascript"><code class=" language-javascript">import titleCom from <span class="token keyword">'@/components/home/titleCom'</span>
import bannerCom from <span class="token keyword">'@/components/home/bannerCom'</span>
import cellCom from <span class="token keyword">'@/components/home/cellCom'</span>
components:{titleCom,bannerCom,cellCom}</code></pre>
        <h1 class="h1-font">导入多个组件,简便写法:</h1>
        <pre class=" language-javascript"><code class=" language-javascript">const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
components:modules</code></pre>
        <h1 class="h1-font">导入多个组件,API 方法:</h1>
                <pre class=" language-javascript"><code class=" language-javascript">实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用
require.context(directory,useSubdirectories,regExp)
<span class="token keyword">接收三个参数:</span>
directory：说明需要检索的目录
useSubdirectories：是否检索子目录
<span class="token keyword">regExp: 匹配文件的正则表达式,一般是文件名</span></code></pre>
    </div>
</template>
<script>
// 原始(复杂)引入方式
// import titleCom from '@/components/requireContext/titleCom'
// import bannerCom from '@/components/requireContext/bannerCom'
// import cellCom from '@/components/requireContext/cellCom'

// 简化方式
const path = require('path')
const files = require.context('@/components/requireContext', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
export default {
    components:modules
}
</script>
<style lang="scss" scoped>
    
</style>