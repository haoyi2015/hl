<template>
    <section>
        <div class="cont-top">
            非滚动区域
        </div>
        <!--导航位置-->
        <header class="hed-top" :class="{'fixed':fixedFlag}">
            <a :class="{'hed-active':steps==1}" @click="anchors(1)" href="javascript:;">1</a>
            <a :class="{'hed-active':steps==2}" href="javascript:;" @click="anchors(2)">2</a>
            <a :class="{'hed-active':steps==3}" href="javascript:;" @click="anchors(3)">3</a>
            <a :class="{'hed-active':steps==4}" href="javascript:;" @click="anchors(4)">4</a>
            <a :class="{'hed-active':steps==5}" href="javascript:;" @click="anchors(5)">5</a>
        </header>
        <!--内容区域-->
        <div class="cont-warp" v-for="(cont,index) in 5" :class="'cont_'+(index+1)">
            {{ index+1 }}
        </div>
        <div class="footer">footer</div>
    </section>
</template>
<style lang="scss" scoped>
    @import "@/assets/scss/mixin";
    // @include px2rem(height, 660);
    .cont-top{
        height: 320px;
        background: greenyellow;
        text-align: center;
        color: #fff;
        @include px2rem(font-size, 50);
    }
    .hed-top{
        @include px2rem(height, 100);
        @include px2rem(line-height, 100);
        border-bottom: 1px solid #999;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        a{
            flex: 1;
            text-align: center;
            @include px2rem(font-size, 30);
        }
    }
    .fixed{
        position: fixed;
        left: 50%;
        top: 0;
        width: 100%;
        transform:translateX(-50%);
        z-index: 9999;
        // max-width: 750px;
        margin: 0 auto;
        background: #fff;
        // -webkit-transition: all 0.5s;
        // -moz-transition: all 0.5s;
        // transition: all 0.5s;
        // animation: fade-in;/*动画名称*/  
        // animation-duration: .5s;/*动画持续时间*/  
        // -webkit-animation:fade-in .5s;/*针对webkit内核*/  
    }
    .hed-active{
        background: magenta;
        color: #fff;
    }
    .cont-warp{
        text-align: center;
        @include px2rem(font-size, 60);
        color: #fff;
        padding-top: 100px;
    }
    .cont_1{
        @include px2rem(height, 720);
        background: goldenrod;
    }
    .cont_2{
        @include px2rem(height, 520);
        background: hotpink;
    }
    .cont_3{
        @include px2rem(height, 320);
        background:indigo;
    }
    .cont_4{
        @include px2rem(height, 920);
        background:mediumaquamarine;
    }
    .cont_5{
        @include px2rem(height, 1020);
        background:blue;
    }
    .footer{
        height: 200px;
        background: #666;
    }
</style>
<script>
export default {
    data () {
        return {
            fixedFlag: false,
            steps:1,
            scrolltop : 0 ,//滑轮 距顶部的距离
            floorOne:0,
            floorTwo:0,
            floorThree:0,
            floorFour:0,
            floorFive:0,
            floorSix:0
        }
    },
    methods: {
        anchors(val){
            switch (val){
                case 1 :
                this.pulleyRoll(this.floorOne,this.scrolltop);
                break;
                case 2 :
                this.pulleyRoll(this.floorTwo,this.scrolltop);
                break;
                case 3 :
                this.pulleyRoll(this.floorThree,this.scrolltop);
                break;
                case 4 :
                this.pulleyRoll(this.floorFour,this.scrolltop);
                break;
                case 5 :
                this.pulleyRoll(this.floorFive,this.scrolltop);
                break;
                case 6 :
                this.pulleyRoll(this.floorSix,this.scrolltop);
                break;
            }
        },
        /**
         * 滑轮 向上滚动和向下滚动的函数
         * top是楼层距窗体顶部的距离,distance当前滚动条与窗体顶部的距离
         * */
        pulleyRoll(top,distance){/*向下滚动*/
            let hedHeight = (document.getElementsByClassName("hed-top")[0].clientHeight)
            console.log(hedHeight)
            const _this = this
            if(distance < top){
                let small_interval = (top - distance - hedHeight)/60;
                let i = 0;
                let timer = setInterval(()=>{
                    i++;
                    distance += small_interval
                    // console.log(distance+= small_interval);
                    document.documentElement.scrollTop = distance;
                    document.body.scrollTop = distance;
                    if(i == 60){
                        console.log(distance)
                        clearInterval(timer);
                    }
                },10)
            }
            /*向上滚动*/
            else if(distance > top){
                let small_interval = (distance - top + hedHeight)/60;
                let i = 0;
                let timer = setInterval(()=>{
                    i ++;
                    //console.log(distance -= small_interval);
                    distance -= small_interval
                    document.documentElement.scrollTop = distance;
                    document.body.scrollTop = distance
                    if(i == 60){
                        clearInterval(timer);
                    }
                },10);
            }
        },
        /**
         * 拿到所有 楼层距窗体顶部的距离
         * */
        getFloorDistance(){
            const _this = this
            //拿到每个 楼层距窗体顶部的距离
            _this.$nextTick(function () {
                setTimeout(()=>{
                    let floorOne = document.getElementsByClassName("cont_1")[0].offsetTop;
                    let floorTwo = document.getElementsByClassName('cont_2')[0].offsetTop;
                    let floorThree = document.getElementsByClassName('cont_3')[0].offsetTop;
                    let floorFour = document.getElementsByClassName('cont_4')[0].offsetTop;
                    let floorFive = document.getElementsByClassName('cont_5')[0].offsetTop;
                    _this.floorOne = floorOne;
                    _this.floorTwo = floorTwo;
                    _this.floorThree = floorThree;
                    _this.floorFour = floorFour;
                    _this.floorFive = floorFive;
                },2000)
            })
        },
        /**
         * 滑轮滚动事件 返回滑轮距顶部的距离
         * */
        getPulleyTopDistance(){
            setTimeout(()=>{
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            },500)
            let that = this,
                topHeight = document.getElementsByClassName("cont-top")[0].clientHeight||0,
                hedHeight = document.getElementsByClassName("hed-top")[0].clientHeight||0;
            window.onscroll = function(){
                that.scrolltop = document.documentElement.scrollTop||document.body.scrollTop;
                // 是否出现置顶吸附导航
                //console.log(that.scrolltop,topHeight,hedHeight)
                if(that.scrolltop >= topHeight){
                    that.fixedFlag = true
                }else{
                    that.fixedFlag = false
                }
            }
        }
    },
    mounted() {
        //定位初始化
        this.$nextTick(function () {
            this.steps = 1
            this.getFloorDistance();
            this.getPulleyTopDistance();
        })
    },
    watch:{
        //监听 滑轮滚动的值的变化 来实现自动锚点
        scrolltop(val){
            val += 200;
            if(val > this.floorOne && val <= this.floorTwo){
                this.steps = 1;
            } else if(val > this.floorTwo && val <= this.floorThree){
                this.steps = 2;
            }else if(val > this.floorThree && val <= this.floorFour){
                this.steps = 3;
            }else if(val > this.floorFour && val <= this.floorFive){
                this.steps = 4;
            }else if(val > this.floorFive && (this.floorOne+this.floorTwo+this.floorThree+this.floorFour)){
                this.steps = 5;
            }
        },
        steps(res){
            console.log(res)
        }
    }
}
</script>
