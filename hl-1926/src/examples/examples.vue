<template>
    <section class="examples-warp">
        <div class="top-logo">
            <!-- <img src="@/assets/img/vippl-logo.png" alt=""> -->
            <div class="logo-dec">版本 v1.0</div>
        </div>
        <div class="had-page">JS弹窗操作</div>
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
        <div class="had-page">列选择器</div>
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
        <div class="had-page">跑马灯相关</div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd" @click="transverse">纵向跑马灯</div>
            <div class="vippl-cell__ft">显示位置在全屏底部</div>
        </div>
        <div class="had-page">图片操作</div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/broadcast">
                    图片预览
                </router-link>
            </div>
            <div class="vippl-cell__ft">图片列表，大图预览，懒加载</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/img-lary">
                    图片列表
                </router-link>
            </div>
            <div class="vippl-cell__ft">带懒加载和点击放大查看</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/drag-list">
                    图片拖动&缩放
                </router-link>
            </div>
            <div class="vippl-cell__ft">图片位置拖动，大小缩放</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/swiper-demo">
                    轮播图
                </router-link>
            </div>
            <div class="vippl-cell__ft">怎么使用可参考此实例</div>
        </div>
        <div class="had-page">表单选择器</div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/checkbox">
                    选项框
                </router-link>
            </div>
            <div class="vippl-cell__ft">可配置多选，单选</div>
        </div>
        <div class="had-page">导航</div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/tab-slider">
                    tab选项框
                </router-link>
            </div>
            <div class="vippl-cell__ft">可点击可滑动tab切换</div>
        </div>
        <div class="had-page">城市选择器</div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/index-list">
                    字母选择器
                </router-link>
            </div>
            <div class="vippl-cell__ft">A-Z 城市选择</div>
        </div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/mint-index-list">
                    字母选择器
                </router-link>
            </div>
            <div class="vippl-cell__ft">A-Z 城市选择（旧版本基于mint-ui）</div>
        </div>
        <div class="had-page">布局相关</div>
        <div class="vippl-cell vippl-cells">
            <div class="vippl-cell__bd">
                <router-link to="/hed-bottom">
                    布局盒子
                </router-link>
            </div>
            <div class="vippl-cell__ft">（头部和底部固定中间滚动）可参考此实例</div>
        </div>
        <!--modal相关-->
        <section>
            <!--mini弹窗-->
            <mini-modal
                type="tell"
                v-model="showFalg"
                title="领取奖励需关注“VIP陪练”公众号（微信号：VIPPNL）"
                content="您尚未关注，快前往关注和绑定账号吧"
                copyMsg=""
                @cancel="clickCancel()"
                @danger="clickDanger()"
                @confirm="clickConfirm()"
                @tellTrue="clickTellCall()"
                @tellCancel="clickTellCancel()"
                dangerText="我知道了"
                cancelText="取消"
                dangerBnt="danger"
                cancelBnt="cancel">
            </mini-modal>
            <!--big弹窗-->
            <big-modal
                v-model="showBig"
                title="我是标题"
                content=""
                @cancel="clickBigCancel()"
                @danger="clickBigDanger()"
                @confirm="clickBigConfirm()"
                dangerText="我知道啦" cancelText="就是取消" dangerBnt="danger" cancelBnt="cancel">
                    <div class="">
                        此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。此页面包含了您（推荐人）参加推荐有奖活动和转发海报活动产生的奖励结果和被推荐人的进度信息。
                    </div>
            </big-modal>
        </section>
        <!--popup相关-->
        <popup :open.sync="openFlag" :full="true" title="自定义title" direction="right">
            <div style="padding:0 0.2rem;background:green;color:#fff;">
                <div>1100</div>
                <div style="height:400px; overflow: auto;">
                新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。
            学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。
                </div>
            <div>播放了有关生态</div>
            </div>
        </popup>
        <!--awesome-picker相关-->
        <section>
            <awesome-picker
            ref="picker0"
            :textTitle="picker0.textTitle"
            :data="picker0.data"
            :anchor="picker0.anchor"
            @confirm="handlePicker0Confirm">
            </awesome-picker>

            <awesome-picker
            ref="picker1"
            :textTitle="picker1.textTitle"
            :data="picker1.data"
            :anchor="picker1.anchor"
            @confirm="handlePicker1Confirm">
            </awesome-picker>

            <awesome-picker
            ref="picker2"
            :textTitle="picker2.textTitle"
            :type="picker2.type"
            :anchor="picker2.anchor"
            @confirm="handlePicker2Confirm">
            </awesome-picker>

            <awesome-picker
            ref="picker3"
            :textTitle="picker3.textTitle"
            :type="picker3.type"
            :anchor="picker3.anchor"
            @confirm="handlePicker3Confirm">
            </awesome-picker>

            <awesome-picker
            ref="picker4"
            :textTitle="picker4.textTitle"
            :data="picker4.data"
            :anchor="picker4.anchor"
            @confirm="handlePicker4Confirm">
            </awesome-picker>
        </section>

        <!--marquee相关 跑马灯-->
        <section>
            <marquee-portrait v-if="false" :marqueeData="marqueeList" @marqueeCall="marqueeFun">
                <ul>
                    <li v-for="(item,index) in marqueeList" :key="index">{{item.name}}</li>
                </ul>
            </marquee-portrait>

            <marquee-transverse v-if="false" :lists="lists">
                <!-- <ul>
                    <li v-for="(item,index) in marqueeList" :key="index">{{item.name}}</li>
                </ul> -->
            </marquee-transverse>

            <div class="marquee-wrap">
                <marquee-box content="" speed="35" class="two" showtwo="false">
                    <!-- 自行对 marquee-wrap盒子进行布局设置 -->
                    <div style="display: inline-block;margin-right: 20px;" v-for="(item,index) in marCont" :key="index">
                        {{ item }}
                    </div> 
                    <!-- :content="marCont" -->
                </marquee-box>
            </div>
        </section>
    </section>
