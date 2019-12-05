<template>
  <section class="home-warp">
    <div class="lay_background" id="lay_bg" :style="bodyWh">
      <img
        class="lay_background_img lay_background_img_fade_out"
        id="lay_bg_img"
        alt
        src="http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191603_896cd9.jpg"
        :style="bodyImgWh"
      />
    </div>
    <div class="container w-flex">
		<div class="container-cont">
			<div class="balloon red">
				<div class="star"></div>
				<div class="face">
					<div class="eye"></div>
					<div class="mouth happy"></div>
				</div>
				<div class="triangle"></div>
				<div class="string"></div>
			</div>
			<div class="days">
				<div class="numbers"></div>
				<span class="date-numbs" v-for="days in letters">{{ days }}</span>
				天(相识)
			</div>
		</div>
		<div class="container-cont">
			<div class="balloon white">
				<div class="star-red"></div>
				<div class="face">
					<div class="eye"></div>
					<div class="mouth happy"></div>
				</div>
				<div class="triangle"></div>
				<div class="string"></div>
			</div>
			<div class="hours">
				<div class="numbers"></div>
				<span class="date-numbs">{{ dateObj.hours }}</span>时
			</div>
		</div>
		<div class="container-cont">
			<div class="balloon blue">
				<div class="star"></div>
				<div class="face">
					<div class="eye"></div>
					<div class="mouth happy"></div>
				</div>
				<div class="triangle"></div>
				<div class="string"></div>
			</div>
			<div class="minutes">
				<div class="numbers"></div>
				<span class="date-numbs">{{ dateObj.minutes }}</span>分
			</div>
		</div>
		<div class="container-cont">
			<div class="seconds">
				<div class="numbers"></div>
				<span class="date-numbs">{{ dateObj.seconds }}</span>秒
			</div>
		</div>
	  </div>
    </div>
	<div class="top-y-m-h" v-if="dataObjItem<=0">
		<div class="top-item">
			<span>{{ date }}</span>
		</div>
	</div>
	<!--倒计时-->
	<div class="se-kl-warp-right" v-if="dataObjItem[0]>=1">
		<div class="se-kl">
			<!-- <div class="se-cn">倒计时</div>
			<div class="se-en">COUNT DOWN</div>
			<i class="se-io"></i>
			<div class="se-info">
				{{ date }}<br>
				距离到时还剩
			</div> -->
			<div class="se-count">
				<!-- <div class="se-day"></div> -->
				<!-- <div class="se-hour"><span class="se-txt">{{ dataObjItem[0] }}</span></div> -->
				<div class="se-min"><span class="se-txt">{{ dataObjItem[0] }}天</span></div>
				<!-- <div class="se-sec"><span class="se-txt">{{ dataObjItem[2] }}</span></div> -->
			</div>
		</div>
	</div>
    <div class="cont-warp">
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
      <div class="cont-dec">一路走来，谢谢你（在那个未知的世界）的陪伴，终于等到你，还好没放弃</div>
    </div>
	<!--进入主页-->
	<div id="boxes">
		<a href="#/blog">
			<div style="--color: #f44336">
			</div>
		</a>
		<!-- <div style="--color: #e91e63"></div>
		<div style="--color: #9c27b0"></div>
		<div style="--color: #2196f3"></div>
		<div style="--color: #4caf50"></div>
		<div style="--color: #ff9800"></div> -->
	</div>
  </section>
</template>
<script>
//http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171123181522_c48800.jpg
	function run(enddate) {
		getDateFun(enddate);
		setInterval(function() {
			getDateFun(enddate);
		}, 500);
	}

	function getDateFun(enddate) {
		var oDate = new Date(); //获取日期对象

		var nowTime = oDate.getTime(); //现在的毫秒数
		var enddate = new Date(enddate);
		var targetTime = enddate.getTime(); // 截止时间的毫秒数
		var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

		var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
		second = second % 86400; //余数代表剩下的秒数；
		var hour = Math.floor(second / 3600); //整数部分代表小时；
		second %= 3600; //余数代表 剩下的秒数；
		var minute = Math.floor(second / 60);
		second %= 60;
		//vms.dataObjItem = [hour,minute,minute]
		console.log([hour,minute,minute])
		//return [hour,minute,minute]
	}

	function tow(n) {
		return n >= 0 && n < 10 ? '0' + n : '' + n;
	}
