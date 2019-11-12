<template>
    <div class="code-content">
		<props-dom
		title="这是标题"
		width="80"
		height="80"
		:propsObject="propsVal"
		@emitFun="getEmitFun"
		@change="change"
		ref="home"
		:syncText.sync="titleText"
		>
		</props-dom>
		emit: {{ emitVal }}<br>
		$listeners: {{ listeners }}<br>
		EventBus: 
    </div>
</template>
<script>
import propsDom from '../components/props'
export default {
    components:{
		propsDom
	},
	//父组件:
	provide: { //provide 是一个对象,提供一个属性或方法
		foo: '这是 foo',
		fooMethod:()=>{
			console.log('父组件 fooMethod 被调用')
		}
	},
	data() {
		return {
			propsVal: '1111',
			emitVal: '',
			listeners: '',
			titleText: 'titleText'
		}
	},
	methods: {
		getEmitFun(c) {
			console.log(c)
			this.emitVal = c
		},
		change(c) {
			console.log(c,'----')
			this.listeners = c+' $listeners'
		}
	},
	mounted() {
		console.log(this.$children) 
		//可以拿到 一级子组件的属性和方法
		//所以就可以直接改变 data,或者调用 methods 方法

		// $refs
		console.log(this.$refs.home) //即可拿到子组件的实例,就可以直接操作 data 和 methods

		// $root
		console.log(this.$root) //获取根实例,最后所有组件都是挂载到根实例上
		console.log(this.$root.$children[0]) //获取根实例的一级子组件
		console.log(this.$root.$children[0].$children[0]) //获取根实例的二级子组件

		// EventBus传值
		this.$eventBus.$emit('eventTarget','这是eventTarget传过来的值')
	}
}
</script>
<style lang="scss" scoped>
    
</style>