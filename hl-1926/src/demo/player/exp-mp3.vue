<template>
    <div class="audio-list-w">
        <div class="main-info" ref="audioList">
            <!-- <span @click="playAll">播放全部</span> -->
            <div class="info-list">
                <!--显示播放音频层-->
                <div class="dq-play" :class="mini ? '':'dq-play-bg'" v-if="aplayerParm.poster">
                    <div class="aplayer-pic" ref="leftPic" :class="mini ?'mini-'+miniPosition:''">
                        <div class="aplayer-button aplayer-play">
                            <button @click="topPlay" type="button" class="aplayer-icon iconfont" :class="playing?'icon-zanting':'icon-bofang'"></button>
                        </div>
                    </div>
                    <div class="aplayer-info" v-if="!mini">
                        <div class="aplayer-music">
                            <span>音频name</span>
                        </div>
                        <div class="aplayer-lrc">
                            歌词名称
                        </div>
                        <div class="aplayer-controller">
                            <div class="aplayer-bar-wrap">
                                <!-- <div class="aplayer-bar">
                                    <div class="aplayer-loaded" :style="leftStyle">

                                    </div>
                                    <div class="aplayer-played">
                                        <span class="aplayer-thumb progress" @mousedown.stop="mousedownHandler" @mouseover.stop="mouseoverHandler"
                                             @mousemove.stop="mousemoveHandler" @mouseup.stop="mouseupHandler" @mouseout.stop="mouseoutHandler" style="background-color: rgb(255, 255, 255); border-color: rgb(44, 39, 39);">
                                            <span class="aplayer-loading-icon" style="background-color: rgb(44, 39, 39);">

                                            </span>
                                        </span>
                                    </div>
                                </div> -->
                                <div class="progress-wrapper" ref="progressLeft" :style="wrapStyle">
                                    <div class="progress" ref="progress" @mousedown.stop="mousedownHandler" @mouseover.stop="mouseoverHandler"
                                         @mousemove.stop="mousemoveHandler" @mouseup.stop="mouseupHandler" @mouseout.stop="mouseoutHandler" :style="pBarStyle">
                                        <div class="left" :style="leftStyle">
                                            <div class="ball" :style="ballStyle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="aplayer-time">
                                <div class="aplayer-time-inner">
                                    {{ currentTime | formatSecond }} / {{ currentTimeMaxTime | formatSecond }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <audio ref="audio" src="" @ended="onEnded" @play="onPlay" @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata"></audio>
                </div>
                <!--当个音频播放-->
                <div class="">
                    <audio ref="audio" src="" @ended="onEnded" @play="onPlay" @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata"></audio>
                </div>
                <ul class="list">
                    <li class="audio-item" :class="playing && cur_music == index ? 'active':''" v-for="(item,index) in list" >
                        <!--是否是整个点击-->
                        <div class="i-play" :data-index="index">
                            <a href="javascript:;" v-if="aplayerParm.bntPosition" class="payBnt" @click="clickPlay($event,index,item)"><i class="iconfont" :class="playing && cur_music ==index ?'icon-zanting':'icon-bofang'"></i></a>
                            <div class="des">
                                <p>{{item.Title}}</p>
                                <span>{{item.CreateTime.split(' ')[0].replace(/\//g,'-')}}    时长{{item.TimeLong}}    </span>
                                总时长：{{ item.TimeLong | formatSecond }}
                            </div>
                            <a href="javascript:;" v-if="!aplayerParm.bntPosition" class="payBnt" @click="clickPlay($event,index,item)"><i class="iconfont" :class="playing && cur_music ==index ?'icon-zanting':'icon-bofang'"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    div,p,ul,li{margin: 0;padding: 0}
    .audio-list-w{
        .main-info{
            .info-list{
                .dq-play{
                    width: 100%;
                    color: #fff;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    position: relative;
                    .aplayer-pic{
                        height: 90px;
                        width: 90px;
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        position: relative;
                        background:#0db5d8;
                        background-size: cover;
                        -webkit-transition: all 0.3s ease;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        .aplayer-button {
                            position: absolute;
                            border-radius: 50%;
                            -webkit-transition: all 0.1s ease;
                            transition: all 0.1s ease;
                        }
                        .aplayer-play {
                            width: 36px;
                            height: 36px;
                            bottom: 50%;
                            right: 50%;
                            margin: 0 -18px -18px 0;
                            text-align: center;
                        }
                        .aplayer-icon {
                            border: none;
                            background: none;
                            outline: none;
                            cursor: pointer;
                            vertical-align: middle;
                            padding: 0;
                            font-size: 32px;
                            margin: 0;
                            display: inline;
                            color: #fff;
                            font-weight: 700;
                        }
                        .aplayer-icon-play {
                            position: absolute;
                            top: 3px;
                            left: 4px;
                            height: 20px;
                            width: 20px;
                        }
                    }
                    .aplayer-info {
                        -webkit-box-flex: 1;
                        -ms-flex-positive: 1;
                        flex-grow: 1;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        text-align: start;
                        padding: 14px 7px 0 10px;
                        height: 86px;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        overflow: hidden;
                        .aplayer-lrc {
                            position: relative;
                            height: 30px;
                            text-align: center;
                            overflow: hidden;
                            margin-bottom: 7px;
                        }
                        .aplayer-controller {
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            position: relative;
                        }
                        .aplayer-bar-wrap {
                            margin: 0 0 0 5px;
                            padding: 4px 0;
                            cursor: pointer;
                            -webkit-box-flex: 1;
                            -ms-flex: 1;
                            flex: 1;
                            .aplayer-bar {
                                position: relative;
                                height: 2px;
                                width: 100%;
                                background: #cdcdcd;
                            }
                            .aplayer-loaded {
                                position: absolute;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                background: #aaa;
                                height: 2px;
                                -webkit-transition: all 0.5s ease;
                                transition: all 0.5s ease;
                                will-change: width;
                            }
                            .aplayer-played {
                                position: absolute;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                height: 2px;
                                -webkit-transition: background-color .3s;
                                transition: background-color .3s;
                                will-change: width;
                                .aplayer-thumb {
                                    position: absolute;
                                    top: 0;
                                    right: 5px;
                                    margin-top: -5px;
                                    margin-right: -10px;
                                    width: 10px;
                                    height: 10px;
                                    border: 1px solid;
                                    -webkit-transform: scale(0.8);
                                    transform: scale(0.8);
                                    will-change: transform;
                                    -webkit-transition: background-color .3s, border-color .3s, -webkit-transform 300ms;
                                    transition: background-color .3s, border-color .3s, -webkit-transform 300ms;
                                    transition: transform 300ms, background-color .3s, border-color .3s;
                                    transition: transform 300ms, background-color .3s, border-color .3s, -webkit-transform 300ms;
                                    border-radius: 50%;
                                    background: #fff;
                                    cursor: pointer;
                                    overflow: hidden;
                                }
                            }
                        }
                        .aplayer-time {
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            position: relative;
                            height: 17px;
                            color: #fff;
                            font-size: 11px;
                            padding-left: 7px;
                            margin-left: 8px;
                        }
                    }
                    .mini-left-bottom{
                        position: fixed;
                        bottom: 12px;
                        left:0;
                    }
                    .mini-left-top{
                        position: fixed;
                        top: 0;
                        left: 0;
                    }
                    .mini-right-top{
                        position: fixed;
                        top: 0;
                        right: 0;
                    }
                    .mini-right-bottom{
                        position: fixed;
                        bottom: 12px;
                        right: 0;
                    }
                }
                .dq-play-bg{
                    background: linear-gradient(135deg,#41b883,#4a9cee);
                    min-height: 60px;
                    height: 90px;
                }
                li{
                    padding: 10px 14px;
                    border-bottom: 1px solid #F2F2F2;
                    justify-content: space-between;
                    align-items: center;
                    line-height: 20px;
                    list-style: none;
                    .i-play {
                      border: none;
                      background: none;
                      display: flex;
                      flex: 1 1 auto;
                      align-items: center;
                      width: 100%;
                      .payBnt{
                          background: none;
                          color: #fff;
                          margin-right: 12px;
                          cursor: pointer;
                      }
                      i {
                        font-size: 32px;
                        color: #cacaca;
                        text-align: left;
                        width: 30px;
                      }
                      .iconfont{
                          font-weight: 700;
                      }
                      .des {
                        font-size: 16px;
                        color: #202020;
                        flex: 1 1 auto;
                        text-align: left;
                        p{
                            margin: 0 0 4px 0;
                        }
                        span {
                          font-size: 12px;
                          color: #9C9C9C;
                        }
                      }
                    }
                }
                li:last-child {
                  border-bottom: none;
                }
                li.active{
                    .i-play i {
                      color: #F87F5B;
                    }
                    .des p {
                      color: #F87F5B;
                    }
                }
            }
        }
    }
    .progress-wrapper{
        /*width:100%;*/
    }
    .progress{
        position: relative;
        height: 2px;
        width: 100%;
        background: #cdcdcd;
    }
    .left{
        height:100%;
        width: 0%;
        background-color: greenyellow;
        position: relative;
    }
    .ball{
        position: absolute;
        top: 0;
        right: 5px;
        margin-top: -5px;
        margin-right: -10px;
        width: 10px;
        height: 10px;
        border: 1px solid;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        will-change: transform;
        -webkit-transition: background-color .3s, border-color .3s, -webkit-transform 300ms;
        transition: background-color .3s, border-color .3s, -webkit-transform 300ms;
        transition: transform 300ms, background-color .3s, border-color .3s;
        transition: transform 300ms, background-color .3s, border-color .3s, -webkit-transform 300ms;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        overflow: hidden;
    }
</style>
<script>
const realFormatSecond =((second)=> {
    let secondType = typeof second
    if (secondType === 'number' || secondType === 'string') {
        second = parseInt(second)
        let hours = Math.floor(second / 3600)
        second = second - hours * 3600
        let mimute = Math.floor(second / 60)
        second = second - mimute * 60
        return hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
        return '0:00:00'
    }
})
export default {
    props: {
        mini:{
            type: Boolean,
            default: true,
        },
        miniPosition:{
            type: String,
            default: ''
        },
        aplayerParm:{
            position: {
                type: Boolean,
                required: true,
            },
            poster: {
                type: Boolean,
                required: true,
            },
            videoIndex:{
                type: Number,
                required: '',
            },
            videoData: {
                type: '',
                default () {
                  return {}
                }
            }
        }
    },
    data(){
        return {
            curIndex:'',
            cur_music: '',
            list: Array.isArray(this.aplayerParm.videoData)?this.aplayerParm.videoData:[this.aplayerParm.videoData],//音频列表数据处理                                                          //列表
            count:'',
            isShow:false ,
            playing: false,
            dqIndex:'',
            playIndex:'',
            currentTime:'',//音频时长
            currentTimeMaxTime:'',//音频总时长
            // 只能播放一个
            onlyOnePlaying: false,
            wrapStyle: {
                'width': this.width,
            },
            pBarStyle: {
                'backgroundColor': this.bgc,
                'height': this.height,
            },
            leftStyle: {
                'width': this.percent + '%',
                'background': this.leftBg,
                'height': this.height,
            },
            ballStyle: {
                'backgroundColor': this.ballBgc,
                'height': this.height,
                'width': this.height,
                'borderRadius': parseInt(this.height) / 2 + 'px',
                'right': - parseInt(this.height) / 2 + 'px',
            },
            // 标记是否按下鼠标
            isMouseDownOnBall: false,
            // 鼠标进body时是否是mousedown
            isMouseDownOnBody: false,
            // 鼠标离开进度条时的clientX
            outProgressClientX: 0,
            // 主要用于防止一个页面内有多个本组件，MouseMove时互相影响而设置的字段
            isCurrentProgress: false,
        }
    },
    //定义这个sweiper对象
    computed: {
        progressElement(){
            return this.$el.getElementsByClassName('progress')[0];
        }
    },
    components: {
    },
    mounted() {
        
    },
    updated () {
    },
    methods:{
        mousedownHandler(e){
            if(e.which === 1){
                this.isMouseDownOnBall = true;
                this.isCurrentProgress = true;
            }
        },
        mousemoveHandler(e){
            console.log('mousemoveHandler')
            //e.clientX - this.$el.offsetLeft 如果没有前置盒子
            if(this.isMouseDownOnBall && this.isCurrentProgress){
                let decimal = (e.clientX - this.$refs.leftPic.clientWidth - 15) / this.progressElement.clientWidth;
                let percent = decimal * 100;
                this.leftStyle.width = percent + '%';
                this.$refs.audio.currentTime = parseInt(percent / 100 * this.currentTimeMaxTime)
            }
        },
        mouseupHandler(e){
            if(this.isMouseDownOnBall && this.isCurrentProgress){
                let decimal = (e.clientX - this.$refs.leftPic.clientWidth - 15) / this.progressElement.clientWidth;
                let percent = decimal * 100;
                this.leftStyle.width = percent + '%';
                this.$refs.audio.currentTime = parseInt(percent / 100 * this.currentTimeMaxTime)

                this.isMouseDownOnBall = false;
                this.isCurrentProgress = false;
            }
        },
        mouseoverHandler(e){
            // 没有按左键进入进度条
            if(e.which === 0){
                this.isMouseDownOnBall = false;
            }
        },
        mouseoutHandler(e){
            if(e.which === 1 && this.isCurrentProgress){
                this.outProgressClientX = e.clientX;
                this.isMouseDownOnBody = true;
                this.bodyEventHandler();
            }
        },
        // body元素的事件监听器
        bodyEventHandler(){
            let body = document.getElementsByTagName('body')[0];
            body.addEventListener('mousemove', this.bodyMousemoveHandler);
            body.addEventListener('mouseup', (e) => {
                this.isMouseDownOnBall = false;
                this.isMouseDownOnBody = false;
                this.outProgressClientX = 0;
                this.isCurrentProgress = false;
                body.removeEventListener('mousemove', this.bodyMousemoveHandler);
            })
        },
        // body元素的mousemove事件监听器
        bodyMousemoveHandler(e){
            e.preventDefault();
            if(e.which === 1 && this.isMouseDownOnBody === true){
                let offsetX = e.clientX - this.outProgressClientX;
                // 右移了
                if(offsetX > 0){
                    // 在进度条右边界内
                    if(e.clientX < this.progressElement.clientWidth + this.$el.offsetLeft){
                        let decimal = (e.clientX - this.$refs.leftPic.clientWidth - 15) / this.progressElement.clientWidth;
                        let percent = decimal * 100;
                        this.leftStyle.width = percent + '%';
                        this.$refs.audio.currentTime = parseInt(percent / 100 * this.currentTimeMaxTime)
                        // 超出右边界
                    }else{
                        this.leftStyle.width = '100%';
                        this.$refs.audio.currentTime = parseInt(100 / 100 * this.currentTimeMaxTime)
                    }
                    // 左移了
                }else if(offsetX < 0){
                    // 在进度条左边界内
                    if(e.clientX > this.$el.offsetLeft){
                        let decimal = (e.clientX - this.$refs.leftPic.clientWidth - 15) / this.progressElement.clientWidth;
                        let percent = decimal * 100;
                        this.leftStyle.width = percent + '%';
                        this.$refs.audio.currentTime = parseInt(percent / 100 * this.currentTimeMaxTime)
                        // 超出左边界
                    }else{
                        this.leftStyle.width = '0%';
                        this.$refs.audio.currentTime = 0//parseInt(percent / 100 * this.currentTimeMaxTime)
                    }
                }
            }
        },
        topPlay(){
            if(this.dqIndex!==""){
                this.playFlag()
            }
        },
        // 当音频开始播放
        onPlay (res) {
            this.playing = true
            this.loading = false
            if(!this.onlyOnePlaying){
              return
            }
            let target = res.target
            let audios = document.getElementsByTagName('audio-item');
            [...audios].forEach((item) => {
              if(item !== target){
                item.pause()
                console.log(1)
              }
            })
        },
        playFlag(){
            console.info(this.playing+' playing')
            if(this.playing){
                this.$refs.audio.pause();
                this.playing = false
            }else{
                this.$refs.audio.play();
                this.playing = true
            }
        },
        onEnded(){
            /*
             * 音频是否播放完
             */
            console.log(1)
            this.playing = false
        },
        // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
        /*
         * 监听音频进度
         */
        onTimeupdate(res) {
            //console.log('timeupdate')
            this.currentTime = res.target.currentTime
            let sliderTimes = this.currentTime / this.currentTimeMaxTime * 100//parseInt(this.currentTime / this.currentTimeMaxTime * 100)
            //this.sliderTime = sliderTimes
            this.leftStyle.width = sliderTimes>100?100 +'%':sliderTimes +'%'
        },
        // 当加载语音流元数据完成后，会触发该事件的回调函数
        // 语音元数据主要是语音的长度之类的数据
        onLoadedmetadata(res) {
            this.currentTimeMaxTime = parseInt(res.target.duration)
        },
        play(){
            this.$refs.audio.play();
        },
        playAll() {
            var t = this
              , e = t.playIndex
              , n = !1
              , a = t.$refs.audio//document.querySelector("#audition_audio")
              , i = []
              , s = function(e) {
                var n = a.getAttribute("src");
                e.mp3_play_url !== n && (a.setAttribute("src", e.mp3_play_url),
                a.setAttribute("title", e.title)),
                t.type.playAll = !0,
                a.play()
            };
            t.list.map(function(t, a) {
                t.audio && "" !== t.audio && (i.push(a),
                0 === e && (e = i[0]),
                t.is_play && (n = !0))
            }),
            n ? (function() {
                t.type.playAll = !1,
                a.pause()
            }(),
            t.list[e].is_play = !1,
            n = !1,
            t.$forceUpdate()) : (s(t.list[e].audio),
            t.list[e].is_play = !0,
            n = !0,
            t.$forceUpdate()),
            a.onended = function() {
                t.list[e].is_play = !1,
                t.type.playAll = !1,
                t.$forceUpdate();
                var n = null;
                i.map(function(t, a) {
                    e === t && a < i.length - 1 && (a += 1,
                    n = a)
                }),
                n && setTimeout(function() {
                    e = i[n],
                    t.list[e].is_play = !0,
                    s(t.list[e].audio),
                    t.type.playIndex = e,
                    t.$forceUpdate()
                }, 1e3)
            }
        },
        clickPlay(event,index,media){
            const self = this
            //self.playing = true
            let doms = document.getElementsByClassName('info-list')
            if(doms&&doms.length>1){
                let forDom = doms&&doms.length>1?'info-list':'audio-item'
                let audios = document.getElementsByClassName('info-list');
                [...audios].forEach((item) => {
                    let audioDom = item.children[0].children[0]
                    let liDom = item.children[1].children[0]
                    let iBnt = liDom.children[0].children[1].children[0]
                    if(event.path[0] !== iBnt){
                        audioDom.pause()
                        //li 子元素处理
                        liDom.className = 'audio-item'
                        //播放按钮子元素
                        iBnt.className = 'iconfont icon-bofang'
                    }else{
                        self.playing = false
                    }
                    //是否是当前音频(特殊处理)
                    if(event.path[0] === iBnt && iBnt.className === 'iconfont icon-zanting'){
                        console.info('当前')
                        self.playing = true
                    }
                })
            }
            this.cur_music = index;
            this.$nextTick(
                ()=>{
                    //this.dqIndex!=this.cur_music  对比该播放那个音频文件
                    /*
                    * 记录当前播放的音频(是否是同一个)
                     */
                    if(this.dqIndex === this.cur_music){
                        console.log('相同')
                        this.playFlag()
                        return
                    }else{
                        let _this = this
                        console.log('play')
                        //self.leftStyle.width = '0%'
                        this.$refs.audio.src = media.Media
                        this.dqIndex = index //记录在播放的音频文件是那个
                        self.playing = false
                        this.playFlag()
                    }
                }
            )
        }
    },
    filters: {
        formatSecond(second = 0) {
            second = second?second:'0'
            return realFormatSecond(second)
        }
    }
}
</script>
