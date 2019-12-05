<template>
    <section>
        <div class="recom-dialog" v-show="showMask&&!tellShowFalg">
            <div class="dialog-container" ref="dialogH" :style="dialogH">
                <div class="hed-top">
                    <div class="dialog-title">{{title}}</div>
                </div>
                <div class="content" v-if="content" v-html="content"></div>
                <div class="btns" ref="bntH">
                    <button v-if="cancelBnt=='cancel'" class="default-btn" @click="closeBtn">
                        {{cancelText}}
                    </button>
                    <!--带复制-->
                    <button v-show="dangerBnt=='danger'&&copyMsg"
                    v-clipboard:copy="copyMsg"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    :class="cancelBnt!='cancel'?'max':''"
                    class="danger-btn">
                        {{dangerText}}
                    </button>
                    <button v-show="dangerBnt=='danger'&&!copyMsg"
                    @click="dangerBtn"
                    :class="cancelBnt!='cancel'?'max':''"
                    class="danger-btn">
                        {{dangerText}}
                    </button>
                </div>
            </div>
        </div>
        <mini-bottom
            :tellShow="tellShowFalg"
            @tellTrue="clickTellCall()"
            @tellCancel="clickTellCancel()" >
        </mini-bottom>
    </section>
</template>
<script>
    import Vue from 'vue';
    import VueClipboard from 'vue-clipboard2'
    import MiniBottom from '@/components/modal/tellBottom'

    Vue.use(VueClipboard)
    export default {
        components: {
            MiniBottom
        },
        props: {
            value: {},
            copyMsg: {},
            // 类型包括 defalut 默认， danger 危险， confirm 确认，
            type: {
                type: String,
                default: 'default'
            },
            dangerBnt: {
                type: String,
                default: 'dangerBnt'
            },
            cancelBnt: {
                type: String,
                default: 'dangerBnt'
            },
            content: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            dangerText: {
                type: String,
                default: '删除'
            },
            confirmText: {
                type: String,
                default: '确认'
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
        data() {
            return {
                showMask: false,
                dialogH: '',
                tellShowFalg: false
            }
        },
        methods: {
            closeMask() {
                this.showMask = false;
            },
            closeBtn() {
                this.$emit('cancel');
                this.closeMask();
                this.tellShowFalg = false;
            },
            //打电话特殊处理
            clickTellCall(type){
                console.log(type+' 这里是tell---true回调')
                this.tellShowFalg = false;
                this.showMask = false
            },
            clickTellCancel(type){
                console.log(type+' 这里是tell----cancel回调')
                this.tellShowFalg = false;
                this.showMask = false
            },
            dangerBtn() {
                const _this = this;
                if(_this.type == "tell"){
                    let ua = window.navigator.userAgent.toLowerCase();
                    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                        
                    }else{
                        this.tellShowFalg = true;
                    }
                    return
                }
                this.$emit('danger');
                this.closeMask();
            },
            confirmBtn() {
                this.$emit('confirm');
                this.closeMask();
            },
            onCopy: function(e) {
                console.log('你刚刚复制: ' + e.text)
                this.$toast({message: '已成功复制微信号'})
                this.$emit('danger');
                this.closeMask();
            },
            onError: function(e) {
                console.log('无法复制文本！')
                this.$toast({message: '抱歉，复制失败，您需手动选择VIPPNL复制'})
            }
        },
        mounted() {
            this.showMask = this.value;
        },
        watch: {
            value(newVal, oldVal) {
                this.showMask = newVal;
                const dialogDom = (()=>{
                    let hval = this.$refs.dialogH.clientHeight/2
                    let wval = this.$refs.dialogH.offsetWidth/2
                    this.dialogH = `margin-left:-${wval}px;margin-top:-${hval}px`;
                })
                if(newVal){
                    //监听窗口变化
                    window.onresize = function temp() {
                        console.log('onresize')
                        dialogDom()
                    }
                    this.$nextTick(()=>{
                        dialogDom()
                    })
                }
            },
            showMask(val) {
                this.$emit('input', val);
            }
        },
    }
</script>
<style lang="less" scoped>
    .recom-dialog {
        button{border: 0}
        button:active{ background-color:none;}
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9;
        .dialog-container {
            width: 76%;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 10px;
            .dialog-title {
                width: 100%;
                font-size: 16px;
                color: #4A4A4A;
                font-weight: bold;
                padding: 16px 20px 16px 20px;
                box-sizing: border-box;
                text-align: center;
            }
            .content {
                color: #4A4A4A;
                line-height: 1.4;
                padding: 0 20px;
                box-sizing: border-box;
                overflow-y: auto;
                padding-bottom: 20px;
                font-family: 'PingFangSC-Regular';
            }
            .inp {
                margin: 10px 0 0 20px;
                width: 200px;
                height: 40px;
                padding-left: 4px;
                border-radius: 4px;
                border: none;
                background: #efefef;
                outline: none;
                &:focus {
                    border: 1px solid #509EE3;
                }
            }
            .btns {
                width: 100%;
                text-align: center;
                box-sizing: border-box;
                background: #fff;
                border-radius: 0 0 25px 25px;
                border-top: 1px solid #E9E9E9;
                & > button {
                    display: inline-block;
                    height: 44px;
                    text-align: center;
                    cursor: pointer;
                    font-size: 16px;
                    font-family: 'PingFangSC-Semibold';
                    width: 49%;
                    background: none;
                }
                .default-btn {
                    color: #9B9B9B;
                    border-right: 1px solid #E9E9E9;
                }
                .danger-btn {
                    color: #FD5E02;
                }
                .danger-btn.max{
                    width: 100%;
                }
            }
        }
    }
</style>
