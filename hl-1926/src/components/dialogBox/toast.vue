<template>
  <div>
    <br>
    <a @click="toastOpen('default')"
        href="javascript:;"
        class="weui-btn weui-btn_primary">
        top toast弹窗
    </a>
    <a @click="toastOpen('success')"
        href="javascript:;"
        class="weui-btn weui-btn_primary">
        center Success toast弹窗
    </a>
    <a @click="toastOpen('error')"
        href="javascript:;"
        class="weui-btn weui-btn_primary">
        center Error toast弹窗
    </a>
    <a @click="toastOpen('warn')"
        href="javascript:;"
        class="weui-btn weui-btn_primary">
        center Warn toast弹窗
    </a>
    <a @click="toastOpen('loading')"
        href="javascript:;"
        class="weui-btn weui-btn_primary">
        center Loading toast弹窗
    </a>
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

export default {
  data () {
    return {
    }
  },
  created() {
      //this.open =true
  },
  methods: {
    toastOpen (t) {
      this.$toast({
          message: '操作成功',
          type: t
        })
    }
  }
}
</script>

<style lang="scss">

</style>
