<template>
    <article>
        <tab-slider :tabData="data" :widths="wid">
            <template>
                <div class="conents" v-for="(k, index) in 3">
                    <div class="">
                        {{index}}
                    </div>
                </div>
            </template>
        </tab-slider>
    </article>
</template>
<script>
    import TabSlider from '@/componentss/tabSlider'
    export default{
        data(){
            return{
                wid:'',
                data:[
                    {
                        name:'足球',
                        code:1
                    },
                    {
                        name:'篮球',
                        code:2
                    },
                    {
                        name:'排球',
                        code:3
                    }
                ]
            }
        },
        components:{
            TabSlider
        }
    }
</script>
