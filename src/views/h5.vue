<template>
    <article class="evaluate-teacher">
        <section>
            <div class="b-hr"></div>
            <div class="et-cant">
                <div class="audio-box" id="firstAudio">
                    <div class="hed-audio">
                        <span class="had-l timePlay" v-text="timePlay"></span>
                        <span class="had-m active" ref="hadW">
                            <i class="owsVals" :style="{width: moW}"></i>
                            <em id="movePars" :style="{left: moLeft}"></em>
                        </span>
                        <span class="had-r">{{score.audioTime}}</span>
                    </div>
                    <div class="bnt-audio">
                        <div class="bnt-ms">
                            <span class="bnt-l">
                                <button class="play-fast" data-type="mleft">
                                    <i class="iconfont icon-kuaijin"></i>
                                </button>
                            </span>
                            <span class="bnt-m">
                                <button class="first-audio" data-flag="pause" @click="paly">
                                    <i class="iconfont" :class="isPlaying?'icon-zanting':'icon-bofang'"></i>
                                    <audio class="firstMp3" @ended="onEnded" @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata" ref="audio" preload="auto" src="http://test001.pnlyy.com/reord/audio/fe198c31e5695792ecdd741c2678bd7b"></audio>
                                    <!-- <audio class="firstMp3" preload="auto" src="http://test001.pnlyy.com/reord/audio/fe198c31e5695792ecdd741c2678bd7b"></audio> -->
                                </button>
                            </span>
                            <span class="bnt-r">
                                <button class="play-fast" data-type="mright">
                                    <i class="iconfont icon-kuaituishangyige"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>
