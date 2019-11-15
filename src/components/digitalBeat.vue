<template>
    <article class="clock-num">
        <div>
            {{initialVal}}
        </div>
    </article>
</template>
<script>
    export default{
        props:{
            beatObject:{
                type: '',
                default () {
                  return {}
                }
            }
        },
        data(){
            return{
                initialNum:this.beatObject||'',
                initialVal:''
            }
        },
        mounted(){
            this.NumAutoPlusAnimation(this.initialNum)
        },
        methods:{
        	NumAutoPlusAnimation(options) {
    			options = options || {};//配置参数
                console.log(options)

    			let $this = this,
    				time = options.time, //总时间--毫秒为单位
    				finalNum = options.num, //要显示的真实数值
    				regulator = options.regulator, //调速器，改变regulator的数值可以调节数字改变的速度
    				step = finalNum / (time / regulator),/*每30ms增加的数值--*/
    				count = 0, //计数器
    				initial = 0;

    			let timer = setInterval(function() {
    				count = count + step;
    				if(count >= finalNum) {
    					clearInterval(timer);
    					count = finalNum;
    				}
    				//t未发生改变的话就直接返回
    				//避免调用text函数，提高DOM性能
    				let t = Math.floor(count);
    				if(t == initial) return;
    				initial = t;
    				$this.initialVal = initial;
    			}, 30);
    		}
        }
    }
</script>
<style lang="scss">
    .clock-num {
        margin-top:10%;
        div{
            position:relative;
            background:#ffe8e8;
            border-radius:6px;
            max-width:114px;
            height:80px;
            line-height:80px;
            text-align:center;
            font-size:32px;
            margin:0px 5px;
            padding: 8px 16px;
            display: inline-block;
        }
    }
</style>
