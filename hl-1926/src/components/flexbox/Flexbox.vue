<template>
  <component :class="classes" :is="tag">
    <slot></slot>
  </component>
</template>
<style media="screen" lang="less" scoped>
    .mk-popup-nav button {
        border: 0;
        outline: none;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        box-shadow: none;
        font-size: inherit;
        box-sizing: border-box;
        color: inherit;
        vertical-align: middle;
        position: relative;
        z-index: 1;
        padding: 12px 3px;
        margin-right: .5px;
        height: 100%;
        min-width: 24px;
    }
    .mk-flexbox-item+.mk-flexbox-item,
    .mk-flexbox-item:first-child {
        margin-left: 0 !important
    }
    .mk-flexbox {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-box-align: center;
        -moz-align-items: center;
        align-items: center;
    }
    .mk-flexbox-wrapper {
        overflow: hidden
    }
    .mk-flexbox-content-center {
        -ms-flex-align: center;
        -webkit-box-pack: center;
        -moz-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
    }
    .mk-flexbox-align-center {
        -ms-flex-align: center;
        -webkit-box-align: center;
        -moz-align-items: center;
        align-items: center
    }
    .mk-flexbox-wrap {
        -ms-flex-wrap: wrap;
        -moz-box-lines: multiple;
        -webkit-box-lines: multiple;
        flex-wrap: wrap
    }
    .mk-flexbox-column {
        -ms-flex-direction: column;
        -webkit-box-orient: vertical;
        -moz-flex-direction: column;
        flex-direction: column
    }
    .mk-flexbox-item {
        -ms-flex: 1;
        -webkit-box-flex: 1;
        -moz-flex: 1;
        flex: 1;
        min-width: 0
    }
    .mk-flexbox-item:last-child {
        margin-right: 0 !important
    }

</style>
<script>

let flexMap = {
  direction: {
    column: `flexbox--column`
  },
  wrap: {
    wrap: `flexbox--wrap`
  },
  justify: {
    center: `flexbox--content-center`
  },
  align: {
    center: `flexbox--align-center`
  }
}

export default {
  componentName: 'Flexbox',
  props: {
    direction: {
      type: String,
      default: 'normal'
    },
    wrap: {
      type: String,
      default: 'normal'
    },
    justify: {
      type: String,
      default: 'normal'
    },
    align: {
      type: String,
      default: 'normal'
    },
    gutter: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes () {
      let array = [
        'mk-flexbox'
      ]
      for (let name in flexMap) {
        if (this[name] && flexMap[name][this[name]]) {
          array.push('mk-' + flexMap[name][this[name]])
        }
      }
      return array
    }
  }
}
</script>
