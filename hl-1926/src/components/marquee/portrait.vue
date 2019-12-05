<template>
    <div class="marquee">
        <div class="marquee_title">
            <span>纵向跑马灯</span>
        </div>
        <div class="marquee_box">
            <div class="marquee_list" :class="{marquee_top:animate}">
                <!-- <li v-for="(item, index) in marqueeList" :key="index">
                    <span>{{item.name}}</span>
                </li> -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .marquee {
        width: 100%;
        height: 50px;
        align-items: center;
        color: #3A3A3A;
        background-color: #b3effe;
        display: flex;
        box-sizing: border-box;
    }

    .marquee_title {
        padding: 0 20px;
        height: 30px;
        font-size: 14px;
        border-right: 1px solid #d8d8d8;
        align-items: center;
    }

    .marquee_box {
        display: block;
        position: relative;
        width: 60%;
        height: 30px;
        overflow: hidden;
    }

    .marquee_list {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }

    .marquee_top {
        transition: all 0.5s;
        margin-top: -30px
    }

    .marquee_list li {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding-left: 20px;
    }

    .marquee_list li span {
        padding: 0 2px;
    }

    .red {
        color: #FF0101;
    }
</style>
<script>
export default {
    props:['marqueeData','marqueeCall'],
    data () {
        return {
            animate: false,
            marqueeList: this.marqueeData
        }
    },
    created: function () {
        console.log(this.marqueeList)
        setInterval (this.showMarquee, 2000)
    },
    methods: {
        showMarquee: function () {
            this.animate = true;
            setTimeout (() => {
                this.marqueeList.push (this.marqueeList[ 0 ]);
                this.marqueeList.shift ();
                //this.$emit('marqueeCall',this.marqueeList);
                this.animate = false;
            }, 500);

        }
    }
}
</script>
