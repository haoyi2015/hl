<template>
    <section class="user-info">
        <ul class="m-l-24 m-r-24">
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>头像</span>
                </div>
                <div class="right"><img src="../assets/userApp/user_slices/user-icon.jpg" alt=""></div>
            </li>
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>昵称</span>
                </div>
                <div class="right">
                    <span>性别</span>
                </div>
            </li>
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>头像</span>
                </div>
                <div class="right">
                    <span>女</span>
                </div>
            </li>
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>生日</span>
                </div>
                <div class="right">
                    <span>请选择</span>
                </div>
            </li>
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>常住地-国家地区</span>
                </div>
                <div class="right">
                    <span>中国</span>
                </div>
            </li>
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>常住地-城市</span>
                </div>
                <div class="right">
                    <span>上海市 上海市 宝山区</span>
                </div>
            </li>
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>收件和发票信息</span>
                </div>
                <div class="right">
                    <span>上海市 上海市 宝山区</span>
                </div>
            </li>
            <li class="p-t-34 p-b-34">
                <div class="left">
                    <span>邮箱</span>
                </div>
                <div class="right">
                    <span>上海市 上海市 宝山区</span>
                </div>
            </li>
        </ul>
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
    .user-info {
        li{
            .flex;
            .flex-align;
            border-bottom: 1px solid rgba(233,233,233,.8);
            .left{
                .px2rem(font-size,30);
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(74,74,74,1);
                flex: 1;
                span{
                    .px2rem(margin-left,30);
                }
            }
            .right{
                img{
                    border-radius: 100%;
                    .px2rem(width,72);
                    .px2rem(height,72);
                    .px2rem(margin-right,30);
                }
                span{
                    .px2rem(margin-right,30);
                    .px2rem(font-size,28);
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(74,74,74,1);
                }
            }
        }
    }
</style>