</template>
<style lang="less" scoped>
    .examples-warp{
        // max-width: 750px;
        margin: 0 auto;
        .had-page{
            background-color: #ededed;
            font-size: .5rem;
            padding: .5rem .35rem;
            display: block;
            line-height: 1;
            overflow: hidden;
            font-weight: bold;
        }
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
                padding: .14rem 0;
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
            color:rgba(74,74,74,1);
            line-height:32px;
            a{
                color:rgba(74,74,74,1);
            }
        }
        .vippl-cell__ft {
            padding-right: 13px;
            position: relative;
            text-align: right;
            color: #808080;
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
<script>
import { PickerOne, PickerFour, Marquee, MarqueeCss } from './config'

import MiniModal from '@/components/modal/miniModal'
import BigModal from '@/components/modal/bigModal'
import Popup from '@/components/popup'
import AwesomePicker from '@/components/vuePicker'

import MarqueePortrait from '@/components/marquee/portrait'
import MarqueeTransverse from '@/components/marquee/transverse'

import MarqueeBox from '@/components/marquee/marquee'

export default {
    components: {
        MiniModal,
        BigModal,
        Popup,
        AwesomePicker,
        MarqueePortrait,
        MarqueeTransverse,
        MarqueeBox
    },
    data () {
        return {
            showFalg: false,
            showBig: false,
            openFlag: false,
            picker0: {
                anchor: [],
                textTitle: '多列选择器',
                data: [PickerOne.data1, PickerOne.data2]
            },
            picker1: {
                anchor: [],
                textTitle: '联级选择器',
                data: [
                {
                    name: 'A',
                    id: 1,
                    children: [
                    { name: 'A-a',id: 1 },
                    { name: 'A-b',id: 2 },
                    { name: 'A-c',id: 3 }
                    ]
                },
                {
                    name: 'B',
                    id: 2,
                    children: [
                    { name: 'B-a',id: 1 },
                    { name: 'B-b',id: 2 }
                    ]
                },
                {
                    name: 'C',
                    id: 3,
                    children: [
                    { name: 'C-a',id: 1 },
                    { name: 'C-b',id: 2 },
                    { name: 'C-c',id: 3 },
                    { name: 'C-d',id: 4 }
                    ]
                },
                {
                    name: 'D',
                    id: 4,
                    children: [
                    { name: 'D-a',id: 1 }
                    ]
                }
                ]
            },
            picker2: {
                anchor: [],
                textTitle: '时间选择器(内置)',
                type: 'time'
            },
            picker3: {
                anchor: [],
                textTitle: '日期选择器(内置)',
                type: 'date'
            },
            picker4: {
                anchor: [],
                textTitle: '区域选择器',
                data: PickerFour.data
            },
            marqueeList: Marquee.data,
            lists: Marquee.list,
            marCont: MarqueeCss.data//MarqueeCss.data.toString()//["不*鱼不可思议地中了赠课1节~","不*鱼以神奇的姿势获得赠课1节~","L**n以神奇的姿势获得一个17.45元红包~","f*** 不可思议地中了赠课1节~","不*鱼以神奇的姿势获得一个1元红包~","不*鱼坚持不懈许愿，获得了一个1元红包~","不*鱼画了张好看的符，抽到了一个1元红包~","不*鱼一不小心抽到了一个1元红包~","不*鱼不可思议地中了一个1元红包~","不*鱼坚持不懈许愿，获得了一个1元红包~"]
        }
    },
    methods: {
        openMini() {
            this.showFalg = true;
        },
        openBig() {
            this.showBig = true;
        },
        clickCancel(){
            console.log("点击了取消");
        },
        clickDanger(type) {
            console.log(type+'这里是danger回调');
        },
        clickBigCancel() {
            console.log('点击了取消')
        },
        clickBigDanger(type) {
            console.log(type+'这里是danger回调')
        },
        clickTellCall(type){
            console.log(type+'这里是tell---true回调')
        },
        clickTellCancel(type){
            console.log(type+'这里是tell----cancel回调')
        },
        openToast() {
            this.$toast({
                message: '数据请求失败<div>可插入html</div>',
                align: '',// 设置类型 [top,center,bottom]
                type: 'icon',
                iconImg: '',
                iconFontImg: 'icon-ic_safe_default',
                duration: 1000 //消失时间
                //toastStyle: `background:red; color:#fff;`
            })
        },
        openLoading() {
            const _this = this
            _this.$loading.open({
                message: '数据加载中...',
                magIcon: '' //完整图片路径 [static/images]
                //loadStyle: `background:red;color:#fff;` //设置loading样式 默认不需要传
            })
            //关闭loading
            setTimeout(function(){
                _this.$loading.close();
            },1500)
        },
        openPopup () {
            this.openFlag = true
        },
        showPicker0 () {
            this.$refs.picker0.show()
        },
        handlePicker0Confirm (v) {
            this.picker0.anchor = v
            this.value = v ? JSON.stringify(v) : null
        },
        showPicker1 () {
            this.$refs.picker1.show()
        },
        handlePicker1Confirm (v) {
            this.picker1.anchor = v
            this.value = v ? JSON.stringify(v) : null
        },
        showPicker2 () {
            this.$refs.picker2.show()
        },
        handlePicker2Confirm (v) {
            this.picker2.anchor = v
            this.value = v ? JSON.stringify(v) : null
        },
        showPicker3 () {
            this.$refs.picker3.show()
        },
        handlePicker3Confirm (v) {
            this.picker3.anchor = v
            this.value = v ? JSON.stringify(v) : null
        },
        showPicker4 () {
            this.$refs.picker4.show()
        },
        handlePicker4Confirm (v) {

            //默认赋值
            //this.cityIndex(城市数组对象),省_id,市_id,区_id)
            this.picker4.anchor = v
            this.value = v ? JSON.stringify(v) : null
            console.log(this.value)
        },
        transverse () {

        },
        portrait () {

        },
        marqueeFun (v) {
            console.log(v)
            this.marqueeList = v
        }
    }
}
</script>
