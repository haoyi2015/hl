<template>
  <div>
    <br>
    <a @click="popupOpen('top')" href="javascript:;" class="weui-btn weui-btn_primary">top popup弹窗</a>
    <a @click="popupOpen('right')" href="javascript:;" class="weui-btn weui-btn_primary">right popup弹窗</a>
    <a @click="popupOpen('bottom')" href="javascript:;" class="weui-btn weui-btn_primary">bottom popup弹窗</a>
    <a @click="popupOpen('left')" href="javascript:;" class="weui-btn weui-btn_primary">left popup弹窗</a>
    <popup :open.sync="openFullTitle" :full="true" title="popup弹窗" :direction="direction">
      <div style="padding:0 0.2rem">
      新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。
      学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。
      </div>
    </popup>
  </div>
</template>
<style media="screen">
    .w-confirm {
        position: fixed;
        left: 0;
        top: 0;
        text-align: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1000;
        display: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }

    .w-confirm-wrapper {
        display: table-cell;
        vertical-align: middle;
        position: relative;
        z-index: 1;
        text-align: center
    }

    .w-confirm-inner {
        background: #fff;
        border-radius: 6px;
        width: 80%;
        display: inline-block;
        min-width: 200px;
        -webkit-box-shadow: 0 .5 .6 rgba(0, 0, 0, .1);
        box-shadow: 0 .5 .6 rgba(0, 0, 0, .1);
        overflow: hidden
    }

    .w-confirm-title {
        margin: 6px;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .w-confirm-body {
        max-height: 46%;
        padding: 15px 10px;
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch
    }

    .w-confirm-footer {
        position: relative;
        background-color: #fff;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(50%, #ddd), color-stop(0, transparent));
        background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 0)
    }

    .w-confirm-footer a,
    .w-confirm-footer button {
        border: 0;
        outline: 0;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        vertical-align: middle;
        padding: 12px 0;
        user-select: none;
        position: relative;
        font-size: 16px;
        line-height: 100%;
        color: #999
    }

    .w-confirm-footer a:active,
    .w-confirm-footer button:active {
        background-color: rgba(0, 0, 0, .1)
    }

    .w-confirm-footer a+a,
    .w-confirm-footer a+button,
    .w-confirm-footer button+a,
    .w-confirm-footer button+button {
        background-size: 1px 100%;
        background-repeat: no-repeat;
        background-position: left;
        background-image: -webkit-gradient(linear, left top, right top, from(#ddd), color-stop(50%, #ddd), color-stop(0, transparent));
        background-image: linear-gradient(90deg, #ddd, #ddd 50%, transparent 0)
    }

    .w-confirm-footer a:last-child,
    .w-confirm-footer button:last-child {
        color: #39f
    }

    .w-confirm-table {
        width: 100%;
        display: table;
        min-height: 28px
    }

    .w-confirm-cell {
        display: table-cell;
        vertical-align: middle;
        font-size: 20px;
    }

    .confirm-scale-enter-active,
    .confirm-scale-leave-active {
        -webkit-transition: opacity .2s ease 0s, -webkit-transform .2s ease 0s;
        transition: opacity .2s ease 0s, -webkit-transform .2s ease 0s;
        transition: transform .2s ease 0s, opacity .2s ease 0s;
        transition: transform .2s ease 0s, opacity .2s ease 0s, -webkit-transform .2s ease 0s
    }

    .confirm-scale-enter {
        opacity: 0;
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    .confirm-scale-leave-active {
        opacity: 0;
        -webkit-transform: scale(.9);
        transform: scale(.9)
    }

    .confirm-fade-enter-active,
    .confirm-fade-leave-active {
        -webkit-transition: opacity .2s ease 0s;
        transition: opacity .2s ease 0s
    }

    .confirm-fade-enter,
    .confirm-fade-leave-active {
        opacity: 0
    }
    .w-overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #000;
    }
    .w-flexbox {
        display: -ms-flexbox;
        display: -moz-flex;
        display: flex;
    }
    .w-flexbox-item {
        -ms-flex: 1;
        -moz-flex: 1;
        flex: 1;
        min-width: 0;
    }
</style>
<script>
import popup from '../components/popup'

export default {
  data () {
    return {
      openFullTitle: false,
      direction: ''
    }
  },
  created() {
      //this.open =true
  },
  components: {
      popup
  },
  methods: {
    popupOpen (t) {
        this.direction = t
        this.openFullTitle = true
    }
  }
}
</script>

<style lang="scss">

</style>
