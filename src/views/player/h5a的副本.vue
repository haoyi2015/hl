<template>
    <article class="player-warp">
        <div id="loadingToast" v-if="loading">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-loading weui-icon_toast"></i>
                <p class="weui-toast__content">数据加载中</p>
            </div>
        </div>
        <!--播放器主体-->
        <section class="audio-warp">
            <!-- 这里是圆形进度条 -->
            <div class="circleProgress_wrapper">
                <!-- <div class="wrapper right">
                    <div class="circleProgress rightcircle" ref="yuanright"></div>
                </div>
                <div class="wrapper left">
                    <div class="circleProgress leftcircle" ref="yuanleft"></div>
                </div> -->
                <img :class="play ? 'run':''" src="../../assets/132996159.jpg" alt="">
            </div>
            <div class="bar">
                <div class="progressbar" @click="playMusic" ref="runfatbar">
                    <div class="greenbar" ref="runbar">
                        <span class="yuan" draggable="true"></span>
                    </div>
                </div>
            </div>
            <!-- {{cTime}}  {{dTime}}-->
            <div class="time-text">{{ currentTime | formatSecond }}</div>
            <div class="right-time time-text">{{ currentTimeMaxTime | formatSecond }}</div>
            <div class="audio-btn">
                <i class="iconfont icon-shangyishou" @click="switchAudio('top')"></i>
                <i :class="play ? 'iconfont icon-zanting' : 'iconfont icon-bofang'" @click="audioState"></i>
                <i class="iconfont icon-xiayishou" @click="switchAudio('bottom')"></i>
            </div>
            <div>
                <audio ref="player" :src="audioHttp" @ended="onEnded" @error="onError" @loadedmetadata="onLoadedmetadata" @timeupdate="onTimeupdate"></audio>
            </div>
        </section>
    </article>
