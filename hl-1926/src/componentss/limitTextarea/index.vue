<template>
  <div class="m__warp">
    <textarea
      @input="handleInput"
      v-bind="$props"
      class="m__limit--textarea"
      :class="{'m__limit-over': isOver}"
      :value="currentValue"
      >
    </textarea>
    <span class="m__limit--text">
      {{isOver ? '已超出' : '还可以输入'}}<span class="m__limit--num" :class="{'m__limit--num-over': isOver}">{{num}}</span>个字
    </span>
  </div>
</template>
<script>
  export default{
    name: 'Mimit',
    props: {
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      rows: {
        type: Number,
        default: 4
      },
      maxLen: {
        type: Number,
        default: 20
      },
      isCut: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        isOver: false,
        num: this.maxLen,
        currentValue: ''
      }
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
        if (this.currentValue.length <= this.maxLen) {
          this.isOver = false
          this.num = this.maxLen - this.currentValue.length
        } else {
          if (this.isCut) {
            this.currentValue = this.currentValue.substring(0, this.maxLen)
            this.num = this.currentValue.length - this.maxLen
            return
          }
          this.isOver = true
          this.num = this.currentValue.length - this.maxLen
          this.$emit('overText', this.currentValue)
        }
      }
    },
    watch: {
    }
  }
</script>
<style lang="scss" scoped>
.m__warp{
  position: relative;
  .m__limit--textarea {
    border: 1px solid #d1dbe5;
    display: block;
    resize: vertical;
    padding: 5px 7px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    color: #000;
    border-radius: 4px;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1)
  }
  .m__limit--textarea:focus {
    border: 1px solid #3FAAF5
  }
  .m__limit--over {
    border: 1px solid #ff4949
  }
  .m__limit--text {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 12px;
    color: #d1dbe5
  }
  .m__limit--num {
    color: #13ce66
  }
  .m__limit--num-over {
    color: #ff4949
  }
}
</style>
