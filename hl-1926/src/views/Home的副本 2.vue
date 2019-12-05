<template>
  <section>
    <!-- <section class="div_content">
    <div class="ul-header border-1px">
      <div class="left-menu">
        <a href="/home">首页</a>
      </div>
    </div>
    </section>
    <div class="fixedbg"></div> -->
    <div class="cont-warp">
		<h1>{{ setTime }}</h1>
		<div id="clock">
			<p class="date">{{ date }}</p>
			<p class="time">{{ time }}</p>
		</div>
		<div class="us-cont">
			<div class="first-name">
				<span> love </span>
			</div>
			<div class="heart">
				<div class="hover-cont-top">我的</div>
				<div class="right-heart"></div>
				<div class="left-heart"></div>
				<div class="hover-cont">小可爱</div>
			</div>
			<div class="last-name">
				<span> you </span>
			</div>
		</div>
		<div class="text-wrapper">
			<div class="text part1">
				<span class="letter" v-for="(letter, index) in letters" 
					:class="{ poofed: !letter }"
					>
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
export default {
	data () {
		return {
			showLeftMenu: false,
			showWeatherList: false,
			setTime: '',
			time: '',
			date: '',
			goDate: '',
			letters: []
		}
	},
	methods: {
		setDateFun (){
			const _this = this
			function fnDate(){
				let oDiv = _this.$refs.dates;
				let date = new Date();
				let year = date.getFullYear();//当前年份
				let month = date.getMonth();//当前月份
				let data = date.getDate();//天
				let hours = date.getHours();//小时
				let minute = date.getMinutes();//分
				let second = date.getSeconds();//秒
				let time = year+"年"+fnW((month+1))+"月"+fnW(data)+"日 "+fnW(hours)+"时"+fnW(minute)+"分"+fnW(second)+"秒";
				_this.setTime = time
			}
			//补位 当某个字段不是两位数时补0
			function fnW(str){
				let num;
				str>=10?num=str:num="0"+str;
				return num;
			}
			//定时器每秒调用一次fnDate()
			setInterval(function(){
				fnDate();
			},1000);
		}
	},
	mounted () {
		// this.setDateFun()
		const _this = this
		let week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
		let timerID = setInterval(updateTime, 1000);
		updateTime();
		function updateTime() {
			let cd = new Date();
			_this.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
			_this.date = zeroPadding(cd.getFullYear(), 4) + '年' + zeroPadding(cd.getMonth()+1, 2) + '月' + zeroPadding(cd.getDate(), 2) + '日 ' + week[cd.getDay()];
		};

		function zeroPadding(num, digit) {
			let zero = '';
			for(let i = 0; i < digit; i++) {
				zero += '0';
			}
			return (zero + num).slice(-digit);
		}
		let date1 = new Date();
		let date2 = new Date('2019-02-6');
		let date = (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000);
		//this.goDate = parseInt(date)
		String(100).split("")
		console.log(parseInt(date).toString().split(''))
		// this.goDate
		let dateTime = ''
		dateTime = parseInt(date).toString().split('')
		// dateTime.splice(0, 0, "在一起");
		dateTime.push('天')
		this.letters = dateTime
	}
}
</script>
<style>
	@import url("/css/home.css");
</style>