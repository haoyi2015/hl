<template>
    <div class="w-popup">
      <transition name="popup-fade" v-if="!full">
        <overlay v-show="open" @click="handleClose"></overlay>
      </transition>
      <slot name="inner" v-if="$slots.inner"></slot>
      <transition
        v-else
        :name="full?'popup-full-slide-'+direction:'popup-slide-'+direction"
        @enter="handleEnter"
        @before-enter="handleBeforeEnter"
        @after-enter="handleAfterEnter"
        @before-leave="handleBeforeLeave"
        @leave="handleLeave"
        @after-leave="handleAfterLeave">
        <flexbox v-show="open" :class="innerClasses" @click="handleClose2" direction="column">
          <flexbox class="w-popup-nav" v-if="title && !showClose" align="center">
            <button type="button" @click="close"><i class="iconfont icon-fanhui"></i></button>
            <flexbox-item class="w-popup-nav-title">{{title}}</flexbox-item>
          </flexbox>
          <flexbox v-else-if="showClose" align="center">
            <flexbox-item class="w-popup-nav-title">{{title}}</flexbox-item>
            <rem-to-px :height="0.5" :width="0.5" class="w-popup-close" @click.native="close"></rem-to-px>
          </flexbox>
          <slot v-else name="header"></slot>
          <div class="w-popup-relative" v-if="direction === 'center'">
            <slot :open="open"></slot>
          </div>
          <flexbox-item class="w-popup-relative" v-else>
            <slot :open="open"></slot>
          </flexbox-item>
          <slot name="footer"></slot>
        </flexbox>
      </transition>
    </div>
