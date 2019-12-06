<template>
    <article class="num-warp">
        <div class="flexs" v-for="nums in beatData">
            <digital-beat :beatObject="nums"></digital-beat>
            <br />
            <br />
            <!-- <number-grow :value="nums.num"></number-grow> -->
        </div>
    </article>
</template>
<script>
    import DigitalBeat from '@/componentss/digitalBeat'
    import NumberGrow from '@/componentss/NumberGrow'
    export default{
        data(){
            return{
                beatData:[
                    {
                        time: 1500,//总时间
                        num: 100,//要显示的数字
                        regulator: 50//调速器
                    },
                    {
                        time: 1500,//总时间
                        num: 2832,//要显示的数字
                        regulator: 50//调速器
                    },{
                        time: 1500,//总时间
                        num: 5000,//要显示的数字
                        regulator: 50//调速器
                    }
                ]
            }
        },
        components:{
            DigitalBeat,
            NumberGrow
        }
    }
</script>
<style lang="scss">
    .num-warp{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        background: #d96457;
        height: 96%;
        div.flexs{
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
        }
    }
</style>