</template>
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
    name: 'music-view',
    components: {
    },
    props: {
        type: '',
    },
    data() {
        return {
            currentTimeMaxTime:'',
            currentTime:'',
            loading: true,
            cTime: '00:00', // 已播放时间
            dTime: '00:00', // 总播放时间
            play: false, // 播放暂停按钮
            audioHttp: 'http://up.mcyt.net/?down/46426.mp3', // 音频链接
        }
    },
    mounted() {
        const music = this.$refs.player // 音频所在对象
        const musicBar = this.$refs.runbar // 颜色进度条所在对象
        const musicWidth = this.$refs.runfatbar.offsetWidth // 底部进度条总宽
        //const //rightCircle = this.$refs.yuanright.style // 圆形滚动进度条右边
        //const //leftCircle = this.$refs.yuanleft.style // 圆形滚动进度条左边

        // 获得音频加载完成可播放时的处理
        // music.addEventListener('canplay', () => {
        //     const musicTime = music.duration // 获得音频时长
        //     const branch = Math.floor(musicTime / 60) // 计算音频分钟
        //     const second = Math.ceil(musicTime % 60) // 计算音频秒
        //     if (branch < 10 && second < 10) { // 四种情况判断音频总时间
        //         this.dTime = `0${branch}:0${second}`
        //     } else if (branch < 10) {
        //         this.dTime = `0${branch}:${second}`
        //     } else if (second < 10) {
        //         this.dTime = `${branch}:0${second}`
        //     } else {
        //         this.dTime = `${branch}:${second}`
        //     }
        //     console.log('canplay')
        // })
        // 获得音频正在播放时的处理
        // music.addEventListener('timeupdate', () => {
        //     const musicTime = music.duration // 获得音频时长
        //     const stopTime = music.currentTime // 获得已播放的音频时长
        //     musicBar.style.width = `${(stopTime / musicTime) * 100}%` // 计算进度条所在比例宽度
        //     const branch = Math.floor(stopTime / 60) // 计算已播放的音频分钟
        //     const second = Math.round(stopTime % 60) // 计算已播放的音频秒
        //
        //     this.currentTime = music.currentTime
        //     console.log(stopTime+' stopTime-----------111')
        //     if (branch < 10 && second < 10) { // 四种情况判断显示音频以播放时间
        //         this.cTime = `0${branch}:0${second}`
        //     } else if (branch < 10) {
        //         this.cTime = `0${branch}:${second}`
        //     } else if (second < 10) {
        //         this.cTime = `${branch}:0${second}`
        //     } else {
        //         this.cTime = `${branch}:${second}+1`
        //     }
        // })
        // 监听颜色进度条是否触摸拖动
        musicBar.addEventListener('touchmove', (event) => {
            const events = event.targetTouches[0].pageX // 获得触摸拖动的距离
            if((events / musicWidth) * 100 >= 100)return
            musicBar.style.width = `${(events / musicWidth) * 100}%` // 计算进度条所在比例宽度
            console.info((events / musicWidth)+' musicBar.style.width')
            music.pause() // 触摸拖动时停止播放
        })

        // 监听颜色进度条是否触摸拖动结束
        musicBar.addEventListener('touchend', () => {
            const touwidth = (musicBar.offsetWidth / musicWidth) // 计算进度条所在比例
            music.currentTime = music.duration * touwidth // 通过所在比例赋值给音频应在的播放时间
            music.play() // 根据播放时间开始播放
            this.play = true // 更改播放暂停按钮为播放
        })

        // 这里顺便写的，适用于PC端。鼠标事件
        musicBar.addEventListener('drag', (e) => {
          const events = e.pageX
          musicBar.style.width = `${(events / musicWidth) * 100}%`
        })
        musicBar.addEventListener('dragend', (e) => {
          const events = e.pageX
          musicBar.style.width = `${(events / musicWidth) * 100}%`
          if(this.play){
              this.playMusic()
          }
        })
    },
    computed: {},
    filters: {
        formatSecond(second = 0) {
            second = second?second:'0'
            return realFormatSecond(second)
        }
    },
    methods: {
        onEnded(){
            /*
             * 音频是否播放完
             */
            console.log(1)
            this.play = false
        },
        onLoadedmetadata(res) {//音频加载完
            console.log(parseInt(res.target.duration))
            this.currentTimeMaxTime = parseInt(res.target.duration)
            this.audioState();
            this.loading = false
        },
        onError(){//加载失败
            console.log('onError-----')
            this.loading = false
        },
        onTimeupdate(res) {
            //console.log('timeupdate')
            const musicBar = this.$refs.runbar // 颜色进度条所在对象
            //musicBar.style.width = `${(stopTime / musicTime) * 100}%`
            this.currentTime = res.target.currentTime
            let sliderTimes = parseInt(this.currentTime / this.currentTimeMaxTime * 100)
            //this.sliderTime = sliderTimes
            musicBar.style.width = sliderTimes>100?100:sliderTimes+1 +'%'
            //this.leftStyle.width = sliderTimes>100?100:sliderTimes+1 +'%'
        },
        // 点击进度条事件
        playMusic(e) {
            const music = this.$refs.player // 音频所在对象
            const barWidth = e.pageX / this.$refs.runfatbar.offsetWidth // 计算点击位置相对父元素总宽的比例
            this.$refs.runbar.style.width = `${barWidth * 100}%` // 进度条应所在的比例总宽
            music.currentTime = music.duration * barWidth // 计算点击时应播放所在的时间
            music.play() // 播放音频
            this.play = true // 更改播放暂停按钮为播放
        },
        // 点击播放暂停按钮时间
        audioState() {
            this.play = !this.play // 更改播放暂停按钮状态
            const music = this.$refs.player // 音频所在对象
            if (this.play) {
                music.play() // 播放音乐
            } else {
                music.pause() // 暂停音乐
            }
        },
        // 切换歌曲按钮
        switchAudio(value) {
            if (value === 'top') {
                this.audioHttp = 'http://www.egtch.com/t_works/Vuedata/Apologize (Timbaland Remix).mp3'
            } else if (value === 'bottom') {
                this.audioHttp = 'http://www.egtch.com/t_works/Vuedata/I Am You.mp3'
            }
            this.play = false // 播放按钮为暂停
            this.$refs.runbar.style.width = 0 // 清空颜色进度条
            this.loading = true
            //this.$refs.yuanright.style.display = 'none' // 清空圆形颜色进度条
            //this.$refs.yuanleft.style.display = 'none' // 清空圆形颜色进度条
        }
    }
}
</script>
<style lang="scss">
    html,body,#app{height: 100%}
    .player-warp{
        width: 100%;
        height: 92%;
        max-width: 720px;
        margin: 0 auto;
        background: url('../../assets/01bbda57a199780000012e7ede9fd1.jpg@2o.jpg') no-repeat center;
        background-size: 100%;
        position: relative;
        top: 0;
        left: 0;
        .circleProgress_wrapper {
            width: 200px;
            height: 200px;
            margin: 50px auto;
            position: relative;
            border: 3px solid #fff;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 197px;
                height: 197px;
            }
            img.run{
                animation: run 10s linear infinite;
                -moz-animation: run 10s linear infinite;
                -webkit-animation: run 10s linear infinite;
                -o-animation: run 10s linear infinite;
            }
        }
        .audio-warp{
            position: absolute;
            width: 100%;
            bottom: 16px;
            left: 0;
        }
        .circleProgress {
            width: 70px;
            height: 70px;
            border: 5px solid transparent;
            border-radius: 50%;
            position: absolute;
            top: 0;
        }

        .rightcircle {
            border-top: 5px solid #9266f9;
            border-right: 5px solid #9266f9;
            right: 0;
            transform: rotate(-135deg);
            display: none;
        }

        .leftcircle {
            border-bottom: 5px solid #9266f9;
            border-left: 5px solid #9266f9;
            left: 0;
            transform: rotate(-135deg);
            display: none;
        }
        .bar {
            height: 30px;
            line-height: 30px;
            margin: 12px;
            .progressbar {
                width: 100%;
                height: 6px;
                background-color: #fff;
                border-radius: 30px;
                position: relative;
            }

            .greenbar {
                width: 0;
                height: 6px;
                border-radius: 30px;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #9266f9;

                .yuan {
                    display: inline-block;
                    padding: 8px;
                    background-color: #9266f9;
                    border-radius: 50%;
                    position: absolute;
                    top: -5px;
                    right: -8px;
                }
            }
        }

        .time-text {
            display: inline-block;
            width: 50%;
            padding: 0 30px;
            box-sizing: border-box;
            color: #fff;
        }

        .right-time {
            text-align: right;
        }

        .audio-btn {
            width: 100%;
            text-align: center;
        }

        .iconfont {
            font-size: 40px;
            display: inline-block;
            margin-right: 20px;
            vertical-align: middle;
            color: #fff;
        }
        .iconfont.icon-zanting{
            color: #9266f9;
        }
    }
    @-webkit-keyframes run {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }

        to {
            -webkit-transform: rotate(1turn)
        }
    }
</style>
