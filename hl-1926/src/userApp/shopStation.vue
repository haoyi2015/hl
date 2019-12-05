<template>
    <section class="user-music">
        <div class="title-h1 m-l-28 m-t-30">商品兑换站</div>
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
    .title-h1{
        .px2rem(font-size,36);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(74,74,74,1);
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