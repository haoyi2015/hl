<template>
    <header class="header-warp">
        <div class="header-fixed">
            <div class="header-inner">
                <a href="javascript:void(0)" class="header-logo" id="logo">
                    <img src="../assets/logo.jpg" alt="">
                </a>
                <nav class="header-nav" id="nav">
                    <ul>
                        <li v-for="(menu,index) in hedMenu" :key="index">
                            <a :href="menu.url" class="top-menu m-l-10" :class="{'active':menu.url==path}">
                            {{ menu.name }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- <a href="/User/QQLogin" class="blog-user-menu">
                    
                </a> -->
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @import "../assets/scss/mixin";
    .header-warp {
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
    .header-fixed {
        width: 1280px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
    .header-inner {
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
    }
    .header-logo {
        font-family: BarbaraHand;
        font-size: 40px;
        color: #444647;
        text-align: center;
        position: absolute;
        left: 0;
        img{
            width: 52px;
            height: 52px;
            margin-top: 6px;
        }
    }
    .header-nav {
        display: block;
        position: absolute;
        right: 15%;
        li {
            display: block;
            float: left;
            margin: 10px 5px;
            position: relative;
        }
        li:hover a:before {
            height: 2px;
            position: absolute;
            bottom: -11px;
            width: 100%;
            left: 0;
            background-color: #ff5721;
            content: "";
            transition: all .6s;
            z-index: -1;
        }
        li:hover a{
            color: #ff5721;
        }
        li a {
            display: block;
            line-height: 32px;
            padding: 4px 28px;
            color: #212220;
            font-weight: 400;
            font-size: 15px;
            text-shadow: 0 1px 0 rgba(255,255,255,.2);
            -webkit-transition: all .2s;
            transition: all .2s;
        }
        li a:before {
            width: 0;
            height: 2px;
            position: absolute;
            bottom: -11px;
            left: 50%;
            background-color: #ff5721;
            content: "";
            transition: all .6s;
            z-index: -1;
        }

        li a.active {
            color: #ff5721;
        }
        li a.active:before {
            width: 100%;
            left: 0;
        }
    }
    .blog-user-menu{
        position: absolute;
        right: 0;
        line-height: 60px;
        font-size: 24px;
    }
</style>
<script>
import { hedMenu } from '@/util/menu'
export default {
    data () {
        return {
            searchValue:'',
            hedMenu: hedMenu||[],
            path: this.$route.path
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
        console.log(this.$route.path)
        //this.setBgFun()
    }
}
</script>
