<template>
  <div class="w-confirm">
    <transition name="confirm-fade">
        <overlay v-show="open"></overlay>
    </transition>
    <div class="w-confirm-wrapper">
      <transition name="confirm-scale" @after-leave="handleLeave">
        <div class="w-confirm-inner" v-show="open">
          <div v-if="title" class="w-confirm-title">{{title}}</div>
          <div class="w-confirm-body">
            <div class="w-confirm-table">
              <div class="w-confirm-cell">
                <slot :open="open"></slot>
              </div>
            </div>
          </div>
          <div :class="['w-confirm-footer','w-flexbox']" onselectstart="return false;">
            <button class="w-flexbox-item" v-if="cancel" type="button" @click="handleCancel">{{cancelText}}</button>
            <component class="w-flexbox-item" :is="confirmTag" v-bind="confirmProps" @click="handleConfirm($event)">{{confirmText}}</component>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Overlay from '../overlay'
export default {
  componentName: 'Confirm',
  components: {
    Overlay
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmTag: {
      type: String,
      default: 'button'
    },
    confirmProps: {
      type: Object,
      default () {
        return {type: 'button'}
      }
    }
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        //this.pushState()
        this.$el.style.display = 'table'
      })
    }
  },
  watch: {
    open (value) {
      if (value) {
        requestAnimationFrame(() => {
          //this.pushState()
          this.$el.style.display = 'table'
          this.$emit('open')
        })
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            //this.goBack()
            this.$el.style.display = 'none'
          })
        }, 300)
      }
    }
  },
  methods: {
    handleCancel () {
      this.$emit('update:open', false).$emit('close')
    },
    handleConfirm (e) {
      if (e.target && e.target.nodeName && e.target.nodeName.toLowerCase() === 'a') {
        setTimeout(() => {
          this.open && this.$emit('update:open', false).$emit('confirm')
        }, 400)
      } else {
        this.open && this.$emit('update:open', false).$emit('confirm')
      }
    },
    handleLeave () {
      this.$nextTick(() => {
        this.$emit('close-after')
      })
    }
  }
}
</script>
