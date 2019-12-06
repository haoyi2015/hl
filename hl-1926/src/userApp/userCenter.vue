<template>
    <section class="user-center p-l-30 p-r-30">
        <header class="user-hed p-t-22">
            <div class="user-img">
                <img src="../assets/userApp/user_slices/user-icon.jpg" alt="">
            </div>
            <div class="user-info m-l-30" @click="user">
                <div class="title">不知道的</div>
                <div class="title-dec">一个不知道的故事会</div>
            </div>
            <div class="yao-right">邀请亲友券</div>
        </header>
        <div class="user-number m-t-40">
            <div class="nm-item">
                <p>295.99</p>
                <span>数量级</span>
            </div>
            <div class="nm-item">
                <p>195.99</p>
                <span>小数额</span>
            </div>
            <div class="nm-item">
                <p>395.99</p>
                <span>1大数据</span>
            </div>
        </div>
        <div class="title-h1 m-l-10 m-t-50">我的快捷入口</div>
        <div class="mu-list">
            <div class="mu-item m-l-15" @click="setMusic">
                <p><img src="../assets/userApp/user_slices/ic_yinyueshi@2x.png" alt=""></p>
                <span>领音乐石</span>
            </div>
            <div class="mu-item m-l-92 m-r-92" @click="taskUrl">
                <p><img src="../assets/userApp/user_slices/ic_renwuzhongxin@2x.png" alt=""></p>
                <span>任务中心</span>
            </div>
            <div class="mu-item m-r-92" @click="shopStation">
                <p><img src="../assets/userApp/user_slices/ic_duihuanzhan@2x.png" alt=""></p>
                <span>兑换站</span>
            </div>
            <div class="mu-item" @click="shopStation">
                <p><img src="../assets/userApp/user_slices/ic_mingxi@2x.png" alt=""></p>
                <span>音乐石明细</span>
            </div>
        </div>
        <div class="title-h1 m-l-10 m-t-80">家教互通</div>
        <div class="mu-list">
            <div class="mu-item m-l-15">
                <p><img src="../assets/userApp/user_slices/ic_guwen@2x.png" alt=""></p>
                <span>我的顾问</span>
            </div>
            <div class="mu-item m-l-80 m-r-80">
                <p><img src="../assets/userApp/user_slices/ic_guanzhu@2x.png" alt=""></p>
                <span>关注的老师</span>
            </div>
            <div class="mu-item m-r-90">
                <p><img src="../assets/userApp/user_slices/ic_kaoji @2x.png" alt=""></p>
                <span>考级情况</span>
            </div>
            <div class="mu-item">
                <p><img src="../assets/userApp/user_slices/ic_pianhao@2x.png" alt=""></p>
                <span>学习偏好</span>
            </div>
        </div>
        <div class="title-h1 m-l-10 m-t-80">发现惊喜</div>
        <div class="img-list">
            <img src="../assets/userApp/user_slices/pic_1@2x.png" alt="">
            <img class="m-l-30" src="../assets/userApp/user_slices/pic_2@2x.png" alt="">
        </div>
        <div class="title-h1 m-l-10 m-t-80">系统工具</div>
        <div class="gj-list m-t-30">
            <ul>
                <li>
                    <div class="gj-icon"><img src="../assets/userApp/user_slices/icn_1.png" alt=""></div>
                    <div class="gj-name">网络检测</div>
                    <div class="gj-dec"><img src="../assets/userApp/user_slices/icn_next.png" alt=""></div>
                </li>
                <li>
                    <div class="gj-icon"><img src="../assets/userApp/user_slices/icn_2.png" alt=""></div>
                    <div class="gj-name">设备检测</div>
                    <div class="gj-dec"><img src="../assets/userApp/user_slices/icn_next.png" alt=""></div>
                </li>
                <li>
                    <div class="gj-icon"><img src="../assets/userApp/user_slices/icn_3.png" alt=""></div>
                    <div class="gj-name">镜头检测</div>
                    <div class="gj-dec"><img src="../assets/userApp/user_slices/icn_next.png" alt=""></div>
                </li>
                <li>
                    <div class="gj-icon"><img src="../assets/userApp/user_slices/icn_4.png" alt=""></div>
                    <div class="gj-name">帮助中心</div>
                    <div class="gj-dec"><img src="../assets/userApp/user_slices/icn_next.png" alt=""></div>
                </li>
                <li>
                    <div class="gj-icon"><img src="../assets/userApp/user_slices/icn_5.png" alt=""></div>
                    <div class="gj-name">投诉建议</div>
                    <div class="gj-dec"><img src="../assets/userApp/user_slices/icn_next.png" alt=""></div>
                </li>
            </ul>
        </div>
        <footer class="footer-warp">
            <div class="cont">
                <a href="">
                    <img src="../assets/userApp/user_slices/tab_class_schedule2@2x.png" alt="">
                    <span>首页</span>
                </a>
                <a href="">
                    <img src="../assets/userApp/user_slices/tab_personal_center@2x.png" alt="">
                    <span>约课</span>
                </a>
                <a href="">
                    <img src="../assets/userApp/user_slices/tab_table1@2x.png" alt="">
                    <span>陪练单</span>
                </a>
                <a href="" class="active">
                    <img src="../assets/userApp/user_slices/tab_personal_center@2x(1).png" alt="">
                    <span>我的</span>
                </a>
            </div>
        </footer>
    </section>
