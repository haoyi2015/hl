<template>
    <div class="mkAudio mkAudio-height">
        <img class="mkAudio-bg-img" :src="musicFMDetail.audioCover || 'http://test001.pnlyy.com/op.png'"/>
        <audio
            ref="audio"
            class="main"
            :src="musicFMDetail.audioUrl"
            @timeupdate="updateTime($event)"
            @ended="ended"
            @error="audioError">
        </audio>
        <div class="mkAudio-main">
            <div class="mkAudio-main-bg img" :class="{rotation: classStyle}">
                <div class="mkAudio-main-bg-img" :style="{background:'url('+musicFMDetail.audioCover+') no-repeat'}"></div>
            </div>
            <div class="mkAudio-main-bg-play" v-if="isShare">
                <div class="button-play-pause">
                    <img :src=" './images/' + imgState" @click="bindPlayPause">
                </div>
            </div>
            <div class="mkAudio-main-name">{{musicFMDetail.title}}</div>
            <div :class="{'mkAudio-main-control': true, 'mkAudio-main-control-no-height': true}">
                <progress-bar
                    :percent="percent"
                    @percentChangeEnd="percentChangeEnd"
                    @percentChange="percentChange">
                </progress-bar>
                <div class="mkAudio-main-control-time">
                    <div>{{ currentTimeText }}</div>
                    <div>{{ durationText }}</div>
                </div>
                <div class="mkAudio-main-control-button" v-if="!isShare">
                    <div class="button-up" @click="changeMusic('last')" >
                        <img src="./images/ic_the_last@2x.png" alt="">
                    </div>
                    <div class="button-play-pause">
                        <img v-show="imgState === 'ic_zanting.png'" src='./images/ic_zanting.png' @click="bindPlayPause">
                        <img v-show="imgState === 'play.png'" src='./images/play.png' @click="bindPlayPause">
                    </div>
                    <div class="button-lower" @click="changeMusic('next')">
                        <img src="./images/ic_next@2x.png">
                    </div>
                </div>
            </div>
            <div :class="{'mkAudio-main-bottom': true, 'mkAudio-main-bottom-top': isShare,'mkAudio-main-bottom-position':!isShare}">
                <img class="mkAudio-main-bottom-img" v-if="musicFMDetail.fromHead" :src="musicFMDetail.fromHead">
                <div class="mkAudio-main-bottom-from">{{'来自' + musicFMDetail.fromAuthor}}</div>
                <div class="mkAudio-main-bottom-seize"></div>
                <div class="mkAudio-main-bottom-playTimes">{{Number(musicFMDetail.playTimes) > 10000 ? Math.round(Number(musicFMDetail.playTimes) / 1000) / 10 + '万': musicFMDetail.playTimes}}次收听</div>
            </div>
        </div>
    </div>
