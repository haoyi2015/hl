<template>
    <div class="box"
        v-tap="vuetouch" //vuetouch为函数名，如没有参数，可直接写函数名
        v-longtap="{fn:vuetouch,name:'长按'}" //如果有参数以对象形式传，fn 为函数名
        v-swipeleft="{fn:vuetouch,name:'左滑'}"
        v-swiperight="{fn:vuetouch,name:'右滑'}"
        v-swipeup="{fn:vuetouch,name:'上滑'}"
        v-swipedown="{fn:vuetouch,name:'下滑'}"
    >{{ name }}</div>
</template>
<script>
    export default{
        data(){
            return{
                name:""
            }
        },
        methods:{
            vuetouch:function(s,e){
                this.name=s.name;
            }
        }
    }
</script>