</template>
<style lang="less" scoped>
    @font-face{
        font-family: 'Bungee';
        src : url('../assets/font/Bungee-Regular.otf');
    }
    @import "../assets/css/mixin";
    ::-webkit-input-placeholder { /* WebKit browsers */
        .px2rem(font-size,28);
        font-family:PingFangHK-Regular;
        font-weight:400;
        color:rgba(255,195,151,1);
    }
    .user-center{
        max-width: 540px;
        margin: 0 auto;
        background: #fff;
    }
    .user-hed{
        .px2rem(height,190);
        .flex;
        .flex-align;
        position: relative;
        .user-img{
           .px2rem(width,128);
           .px2rem(height,128);
           img{
               .px2rem(width,128);
               .px2rem(height,128);
               border-radius: 100%;
           }
        }
        .user-info{
            .title{
                .px2rem(font-size,36);
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(74,74,74,1);
            }
            .title-dec{
                color: rgba(0, 0, 0, 0.3);
                font-size: 14px;
                line-height: 1.4;
                padding-top: 4px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
        }
        .yao-right{
            .px2rem(width,210);
            .px2rem(height,58);
            .px2rem(line-height,58);
            background:rgba(246,246,246,1);
            .px2rem(border-radius,30);
            position: absolute;
            right: 0;
            .px2rem(top,66);
            .px2rem(font-size,24);
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(74,74,74,1);
            text-align: center;
        }
    }
    .user-number{
        .px2rem(height,164);
        background:rgba(249,249,249,1);
        .px2rem(border-radius,26);
        .flex;
        .flex-align;
        .nm-item{
            flex: 1;
            text-align: center;
            p{
                .px2rem(font-size,48);
                font-family:Bungee-Regular;
                font-weight:600;
                color:rgba(74,74,74,1);
            }
            span{
                .px2rem(font-size,24);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(155,155,155,1);
            }
        }
    }
    .title-h1{
        .px2rem(font-size,36);
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(74,74,74,1);
    }
    .mu-list{
        .flex;
        .flex-align;
        .px2rem(margin-top,24);
        .mu-item{
            text-align: center;
        }
        p{
            img{
                .px2rem(width,64);
                .px2rem(height,64);
            }
        }
        span{
            .px2rem(font-size,24);
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(155,155,155,1);
        }
    }
    .img-list{
        .flex;
        .flex-align;
        img{
            .px2rem(margin-top,22);
            .px2rem(height,128);
            .px2rem(width,330);
            .px2rem(border-radius,20);
        }
    }
    .gj-list{
        background:rgba(249,249,249,1);
        .px2rem(border-radius,26);
        .px2rem(margin-bottom,138);
        li{
            .flex;
            .flex-align;
            .px2rem(padding-top,34);
            .px2rem(padding-bottom,34);
            position: relative;
            border-bottom: 3px solid #fff;
            .gj-icon{
                .px2rem(width,52);
                .px2rem(height,52);
                .px2rem(margin-left,30);
                .px2rem(margin-right,30);
            }
            .gj-name{
                .px2rem(font-size,32);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(74,74,74,1);
                flex: 1;
            }
            .gj-dec{
                img{
                    .px2rem(width,44);
                    .px2rem(height,44);  
                }
                .px2rem(margin-right,34);
                .px2rem(font-size,28);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(155,155,155,1);
            }
        }
        li:after{
            content: '';
            box-shadow:0px -1px 0px 0px rgba(233,233,233,1);
        }
    }
    .footer-warp{
        .px2rem(height,108);
        background:rgba(255,255,255,1);
        box-shadow:0px -1px 0px 0px rgba(0,0,0,0.1);
        position: fixed;
        bottom: 0;
        left: 50%;
        width: 100%;
        max-width: 540px;
        transform:translateX(-50%);
        .cont{
            .flex;
            .flex-align;
            .px2rem(margin-top,10);
        }
        a{
            flex: 1;
            text-align: center;
            img{
                .px2rem(height,52);
                .px2rem(width,52);
            }
            span{
                .px2rem(font-size,20);
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(155,155,155,1);
                display: block;
            }
        }
        .active{
            color:rgba(253,94,2,1);
        }
    }
</style>
<script>
export default {
    methods: {
        setMusic () {
            this.$router.push('/user-music')
        },
        taskUrl () {
            this.$router.push('/task-center')
        },
        shopStation () {
            this.$router.push('/shop-station')
        },
        user () {
            this.$router.push('/user-info')
        }
    }
}
</script>