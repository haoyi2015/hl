<template>
    <div class="tells-warp" v-show="tellShowFalg">
        <div class="tells-bottom">
            <a href="tel:4006060854" @click="tellTrueBtn">
                呼叫<br />
                <span>4006060854</span>
            </a>
            <button @click="tellCancelBnt">取 消</button>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .tells-warp{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9;
        .tells-bottom{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        button,a{
            width: 100%;
            color: #4A4A4A;
            display: block;
            font-family: 'PingFangSC-Semibold';
            background: #fff;
            text-align: center;
            padding: 7px 0;
            border: 0;
            span{
                color: #9B9B9B;
                font-size: 12px;
            }
        }
        button{
            border-top: 5px solid #F6F6F6;
            padding: 15px 0;
            color: #9B9B9B;
        }
    }
</style>
<script>
export default {
    props:{
        tellShow: {
            type: Boolean,
            default: false
        },
        tellTrue: {
            type: Function,
            default: function(){}
        },
        tellCancel: {
            type: Function,
            default: function(){}
        }
    },
    data () {
        return {
            tellShowFalg: false
        }
    },
    methods: {
        tellTrueBtn() {
            this.$emit('tellTrue')
            this.tellShowFalg = false
        },
        tellCancelBnt() {
            this.$emit('tellCancel')
            this.tellShowFalg = false
        }
    },
    watch: {
        tellShow(newVal, oldVal) {
            this.tellShowFalg = newVal
        }
    }
}
</script>

