<template>
      <article class="articles">
          <slider :value-fun="Val" :min="0" :max="100"></slider>
      </article>
</template>

<script>
import slider from '@/components/sliderBox'
export default {
    data(){
        return{
        }
    },
    components:{
        slider
    },
    methods:{
        Val(){

        }
    }
}
</script>

<style lang="scss">
    .articles{
        margin: 0 20px;
    }
</style>
