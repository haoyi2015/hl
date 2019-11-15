<template>
    <article>
        <m-header></m-header>
        <tab></tab>
    </article>
</template>

<script>
import MHeader from '@/components/vueMusic/header'
import Tab from '@/components/vueMusic/tab'
import Scroll from '@/components/vueMusic/scroll'
import Slider from '@/components/vueMusic/slider'
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
