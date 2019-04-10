<template>
    <header>
        <router-link to="/social" class="m-l-10 p-l-30 p-r-30">社交</router-link>
        <router-link to="/blog" class="m-l-10 p-l-30 p-r-30">博客</router-link>
    </header>
</template>
<style lang="scss" scoped>
    @import "../assets/scss/mixin";
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
        z-index: 9;
        a{
            color: #fff;
            text-decoration: none;
            @include px2rem(font-size, 30);
        }
        a.router-link-active,
        a:hover{
            background-color: rgba(0,0,0,.1);
            color: #fff;
        }
    }
</style>
<script>
export default {
    data () {
        return {
            searchValue:''
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
