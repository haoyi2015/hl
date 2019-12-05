<template>
  <section class="home-warp">
    <div class="lay_background">
      <img
        class="lay_background_img lay_background_img_fade_out"
        id="lay_bg_img"
        alt
        src="http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191603_896cd9.jpg"
        style="width: 1403px; height: 934px; top: 0;"
      />
    </div>
    <div class="timebox2" v-if="false">
      <div class="timetext">
        <div class="timetexttitle">2020年元旦倒计时</div>
        <div class="timetextintro">元旦时间：2020年1月1日 农历腊月初七 星期三</div>
        <div class="timetextintro">目前距离2020年元旦还有</div>
        <div class="timecounter">
          <span id="t_d">127 天</span>
          <span id="t_h">10 时</span>
          <span id="t_m">24 分</span>
          <span id="t_s">8 秒</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="balloon white">
        <div class="star-red"></div>
        <div class="face">
          <div class="eye"></div>
          <div class="mouth happy"></div>
        </div>
        <div class="triangle"></div>
        <div class="string"></div>
      </div>
      <div class="balloon red">
        <div class="star"></div>
        <div class="face">
          <div class="eye"></div>
          <div class="mouth happy"></div>
        </div>
        <div class="triangle"></div>
        <div class="string"></div>
      </div>
      <div class="balloon blue">
        <div class="star"></div>
        <div class="face">
          <div class="eye"></div>
          <div class="mouth happy"></div>
        </div>
        <div class="triangle"></div>
        <div class="string"></div>
      </div>
      <div id="timer"></div>
      <h1>每年10月1日倒计时</h1>
    </div>
    <!-- <section class="div_content">
    <div class="ul-header border-1px">
      <div class="left-menu">
        <a href="/home">首页</a>
      </div>
    </div>
    </section>
    <div class="fixedbg"></div>-->
    <div class="cont-warp" v-if="false">
      <h1>{{ setTime }}</h1>
      <div id="clock">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
      </div>
      <div class="us-cont">
        <div class="first-name">
          <span>love</span>
        </div>
        <div class="heart">
          <div class="hover-cont-top">我的</div>
          <div class="right-heart"></div>
          <div class="left-heart"></div>
          <div class="hover-cont">小可爱</div>
        </div>
        <div class="last-name">
          <span>you</span>
        </div>
      </div>
      <div class="text-wrapper">
        <div class="text part1">
          <span class="letter" v-for="(letter, index) in letters" :class="{ poofed: !letter }">
            <div class="character">{{ letter }}</div>
            <span></span>
          </span>
        </div>
      </div>
      <div class="cont-dec">遇见你真好，真的很好...我们都要好好的</div>
    </div>
  </section>
</template>
<script>
function getRTime() {
  var EndTime = new Date("2020/01/01 00:00:00"); //截止时间
  var NowTime = new Date();
  var t = EndTime.getTime() - NowTime.getTime();
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  var m = Math.floor((t / 1000 / 60) % 60);
  var s = Math.floor((t / 1000) % 60);

  document.getElementById("t_d").innerHTML = d + " 天";
  document.getElementById("t_h").innerHTML = h + " 时";
  document.getElementById("t_m").innerHTML = m + " 分";
  document.getElementById("t_s").innerHTML = s + " 秒";
}
setInterval(getRTime, 1000);

const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 9, 1).getTime();