import { getDistanceSpecifiedTime } from '@/util/time'
export default {
	data() {
		return {
			showLeftMenu: false,
			showWeatherList: false,
			setTime: "",
			time: "",
			date: "",
			goDate: "",
			letters: [],
			dateObj:{
				hours: '',
				minutes: '',
				seconds: ''
			},
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight,
			tops: document.documentElement.clientHeight/2,
			dataObjItem: getDistanceSpecifiedTime('2020/03/01'),
			bodyImgWh:`width:${document.documentElement.clientWidth}px;height:${window.screen.height}px`,
			bodyWh:`width:${document.documentElement.clientWidth}px;height:${document.documentElement.clientHeight}px`
		};
	},
	created() {
		const _this = this
		window.onresize = function(){
			var bg = document.getElementById('lay_bg'),
				bg_img = document.getElementById('lay_bg_img'),
				cw = window.screen.width,
				ch = window.screen.height,
				iw = bg_img.width,
				ih = bg_img.height;

			bg.style.width = cw + "px";
			bg.style.height = ch + "px";

		if(cw / ch > iw / ih){
			var new_h = cw * ih / iw,
			imgTop = (ch - new_h) / 2;
			bg_img.style.width = cw + "px";
			bg_img.style.height = new_h + "px";
			bg_img.style.top = imgTop + "px";
			bg_img.style.left = "";
		}else{
			var new_w = ch * iw / ih,
			imgLeft = (cw - new_w) / 2;
			bg_img.style.width = new_w + "px";
			bg_img.style.height = ch + "px";
			bg_img.style.left = imgLeft + "px";
			bg_img.style.top = "";
		}
			// _this.bodyWh = `width:${document.documentElement.clientWidth}px;height:${document.documentElement.clientHeight}px`
			// _this.bodyImgWh = `width:${document.documentElement.clientWidth}px;height:${window.screen.height}px;top:${}`
        }
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
			
			// 时分秒
			_this.dateObj = {
				hours: zeroPadding(cd.getHours(), 2),
				minutes: zeroPadding(cd.getMinutes(), 2),
				seconds: zeroPadding(cd.getSeconds(), 2)
			}
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
		// this.goDate
		let dateTime = "";
		dateTime = parseInt(date)
			.toString()
			.split("");
		// dateTime.splice(0, 0, "在一起");
		this.letters = dateTime;
		// 进入主页动画
		let boxes = document.querySelectorAll('#boxes > div');
			[].forEach.call(boxes, box => {
				box.addEventListener('mousemove', e => {
				document.body.style.setProperty(
					'--bg-color',
					box.style.getPropertyValue('--color')
				);

				let size = parseInt(getComputedStyle(box).width);
				
				// scaling
				let x = size * .3 * .7 + .7 * e.offsetX;
				let y = size * .3 * .7 + .7 * e.offsetY;
				
				box.style.setProperty('--x', x);
				box.style.setProperty('--y', y);
				box.style.setProperty('--size', size);
				});
			});
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
<style>
	.top-y-m-h{
		position: fixed;
		top: 0;
		right: 0;
		z-index: 9;
		background-color: #e83632;
		width: 190px;
	}
	.top-item{
		position: relative;
		/* background-color: #2f3430; */
		min-width: 40px;
		height: 40px;
		float: left;
		text-align: center;
		line-height: 40px;
		/* margin-right: 5px; */
		padding: 0 10px;
	}
	.top-item span{
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}
	.container {
		/* position: relative; */
		/* margin: auto; */
		overflow: hidden;
		/* width: 650px; */
		height: 480px;
		color: #f6f4f3;
		/* text-align: center; */
		text-transform: uppercase;
		font-family: "Lato", sans-serif;
		font-size: 0.7em;
		letter-spacing: 5px;
	}
	.w-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}

	#timer-warp {
		color: #f6f4f3;
		text-align: center;
		text-transform: uppercase;
		font-family: "Lato", sans-serif;
		font-size: 0.7em;
		letter-spacing: 5px;
	}
	.container-cont{
		position: relative;
	}
	.days,
	.hours,
	.minutes,
	.seconds {
		display: inline-block;
		padding: 20px;
		min-width: 60px;
		border-radius: 5px;
		font-size: .4rem;
		margin-right: .26rem;
	
		animation: myfirst 2s infinite;
	}
	.date-numbs{
		font-size: .8rem;
	}
	.days {
		background: #ef2f3c;
		margin-top: 138px;
	}

	.hours {
		background: #f6f4f3;
		color: #183059;
		margin-top: 182px;
	}

	.minutes {
		background: #276fbf;
		margin-top: 146px;
	}

	.seconds {
		background: #f0a202;
		margin-top: 182px;
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
		left: 20%;
		top: 5%;
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
		left: 56px;
		top: 3px;
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
		left: 50%;
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

	@keyframes myfirst {
		0% {
			transform: translate(0px, 0px);
		}
		50% {
			transform: translate(0px, -10px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}

	.se-kl-warp-right{
		position: fixed;
		top: 0;
		right: 0;
		border-radius: 3px;
	}

	.se-kl {
		width: 190px;
		height: 275px;
		/* background-color: #e83632; */
		background: url('../assets/images/times-bg.png') no-repeat;
		margin: 0 auto;
		position: relative;
	}
	@keyframes bounce {
		0% {
			transform: translate3d(0, 0, 0);
			text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
		}
		100% {
			transform: translate3d(0, -1em, 0);
			text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
		}
	}
	.se-cn {
		position: absolute;
		top: 20px;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 34px;
		color: #fff;
	}

	.se-en {
		position: absolute;
		top: 70px;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.5);
	}

	.se-io {
		width: 20px;
		height: 33px;
		position: absolute;
		background: url(../assets/images/seckill.png) no-repeat;
		background-position: -32.5px 0;
		background-size: 52.5px 40px;
		left: 85px;
		top: 104px;
		display: block;
	}

	.se-info {
		position: absolute;
		top: 150px;
		text-align: center;
		width: 100%;
		font-size: 16px;
		color: #fff;
	}

	.se-count {
		position: absolute;
		bottom: -10px;
		right: 22px;
		height: 40px;
		/* transform: translateX(-50%); */
		animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
	}

	.se-day {
		display: none;
	}

	.se-hour,
	.se-min,
	.se-sec {
		position: relative;
		background-color: #2f3430;
		width: 70px;
		height: 40px;
		float: left;
		text-align: center;
		line-height: 40px;
		margin-right: 5px;
		border-radius: 50%;
	}

	.se-txt {
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}

	.se-txt:before {
		content: "";
		display: block;
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #e83632;
	}
</style>
<style>
#boxes {
	position: fixed;
	right: -220px;
	bottom: 160px;
}
#boxes div { 
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; 
  -webkit-box-pack: center; 
      -ms-flex-pack: center; 
          justify-content: center;
}

