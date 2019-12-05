<template>
    <section class="sw-warp">
        <div class="sw-head">
            <img src="@/assets/img/sw-banner.png" alt="">
        </div>
        <div class="sw-bg">
            <div class="sw-title">
                您可通过以下选项来设置是否推送上课提醒～
                <span class="se-t-dec">点击以下列表（左边文字标题）查看各个提醒规则</span>
            </div>
            <div class="sw-list" v-for="(sw,index) in swItem" :key="index">
                <div slot="title" class="left-s">
                    <a @click="remarkFun(true,sw)" href="javascript:;">{{sw.name}}</a>
                </div>
                <mk-switch @switchCall="swFun" :swvalue="sw.templateType" slot="value" v-model="sw.isOpen"/>
            </div>
        </div>
        <div class="sw-dec">
            您对以上选项设置后，「课前提醒」,「周排课提醒」和「日排课提醒」等消息将不在勿扰时段内通过微信推送
        </div>
        <div class="setting-warp" v-show="remarkFag">
            <div class="set-mask" @click="remarkFun(false,'')"></div>
            <div class="msk-dec" v-html="remark"></div>
        </div>
    </section>
</template>
<style lang="less" scoped>
    .sw-warp{
        max-width: 750px;
        margin: 0 auto;
        display: block;
        height: 100%;
        background: #F6F6F6;
        .sw-head img{
            width: 100%;
            vertical-align: middle;
        }
        .mk-switch--wrapper{
            width: 1.2rem;
            height: 0.68rem;
        }
    }
    .sw-bg{
        background: #fff;
    }
    .sw-list,.sw-title{
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .sw-title{
        padding: 15px;
        color: #545252;
        font-size: 0.4rem;
        position: relative;
        .se-t-dec{
            font-size: 0.266rem;
            display: block;
            position: relative;
            top: .1rem;
            color: #808080;
        }
        display: block;
    }
    .sw-list,.sw-title{
        border-bottom: 0.5px solid #f5f2f2;
        margin: 0 15px;
        padding-left: 0;
        padding-right: 0;
    }
    .left-s{
        margin-left: 0px;
        margin-right: 0px;
        -webkit-box-flex: 1;
        flex: 1 1 0%;
        min-width: 0px;
        font-family: 'PingFangSC-Regular';
        font-size: .36rem;
        a{
            color: #4A4A4A;
        }
    }
    .sw-dec{
        color: #9B9B9B;
        font-size: .15rem;
        font-family: 'PingFangSC-Regular';
        padding: 20px 15px;
        line-height: 1.6;
    }
    .setting-warp{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        top: 0;
        left: 0;
        z-index: 999;
        .set-mask{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
        }
    }
    .msk-dec{
        background: #fff;
        padding: 15px;
        line-height: 1.6;
        color: #4A4A4A;
        position: relative;
        z-index: 9999;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
<script>
import MkSwitch from '@/components/switch'
import { getUserSetList, postUserSet } from '@/service/userSetting';
import { getLogin } from '@/util/base';

export default {
  components: {
    MkSwitch
  },
  data () {
    return {
      swItem: [],
      remark: '',
      remarkFag: false
    }
  },
  created () {
    const _this = this
        //this.$toast({message: '信息有无稍后重试！！'})
        //return false
        // _this.$loading.open({
        //     message: '数据加载中...',
        //     magIcon: '' //完整图片路径 [static/images]
        // })
        _this.getData()
  },
  methods: {
    async getData() {
        let parms = {
            signature:'9a0baf8044211496e2ae5649a3628421',
            activity_id: 6
        }
        await getUserSetList(parms).then(resData => {
            let data = resData.data
            this.swItem = data
            //this.$loading.close()
        })
        .catch(error => {
            //this.$loading.close()
            //let blackUrl =APIMSG.wxUrl+'/user-setting';
            if(error.data.code === 1000){
                //window.location.href =APIMSG.weixapi+blackUrl;
            }else{
                this.$toast({
                    message: error.data.msg||'信息有无稍后重试！！',
                    align: 'center',// 设置类型 [top,center,bottom]
                    type: 'default',
                    duration : 1000 //消失时间
                })
                //this.$router.replace(`/errorpage`);
            }
        })
    },
    swFun (value) {
        let params = {
            permissionType: value[0]||'',
            isOpen: value[1]?1:0,
            studentId: this.$route.query.studentId||''
        }
        this.$loading.open({
            message: '数据处理中...',
            magIcon: '' //完整图片路径 [static/images]
        })
        //设置eslint提示
        postUserSet(params).then(resData => {// eslint-disable-line no-unused-vars
            this.$loading.close()
            this.$toast({
                message: '设置成功',
                align: 'center',// 设置类型 [top,center,bottom]
                type: 'default',
                duration : 1000 //消失时间
            })
        })
        .catch(error => {
            this.$loading.close()
            this.$toast({
                message: error.data.msg||'信息有无稍后重试！！',
                align: 'center',// 设置类型 [top,center,bottom]
                type: 'default',
                duration : 1000 //消失时间
            })
        })
    },
    remarkFun (fag,val) {
        if(fag){
            this.remark = val.remark
            this.remarkFag = true
        }else{
            this.remarkFag = false
        }
    }
  }
}
</script>