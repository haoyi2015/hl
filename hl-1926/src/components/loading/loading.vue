<template>
    <div class="mk-loading mk-loading-center">
      <div class="mk-loading-inner">
        <button class="mk-loading-content" :style="lodTxt.loadStyle">
          <div :class="{'mk-m':!lodTxt.message}" style="font-size: initial;">
            <img v-if="!lodTxt.magIcon"  src="@/assets/img/loading-icon.svg" alt="">
            <img v-else :src="lodTxt.magIcon" alt="">
          </div>
          <div v-if="lodTxt.message" class="mk-loading-txt" v-html="lodTxt.message"></div>
        </button>
      </div>
      <div class="mk-loading-mask"></div>
    </div>
</template>
<style media="screen" scoped>
    .mk-loading-mask {
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: transparent;
        z-index: 9999;
    }
    .mk-loading {
        z-index: 1001;
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
    .mk-loading-icon,
    .mk-loading-inner {
        display: inline-block
    }
    .mk-loading-content {
        min-width: 110px;
        min-height: 110px;
        background: rgba(0, 0, 0, .7);
        color: #fff;
        padding: 8px;
        border-radius: 5px;
        -webkit-box-shadow: 0 .02rem .1rem rgba(0, 0, 0, .1);
        box-shadow: 0 .02rem .1rem rgba(0, 0, 0, .1);
        word-break: break-all;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .mk-loading-top {
        top: 20%
    }
    .mk-loading-bottom {
        top: auto;
        bottom: 20%;
        margin-top: auto;
        margin-bottom: 0
    }
    .mk-loading-center {
        top: 0;
        margin: auto
    }
    .mk-loading-icon,
    .mk-loading-loading {
        margin-bottom: .16rem
    }
    .mk-loading-icon {
        position: relative;
        vertical-align: middle;
        border: .04rem solid #eee;
        border-radius: 50%;
        width: .72rem;
        height: .72rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    .mk-m img{
      vertical-align: middle;
    }
    .mk-loading-txt{
        font-size: 15px;
        padding-top: 6px;
    }
</style>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    lodTxt: {
      type: [String,Object],
      default: ''
    }
  },
  mounted () {
    this.openChange(this.open)
  },
  methods: {
    onClose () {
      this.$el.style.cssText = 'display:block;opacity:0;'
      requestAnimationFrame(() => {
        this.$el.style.cssText = 'display:none;'
        this.$el.remove()
      })
    },
    openChange (value) {
      if (value) {
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
      } else {
        this.onClose()
      }
    }
  },
  watch: {
    open (value) {
      this.openChange(value)
    }
  }
}
</script>
