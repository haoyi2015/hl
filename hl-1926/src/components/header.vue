<template>
    <header>
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
        <!-- <router-link to="/social" class="m-l-10 p-l-30 p-r-30">社交</router-link> -->
        <!-- <router-link to="/blog" class="m-l-10 p-l-30 p-r-30">博客</router-link> -->
    </header>
</template>
<style lang="scss" scoped>
    @import "../assets/scss/mixin";
    .top-menu{
        position: relative;
    }
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        @include px2rem(height, 100);
        @include px2rem(line-height, 100);
        background-color: #3e8ef7;
        color: #ffffff;
        text-align: center;
        z-index: 9999;
        a{
            color: #fff;
            text-decoration: none;
            @include px2rem(font-size, 30);
             @include px2rem(min-width, 200);
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
        }
    }
}
</script>