<style lang="scss">
    .evaluate-teacher{
        i.iconfont{
            color: #fd5e02;
            font-size: 28px;
            font-weight: 700;
        }
        display: block;
        padding-top: .3rem;
        margin-top: .5rem;
        section{
            background: #fff;
            border-radius: 4px;
            margin: 0 .5rem;
            padding-bottom: 1rem;
            .performance-title{
                font-family: PingFangSC-Medium;
                font-size: .6rem;
                color: #FD5E02;
                padding: .7rem 0 0 15px;
            }
            .class-performance{
                position: relative;
                .error-con{
                    display: inline-block;
                    position: absolute;
                    left: 180px;
                    top: 50%;
                    transform: translateY(-50%);
                    .error-list{
                        padding: 10px 0;
                        font-family: PingFangSC-Regular;
                        color: #4A4A4A;
                        position: relative;
                        font-size: .5rem;
                        overflow: hidden;
                        p{
                            display: inline;
                            font-size: .7rem;
                            color: #4A4A4A;
                        }
                    }
                    .circle{
                        display: inline-block;
                        border-radius: 50%;
                        width: 12px;
                        height: 12px;
                        background-color:#FFBC00;
                        margin-top: 2px;
                        margin-right: 10px;
                    }
                }
                @media screen and (min-width: 360px) and (max-width: 540px){
                    .error-con{
                        left: 200px;
                    }
                }
                @media screen and (min-width: 540px) and (max-width: 640px){
                    .error-con{
                        left: 240px;
                    }
                }
                @media screen and (min-width: 640px){
                    .error-con{
                        left: 260px;
                    }
                }
            }
            @media screen and (min-width: 360px) and (max-width: 540px){
                .class-performance{
                    padding-left: 10px;
                }
            }
            @media screen and (min-width: 540px) and (max-width: 640px){
                .class-performance{
                    padding-left: 20px;
                }
            }
            @media screen and (min-width: 640px){
                .class-performance{
                    padding-left: 40px;
                }
            }
        }
        .no-padd-bot{
            padding-bottom: 0;
        }
        .et-cant{
            .tit-h3{
                font-family: "PingFangSC-Regular";
                font-size: .6rem;
                color: #4A4A4A;
                letter-spacing: 0;
                line-height: 1.4;
                font-weight: normal;
                padding: .8rem 15px;
                text-align: left;
                word-wrap: break-word;
            }
            .audio-box{
                height: 6.8rem;
                background: #FFFFFF;
                box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
                border-radius: 4px;
                margin:0 15px;
                .hed-audio{
                    font-family: "PingFangSC-Regular";
                    font-size: .7rem;
                    color: #9B9B9B;
                    letter-spacing: 0;
                    line-height: 20px;
                    padding-top: .7rem;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    justify-content: center;
                    -webkit-justify-content: center;
                    align-items:center;
                    -webkit-align-items: center;
                    span{
                        display: block;
                        text-align: center;
                    }
                    span.had-m{
                        width: 100%;
                        background: #D3D3D3;
                        border-radius: 1px;
                        height: 3px;
                        position: relative;
                        top: -.2rem;
                        display: inherit;
                        -webkit-box-flex: 1;
                        -webkit-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        position: relative;
                        top: 0;
                        left: 0;
                        margin: 0 .4rem;
                    }
                    span.had-m.active{
                        position: relative;
                        i{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 0%;
                            display: block;
                            height: .12rem;
                            background: #FD5E02;
                            border-radius: 1px;
                        }
                        /*i:after{
                            content: "";
                            background: url('../assets/afterClass/after-class_music_oval-bg.png') no-repeat;
                            background-size: 1.8rem;
                            display: block;
                            position: absolute;
                            top: -.34rem;
                            right: -.2rem;
                            width: 1.8rem;
                            height: 1.8rem;
                        }*/
                        em{
                            background: #fd5e02;//url('../assets/afterClass/after-class_music_oval-bg.png') no-repeat;
                            background-size: .8rem;
                            display: block;
                            position: absolute;
                            top: -4px;
                            left: 0;
                            width: 12px;
                            height: 12px;
                            cursor: pointer;
                            border-radius: 50%;
                        }
                    }
                    span.had-l{
                        color: #FD5E02;
                        width: 3rem;
                    }
                    span.had-r{
                        width: 3rem;
                    }
                }
                .bnt-audio{
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    justify-content: center;
                    -webkit-justify-content: center;
                    align-items:center;
                    -webkit-align-items: center;
                    margin-top: .6rem;
                    div.bnt-ms{
                        width: 100%;
                        display: inherit;
                        button{
                            background: none;
                            cursor: pointer;
                            border: 0;
                        }
                        span{
                            display: block;
                            background: none;
                        }
                        .bnt-l,.bnt-r{
                            height: 1.3rem;
                            width: 4.2rem;
                            text-align: right;
                            margin-top: 0.44rem;
                            position:relative;
                            img{
                                width: 1.3rem;
                                height: 1.3rem;
                            }
                        }
                        .bnt-r{
                            text-align: left;
                        }
                        .bnt-m{
                            display: inherit;
                            -webkit-box-flex: 1;
                            -ms-flex: 1;
                            flex: 1;
                            position: relative;
                            top: 0;
                            left: 0;
                            text-align: center;
                            button{
                                width: 2rem;
                                margin: 0 auto;
                                display: block;
                            }
                            img{
                                height: 2rem;
                                width: 2rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                score:'',
                timePlay:'',
                isPlaying: false,
                moLeft:'',
                moW:''
            }
        },
        mounted(){
            // progressElement(){
            //     return this.$el.getElementsByClassName('progress')[0];
            // }
        },
        methods:{
            onEnded(){
                /*
                 * 音频是否播放完
                 */
                console.log(1)
                this.isPlaying = false
            },
            onTimeupdate(res) {
                console.log('timeupdate')
                console.log(res.target.currentTime)
                this.currentTime = res.target.currentTime
                let sliderTimes = this.currentTime / this.currentTimeMaxTime * 100//parseInt(this.currentTime / this.currentTimeMaxTime * 100)
                sliderTimes = sliderTimes>100?100:sliderTimes +'%'
                this.moLeft = sliderTimes
                this.moW  = sliderTimes
            },
            onLoadedmetadata(res) {
                this.currentTimeMaxTime = parseInt(res.target.duration)
            },
            paly(){
                const _this = this
                let audio = this.$refs.audio
                if(audio.paused){
                    audio.load();
                    _this.isPlaying =true;
                    audio.play();
                    //拖动执行条件
                    if (!audio.paused || audio.currentTime != 0) {
                        let blocks = document.getElementById("movePars");
                        //获取拖动宽
                        let maxRight = _this.$refs.offsetWidth;
                        _this.addEventListenerFun(blocks,maxRight,audio);
                    }
                }else{
                    _this.isPlaying =false;
                    audio.pause();
                }
            },
            addEventListenerFun(doms,ows,audioss){
		    	/**
			     * 拖动音频
			     * audio - audio对象
			     */
			    // 获取节点
		        let audioDoms = document.getElementById("movePars");
		        let oW,oriLeft,maxRight,mouseX,maxLeft;
		        const _this = this;

                let audio = _this.$refs.audio

		        //获取拖动宽
		        maxRight = _this.$refs.hadW.offsetWidth;
		        // 绑定touchstart事件
		        audioDoms.addEventListener("touchstart", function (e) {
		            let touches = e.touches[0];
		            oW = touches.clientX - audioDoms.offsetLeft;
		            oriLeft = audioDoms.offsetLeft;
                    mouseX = e.clientX;
                    maxLeft = oriLeft; // 向左最大可拖动距离

		            //阻止页面的滑动默认事件
		            document.addEventListener("touchmove", defaultEvent, false);
		        }, false)

		        audioDoms.addEventListener("touchmove", function (e) {
		        	//是否在播放状态
		        	if (!_this.$refs.audio.paused || _this.$refs.audio.currentTime != 0){
			            let touches = e.touches[0];
			            let oLeft = touches.clientX - oW;

			            if (oLeft > maxRight) {//最大拖动值
	                        oLeft = maxRight;
	                        _this.$refs.audio.pause();
	                    } else if (oLeft < 0) {
	                        oLeft = 0;
	                    }
			            let rate = oLeft / maxRight;
                        console.log(maxRight)
	                    _this.$refs.audio.currentTime = _this.$refs.audio.duration * rate+0.2;
                        let value = _this.$refs.audio.currentTime / _this.$refs.audio.duration;
                        let vals =(value * 100);
                        _this.moLeft = vals+'%'
                        _this.moW  = vals+'%'
			            //audioDoms.style.left = (oLeft-14)/100 + "%";
		        	}
		        }, false);

		        audioDoms.addEventListener("touchend", function () {
		            document.removeEventListener("touchmove", defaultEvent, false);
		        }, false);
		        function defaultEvent(e) {
		            //e.preventDefault();
		        }
		    }
        }
    }
</script>
