<template>
    <section class="blog-warp">
        <div class="blog-card" v-for="(item,index) in blogData" :key="index">
            <div class="img">
                <img class="overlay-scale" v-lazy="item.blogImg" alt="">
                <button class="p-l-6 p-r-6 p-t-6 p-b-6">阅读全文</button>
            </div>
            <div class="card-block">
                <p class="card-text type-link">
                    {{ item.blogType }}
                    <a href="">{{ item.blogName }}</a>
                    <a href="">{{ item.blogDay }}</a>
                    <a href="">
                        <span>{{ item.blogComment }}</span>
                        评论
                    </a>
                </p>
                <div class="card-title m-b-20">{{ item.blogTitle }}</div>
                <div class="card-text">{{ item.blogDec }}</div>
            </div>
            <div class="card-block">
                <div class="card-actions">
                    <a href="">喜欢：{{ item.blogLike }}</a>
                    <a href="">阅读：{{ item.blogRead }}</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    @import "../assets/scss/mixin";
    .blog-warp{
        @include px2rem(height, 660);
        .blog-card{
            width: 49%;
            margin-left: .5%;
            margin-right: .5%;
            display: inline-block;
            box-shadow: 0 1px 1px rgba(0,0,0,.05);
            background: #fff;
            .img{
                width: 100%;
                padding: 0;
                border-bottom: none;
                display: inline-block;
                position: relative;
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                border-radius: 3px;
                overflow: hidden;
                position: relative;
                img{
                    width: 100%;
                }
                button{
                    border: 1px solid #fff;
                    color: #fff;
                    border-radius: 3px;
                    @include px2rem(height, 62);
                    @include px2rem(width, 150);
                    @include px2rem(font-size, 24);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    @include px2rem(margin-left, -75);
                    @include px2rem(margin-top, -31);
                    background: none;
                    visibility: hidden;
                }
            }
            .overlay-scale{
                -webkit-transform: scale(1);
                transform: scale(1);
                -webkit-transition-timing-function: ease-out;
                transition-timing-function: ease-out;
                -webkit-transition-duration: .5s;
                transition-duration: .5s;
                -webkit-transition-property: opacity transform filter;
                transition-property: opacity transform filter
            }
            .img:hover{
                button{
                    visibility: visible;
                    cursor: pointer;
                }
                .overlay-scale{
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }
            }
            .card-block{
                position: relative;
                -webkit-box-flex: 1;
                -webkit-flex: 1 1 auto;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                padding: .3rem;
            }
            .type-link{
                a{
                    position: relative;
                    display: inline-block;
                    padding: 3px 8px;
                    color: #a3afb7;
                    text-decoration: none;
                }
                a:hover{
                     color: #ccd5db;
                     text-decoration: underline;
                }
                a+a:before {
                    content: "";
                    position: absolute;
                    top: 10px;
                    left: -2px;
                    width: 3px;
                    height: 3px;
                    background-color: #a3afb7;
                    border-radius: 50%;
                }
            }
            .card-title{
                font-family: Roboto,sans-serif;
                font-weight: 400;
                line-height: 1.2;
                color: #37474f;
                @include px2rem(font-size, 28);
            }
            .card-text{
                @include px2rem(font-size, 20);
            }
            .card-actions{
                a{
                    display: inline-block;
                    @include px2rem(margin-right, 20);
                    color: #a3afb7;
                    text-decoration: none;
                }
                a:hover{
                    color: #ccd5db;
                    text-decoration: underline;
                    font-weight: 600;
                }
            }
        }
    }
</style>
<script>
import $http from '../service/api.ts'
import lazy from '../components/lazyload'
import Vue from 'vue'
import VueLazyload from '../components/lazyload'
// 或者添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/favicon.ico',
  loading: '/images/loading-lazy.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
export default {
    data () {
        return {
            blogData: ''
        }
    },
    created () {
        $http.getBlogInfo({}).then(res => {
            console.log(res)
            this.blogData = res.list
        })
        .catch(error => {
            console.log(error   )
        })
    }
}
</script>
