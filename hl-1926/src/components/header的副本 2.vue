<template>
    <header>
        <section class="div_content">
            <div class="ul-header border-1px">
                <div class="left-menu-list">
                    <router-link v-for="(menu,index) in hedMenu" :to="menu.url" class="top-menu m-l-10" :class="{'index-nav-frame-line':menu.menuList}">
                        {{ menu.name }}
                        <!-- <div class="index-nav-frame-line-center" v-show="menu.menuList">
                            <div class="index-nav-frame-line-li" v-for="(menuZi,index) in menu.menuList">
                                <router-link :to="menuZi.url">
                                    {{ menuZi.name }}
                                </router-link>
                            </div>
                        </div>  -->
                    </router-link>
                </div>
            </div>
        </section>
        <!-- <img src="/bg/1.jpg" alt=""> -->
        <!-- <div id="headBg" class="fixedbg"></div> -->
        <!-- <router-link to="/social" class="m-l-10 p-l-30 p-r-30">社交</router-link> -->
        <!-- <router-link to="/blog" class="m-l-10 p-l-30 p-r-30">博客</router-link> -->
    </header>
</template>
<style lang="scss" scoped>
    @import "../assets/scss/mixin";
    .div_content{
        // position: fixed;
        // top: 0;
        // left: 0;
        // right: 0;
        // height: 40px;
        // line-height: 40px;
        // z-index: 999999;
        // background: rgba(0,0,0,.8);
        width: 100%;
        min-height: 60px;
        position: fixed;
        background-color: rgba(255,255,255,1);
        z-index: 11002;
        top: 0;
        left: 0;
        border-bottom: 1px solid #e8e9e7;
        font-size: 14px;
    }
    .ul-header{
        // position: fixed;
        // top: 0;
        // left: 0;
        // right: 0;
        // height: 40px;
        // line-height: 40px;
        // z-index: 111;
        // margin: 0;
        // font-size: 0;
        // padding: 0 20px;
    }
    .left-menu-list a {
        list-style: none;
        display: inline-block;
        font-size: 14px;
        padding: 0 14px;
        margin: 0;
        color: #fff;
        cursor: pointer;
        font-family: Segoe UI,Segoe,Tahoma,Arial,Verdana,sans-serif;
        text-decoration: none;
    }
    .fixedbg {
        position: fixed;
        z-index: -2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        background-image: url(http://www.bing.com/th?id=OHR.SeaCliffBridge_ZH-CN5362667487_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp);
        background-size: cover;
        background-position: center center;
        height: 100%;
        width: 100%;
    }
    .div_content .ul-header .left-menu-list a.router-link-active li {
        color: #ccc;
        border-bottom: 1px solid #f4c2ec;
    }

    .top-menu{
        position: relative;
    }
    .header {
        // position: fixed;
        // top: 0;
        // left: 0;
        // right: 0;
        // display: flex;
        // @include px2rem(height, 68);
        // @include px2rem(line-height, 68);
        // background-color: #3e8ef7;
        // color: #ffffff;
        // text-align: center;
        // z-index: 9999;
        a{
            color: #fff;
            text-decoration: none;
            @include px2rem(font-size, 24);
             @include px2rem(min-width, 100);
        }
        a.router-link-active,
        a:hover{
            background-color: rgba(0,0,0,.1);
            color: #fff;
        }
    }
    .index-nav-frame-line-center {
        opacity: 0;
        height: 0;
        position: absolute;
        left: 0;
        // overflow: hidden;
        width: 100%;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        white-space:nowrap;
        background: #3e8ef7;
    }
    .index-nav-frame-line-li {
        width: 100%;
        text-align: center;
        background: #3e8ef7;
        // background: rgba(0,0,0,.1);
        color: #666666;
        white-space:nowrap;
        a{
            @include px2rem(font-size, 26);
        }
    }
    .index-nav-frame-line-li:hover{background: #3e8ef7;color: #fff;}
    .index-nav-frame-line-li:hover a{background: #3e8ef7;color: #fff;}
    .index-nav-frame-line-focus:focus{display: none;}
    .index-nav-frame-line:hover .index-nav-frame-line-center{height:auto;opacity: 1;}
</style>
<script>
import { hedMenu } from '@/util/menu'
export default {
    data () {
        return {
            searchValue:'',
            hedMenu: hedMenu||[]
        }
    },
    methods: {
        onValueChange () {
            const val = this.searchValue;
            //this.setSearchVal(val);
        },
        onfocus () {
            const TRANS_X = "translateX(15px)";
            const LEFT = "0";
            const placeholder = this.$refs.placeholder;
            if (!placeholder) return;
            placeholder.style.left = LEFT;
            placeholder.style.transform = TRANS_X;
        },
        onBlur () {
            const placeholder = this.$refs.placeholder;
            if (placeholder) placeholder.removeAttribute("style");
        },
        setBgFun () {
            let imgs =["bg/1.jpg", "bg/2.jpg", "bg/3.jpg", "bg/4.jpg", "bg/5.jpg"];    //（设定想要显示的图片）
            let i = 0;
            let head = document.getElementById("headBg");//获取DIV对象
                head.style.background = "url(bg/1.jpg)";   //设置图片的初始图片为该路径的图片
                function time(){
                    i++;   
                    i=i%3;         // 超过2则取余数，保证循环在0、1、2之间
                    head.style.background="url("+imgs[i]+")"; 
                    
                }
                setInterval(time,10000);//循环调用time1()函数，时间间隔为2000ms
                    //setInterval()函数，按照指定的周期（按毫秒计）来调用函数或表达式
        }
    },
    mounted () {
        //this.setBgFun()
    }
}
</script>
