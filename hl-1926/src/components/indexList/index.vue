<template>
  <div class="warp-index-list" :class="{'fixed':fixed}">
     <div class="index-list-each"
      ref="indexListEach"
      @scroll="handleScroll">
        <div class="index-list-group" v-if="dqData">
          <div class="index-list-title"
            ref="indexListTitle">当前</div>
          <div class="index-list-item"
            @click="handleClick(dqData)">
            <template>{{dqData.name}} {{dqData.code}}</template>
          </div>
        </div>
        <div class="index-list-group"
          v-for="(group, gindex) in indexListData"
          :key="gindex">
          <div class="index-list-title"
            ref="indexListTitle">{{group.type}}</div>
          <div class="index-list-item"
            v-for="(item, index) in group.list"
            :key="index"
            @click="handleClick(item)">
            <slot v-if="$slots.default"></slot>
            <template>{{item.name}} {{item.code}}</template>
          </div>
        </div>
     </div>
     <div class="index-list-nav">
        <ul class="index-right">
          <li ref="navList"
          v-for="(item, index) in navList"
          :key="index" :class="{'is-active': index === activeIndex}"
          @click="handleGroup(index)">
          {{item}}</li>
        </ul>
     </div>
  </div>
</template>
<script>
export default {
  props: {
    indexListData: {
      type: Array
    },
    fixed: {
      type: ''
    },
    dqData: {
      type: ''
    }
  },
  data() {
    let navList = this.indexListData.map(item => {
      return item.type.charAt(0);
    });
    return {
      navList,
      currentCharAt: navList[0],
      activeIndex: 0
    };
  },
  watch: {
    indexListData(value) {
      let navList = value.map(item => {
        return item.label.charAt(0);
      });
      this.navList = navList;
      this.currentCharAt = navList[0];
    }
  },
  updated() {
    this.$nextTick(this.init);
  },
  mounted() {
    this.init();
    window.addEventListener("resize", this.handleResize, false);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    init() {
      this.$$scrollNode = this.$refs.indexListEach
      this.$$titleNodes = Array.from(
        this.$refs.indexListTitle
      );
      this.$$titleNodes.forEach(node => {
        node._offsetTop = node.offsetTop;
      });
      this.$$navNodes = Array.from(
        this.$refs.navList
      );
    },
    //设置选中状态
    addClassItem(index) {
      let _node = this.$$navNodes[index];
      this.$$navNodes.forEach(node => {
        if (_node === node) {
          requestAnimationFrame(() => {
            node.classList.add("is-active");
          });
        } else {
          requestAnimationFrame(() => {
            node.classList.remove("is-active");
          });
        }
      });
    },
    handleScroll(e) {
      let scrollTop = this.$$scrollNode.scrollTop;
      this.$$titleNodes.forEach((node, index) => {
        let position = node._offsetTop - scrollTop;
        if (position <= 0) {
          requestAnimationFrame(() => {
            this.addClassItem(index);
          });
        }
      });
    },
    handleResize() {
      this.init();
      this.handleScroll();
    },
    handleGroup(index) {
      let node = this.$$titleNodes[index];
      node.offsetParent.scrollTop = node._offsetTop;
    },
    handleClick(value) {
      this.$emit("click", value);
    }
  }
};
</script>
<style lang="less">
  .warp-index-list {
    position: relative;
    height: 100%;
    overflow: hidden;
    .index-list-each {
      position: absolute;
      height: 100%;
      width: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
    }
    .index-list-nav {
      height: 100%;
      background: #fff;
      width: 30px;
      position: absolute;
      right: 0;
      .index-right{
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 24px;
        text-align: center;
        background-color: #e4e0e0;
        border-radius: 50px;
        border-radius: 50px;
        line-height: 1.6;
        padding: 10px 3px;
        z-index: 700;
        li.is-active {
          color: #39f;
          font-weight: 700;
        }
      }
    }
    .index-list-item {
      background: top no-repeat #fff;
      padding: 10px;
      font-size: 15px;
      position: relative;
      background-size: 100% 1px;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#ddd),
        color-stop(50%, #ddd),
        color-stop(0, transparent)
      );
      background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 0);
    }
    .index-list-item:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
    .index-list-item:first-child {
      background-image: none;
    }
    .index-list-fixed,
    .index-list-title {
      padding: 5px 4px 4px;
      background: #f7f7f7;
      font-size: 15px;
    }
    .index-list-title + .index-list-item {
      background-image: none;
    }
    .index-list-fixed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      font-size: 14px;
    }
  }
  .warp-index-list.fixed{
    position:fixed;
    height: 100%;
    width: 100%;
    z-index: 999;
    background-color: #fff;
  }
</style>
