<template>
    <div class="recom-dialog" ref="showWarp" v-show="showMask">
        <div class="dialog-container" ref="dialogHval" :style="dialogHval">
            <div class="hed-top">
                <div class="dialog-title" ref="topH">{{title}}</div>
                <div class="close-btn" @click="closeMask">
                    <img src="@/assets/img/icon-close.svg" alt="">
                </div>
            </div>
            <div class="content" v-if="content" style="overflow: hidden;">
                <div class="simulation-vertical" v-html="content" :style="heightVal"></div>
            </div>
            <div class="content" v-if="!content" style="overflow: hidden;">
                <div class="simulation-vertical" :style="heightVal">
                    <slot></slot>
                </div>
            </div>
            <div class="btns" ref="bntH">
                <button v-if="cancelBnt=='cancel'" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </button>
                <button v-if="dangerBnt=='danger'" :class="cancelBnt!='cancel'?'max':''" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import { simpScroller } from '@/util/simpScroller'
    export default {
        props: {
            value: {},
            // 类型包括 defalut 默认， danger 危险， confirm 确认，
            type: {
                type: String,
                default: 'default'
            },
            bntFlag: {
                type: [String,Boolean],
                default: true
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
            }
        },
        data() {
            return {
                showMask: false,
                dialogHval:'',
                heightVal:'',
            }
        },
        methods: {
            closeMask() {
                this.showMask = false;
            },
            closeBtn() {
                this.$emit('cancel');
                this.closeMask();
            },
            dangerBtn() {
                this.$emit('danger');
                this.closeMask();
            },
            confirmBtn() {
                this.$emit('confirm');
                this.closeMask();
            },
            wSize () {
                let hval = this.$refs.dialogHval.clientHeight/2
                let wval = this.$refs.dialogHval.offsetWidth/2
                this.dialogHval = `margin-left:-${wval}px;margin-top:-${hval}px`;
            }
        },
        mounted() {
            this.showMask = this.value;
        },
        watch: {
            value(newVal, oldVal) {
                this.showMask = newVal;
                if(newVal){
                    this.$nextTick(()=>{
                        this.wSize();
                        let top = this.$refs.topH.clientHeight,
                            bnts = this.$refs.bntH.clientHeight,
                            dialogHval = this.$refs.dialogHval.clientHeight;
                            //设置盒子高度
                        this.heightVal = 'height:'+(dialogHval-(top+bnts))+'px'
                        setTimeout(()=>{
                            simpScroller(document.querySelector(".simulation-vertical"));
                        },0)
                    })
                }
            },
            showMask(val) {
                this.$emit('input', val);
            }
        }
    }
</script>
<style lang="less" scoped>
    .recom-dialog {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .hed-top{
            height: 50px;
        }
        .dialog-container {
            width: 88%;
            height: 94%;
            min-height: 160px;
            background: #ffffff;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 10px;
            .dialog-title {
                width: 100%;
                font-size: 20px;
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
                // overflow-y: auto;
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
                height: 60px;
                position: absolute;
                bottom: 0;
                left: 0;
                text-align: center;
                box-sizing: border-box;
                background: #fff;
                border-radius: 0 0 25px 25px;
                & > button {
                    display: inline-block;
                    height: 40px;
                    color: #ffffff;
                    background: #f1f1f1;
                    border-radius: 25px;
                    text-align: center;
                    cursor: pointer;
                    font-size: 16px;
                    font-family: 'PingFangSC-Semibold';
                    width: 42%;
                    margin-top: 8px;
                    margin-left: 3%;
                    margin-right: 3%;
                }
                .default-btn {
                    color: #9B9B9B;
                    &:hover {
                        color: #509EE3;
                    }
                }
                .danger-btn {
                    background: #FD5E02;
                    color: #fff;
                    &:hover {
                        background: rgb(224, 135, 135);
                    }
                    &:active {
                        background: #EF8C8C;
                    }
                }
                .danger-btn.max{
                    width: 94%;
                    margin-left: auto;
                    margin-right: auto;
                }
                .confirm-btn {
                    color: #ffffff;
                    background: #509EE3;
                    &:hover {
                        background: #6FB0EB;
                    }
                }
            }
            .close-btn {
                position: absolute;
                top: 12px;
                right: 12px;
                width: 16px;
                height: 16px;
                text-align: center;
                cursor: pointer;
                &:hover {
                    font-weight: 600;
                }
            }
        }
        .dialog-container.thg{
            height: 90%;
            .content{
                padding-bottom: 0;
            }
        }
    }
</style>
