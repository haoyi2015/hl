<template>
    <article>
        <m-header></m-header>
        <tab></tab>
    </article>
</template>

<script>
import MHeader from '@/componentss/vueMusic/header'
import Tab from '@/componentss/vueMusic/tab'
import Scroll from '@/componentss/vueMusic/scroll'
import Slider from '@/componentss/vueMusic/slider'
export default {
    data(){
        return{
            playList: []
        }
    },
    components: {
      Slider,
      Scroll,
      MHeader,
      Tab
    }
}
</script>

<style lang="css">
</style>
