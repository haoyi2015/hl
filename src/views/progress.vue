<template>
    <div class="container">
        <section>
            <!--demo-0-->
            <h3>demo 0  默认效果</h3>
            <progress-bar ref="aa"></progress-bar>

            <!--demo-1-->
            <h3>demo 1 基本效果</h3>
            <progress-bar width="40%" leftBg="greenyellow" bgc="#ccc" ballBgc="red"></progress-bar>

            <!--demo-2-->
            <h3>demo 2 渐变效果</h3>
            <progress-bar width="60%" leftBg="linear-gradient(to right, yellow, pink)" bgc="#ccc" ballBgc="red"></progress-bar>

            <!--demo-3-->
            <h3>demo 3 加高效果</h3>
            <progress-bar width="80%" leftBg="yellow" bgc="#ccc" ballBgc="red" height="30px"></progress-bar>

            <!--demo-4-->
            <h3>demo 4 小球透明效果</h3>
            <progress-bar leftBg="greenyellow" bgc="#ccc" ballBgc="rgba(255,0,0,0.2)" height="40px"></progress-bar>

            <!--demo-5-->
            <h3>demo 5 接收pbar-drag、pbar-seek事件数据</h3>
            <progress-bar width="100%" leftBg="greenyellow" bgc="#ccc" ballBgc="red" :percent="percent"
                          @pbar-drag="drag" @pbar-seek="seek"></progress-bar>
            <div>当前秒数：{{currentMiao}}, 百分比 = {{percent}}</div>

            <button type="button" @click="btnClick">播放</button>
        </section>
    </div>
</template>
<style media="screen">
    .container{
        position: static;
    }
</style>
<script>
    /*
        *progress
     */
    import ProgressBar from '@/components/progress'

    export default {
        name: 'app',
        data() {
            return {
                miao: 300,
                currentMiao: 10,
                percent: 0
            }
        },
        components: {
            ProgressBar
        },
        methods:{
            drag(percent){
                this.currentMiao = percent / 100 * 300;
                console.log(percent)
            },
            seek(percent){
                this.currentMiao = percent / 100 * 300;
                console.log(percent)
            },
            btnClick(){
                window.setInterval( () => {
                    this.currentMiao ++;
                }, 1000);
            }
        },
        mounted(){
            this.percent = this.currentMiao / this.miao * 100;
        },
        watch: {
            currentMiao(cur, old){
                this.percent = cur / this.miao * 100;
            }
        }
    }
</script>
