<template>
    <section class="examples-warp">
        <!-- <div class="top-logo">
            <img src="@/assets/img/vippl-logo.png" alt="">
            <div class="logo-dec">版本 v1.0</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="openMini">mini弹窗</div>
            <div class="vippl-cell__ft">显示位置在屏幕中间</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="openBig">big全屏弹窗</div>
            <div class="vippl-cell__ft">显示位置在全屏中间</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="openToast">全局Toast提示</div>
            <div class="vippl-cell__ft">支持 [top,center,bottom]位置</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="openLoading">全局Loading提示</div>
            <div class="vippl-cell__ft">显示位置在全屏中间</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="openPopup">全局popup层</div>
            <div class="vippl-cell__ft">支持 [top,right,bottom,left]位置</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="showPicker0">多列选择器</div>
            <div class="vippl-cell__ft">显示位置在全屏底部</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="showPicker1">两级联级选择器</div>
            <div class="vippl-cell__ft">显示位置在全屏底部</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="showPicker4">省市区选择器</div>
            <div class="vippl-cell__ft">显示位置在全屏底部</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="showPicker2">时间(内置)--时分秒</div>
            <div class="vippl-cell__ft">显示位置在全屏底部</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="showPicker3">日期(内置)--年月日</div>
            <div class="vippl-cell__ft">显示位置在全屏底部</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="transverse">纵向跑马灯</div>
            <div class="vippl-cell__ft">显示位置在全屏底部</div>
        </div> -->
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/scrollTop">
                    锚点定位示例1
                </router-link>
            </div>
            <div class="vippl-cell__ft">导航吸顶，锚点定位</div>
        </div>
        <!-- <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/scrollTop-velocity">
                    锚点定位示例2
                </router-link>
            </div>
            <div class="vippl-cell__ft">导航吸顶，锚点定位</div>
        </div> -->
        <transition name="fade">
            <router-view ></router-view>
        </transition>
    </section>
</template>
<style lang="scss" scoped>
    .examples-warp{
        .top-logo{
            text-align: center;
            padding-top: .2rem;
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
        .vippl-cell {
            padding: 10px 15px;
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .vippl-cell__bd {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            font-size: .36rem;
            font-family:SFProDisplay-Regular;
            font-weight:600;
            color:#333;
            line-height:32px;
            a{
                color:#fff;
            }
        }
        .vippl-cell__ft {
            padding-right: 13px;
            position: relative;
            text-align: right;
            color:#fff;
            font-size: 0.3rem;
        }
        .vippl-cell__ft:after {
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
        .vippl-cells:after {
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
        .marquee-wrap {
            // width: 325px;
            // margin: 0 auto;
            margin: 20px;
        }
    }
</style>
