<template>
    <section class="views">
        <!-- framework7 只是头部固定-->
        <div class="framework7 page-group" v-if="open=='hed'">
            <div class="navbar">
                <div class="navbar-inner">navbar</div>
            </div>
            <div class="page">
                内容区
                <div class="searchbar-backdrop">searchbar-backdrop</div>
                <div class="page-content">
                    <ul class="list">
                        <li class="item-content" v-for="(item,index) in 20" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- sui-demo 头部，底部固定 中间-->
        <div class="sui-page-group" v-if="open=='hed_bom'">
            <div class="sui-page sui-page-current" id="page-index">
                <header class="sui-bar sui-bar-nav">
                    <h1 class="sui-title">header</h1>
                </header>
                <footer class="sui-bar sui-bar-standard sui-bar-footer">
                    footer
                </footer>
                <div class="sui-content sui-native-scroll ">
                    <div class="sui-content-inner">
                        <ul class="sui-list-block">
                            <li class="sui-item-content" v-for="(item,index) in 20" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
    //针对body设置样式
    .overflowHide {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .head-top{
        height: 45px;
        line-height: 45px;
        border-bottom: 2px solid #333;
        .head-cont{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 101;
        }
    }
    .part_main{
        height: 760px;
        background: blue;
    }
    .views {
        // position: relative;
        // height: 100%;
        // z-index: 5000;
        // //overflow: hidden;
        // -webkit-box-sizing: border-box;
        // box-sizing: border-box;
    }
    .navbar {
        height: 44px;
        font-size: 17px;
        background: #f7f7f8;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 500;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    .navbar:after {
        content: '';
        position: absolute;
        background-color: #c4c4c4;
        display: block;
        z-index: 15;
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .navbar-inner {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 8px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .page{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        background: #efeff4;
    }
    .searchbar-backdrop {
        background: rgba(0,0,0,.4);
    }
    .page-content {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 100%;
        position: relative;
        z-index: 1;
    }
    .navbar~:not(.no-navbar) .page-content {
        padding-top: 44px;
    }

    .list .item-content {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .list .item-content {
        min-height: 44px;
        padding-left: 15px;
    }

    .page-group {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #efeff4;
        overflow: hidden;
    }

    //sui-demo
    body {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-family: "Helvetica Neue", Helvetica, sans-serif;
        font-size: 0.85rem;
        line-height: 1.5;
        color: #3d4145;
        background: #eeeeee;
        overflow: hidden;
    }
    .sui-page,.sui-page-group {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #efeff4;
        overflow: hidden;
    }
    .sui-page-current{
        overflow: hidden;
    }
    .sui-bar {
        position: absolute;
        right: 0;
        left: 0;
        z-index: 10;
        height: 2.2rem;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        background-color: #f7f7f8;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        font-size: .8rem;
        text-align: center;
    }
    .sui-bar-nav {
        top: 0;
    }
    .sui-bar-footer {
        bottom: 0;
    }
    .sui-title {
        position: absolute;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0 -0.5rem;
        font-size: 0.85rem;
        font-weight: 500;
        line-height: 2.2rem;
        color: #3d4145;
        text-align: center;
        white-space: nowrap;
    }
    .sui-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .sui-content-inner{
        box-sizing: border-box;
        border-top: 1px solid transparent;
        margin-top: -1px;
        padding-bottom: 0.5rem;
    }
    .sui-bar-footer ~ .sui-content {
        bottom: 2.2rem;
    }
    .sui-bar-nav ~ .sui-content {
        top: 2.2rem;
    }

    //ul li
    .sui-list-block .sui-item-content {
        box-sizing: border-box;
        padding-left: 0.75rem;
        min-height: 1.2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        border-bottom: 1px solid #666;
    }
    .modal{
        div.cont{
            position: absolute;
            top: 20px;
            left: 50%;
            width: 280px;
            height: 380px;
            background: #3d4145;
            // overflow-y: auto;
            margin-left: -140px;
            z-index: 999;
            color: #fff;
            border: 2px solid blueviolet;
        }
        div.dec{
            // height: 500px;
        }
        display: none;
    }
    .mack{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        z-index: 99;
    }
    .modal-open {
        display: block;
        &, body {
            overflow: hidden;
            height: 100%;
        }
    }
</style>
<script>     
export default {
    data () {
        return {
            open: this.$route.query.route
        }
    },
    methods: {
    },
    mounted () {
    }
}
</script>
