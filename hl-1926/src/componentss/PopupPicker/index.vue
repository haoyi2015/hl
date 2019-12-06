<template>
  <popup :open="open" :history="history" @close="handleClose" @close-after="handleCloseAfter">
    <div slot="header" :class="['w-flexbox','w-popup-picker-header']">
      <button type="button" class="w-popup-picker-cancel" @click="handleCancel">{{cancelText}}</button>
      <button type="button" :class="['w-flexbox-item','w-popup-picker-placeholder']">{{placeholder}}</button>
      <button type="button" class="w-popup-picker-confirm" @click="handleConfirm">{{confirmText}}</button>
    </div>
    <div :class="['w-flexbox','w-popup-picker']">
      <picker
        v-if="open && myPickers"
        v-for="(item,index) in myPickers"
        :class="['w-flexbox-item','w-popup-picker-item']"
        :key="index"
        :value="item.value"
        :placeholder="item.placeholder"
        :options="item.options"
        @change="handleChange($event,index)"
      />
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import Picker from '../picker'

export default {
  componentName: 'PopupPicker',
  components: {
    Popup,
    Picker
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    pickers: {
      type: Array
    },
    placeholder: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '完成'
    }
  },
  watch: {
    pickers (value) {
      this.myPickers = value
    }
  },
  data () {
    return {
      myPickers: this.pickers
    }
  },
  methods: {
    handleCancel () {
      this.$emit('update:open', false).$emit('close')
    },
    handleClose () {
      this.$emit('update:open', false).$emit('close')
    },
    handleCloseAfter () {
      this.$emit('close-after')
    },
    handleConfirm () {
      this.$emit('confirm')
      let value = this.myPickers.map(item => {
        return {
          value: item.value
        }
      })
      if (!this.value || value.toString() !== this.value.toString()) {
        this.open && this.$emit('update:open', false).$emit('input', value).$emit('change', value)
      } else {
        this.handleClose()
      }
    },
    handleChange (value, index) {
      this.myPickers[index].value = value
      this.$emit('pickerchange', value, index)
    }
  }
}
</script>
<style>
  .w-popup-picker-wrapper {
  background: #fff
}

.w-popup-picker-item {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0
}

.w-popup-picker-header {
  position: relative;
  background-color: #fff;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(50%, #ddd), color-stop(0, transparent));
  background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 0);
  background-position: bottom;
  padding: 8px 0;
}

.w-popup-picker-cancel,
.w-popup-picker-confirm,
.w-popup-picker-placeholder {
  border: 0;
  outline: 0;
  background-color: transparent;
  text-align: center;
  font-size: 15px;
  vertical-align: middle
}

.w-popup-picker-placeholder {
  line-height: .92rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: inherit
}

.w-popup-picker-cancel,
.w-popup-picker-confirm {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: .92rem;
  width: 1.5rem;
  color: #999
}

.w-popup-picker-confirm {
  color: #39f
}

.w-popup-picker-confirm[disabled] {
  color: #999
}
</style>
