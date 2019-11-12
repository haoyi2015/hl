<template>
    <section>
        <h1 class="h1-font">组件通讯</h1>
        props: {{ propsObject }}<br>
        <!-- <h1 class="h1-font">$emit:</h1> -->
        <h1 class="h1-font" v-if="false">vuex: 暂时忽略</h1>
        $attrs: {{ attrsVal }}
    </section>
</template>
<script>
export default {
    //props:['propsObject'], // 不建议使用
    // 对象
    props:{
        propsObject:{
            type:[Number,String], //传入值限定类型
            // type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol
            // type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
            required: true, //是否必传
            default:200
        },
        emitFun:{
            type:Function,
            default:function(){}
        },
        width: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            attrsVal: ''
        }
    },
    created() {
        this.$emit('emitFun',[{title:'这是title'}])
    },
    // 子或者孙子组件
    inject: ['foo','fooMethod'], //数组或者对象,注入到子组件
    mounted() {
        this.attrsVal = this.$attrs
        console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
        console.log(this.$listeners.change(33)) //即可拿到 change 事件
        // provide和inject
        this.fooMethod()
        console.log(this.foo)
        // $parent和$children
        console.log(this.$parent) //可以拿到 parent 的属性和方法
        // .sync
        this.$emit("update:syncText", '这是新的title')
        // eventBus 接收组件
        this.$eventBus.$on("eventTarget",v=>{
            console.log('eventTarget',v);//这是eventTarget传过来的值
        })
    }
}
</script>