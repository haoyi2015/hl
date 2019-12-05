<template>
    <section class="js-warp">
        <header class="weui-flex page flex">
            <router-link to="/string-cont" class="weui-flex__item">
                <div class="placeholder">JS - 字符串截取方法</div>
            </router-link>
            <router-link to="/string-cont" class="weui-flex__item">
                <div class="placeholder">JS - 字符串截取方法</div>
            </router-link>
            <router-link to="/string-cont" class="weui-flex__item">
                <div class="placeholder">JS - 字符串截取方法</div>
            </router-link>
        </header>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </section>
</template>
<style lang="scss" scoped>
    @import url('/css/style.css');
    .js-warp{
        .weui-flex__item:hover{
            color: #3e8ef7;
        }
    }
</style>
