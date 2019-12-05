<template>
    <article>
        <div class="weui-navbar" style="position: static;color: hsla(0,0%,100%,.67); background-color: #242f42;">
            <div class="weui-navbar__item" @click="tab(1)" :class="tabs==1?'act':''">
                单选
            </div>
            <div class="weui-navbar__item" @click="tab(2)" :class="tabs==2?'act':''">
                多选
            </div>
        </div>
        <checkbox-box :chkbType="tabss" :chkbData="list" @checkbox-fun="datas"></checkbox-box>
    </article>
</template>
<style lang="less">
    .weui-navbar__item.act{
        background-color:#409eff;
        color: #fff;
    }
</style>

<script>
/*
    * chkbType 选择类型 true false
    * chkbData 盒子数据
    * checkbox-fun 回调函数
 */
    import checkboxBox from '@/components/checkbox'
    let phones = [
            {
                id:1,
                name:'华为',
            },
            {
                id:2,
                name:'荣耀',
            },
            {
                id:3,
                name:'小米',
            },
            {
                id:4,
                name:'魅族',
            },
            {
                id:5,
                name:'OPPO',
            },
            {
                id:6,
                name:'vivo',
            }
        ]
    export default{
        data(){
            return{
                list:phones,
                tabs:1,
                tabss: false
            }
        },
        components:{
            checkboxBox
        },
        methods:{
            tab(t){
                this.tabs = t
                this.tabss = t ==1?false:true
            },
            datas(a){
                console.log('回调---------'+a)
            }
        }
    }
</script>