/* body:after {
  z-index: -1;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  background: var(--bg-color, #f44336);
  opacity: .1;
} */

#boxes {
  counter-reset: number;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 320px) {
  #boxes {
    grid-template-columns: repeat(2, 1fr);
  }
}

#boxes div {
  counter-increment: number;
  width: 10vw;
  height: 10vw;
  min-width: 5em;
  min-height: 5em;
  -webkit-transition: .5s all ease;
  transition: .5s all ease;
  background: var(--color, #aaa);
  border: 0 solid transparent;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 50%;
  margin: .5em;
  opacity: .7;
  --dx: calc(var(--size) - var(--x));
  --dy: calc(var(--size) - var(--y));
}

#boxes div:first-child {
  --x: 84;
  --y: 75;
  --size: 128;
}

#boxes div:first-child,
#boxes div:hover {
  opacity: 1;
  cursor: pointer;
  border: calc(2px + .85vw) solid rgba(255, 255, 255, .5);
  -webkit-transition:
    .5s background-color ease,
    .2s border ease;
  transition:
    .5s background-color ease,
    .2s border ease;

  border-radius:
    calc(var(--x) / var(--size) * 100%) 
    calc(var(--dx) / var(--size) * 100%)
    calc(var(--dx) / var(--size) * 100%) 
    calc(var(--x) / var(--size) * 100%) / 
    calc(var(--y) / var(--size) * 100%) 
    calc(var(--y) / var(--size) * 100%) 
    calc(var(--dy) / var(--size) * 100%) 
    calc(var(--dy) / var(--size) * 100%) 
}
/* content: counter(number); */
#boxes div:first-child:after,
#boxes div:after {
  content: "走你";
  color: rgba(255, 255, 255, 0);
  font-size: calc(1vw + 1.2em);
  font-weight: 200;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  -webkit-transition-delay: .1s;
          transition-delay: .1s;
  -webkit-transform: translate3d(0, -.5em, 0);
          transform: translate3d(0, -.5em, 0);
}

#boxes div:first-child:after,
#boxes div:hover:after {
  color: rgba(255, 255, 255, .7);
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}</style>