<template>
    <section class="social-warp cont-pad-top content-warp-box">
        <!-- blogData -->
        <div class="flex-warp" v-for="(item,index) in socialData" :key="index">
            <!-- <div class="bg-warp" :style="{background:'url('+item.userBgimg+')'}"></div> -->
            <img :src="item.userBgimg" alt="">
            <div class="vertical-align">
                <div class="vertical-align-middle">
                    <a href="">
                        <img class="overlay-scale" :src="item.userIcon" alt="">
                    </a>
                </div>
                <div class="user-name m-t-10">{{item.userName}}</div>
                <div class="user-dec m-t-10">{{item.userDec}}</div>
                <div class="user-bnt m-t-12">
                    <button class="btn-primary p-l-16 p-r-16 p-t-10 p-b-10">关注</button>
                </div>
            </div>
            <div class="card-footer">
                <div v-for="(zitem,im) in item.userRelevant">
                    <span>{{zitem.relevantName}}</span>
                    <p>{{zitem.relevantVal}}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    @import "@/assets/scss/mixin";
    .social-warp{
        // display: flex;
        // background: #f1f4f5;
        padding-bottom: 12px;
        .flex-warp{
            // flex: 0 0 33.333%;
            width: 408px;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 12px;
            display: inline-block;
            @include px2rem(height, 660);
            background: #fff;
            position: relative;
            .overlay-scale {
                -webkit-transform: scale(1);
                transform: scale(1);
                -webkit-transition-timing-function: ease-out;
                transition-timing-function: ease-out;
                -webkit-transition-duration: .3s;
                transition-duration: .3s;
            }

            .overlay-scale:hover  {
                -webkit-transform: scale(1.1);
                transform: scale(1.1)
            }
            img{
                width: 100%;
                height: calc(100% - 100px);
            }
            .vertical-align{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                padding: 20px;
                color: #fff;
            }
            .vertical-align-middle{
                max-width: 100%;
                text-align: center;
                a{
                    padding: 3px;
                    border: 1px solid #e4eaec;
                    width: 100px;
                    height: 100px;
                    white-space: nowrap;
                    vertical-align: bottom;
                    border-radius: 1000px;
                    display: inline-block;
                    background: #fff;
                    img{
                        width: 100%;
                        height: auto;
                        border: 0;
                        border-radius: 1000px;
                    }
                }
            }
            .user-name{
                color: #fff;
                font-weight: bold;
                @include px2rem(font-size, 36);
                text-align: center;
            }
            .user-dec{
                color: #bdbdbd;
                @include px2rem(font-size, 26);
                text-align: center;
            }
            .user-bnt{
                text-align: center;
                .btn-primary {
                    color: #fff;
                    background-color: #3e8ef7;
                    border-color: #3e8ef7;
                    box-shadow: none;
                    border-radius: 3px;
                    @include px2rem(font-size, 22);
                    cursor: pointer;
                }
            }
            .card-footer{
                display: flex;
                div{
                    flex: 1;
                    @include px2rem(margin-top, 26);
                    text-align: center;
                    span{
                        color: #76838f;
                        @include px2rem(font-size, 24);
                    }
                    p{
                        color: #37474f;
                        @include px2rem(font-size, 36);
                        margin: 0;
                        @include px2rem(margin-top, 6);
                    }
                }
            }
        }
        .bg-warp{
            height: calc(100% - 100px);
            background-size: cover;
        }
    }
</style>

<script>
import $http from '@/service/api.ts'
export default {
    data () {
        return {
            socialData: ''
        }
    },
    created () {
        $http.getSocialInfo({}).then(res => {
            console.log(res)
            this.socialData = res.list
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>
