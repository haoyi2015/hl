<template>
    <section class="shop-detail">
        <div class="shop-img">
            <img src="../assets/userApp/user_slices/user-icon.jpg" alt="">
        </div>
        <div class="shop-jg m-l-30">
            <span>800<font>奖励值</font></span>
        </div>
        <div class="shop-title m-t-20 m-l-30 m-r-30">
            瑞士军刀双肩包的瑞士军刀双肩包的瑞士军刀双肩包的瑞士军刀双肩包的瑞整个标题限制字数六十四个字
        </div>
        <div class="hr-border m-t-40"></div>
        <div class="title-h1 m-l-30 m-t-40">详细描述</div>
        <div class="shop-decs m-t-12 m-l-30  m-r-30 p-b-50">
            今日高拉特入籍中国以255万的点击量冲上热搜榜第一的位置。据沪媒消息，高拉特此次以年薪超过千万欧元回归恒大，并不仅仅是为了助缺兵少将的恒大下半程冲超今日，高拉特入籍中国#以255万的点击量冲上热搜榜
            <br>
            <br>
            <img src="../assets/userApp/user_slices/user-icon.jpg" alt="">
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
    .shop-detail{
        background: #fff;
    }
    .shop-img{
        .px2rem(height,560);
        background:rgba(249,249,249,1);
        overflow: hidden;
    }
    .shop-jg{
        .px2rem(font-size,48);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(253,94,2,1);
        font{
            .px2rem(font-size,24);
            font-family:PingFangSC-Regular;
            font-weight:400;
        }
    }
    .shop-title{
        .px2rem(font-size,30);
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(74,74,74,1);
    }
    .hr-border{
        .px2rem(height,20);
        background:rgba(249,249,249,1);
    }
    .title-h1{
        .px2rem(font-size,36);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(74,74,74,1);
    }
    .shop-decs{
        .px2rem(font-size,28);
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(74,74,74,1);
    }
</style>
