<template>
    <section class="user-music">
        <header class="hed-warp">
            <img src="../assets/userApp/user_slices/user-icon.jpg" alt="">
            <button>
                签到领音乐石
            </button>
        </header>
        <div class="title-h1 m-l-10 m-t-50">我的音乐石</div>
        <div class="tui-list m-l-30 m-r-30">
            <ul>
                <li class="p-t-38 p-b-38">
                    <div class="tui-left">
                        <p>累计上满200分钟</p>
                        <span>成长值<font>+100</font> 积分<font>+100</font></span>
                    </div>
                    <div class="tui-right">
                        <p>100 <font>/ 200</font></p>
                        <span>完成进度</span>
                    </div>
                </li>
                <li class="p-t-38 p-b-38">
                    <div class="tui-left">
                        <p>累计上满500分钟</p>
                        <span>成长值<font>+100</font> 积分<font>+100</font></span>
                    </div>
                    <div class="tui-right">
                        <p>90 <font>/ 100</font></p>
                        <span>完成进度</span>
                    </div>
                </li>
                <li class="p-t-38 p-b-38">
                    <div class="tui-left">
                        <p>上传电子乐谱</p>
                        <span>成长值<font>+100</font> 积分<font>+100</font></span>
                    </div>
                    <div class="tui-right">
                        <button class="bnt">去完善</button>
                    </div>
                </li>
                <li class="p-t-38 p-b-38">
                    <div class="tui-left">
                        <p>评价老师</p>
                        <span>成长值<font>+100</font> 积分<font>+100</font></span>
                    </div>
                    <div class="tui-right">
                        <button class="bnt">去上课</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="title-h1 m-l-28 m-t-80">兑换商品</div>
        <div class="shop-list p-b-50">
            <ul>
                <li class="m-l-28 m-r-26">
                    <div class="imgs">
                        <img src="../assets/userApp/shop/user-icon.jpg" alt="">
                    </div>
                    <div class="title-name">
                        瑞士军刀双肩包 15寸瑞士军刀双肩包 15寸
                    </div>
                    <div class="imgs-dec">
                        <span><i>2000</i>音乐石</span><span class="r" @click="goUrl">去领取</span>
                    </div>
                </li>
                <li>
                    <div class="imgs">
                        <img src="../assets/userApp/shop/user-icon.jpg" alt="">
                    </div>
                    <div class="title-name">
                        瑞士军刀双肩包 15寸瑞士军刀双肩包 15寸
                    </div>
                    <div class="imgs-dec">
                        <span><i>2000</i>音乐石</span><span class="r" @click="goUrl">去领取</span>
                    </div>
                </li>
                <li class="m-l-28 m-r-26">
                    <div class="imgs">
                        <img src="../assets/userApp/shop/user-icon.jpg" alt="">
                    </div>
                    <div class="title-name">
                        瑞士军刀双肩包 15寸瑞士军刀双肩包 15寸
                    </div>
                    <div class="imgs-dec">
                        <span><i>2000</i>音乐石</span><span class="r" @click="goUrl">去领取</span>
                    </div>
                </li>
                <li>
                    <div class="imgs">
                        <img src="../assets/userApp/shop/user-icon.jpg" alt="">
                    </div>
                    <div class="title-name">
                        瑞士军刀双肩包 15寸瑞士军刀双肩包 15寸
                    </div>
                    <div class="imgs-dec">
                        <span><i>2000</i>音乐石</span><span class="r" @click="goUrl">去领取</span>
                    </div>
                </li>
                <li class="m-l-28 m-r-26">
                    <div class="imgs">
                        <img src="../assets/userApp/shop/user-icon.jpg" alt="">
                    </div>
                    <div class="title-name">
                        瑞士军刀双肩包 15寸瑞士军刀双肩包 15寸
                    </div>
                    <div class="imgs-dec">
                        <span><i>2000</i>音乐石</span><span class="r" @click="goUrl">去领取</span>
                    </div>
                </li>
                <li>
                    <div class="imgs">
                        <img src="../assets/userApp/shop/user-icon.jpg" alt="">
                    </div>
                    <div class="title-name">
                        瑞士军刀双肩包 15寸瑞士军刀双肩包 15寸
                    </div>
                    <div class="imgs-dec">
                        <span><i>2000</i>音乐石</span><span class="r" @click="goUrl">去领取</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="less" scoped>
    @import "../assets/css/mixin";
    ::-webkit-input-placeholder { /* WebKit browsers */
        .px2rem(font-size,28);
        font-family:PingFangHK-Regular;
        font-weight:400;
        color:rgba(255,195,151,1);
    }
    .hed-warp{
        .px2rem(height,540);
        background:linear-gradient(133deg,rgba(253,94,2,1) 0%,rgba(255,57,57,1) 100%);
        position: relative;
        text-align: center;
        button{
            .px2rem(height,68);
            .px2rem(width,216);
            background:rgba(255,255,255,1);
            .px2rem(border-radius,34);
            .px2rem(font-size,28);
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(253,94,2,1);
            position: absolute;
            .px2rem(bottom,74);
            left: 50%;
            transform:translateX(-50%);
        }
        img{
            .px2rem(height,188);
            .px2rem(width,188);
            border-radius: 100%;
            .px2rem(margin-top,88);
            box-shadow:0px 0px 24px 2px rgba(255,222,163,0.6);
        }
    }
    .title-h1{
        .px2rem(font-size,36);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(74,74,74,1);
    }
    .tui-list{
        li{
            border-bottom: rgba(233,233,233,.7) 1px solid;
            clear: both;
            overflow: hidden;
        }
        .tui-left{
            float: left;
            p{
                .px2rem(font-size,30);
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(74,74,74,1);
            }
            span{
                .px2rem(font-size,24);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(155,155,155,1);
                font{
                    color: #FD5E02;
                }
            }
        }
        .tui-right{
            float: right;
            p{
                .px2rem(font-size,32);
                font-family:SFProDisplay-Bold;
                font-weight:bold;
                color:rgba(74,74,74,1);
                font{
                    .px2rem(font-size,22);
                    color: #9B9B9B;
                }
            }
            span{
                .px2rem(font-size,24);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(155,155,155,1);
                font{
                    color: #FD5E02;
                }
            }
            .bnt{
                .px2rem(width,140);
                .px2rem(height,60);
                background:rgba(253,94,2,1);
                box-shadow:0px 4px 12px 0px rgba(253,2,2,0.38);
                .px2rem(border-radius,30);
                .px2rem(font-size,26);
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                .px2rem(margin-top,10);
            }
        }
    }
    .shop-list{
        li{
            .px2rem(width,332);
            .px2rem(border-radius,12);
            .px2rem(margin-top,36);
            display: inline-block;
            .imgs{
                .px2rem(height,248);
                background:rgba(249,249,249,1);
                text-align: center;
            }
            .title-name{
                .px2rem(font-size,30);
                font-family:SFProDisplay-Medium;
                font-weight:500;
                color:rgba(74,74,74,1);
                width: auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                word-wrap: break-word;
                word-break: break-all;
            }
            .imgs-dec{
                span{
                    display: inline-block;
                    .px2rem(font-size,24);
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:#9B9B9B;
                    i{
                        color:rgba(253,94,2,1);
                    }
                }
                .r{
                    float: right;
                    .px2rem(width,112);
                    .px2rem(height,36);
                    border-radius:6px;
                    color: #FD5E02;
                    border:1px solid rgba(253,94,2,1);
                    text-align: center;
                }
            }
        }
    }
</style>
<script>
export default {
    methods: {
        goUrl () {
            this.$router.push('/shop-detail')
        }
    }
}
</script>