</template>
<style media="screen">
    .w-popup {
        position: fixed;
        left: 0;
        top: 0;
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

    .w-popup-inner {
        background: #fff;
        position: absolute;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000;
        perspective: 1000;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    .w-popup-top {
        top: 0;
        left: 0;
        width: 100%;
        max-height: 80%
    }

    .w-popup-top.w-full {
    height: 100%;
    max-height: 100%
    }

    .w-popup-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        max-height: 80%
    }

    .w-popup-bottom.w-full {
        height: 100%;
        max-height: 100%
    }

    .w-popup-left {
        top: 0;
        left: 0;
        height: 100%;
        max-width: 80%
    }

    .w-popup-left.w-full {
        width: 100%;
        max-width: 100%
    }

    .w-popup-right {
        top: 0;
        right: 0;
        height: 100%;
        max-width: 80%
    }

    .w-popup-right.w-full {
        width: 100%;
        max-width: 100%
    }

    .w-popup-center {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 0 0
    }

    .w-popup-center.w-full {
        display: block;
        background: #fff
    }

    .w-popup-close {
        position: absolute;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        display: inline-block;
        vertical-align: middle;
        top: .12rem;
        right: .12rem
    }

    .w-popup-close:after,
    .w-popup-close:before {
        content: '';
        position: absolute;
        background: #999;
        left: 50%;
        top: 50%
    }

    .w-popup-close:before {
        height: 1px;
        width: 100%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        margin-top: -1px
    }

    .w-popup-close:after {
        width: 1px;
        height: 100%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        margin-left: -1px
    }

    .w-popup-relative {
        position: relative
    }

    .popup-fade-enter-active,
    .popup-fade-leave-active {
        -webkit-transition: opacity .2s;
        transition: opacity .2s
    }

    .popup-fade-enter,
    .popup-fade-leave-active {
        opacity: 0
    }

    .popup-slide-top-enter-active,
    .popup-slide-top-leave-active {
        -webkit-transition: -webkit-transform .2s;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s, -webkit-transform .2s
    }

    .popup-slide-top-enter,
    .popup-slide-top-leave-active {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }

    .popup-full-slide-top-enter-active,
    .popup-full-slide-top-leave-active {
        -webkit-transition: -webkit-transform .4s;
        transition: -webkit-transform .4s;
        transition: transform .4s;
        transition: transform .4s, -webkit-transform .4s
    }

    .popup-full-slide-top-enter,
    .popup-full-slide-top-leave-active {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }

    .popup-slide-bottom-enter-active,
    .popup-slide-bottom-leave-active {
        -webkit-transition: -webkit-transform .2s;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s, -webkit-transform .2s
    }

    .popup-slide-bottom-enter,
    .popup-slide-bottom-leave-active {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
    }

    .popup-full-slide-bottom-enter-active,
    .popup-full-slide-bottom-leave-active {
        -webkit-transition: -webkit-transform .4s;
        transition: -webkit-transform .4s;
        transition: transform .4s;
        transition: transform .4s, -webkit-transform .4s
    }

    .popup-full-slide-bottom-enter,
    .popup-full-slide-bottom-leave-active {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }

    .popup-slide-left-enter-active,
    .popup-slide-left-leave-active {
        -webkit-transition: -webkit-transform .2s;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s, -webkit-transform .2s
    }

    .popup-slide-left-enter,
    .popup-slide-left-leave-active {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }

    .popup-full-slide-left-enter-active,
    .popup-full-slide-left-leave-active {
        -webkit-transition: -webkit-transform .4s;
        transition: -webkit-transform .4s;
        transition: transform .4s;
        transition: transform .4s, -webkit-transform .4s
    }

    .popup-full-slide-left-enter,
    .popup-full-slide-left-leave-active {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }

    .popup-slide-right-enter-active,
    .popup-slide-right-leave-active {
        -webkit-transition: -webkit-transform .2s;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s, -webkit-transform .2s
    }

    .popup-slide-right-enter,
    .popup-slide-right-leave-active {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }

    .popup-full-slide-right-enter-active,
    .popup-full-slide-right-leave-active {
        -webkit-transition: -webkit-transform .4s;
        transition: -webkit-transform .4s;
        transition: transform .4s;
        transition: transform .4s, -webkit-transform .4s
    }

    .popup-full-slide-right-enter,
    .popup-full-slide-right-leave-active {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }

    .popup-slide-center-enter-active,
    .popup-slide-center-leave-active {
        -webkit-transition: opacity .2s;
        transition: opacity .2s
    }

    .popup-slide-center-enter,
    .popup-slide-center-leave-active {
        opacity: 0;
        -webkit-transform: 0;
        transform: 0
    }

    .popup-full-slide-center-enter-active,
    .popup-full-slide-center-leave-active {
        -webkit-transition: opacity .4s;
        transition: opacity .4s
    }

    .popup-full-slide-center-enter,
    .popup-full-slide-center-leave-active {
        -webkit-transform: 0;
        transform: 0
    }
</style>
<script>
import Overlay from '../overlay'
import {Flexbox, FlexboxItem} from '../flexbox'
import { historyPush } from '../../util/mixins'
export default {
  mixins: [historyPush],
  components: {
    Overlay,
    Flexbox,
    FlexboxItem
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'bottom'
    },
    fastClose: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  computed: {
    innerClasses () {
      let array = ['w-popup-inner', 'w-popup-' + this.direction, this.full ? 'w-full' : '']
      if (this.direction === 'center') {
        array.push('w-flexbox w-flexbox-align-center w-flexbox-content-center')
      } else {
        array.push('w-flexbox w-flexbox-column')
      }
      return array
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.pushState()
        this.$el.style.display = 'block'
      })
    }
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.pushState()
          this.$el.style.display = 'block'
          this.$emit('open')
        })
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.goBack()
            this.$el.style.display = 'none'
          })
        }, 300)
      }
    }
  },
  methods: {
    handleBeforeEnter () {
      this.$emit('before-enter')
    },
    handleEnter () {
      this.$emit('enter')
    },
    handleAfterEnter () {
      this.$emit('after-enter')
    },
    close () {
      this.$emit('close').$emit('update:open', false)
    },
    handleClose () {
      this.fastClose && this.close()
    },
    handleClose2 (e) {
      if (this.fastClose && e.target === this.$el.querySelector('.w-popup-inner')) {
        this.close()
      }
    },
    handleBeforeLeave () {
      this.$emit('before-after')
    },
    handleLeave () {
      this.$emit('leave')
    },
    handleAfterLeave () {
      this.$emit('close-after')
    }
  }
}
</script>
