<template>
    <section class="app-main">
        <div class="header-w-bg"></div>
        <headerWarp />
        <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
        </transition>
        <footer class="footer-warp">
            <div class="content">
                <a target="_blank" :href="url.url" v-for="(url,index) in footer" :key="index">{{ url.name }}</a>
            </div>
        </footer>
    </section>
</template>
<style lang="scss">
    .header-w-bg {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-color: #000;
        position: fixed!important;
        // background-image: url(https://yssimage.oss-cn-hangzhou.aliyuncs.com/bg9.jpg);
        background-image: url('/4.jpg');
        background-size: 100% 100%;
        z-index: -1;
    }
    .footer-warp{
        padding: 35px 0;
        color: #fff;
        background: #2d3237;
        .content{
            width: 1200px;
            padding: 0 10px;
            margin: 0 auto;
            a{
                color: #fff;
                font-size: 13px;
                display: inline-block;
                margin-right: 12px;
            }
            a:hover{
                color: #ff5721;
            }
        }
    }
</style>
<script>
import headerWarp from "@/components/header.vue";
export default {
    name: 'AppMain',
    data() {
        return{
            footer: [
                {
                    name: 'html5tricks',
                    url: 'https://www.html5tricks.com/demo/css3-hover-buttons/index.html'
                },
                {
                    name: 'Web前端导航(xinaliu)',
                    url: 'http://www.xinaliu.com/#blogItem'
                },
                {
                    name: 'web前端技能站(qdskill)',
                    url: 'https://www.qdskill.com/nav'
                },
                {
                    name: '前端导航（haorooms）',
                    url: 'https://www.haorooms.com/nav'
                },
                {
                    name: 'fly63前端网',
                    url: 'http://www.fly63.com/nav'
                }
            ]
        }
    },
    components:{
        headerWarp
    },
    computed: {
        key() {
        return this.$route.path
        }
    }
}
</script>