<template>
  <section>
   <div class="confirm-warp"
        v-if="isShow">
        <header class="h-title">{{ title }}</header>
        <p class="my-contant">
            <slot>{{ contant }}</slot>
            <!-- <img src="../assets/images/referralM7/7/pic_1@2x.png" class="bg-img" alt=""> -->
        </p>
        <div class="con-bnt-foot">
            <button class="ok-bnt" v-if="okBntText" @click="save()">{{ okBntText }}</button>
            <button class="cancel-bnt _leftbr" v-if="cancelBntText" @click="close()">{{ cancelBntText }}</button>
        </div>
    </div>
    <!--蒙层-->
    <div class="fix-warp-mask" v-if="isShow"></div>
  </section>
</template>
<script>
export default {
  /**
   * @param {boolean} isShow 是否显示modal框
   * @param {string|number} title 展示内容
   * @param {string} cancelBntText 取消按钮文字
   * @param {string} okBntText 确定按钮文字
   */
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String, Number],
      default: ''
    },
    contant: {
      type: [String, Number],
      default: ''
    },
    hideHeaderClose: {
      type: Boolean,
      default: false
    },
    cancelBntText: {
      type: String,
      default: '取消'
    },
    okBntText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    save () {},
    close () {}
  }
}
</script>
<style lang="less" scoped>
    .confirm-warp{
        background: #fff;
        min-height: 200px;
        min-width: 320px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);  /* 使用css3的transform来实现 */
        z-index: 10006;
        border-radius: 3px;
    }
    .my-contant{
        min-height: 160px;
        padding: 0 24px 22px;
        font-size: 17px;
        line-height: 1.4;
        word-wrap: break-word;
        word-break: break-all;
        color: rgba(0, 0, 0, 0.5);
        img{
            width: 100%;
        }
    }
    .con-bnt-foot{
        position: relative;
        min-height: 52px;
        line-height: 52px;
        font-size: 17px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        button{
            display: block;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            color: #576B95;
            font-weight: 700;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            position: relative;
            font-size: 18px;
            background: none;
        }
    }
    .con-bnt-foot:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
    .con-bnt-foot .ok-bnt{
        color: rgba(0, 0, 0, 0.9);
    }
    .con-bnt-foot .cancel-bnt{
        
    }
    ._leftbr:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
    }
    .h-title{
        padding: 22px 6px;
        font-weight: bold;
        text-align: center;
        font-size: 18px;
    }
    .fix-warp-mask{
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index:10001;
    }
</style>