</template>
<script>
import progressBar from "./progress/progressBar.vue";
export default {
  name: "mk-audio",
  components: {
    progressBar
  },
  props: {
    isShares: {
      type: String,
      default: "no"
    }
  },
  data() {
    return {
      classStyle: false,
      imgState: "ic_zanting.png",
      percent: 0, // 当前时长/音频总时长
      duration: 0, // 音频总时长
      durationText: "00:00",
      currentTime: 0, // 当前时长
      currentTimeText: "00:00",
      fmList: [
        {
          audioCover:
            "http://statics.pnlyy.com/fm/image/9ae5d021582c1d3732046b86f0c5170b",
          audioUrl:
            "https://music-lib.peilian.com/30ddd319a31f265a8b8d67ba5c31482a",
          fromAuthor: "百度",
          fromHead: "",
          musicFMId: "11",
          playTimes: "19",
          publishDate: "2018-09-01",
          subtitle: "谢谢合作！！！！！！！",
          title: "我会删除的"
        },
        {
          audioCover:
            "http://statics.pnlyy.com/fm/image/e42ac07d25451a15c7c2b6614b5de82e",
          audioUrl:
            "https://music-lib.peilian.com/b3c01c724ea23e26cfca311122c83b8e",
          fromAuthor: "VIP陪练",
          fromHead:
            "http://statics.pnlyy.com/fmfrom/image/9dcf02c533c65ca898ae63058df4ac5e",
          musicFMId: "12",
          playTimes: "199872",
          publishDate: "2018-09-02",
          subtitle: "谢谢合作！！！！！！！",
          title: "来自李哥的眼神2号"
        }
      ],
      currentfmIndex: 0,
      hasNext: true,
      musicFMDetail: {}
    };
  },
  computed: {
    isShare: function() {
      return this.isShares !== "no";
    }
  },
  created() {
    this.updateMusicFm(this.currentfmIndex);
  },
  // 挂载到实例上去之后调用该钩子
  mounted() {
    this.$nextTick(function() {
      this.$refs.audio.addEventListener("canplay", this._durationTime);
    });
  },
  // 事件集合
  methods: {
    _durationTime() {
      this.duration = Math.round(this.$refs.audio.duration);
      this.durationText = this.format(this.$refs.audio.duration);
    },
    bindPlayPause(e) {
      this.upClassStyle();
      if (this.imgState === "play.png") {
        this.imgState = "ic_zanting.png";
        this.pause();
      } else {
        this.imgState = "play.png";
        this.play();
      }
    },
    changeMusic(state) {
      let that = this;
      let nextIndex;
      if (state === "last") {
        if (that.currentfmIndex === 0) {
          alert("已经是第一首了");
          return;
        }
        nextIndex = this.currentfmIndex - 1;
      } else if (state === "next") {
        nextIndex = this.currentfmIndex + 1;
        if (that.fmList.length <= nextIndex) {
          alert("已经是最后一首了");
          return;
        }
      }
      that.updateMusicFm(nextIndex);
    },
    updateMusicFm(nextIndex) {
      let that = this;
      if (that.fmList[nextIndex]) {
        that.musicFMDetail = that.fmList[nextIndex];
        that.currentfmIndex = nextIndex;
      }
      that.nextPlay();
    },
    nextPlay() {
      this.$nextTick(() => {
        if (this.imgState === "play.png") {
          // console.log('updateMusicFm play')
          this.play();
        }
      });
    },
    // 旋转样式改变
    upClassStyle() {
      this.classStyle = !this.classStyle;
    },
    format(time) {
      let min, sec;
      let roundTime = Math.round(time);
      let currentSecond = Math.round(time - Math.floor(time / 60) * 60);
      min = this.padStartZero(Math.floor(roundTime / 60));
      sec = this.padStartZero(currentSecond === 60 ? 0 : currentSecond);
      return min + ":" + sec;
    },
    padStartZero(num) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    },
    // 播放
    play() {
      this.$refs.audio.play();
    },
    pause() {
      this.$refs.audio.pause();
    },
    ended() {
      this.bindPlayPause();
    },
    audioError(e) {
      alert("音频加载失败");
    },
    // 音频播放时间改变时触发
    updateTime(e) {
      this.currentTime = Math.round(this.$refs.audio.currentTime);
      this.percent = this.currentTime / this.duration;
      this.currentTimeText = this.format(this.$refs.audio.currentTime);
    },
    // 进度条滑动结束时触发
    percentChangeEnd(percent) {
      this.currentTime = this.duration * percent;
      this.currentTimeText = this.format(this.currentTime);
      this.$refs.audio.currentTime = this.currentTime;
      if (this.imgState === "ic_zanting.png") this.bindPlayPause();
    },
    // 进度条变化时触发
    percentChange(percent) {
      this.currentTime = this.duration * percent;
      this.currentTimeText = this.format(this.currentTime);
    }
  },
  // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
  updated() {},
  // 实例销毁后调用
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.mkAudio {
  width: 100%;
  position: relative;
  // padding-bottom: 1rem;
  display: flex;
  flex-flow: column;
  background-color: rgba(0, 0, 0, 0.3);
  // background: url('/static/img/pic_fm.png');
  .mkAudio-bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-filter: blur(35px);
    -moz-filter: blur(35px);
    -ms-filter: blur(35px);
    -o-filter: blur(35px);
    filter: blur(35px);
    z-index: -3;
    background-position: center top;
    background-size: contain;
    background-attachment: fixed;
  }
  .mkAudio-main {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0rem 1rem;
    .mkAudio-main-bg {
      overflow: hidden;
      margin-top: 1.5rem;
      position: relative;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 14.5rem;
      height: 14.5rem;
      border-radius: 50%;
      border: 0.5rem solid rgba(255, 255, 255, 0.1);
      .mkAudio-main-bg-img {
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        background-size: 100% 100% !important;
      }
    }
    .mkAudio-main-bg-play {
      position: absolute;
      top: 7rem;
      border-radius: 50%;
      left: 50%;
      width: 3rem;
      margin-left: -1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .button-play-pause {
        width: 3rem;
        height: 3rem;
        z-index: 2;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .img {
      width: 14.5rem;
      height: 14.5rem;
      border-radius: 50%;
      // border: 0.5rem solid rgba(255,255,255,0.1);
    }
    .rotation {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg); /* IE 9 */
      -webkit-transform: rotate(360deg); /* Safari and Chrome */
      -o-transform: rotate(360deg); /* Opera */
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      animation: rotation 8s linear infinite;
      -moz-animation: rotation 8s linear infinite;
      -webkit-animation: rotation 8s linear infinite;
      -o-animation: rotation 8s linear infinite;
    }
    @-webkit-keyframes rotation {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    .mkAudio-main-name {
      color: #ffffff;
      font-size: 0.8rem;
      margin-top: 1rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-break: break-all;
      text-align: center;
    }
    .mkAudio-main-control {
      margin-top: 1.5rem;
      border-radius: 0.08rem;
      width: 100%;
      // height: 6rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      // overflow: hidden;
      .mkAudio-main-control-time {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.6rem;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 0.2rem;
      }
      .mkAudio-main-control-button {
        width: 9rem;
        // border: 1px solid blue;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        .button-up {
          width: 1rem;
          height: 1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .button-play-pause {
          width: 3rem;
          height: 3rem;
          z-index: 2;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .button-lower {
          width: 1rem;
          height: 1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .mkAudio-main-control-no-height {
      height: 6rem;
    }
    .mkAudio-main-bottom {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.6rem;
      color: rgba(255, 255, 255, 0.7);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      .mkAudio-main-bottom-img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        margin-right: 0.3rem;
      }
      .mkAudio-main-bottom-from {
        margin-right: 0.05rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-break: break-all;
        text-align: center;
      }
      .mkAudio-main-bottom-seize {
        flex: 1;
      }
      .mkAudio-main-bottom-playTimes {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        word-break: break-all;
        text-align: center;
        width: 7rem;
        text-align: right;
      }
    }
    .mkAudio-main-bottom-position {
      width: 90%;
      position: absolute;
      bottom: 0.8rem;
    }
    .mkAudio-main-bottom-top {
      margin-top: 0.5rem;
      border: none;
    }
  }
}
.mkAudio-height {
  height: 100%;
}

@media screen and (min-width: 768px) {
  .mkAudio {
    width: 100%;
    // background-size:cover;
    // z-index:1;
    position: relative;
    display: flex;
    flex-flow: column;
    padding-bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    .mkAudio-bg-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      -webkit-filter: blur(35px);
      -moz-filter: blur(35px);
      -ms-filter: blur(35px);
      -o-filter: blur(35px);
      filter: blur(35px);
      z-index: -3;
      background-position: center top;
      background-size: contain;
      background-attachment: fixed;
    }
    .mkAudio-main {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 0rem 1rem;
      // background:hsla(0,0%,100%,.4);
      // background-color: rgba(23,23,23,0.5);
      .mkAudio-main-bg {
        margin-top: 0;
        position: relative;
        top: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        border: 0.25rem solid rgba(255, 255, 255, 0.1);
        .mkAudio-main-bg-img {
          width: 13.75rem;
          height: 13.75rem;
          border-radius: 50%;
          background-size: 100% 100% !important;
        }
      }
      .mkAudio-main-bg-play {
        position: absolute;
        top: 7rem;
        left: 50%;
        margin-left: -1.5rem;
        width: 3rem;
        // border: 1px solid red;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9;
        .button-play-pause {
          width: 3rem;
          height: 3rem;
          z-index: 2;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .img {
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        // border: .2rem solid rgba(255, 255, 255, 0.1);
      }
      .rotation {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg); /* IE 9 */
        -webkit-transform: rotate(360deg); /* Safari and Chrome */
        -o-transform: rotate(360deg); /* Opera */
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        animation: rotation 8s linear infinite;
        -moz-animation: rotation 8s linear infinite;
        -webkit-animation: rotation 8s linear infinite;
        -o-animation: rotation 8s linear infinite;
      }
      @-webkit-keyframes rotation {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      .mkAudio-main-name {
        color: #ffffff;
        font-size: 0.45rem;
        margin-top: 2rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        word-break: break-all;
        text-align: center;
      }
      .mkAudio-main-control {
        margin-top: 1rem;
        border-radius: 0.08rem;
        width: 100%;
        // height: 5rem;
        display: flex;
        flex-flow: column;
        align-items: center;
        position: relative;
        bottom: 0.3rem;
        .mkAudio-main-control-time {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.35rem;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 0.2rem;
        }
        .mkAudio-main-control-button {
          width: 6rem;
          // border: 1px solid blue;
          height: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .button-up {
            width: 1rem;
            height: 1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .button-play-pause {
            width: 2rem;
            height: 2rem;
            z-index: 2;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .button-lower {
            width: 1rem;
            height: 1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .mkAudio-main-control-no-height {
        height: 5rem;
      }
      .mkAudio-main-bottom {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.35rem;
        color: rgba(255, 255, 255, 0.7);
        border-top: 0.05rem solid rgba(255, 255, 255, 0.2);
        position: relative;
        bottom: 0;
        .mkAudio-main-bottom-img {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          margin-right: 0.3rem;
        }
        .mkAudio-main-bottom-from {
          margin-right: 0.05rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          word-break: break-all;
          text-align: center;
        }
        .mkAudio-main-bottom-seize {
          flex: 1;
        }
        .mkAudio-main-bottom-playTimes {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          word-break: break-all;
          text-align: center;
          width: 10rem;
          text-align: right;
        }
      }
      .mkAudio-main-bottom-top {
        margin-top: 0.5rem;
        border: none;
      }
    }
  }
  .mkAudio-height {
    height: auto;
    padding-bottom: 1rem;
  }
}
</style>
