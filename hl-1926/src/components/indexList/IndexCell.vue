<template>
  <a class="index-cell" :href="href">
    <span class="index-cell-mask" v-if="isLink"></span>
    <div class="index-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="index-cell-wrapper">
      <div class="index-cell-title">
        <slot name="icon">
          <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="index-cell-text" v-text="title"></span>
          <span v-if="label" class="index-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="index-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink" class="index-cell-allow-right"></i>
    </div>
    <div class="index-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
 * <mt-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */
export default {
  name: 'mt-cell',
  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    }
  },
  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>

<style lang="less" scoped>
    .index-cell {
        background-color:#fff;
        box-sizing:border-box;
        color:inherit;
        min-height:48px;
        display:block;
        overflow:hidden;
        position:relative;
        text-decoration:none;
    }
    .index-cell img {
        vertical-align:middle;
    }
    .index-cell:first-child .index-cell-wrapper {
        background-origin:border-box;
    }
    .index-cell:last-child {
        background-image:-webkit-linear-gradient(bottom, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-image:linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-size:100% 1px;
        background-repeat:no-repeat;
        background-position:bottom;
    }
    .index-cell-wrapper {
        background-image:-webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-image:linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-size: 120% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-origin: content-box;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 16px;
        line-height: 1;
        min-height: inherit;
        overflow: hidden;
        padding: 0 10px;
        width: 100%;
    }
    .index-cell-mask {}
    .index-cell-mask::after {
        background-color:#000;
        content:" ";
        opacity:0;
        top:0;
        right:0;
        bottom:0;
        left:0;
        position:absolute;
    }
    .index-cell-mask:active::after {
        opacity:.1;
    }
    .index-cell-text {
        vertical-align: middle;
    }
    .index-cell-label {
        color: #888;
        display: block;
        font-size: 12px;
        margin-top: 6px;
    }
    .index-cell-title {
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1;
    }
    .index-cell-value {
        color: #888;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }
    .index-cell-value.is-link {
        margin-right:24px;
    }
    .index-cell-left {
        position: absolute;
        height: 100%;
        left: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
                transform: translate3d(-100%, 0, 0);
    }
    .index-cell-right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        -webkit-transform: translate3d(100%, 0, 0);
                transform: translate3d(100%, 0, 0);
    }
    .index-cell-allow-right::after {
        border: solid 2px #c8c8cd;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        top:50%;
        right:20px;
        position: absolute;
        width:5px;
        height:5px;
        -webkit-transform: translateY(-50%) rotate(45deg);
                transform: translateY(-50%) rotate(45deg);
    }
</style>