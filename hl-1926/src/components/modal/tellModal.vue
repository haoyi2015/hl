<!-- 打电话弹窗 -->
<template>
    <article>
        {{modData}}
        <div class="mod-mack" v-show="modData.mFlag">
            <div class="mods">
                <p>
                    {{modData.ph}}
                </p>
                <div class="bnt">
                    <button @click="tellsFun(false)">取消</button>
                    <button class="save"><a :href="'tel:'+modData.ph">呼叫客服</a></button>
                </div>
            </div>
		</div>
    </article>
</template>

<style lang="less" scoped>
    .mod-mack{
        background: rgba(0, 0, 0, 0.68);
        width: 100%;
        height: 100%;
        position: fixed;
        margin: 0 auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        .mods{
            background: #FFFFFF;
            border-radius: 13px;
            width: 11.15rem;
            height: 5.2rem;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -5.575rem;
            margin-top: -3rem;
            p{
                font-family: "PingFangSC-Medium";
                font-size: .8rem;
                color: #FD5E02;
                letter-spacing: 0;
                text-align: center;
                padding-top: 1rem;
            }
            div.bnt{
                position: absolute;
                bottom: .7rem;
                width: 100%;
                text-align: center;
                button{
                    background: #FFFFFF;
                    border: 1px solid #FD5E02;
                    border-radius: 50px;
                    font-family: PingFangSC-Regular;
                    font-size: .6rem;
                    color: #FD5E02;
                    letter-spacing: 0;
                    line-height: 14px;
                    width: 4.28rem;
                    height: 1.6rem;
                }
                button.save{
                    background: #FD5E02;
                    color: #fff;
                    margin-left: .6rem;
                    a{
                        color: #fff;
                        display: block;
                    }
                }
            }
        }
    }
</style>
<script>
    export default{
        props:['modData'],
        methods:{
            tellsFun(t){
                let param ={
                    mflag:t
                }
                this.$emit('tellCall',param);
            }
        }
    }
</script>
