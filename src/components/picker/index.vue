<template>
  <div class="w-picker-wrapper" onselectstart="return false;">
    <div
      class="w-picker"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @scroll="scrollHandlder"
      >
      <div class="w-picker-scroller">
        <rem-to-px :height="itemHeight" even v-if="placeholder" :class="['w-picker-item','w-picker-placeholder']">
          {{placeholder}}
        </rem-to-px>
        <rem-to-px
          v-for="(item, index) in options"
          :height="itemHeight"
          even
          :class="['w-picker-item',{'is-active' : item.value === value}]"
          :data-value="item.value"
          :data-index="index"
          v-html="item.label"
          :key="index"
          >
        </rem-to-px>
      </div>
    </div>
    <div class="w-picker-indicator">
      <div class="w-picker-indicator-top"></div>
      <div class="w-picker-indicator-bottom"></div>
    </div>
  </div>
</template>
<style>
  .w-picker {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    height: 294px
  }

.w-picker::-webkit-scrollbar {
  display: none
}

.w-picker-wrapper {
  position: relative;
  background: #fff;
  text-align: center;
  overflow: hidden
}

.w-picker-scroller {
  padding: 126px 0;
  line-height: 42px
}

.w-picker-item {
  overflow: hidden;
  white-space: nowrap;
  padding: 0 .15rem;
  height: 42px
}

.w-picker-indicator-bottom,
.w-picker-indicator-top {
  background-color: #fff;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  content: '';
  height: 1px;
  width: 100%;
  left: 0
}

.w-picker-indicator-top {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(50%, #ddd), color-stop(0, transparent));
  background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 0);
  top: 126px
}

.w-picker-indicator-bottom {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(50%, #ddd), color-stop(0, transparent));
  background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 0);
  top: 168px
}

.w-picker-placeholder {
  opacity: .8
}

</style>

<script>
import RemToPx from '../remtopx'
let easeout = (A, B, rate, callback) => {
  if (A === B || typeof A !== 'number') {
    return
  }
  B = B || 0
  rate = rate || 2
  let step = () => {
    A = A + (B - A) / rate
    if (Math.abs(B - A) < 1) {
      callback(B, true)
      return
    }
    callback(A, false)
    requestAnimationFrame(step)
  }
  step()
}

export default {
  componentName: 'Picker',
  components: {
    RemToPx
  },
  props: {
    options: {
      type: Array,
      reqiured: true
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    itemHeight: {
      type: Number,
      default: 0.9
    }
  },
  watch: {
    options (value) {
      requestAnimationFrame(this.scrollToActive)
    }
  },
  created () {
    this.$$touch = {}
  },
  mounted () {
    this.$$touch.scrollElement = this.$el.querySelector('.w-picker')
    requestAnimationFrame(this.scrollToActive)
    this.$nextTick(this.computeStyles)
    window.addEventListener('resize', this.computeStyles, false)
  },
  destroyed () {
    this.$$touch = null
    window.removeEventListener('resize', this.computeStyles)
  },
  methods: {
    computeStyles () {
      let fontSize = document.documentElement.style.fontSize
      if (fontSize && this.itemHeight) {
        fontSize = parseInt(fontSize)
        let itemHeight = fontSize * this.itemHeight
        if (itemHeight % 2) {
          itemHeight++
        }
        let pickerNode = this.$el.querySelector('.w-picker')
        let pickerScrollerNode = this.$el.querySelector('.w-picker-scroller')
        let indicatorTopNode = this.$el.querySelector('.w-picker-indicator-top')
        let indicatorBottomNode = this.$el.querySelector('.w-picker-indicator-bottom')
        requestAnimationFrame(() => {
          pickerNode.style.height = itemHeight * 7 + 'px'
          pickerScrollerNode.style.padding = itemHeight * 3 + 'px 0'
          pickerScrollerNode.style.lineHeight = itemHeight + 'px'
          indicatorTopNode.style.top = itemHeight * 3 + 'px'
          indicatorBottomNode.style.top = itemHeight * 4 + 'px'
          indicatorTopNode.style.boxShadow = `0px -${itemHeight * 3}px 0px ${itemHeight * 3}px rgba(255,255,255,0.45)`
          indicatorBottomNode.style.boxShadow = `0px ${itemHeight * 3}px 0px ${itemHeight * 3}px rgba(255,255,255,0.45)`
          requestAnimationFrame(this.scrollToActive)
        })
      }
    },
    scrollToActive () {
      let node = this.$el.querySelector('.is-active')
      let index = 0
      Array.from(this.$el.querySelectorAll('.w-picker-item')).forEach((item, i) => {
        if (item === node) {
          index = i
        }
      })
      requestAnimationFrame(() => {
        this.$$touch.scrollElement.scrollTop = node ? index * node.offsetHeight : 0
      })
    },
    handleTouchEnd () {
      this.$$touch.scrollEnd = true
      this.computedScrollTop()
    },
    handleTouchMove (e) {
      let pageY = e.changedTouches[0].pageY
      if (this.pageY) {
        if (this.$$touch.scrollElement.scrollTop === 0 && pageY - this.pageY > 0) {
          this.$$pullTimer && clearTimeout(this.$$pullTimer)
          this.$$pullTimer = setTimeout(() => {
            this.$emit('pulldown')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        } else if (Math.round(this.$$touch.scrollElement.scrollTop) === this.$$touch.maxScrollTop && pageY - this.pageY < 0) {
          this.$$pullTimer && clearTimeout(this.$$pullTimer)
          this.$$pullTimer = setTimeout(() => {
            this.$emit('pullup')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        }
      }
      this.pageY = pageY
    },
    handleTouchStart (e) {
      this.$$touch.scrollEnd = false
      this.$$touch.maxScrollTop = this.$$touch.scrollElement.scrollHeight - this.$$touch.scrollElement.offsetHeight
      this.pageY = e.changedTouches[0].pageY
      this.$$timer && clearTimeout(this.$$timer)
      this.$$pullTimer && clearTimeout(this.$$pullTimer)
      let node = this.$$touch.scrollElement.querySelector('.w-picker-item')
      if (node) {
        this.$$touch.offsetHeight = node.offsetHeight
      }
    },
    scrollHandlder () {
      if (this.$$touch && this.$$touch.scrollEnd) {
        this.computedScrollTop()
      }
    },
    computedScrollTop () {
      this.$$timer && clearTimeout(this.$$timer)
      this.$$timer = setTimeout(() => {
        this.$$touch.scrollEnd = false
        let node = this.$el.querySelector('.w-picker')
        let _scrollTop = node.scrollTop
        let index = Math.round(_scrollTop / this.$$touch.offsetHeight)
        let scrollTop = index * this.$$touch.offsetHeight
        requestAnimationFrame(() => {
          if (_scrollTop !== scrollTop) {
            easeout(_scrollTop, scrollTop, 4, (value) => {
              node.scrollTop = value
            })
          }
          let active = this.$el.querySelectorAll('.w-picker-item')[index]
          if (active) {
            let value = active.dataset.value
            value !== this.value && this.$emit('input', value, this.index).$emit('change', value, this.index)
          }
        })
      }, 51)
    }
  }
}
</script>