// countdown
let timer = setInterval(function() {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    '<div class="days"> \
  <div class="numbers">' +
    days +
    '</div>天</div> \
<div class="hours"> \
  <div class="numbers">' +
    hours +
    '</div>时</div> \
<div class="minutes"> \
  <div class="numbers">' +
    minutes +
    '</div>分</div> \
<div class="seconds"> \
  <div class="numbers">' +
    seconds +
    "</div>秒</div> \
</div>";
}, 1000);
export default {
  data() {
    return {
      showLeftMenu: false,
      showWeatherList: false,
      setTime: "",
      time: "",
      date: "",
      goDate: "",
      letters: []
    };
  },
  methods: {
    setDateFun() {
      const _this = this;
      function fnDate() {
        let oDiv = _this.$refs.dates;
        let date = new Date();
        let year = date.getFullYear(); //当前年份
        let month = date.getMonth(); //当前月份
        let data = date.getDate(); //天
        let hours = date.getHours(); //小时
        let minute = date.getMinutes(); //分
        let second = date.getSeconds(); //秒
        let time =
          year +
          "年" +
          fnW(month + 1) +
          "月" +
          fnW(data) +
          "日 " +
          fnW(hours) +
          "时" +
          fnW(minute) +
          "分" +
          fnW(second) +
          "秒";
        _this.setTime = time;
      }
      //补位 当某个字段不是两位数时补0
      function fnW(str) {
        let num;
        str >= 10 ? (num = str) : (num = "0" + str);
        return num;
      }
      //定时器每秒调用一次fnDate()
      setInterval(function() {
        fnDate();
      }, 1000);
    }
  },
  mounted() {
    // this.setDateFun()
    const _this = this;
    let week = [
      "星期天",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ];
    let timerID = setInterval(updateTime, 1000);
    updateTime();
    function updateTime() {
      let cd = new Date();
      _this.time =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);
      _this.date =
        zeroPadding(cd.getFullYear(), 4) +
        "年" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "月" +
        zeroPadding(cd.getDate(), 2) +
        "日 " +
        week[cd.getDay()];
    }

    function zeroPadding(num, digit) {
      let zero = "";
      for (let i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
    let date1 = new Date();
    let date2 = new Date("2019-02-6");
    let date = (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000);
    //this.goDate = parseInt(date)
    String(100).split("");
    console.log(
      parseInt(date)
        .toString()
        .split("")
    );
    // this.goDate
    let dateTime = "";
    dateTime = parseInt(date)
      .toString()
      .split("");
    // dateTime.splice(0, 0, "在一起");
    dateTime.push("天");
    this.letters = dateTime;
  }
};
</script>
<style lang="scss">
.lay_background {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.lay_background .lay_background_img {
  opacity: 0;
  -webkit-transition: opacity 0.8s ease;
  -moz-transition: opacity 0.8s ease;
  transition: opacity 0.8s ease;
}
.lay_background .lay_background_img {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.lay_background .lay_background_img_fade_out {
  opacity: 1;
}
</style>
<style>
@import url("/css/home.css");
</style>

<style lang="scss" scoped>
.timebox2 {
  width: 640px;
  background-color: #fcf3e2;
  padding: 1rem 0;
  background: url(../assets/images/ks_bcg2.png) center center no-repeat;
  background-size: 100% 100%;
}
.timebox2 div,
timebox2 span,
timebox2 div span {
  color: #333 !important;
}
.timebox2 .timecounter span {
  color: #333 !important;
}
.timetext {
  width: 100%;
  text-align: center;
}
.timetexttitle {
  font-size: 0.3rem;
  margin-bottom: 10px;
  color: #fff;
}
.timetextintro {
  font-size: 0.22rem;
  margin-bottom: 10px;
  color: #fff;
  padding: 0 1.52rem;
  box-sizing: border-box;
}
.timecounter {
  font-size: 0.6rem;
}
.txt {
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.clearbg5 {
  display: block;
  clear: both;
  width: 100%;
  height: 0.16rem;
  overflow: hidden;
  background-color: #eee;
}
.txt p {
  line-height: 30px;
  margin-top: 0.2rem;
}
.txt p img {
  width: 100%;
}
.timecounter span {
  color: #fff;
}
</style>
<style>
html {
  display: grid;
  min-height: 100%;
}

body {
  display: grid;
  background: #183059;
}

.container {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 650px;
  height: 480px;
}

h1 {
  font-family: "Lato", sans-serif;
  text-align: center;
  margin-top: 2em;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #f6f4f3;
}

#timer {
  color: #f6f4f3;
  text-align: center;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-size: 0.7em;
  letter-spacing: 5px;
  margin-top: 25%;
}

.days,
.hours,
.minutes,
.seconds {
  display: inline-block;
  padding: 20px;
  width: 100px;
  border-radius: 5px;
}

.days {
  background: #ef2f3c;
}

.hours {
  background: #f6f4f3;
  color: #183059;
}

.minutes {
  background: #276fbf;
}

.seconds {
  background: #f0a202;
}

.numbers {
  font-family: "Montserrat", sans-serif;
  color: #183059;
  font-size: 5em;
}

.white {
  position: absolute;
  background: #f6f4f3;
  height: 85px;
  width: 75px;
  left: 30%;
  top: 2%;
}
.white .triangle {
  border-bottom: 14px solid #f6f4f3;
}
.white .string {
  background: #f6f4f3;
  border: 1px solid #f6f4f3;
}

.red {
  position: absolute;
  background: #ef2f3c;
  left: 18%;
  top: 9%;
  height: 65px;
  width: 70px;
}
.red .triangle {
  border-bottom: 14px solid #ef2f3c;
}
.red .string {
  background: #ef2f3c;
  border: 1px solid #ef2f3c;
}

.blue {
  position: absolute;
  background: #276fbf;
  height: 80px;
  width: 80px;
  left: 60%;
  top: 5%;
}
.blue .triangle {
  border-bottom: 14px solid #276fbf;
}
.blue .string {
  background: #276fbf;
  border: 1px solid #276fbf;
}

.balloon {
  border: 1px solid #000;
  border-radius: 50% 50% 50% 50%/ 40% 40% 60% 60%;
  z-index: 2;
}

.eye {
  position: absolute;
  width: 7px;
  height: 7px;
  top: 40%;
  left: 22%;
  background: #000;
  border-radius: 50%;
}
.eye:after {
  content: "";
  left: 35px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #000;
  position: absolute;
}

.mouth {
  position: absolute;
  top: 45%;
  left: 43%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.happy {
  border: 2px solid;
  border-color: transparent #000 #000 transparent;
  transform: rotate(45deg);
}

.triangle {
  position: absolute;
  left: 40%;
  bottom: -10%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
}

.string {
  position: absolute;
  height: 70px;
  width: 1px;
  left: 48%;
  top: 100%;
  z-index: -1;
}

.star {
  width: 20px;
  height: 20px;
  background: #f6f4f3;
  -webkit-clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.star-red {
  width: 30px;
  height: 30px;
  margin-left: 51px;
  margin-top: -5px;
  background: #ef2f3c;
  -webkit-clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
</style>