<template>
  <div :class="['mk-switch--wrapper', {'is-disabled': disabled, 'mk-switch--small': small}]">
    <input
      :name="name"
      :checked="onValue == value"
      :value=swvalue
      type="checkbox"
      @change="handleChange"
      />
    <button type="button" tabindex="-2"></button>
  </div>
</template>
<style lang="less" scoped>
  .mk-switch{
    &--wrapper{
        position:relative;
        display:inline-block;
        vertical-align: middle;
        width: 48px;
        height: 28px;
        button{
          height:100%;
          border-radius: 20px;
          background-color:#fff;
          margin: 0;
          padding: 0;
          -webkit-transition: all .4s ease-in-out 0s;
          transition: all .4s ease-in-out 0s;
          width:100%;
          position: relative;
          border: 1px solid #e5e5e5;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          &:before{
            content:'';
            height:100%;
            width:60%;
            border-radius:50%;
            background-color:#fff;
            left:0;
            top:0;
            position:absolute;
            box-shadow: 0 0.02rem 0.06rem rgba(0,0,0,0.35);
            -webkit-transition: left .3s ease-in-out;
            transition: left .3s ease-in-out;
            -webkit-box-shadow: 0 1px 1.6px rgba(0, 0, 0, .35);
            box-shadow: 0 1px 1.6px rgba(0, 0, 0, .35);
          }
        }
        input{
          width:100%;
          height:100%;
          z-index:10;
          position:absolute;
          opacity:0;
          padding: 0;
          margin: 0;
          &:checked+button{
            -webkit-box-shadow: 0 0 0 34px #39f inset;
            box-shadow: 0 0 0 34px #39f inset;
            border-color: #39f;
            &:before{
              left: 40%;
              border-color: #39f;
            }
          }
        }
      }
      &--small{
        width: 36px;
        height: 22px;
      }
  }
</style>

<script>
export default {
  componentName: 'mkSwitch',
  props: {
    swvalue: {
      type: [Boolean, String, Number]
    },
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default () {
        return Math.random().toString(36).substr(2)
      }
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    onValue: {
      default: true
    },
    offValue: {
      default: false
    },
    small: {
      type: Boolean
    },
    switchCall: {
      type: Function
    }
  },
  methods: {
    handleChange (e) {
      let value = e.target.checked ? this.onValue : this.offValue
      this.$emit('input', value).$emit('change', value).$emit('switchCall',[e.target.value,value])
    }
  }
}
</script>