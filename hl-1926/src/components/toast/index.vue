<template>
    <div :class="['mk-toast','mk-toast-' + align]">
      <div :class="['mk-toast-inner']">
        <div class="mk-toast-content" :style="toastStyle">
          <div v-if="type == 'icon'">
            <img v-if="!iconImg&&!iconFontImg" src="@/assets/img/loading-icon.svg" alt="">
            <img v-if="iconImg&&!iconFontImg" :src="iconImg" alt="">
            <span v-if="!iconImg&&iconFontImg" class="mk-iconfont iconfont" :class="iconFontImg"></span>
          </div>
          <div class="mk-toast-txt">
              <slot></slot>
          </div>
        </div>
      </div>
      <div class="mk-toast-mask"></div>
    </div>
</template>
<style lang="less" scoped media="screen">
    .mk-toast-mask {
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: transparent;
        z-index:999998;
    }
    .mk-toast {
         z-index: 999999;
        position: fixed;
        text-align: center;
        display: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 100%
    }
    .mk-toast-icon,
    .mk-toast-inner {
        display: inline-block
    }
    .mk-toast-content {
        background: rgba(0, 0, 0, .7);
        color: #fff;
        padding: 12px;
        border-radius: 5px;
        -webkit-box-shadow: 0 .02rem .1rem rgba(0, 0, 0, .1);
        box-shadow: 0 .02rem .1rem rgba(0, 0, 0, .1);
        word-break: break-all;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .mk-iconfont{
          font-size: 16px;
        }
    }
    .mk-toast-top {
        top: 20%
    }
    .mk-toast-bottom {
        top: auto;
        bottom: 20%;
        margin-top: auto;
        margin-bottom: 0
    }
    .mk-toast-center {
        top: 0;
        margin: auto
    }
    .mk-toast-icon,
    .mk-toast-loading {
        margin-bottom: .16rem
    }
    .mk-toast-icon {
        position: relative;
        vertical-align: middle;
        border: .04rem solid #eee;
        border-radius: 50%;
        width: .72rem;
        height: .72rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    .mk-toast-success:before {
        border: .04rem solid #eee;
        border-left: 0;
        border-top: 0;
        content: " ";
        top: 50%;
        left: 50%;
        position: absolute;
        width: .16rem;
        height: .32rem;
        margin-left: -.1rem;
        margin-top: -.24rem;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }
    .mk-toast-error {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }
    .mk-toast-error:before {
        content: '';
        height: .04rem;
        position: absolute;
        width: .4rem;
        background: #eee;
        left: 50%;
        top: 50%;
        margin-left: -.2rem;
        margin-top: -.02rem;
        border-radius: 3rem
    }
    .mk-toast-error:after,
    .mk-toast-warn:after,
    .mk-toast-warn:before {
        content: '';
        width: .04rem;
        position: absolute;
        background: #eee;
        left: 50%;
        margin-left: -.02rem;
        border-radius: 3rem
    }
    .mk-toast-error:after {
        height: .4rem;
        top: 50%;
        margin-top: -.2rem
    }
    .mk-toast-warn:before {
        height: .38rem;
        top: 12%
    }
    .mk-toast-warn:after {
        height: .04rem;
        top: 75%
    }
    .mk-toast-txt{
        font-size: 15px;
    }
</style>
<script>
export default {
  props: {
    toastStyle: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "top"
    },
    duration: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'default'
    },
    iconImg:{
      type: String,
      default: ""
    },
    iconFontImg:{
      type: String,
      default: ""
    },
    destroy: {
      type: Boolean,
      default: false
    },
    spinnerProps: {
      type: Object,
      default () {
        return {
          color: '#999',
          primaryColor: '#fff',
          size: 0.72
        }
      }
    }
  },
  mounted () {
    this.openChange(this.open)
  },
  methods: {
    hide () {
      this.$$timer && clearTimeout(this.$$timer)
      this.$el.style.cssText = 'display:block;opacity:0;'
      requestAnimationFrame(() => {
        this.$el.style.cssText = 'display:none;'
        this.$emit('update:open', false).$emit('close')
        if (this.destroy) {
          this.$destroy()
        }
      })
    },
    openChange (value) {
      if (value) {
        this.$$timer && clearTimeout(this.$$timer)
        requestAnimationFrame(() => {
          this.$el.style.cssText = 'display:block;opacity:0;'
          requestAnimationFrame(() => {
            let width = this.$el.children[0].offsetWidth + 14
            let height = this.$el.children[0].offsetHeight + 14
            requestAnimationFrame(() => {
              this.$el.style.cssText = `display:block;width:${width + 10}px;height:${height + 10}px;`
            })
          })
        })
        if (this.duration) {
          this.$$timer = setTimeout(() => {
            this.hide()
          }, this.duration)
        }
      } else {
        this.hide()
      }
    }
  },
  destroyed () {
    this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
  },
  watch: {
    open (value) {
      this.openChange(value)
    }
  }
}
</script>
