<template>
    <section class="demo-warp">
        <div class="top-logo">
            <img src="@/assets/img/exp-logo.png" alt="">
            <div class="logo-dec">版本 v2.6.5</div>
        </div>
        <div class="exp-cell exp-cells">
            <div class="exp-cell__bd">分享给朋友</div>
            <div class="exp-cell__ft"></div>
        </div>
        <div class="exp-cell exp-cells">
            <div class="exp-cell__bd">微信公众号</div>
            <div class="exp-cell__ft">我的心有个你</div>
        </div>
        <div class="exp-cell exp-cells">
            <div class="exp-cell__bd">分享给朋友</div>
            <div class="exp-cell__ft">我的心有个你</div>
        </div>
    </section>
</template>
<style lang="less" scoped>
    .demo-warp{
        max-width: 750px;
        margin: 0 auto;
    }
    .top-logo{
        text-align: center;
        padding-top: 1rem;
        img{
            width: 2.026rem;
            height: 2.026rem;
        }
        .logo-dec{
            font-family:SFProDisplay-Regular;
            font-weight:400;
            color:rgba(155,155,155,1);
            line-height:32px;
            font-size: 0.373rem;
            padding-top: .14rem;
        }
    }
    .exp-cell {
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .exp-cell__bd {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        font-size: .42rem;
        font-family:SFProDisplay-Regular;
        font-weight:400;
        color:rgba(74,74,74,1);
        line-height:32px;
    }
    .exp-cell__ft {
        padding-right: 13px;
        position: relative;
        text-align: right;
        color: #808080;
        font-size: 0.373rem;
    }
    .exp-cell__ft:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
    }
    .exp-cells:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e5e5e5;
        color: #e5e5e5;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        z-index: 2;
    }
</style>
