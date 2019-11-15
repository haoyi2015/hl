<template>
  <popup :class="classes" :open="open" :history="history" :fast-close="fastClose" :direction="myDirection" @close="handleClosePopup" @close-after="handleCloseAfter" @after-enter="handleAfterEnter">
    <div class="w-actionsheet-inner" onselectstart="return false;">
      <div v-if="title" class="w-actionsheet-title">
        {{title}}
      </div>
      <div class="w-actionsheet-items">
        <slot></slot>
      </div>
      <div v-if="cancel" class="w-actionsheet-cancel" @click="handleClose">
        {{cancelText}}
      </div>
    </div>
  </popup>
</template>
<style media="screen">
    .w-actionsheet-inner {
        background: #fff;
        max-height: 80%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch
    }

    .w-actionsheet-title {
        line-height: 1.6;
        position: relative;
        color: #999;
        background-position: bottom;
        padding: 15px 0;
    }

    .w-actionsheet-cancel {
        padding: 6px 0;
        border-top: 10px solid #eee;
        color: #999
    }

    .w-actionsheet-item {
        padding: 15px 0;
        text-align: center;
        position: relative;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        background-color: #fff;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(50%, #ddd), color-stop(0, transparent));
        background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 0)
    }

    .w-actionsheet-item:active {
        background-color: rgba(0, 0, 0, .1)
    }

    .w-actionsheet-item.is-active {
        color: #39f
    }

    .w-actionsheet-item.is-disabled {
        opacity: .6;
        pointer-events: none
    }

    .w-actionsheet-menu .w-popup-relative {
        max-width: 200px;
        width: 60%
    }

    .w-actionsheet-menu .w-actionsheet-inner {
        border-radius: 3px
    }

    .w-actionsheet-menu .w-actionsheet-item {
        border-left: 0;
        border-right: 0
    }

    .w-actionsheet.is-not-title .w-actionsheet-item:first-child {
        background-image: none
    }

</style>
<script>
import Popup from '../popup'
export default {
  componentName: 'Actionsheet',
  components: {
    Popup
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    value: {
      type: String
    },
    cancel: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    fastClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return ['w-actionsheet', {'w-actionsheet-menu': this.type === 'menu', 'is-not-title': !this.title}]
    },
    myDirection () {
      if (this.type === 'default') {
        return 'bottom'
      } else if (this.type === 'menu') {
        return 'center'
      }
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.$el.style.display = 'block'
      })
    }
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.$el.style.display = 'block'
          this.$emit('open')
        })
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.display = 'none'
          })
        }, 300)
      }
    }
  },
  methods: {
    handleAction (value) {
      this.$emit('update:open', false).$emit('action', value)
    },
    handleClose () {
      this.$emit('update:open', false).$emit('close')
    },
    handleCloseAfter () {
      this.$emit('close-after')
    },
    handleClosePopup () {
      this.$emit('update:open', false).$emit('close')
    },
    handleAfterEnter () {
      Array.from(this.$el.querySelectorAll('.w-actionsheet-item')).forEach(item => {
        item.onclick = this.handleAction.bind(this, item.dataset.value)
      })
    }
  }
}
</script>
