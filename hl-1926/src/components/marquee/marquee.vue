<style scoped>
.marquee-box {
  height: 50px;
  line-height: 50px;
  color: #000;
  font-size: 24px;
  background-size: 24px 24px;
}
.marquee-content {
  overflow: hidden;
  width: 100%;
}
.marquee-content p {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  font-size: 0;
}
.marquee-content span {
  display: inline-block;
  white-space: nowrap;
  padding-right: 40px;
  font-size: 24px;
}
.speed_30 {
  -webkit-animation: marquee 30s linear infinite;
  animation: marquee 30s linear infinite;
}
.speed_25 {
  -webkit-animation: marquee 25s linear infinite;
  animation: marquee 25s linear infinite;
}
.speed_35 {
  -webkit-animation: marquee 35s linear infinite;
  animation: marquee 35s linear infinite;
}
.speed_40 {
  -webkit-animation: marquee 40s linear infinite;
  animation: marquee 40s linear infinite;
}
.speed_45 {
  -webkit-animation: marquee 45s linear infinite;
  animation: marquee 45s linear infinite;
}
.speed_50 {
  -webkit-animation: marquee 50s linear infinite;
  animation: marquee 50s linear infinite;
}
.speed_55 {
  -webkit-animation: marquee 55s linear infinite;
  animation: marquee 55s linear infinite;
}
@-webkit-keyframes marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

<template>
  <div class="marquee-box">
    <div
      class="marquee-content"
      ref="out"
    >
      <!-- <p :class="run?speed:''"> -->
      <p :class="'speed_'+speed">
        <span
          class="text1"
          ref="in"
        >
          <slot> </slot>
        </span>
        <span
          class="text2"
          v-if="showtwo||run"
        >
          <slot> </slot>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueMarquee",
  data() {
    return {
      run: false,
      pWidth: ""
    };
  },
  props: {
    content: {
      default: "暂无内容",
      type: ""
    },
    speed: {
      default: "" //'middle'
    },
    showtwo: {
      default: true
    }
  },
  watch: {
    content() {
      const _this = this;
      setTimeout(() => {
        // let out = document.getElementById(_this.pid.out).clientWidth;
        // let _in = document.getElementById(_this.pid.in).clientWidth;
        _this.$nextTick(() => {
          // let out = _this.$refs.out.clientWidth;
          // let _in = _this.$refs.in.clientWidth;
          // _this.pWidth = 10*_in;
          // _this.run=_in>out?true:false;
        });
      }, 1000);
    }
  },
  mounted() {
    const _this = this;
    this.$nextTick(() => {
      let out = _this.$refs.out.clientWidth;
      let _in = _this.$refs.in.clientWidth;
      _this.run = _in > out ? true : false;
    });
  }
};
</script>