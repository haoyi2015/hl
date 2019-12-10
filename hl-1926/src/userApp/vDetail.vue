<template>
    <section class="user-detail">
         <header>
             <img src="../assets/511YJ-2.jpg" alt="">
         </header>
         <div class="content-warp">
            <div class="title p-l-30 p-r-30">
                中国音乐学院最受欢迎的老师成长史中国音乐学院最受欢迎的老师成长史师…
            </div>
            <div class="img-box">
                <p class="img-box-title m-t-24 p-l-30">上海音协钢琴考级</p>
                <div :style="width" class="sil">
                    <ul class="imgs-list m-l-30">
                        <li class="m-t-24" v-for="k in 6">
                            <img src="../assets/511YJ-2.jpg" alt="">
                            <div class="dec m-t-12">中国音乐学院最受欢迎的老师成长史老老师</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tuijian">
                <h1>为您推荐</h1>
                <div class="tj-list">
                    <a v-for="o in 6" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">[{{ o }}]-中国音乐学院最受欢迎的老师成长史老老师</h4>
                            <p class="weui-media-box__desc m-t-38">
                                <span>总量：223</span>&nbsp;&nbsp;<span>阅读：223</span><span style="float:right;margin-right:12px;">时间：2019-12-10</span>
                            </p>
                        </div>
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" src="../assets/img/exp-logo.png" alt="">
                        </div>
                    </a>
                </div>
            </div>
         </div>
    </section>
</template>
<script>
let wd = document.documentElement.clientWidth;
    wd = wd>750?750:wd;
export default {
    data() {
        return {
            width: `width:${wd}px;overflow: auto;`
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../assets/css/mixin";
    ::-webkit-input-placeholder { /* WebKit browsers */
        .px2rem(font-size,28);
        font-family:PingFangHK-Regular;
        font-weight:400;
        color:rgba(255,195,151,1);
    }
    .user-detail {
        background: #fff;
        header{
            .px2rem(height,414);
            overflow: hidden;
            img{
                width: 100%;
                .px2rem(height,414);
            }
        }
        .title{
            .px2rem(font-size,30);
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(74,74,74,1);
            .px2rem(line-height,40);
            .px2rem(margin-top,24);
        }
        p.img-box-title{
            .px2rem(font-size,40);
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(74,74,74,1);
            .px2rem(line-height,56);
        }
        .sil{
            border-bottom:10px rgba(246,246,246,1) solid;
            padding-bottom: 12px;
        }
        ul.imgs-list{
            .px2rem(width,(298*6.55));
            li{
                display: inline-block;
                .px2rem(width,298);
                .px2rem(margin-right,20);
            }
            img{
                .px2rem(width,298);
                .px2rem(height,168);
                .px2rem(border-radius,16);
            }
            .dec{
                .px2rem(font-size,26);
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(74,74,74,1);
                .px2rem(line-height,36);
            }
        }
        .tuijian{
            h1{
                .px2rem(font-size,40);
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(74,74,74,1);
                .px2rem(line-height,56);
                .px2rem(padding-top,40);
                .px2rem(padding-left,30);
                .px2rem(padding-bottom,24);
            }
            .weui-media-box__title{
                .px2rem(height,84);
                .px2rem(font-size,30);
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(74,74,74,1);
                .px2rem(line-height,42);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                white-space: normal;
                word-wrap: normal;
                word-wrap: normal;
                word-break: normal;
            }
            .weui-media-box__hd{
                .px2rem(width,160);
                .px2rem(height,160);
                margin-right: 0;
                img{
                    .px2rem(width,160);
                    .px2rem(height,160);
                    .px2rem(border-radius,12);
                }
            }
        }
    }
</style>