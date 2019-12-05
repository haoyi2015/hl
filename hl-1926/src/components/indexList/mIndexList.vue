<template>
  <div class="index-indexlist">
    <div class="index-cell-wrapper-area" @click="areaCodeCall(codeVal)">
      <span class="">{{codeVal.name}}{{codeVal.code}}</span>
      <i class="xz-icon iconfont icon-xuanzhong"></i>
    </div>
    <ul class="index-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px', 'margin-right': navWidth + 'px'}">
      <!-- <li class="index-cell-wrapper-area" @click="areaCodeCall(codeVal)">
        <span class="">{{codeVal.name}}{{codeVal.code}}</span>
        <i class="xz-icon iconfont icon-xuanzhong"></i>
      </li> -->
      <index-section :index="item.type" :class="{'index-none':item.type=='常用'}" v-for="(item,index) in indexDataItem" :key="index">
					<index-cell :title="items.name+' '+items.code" v-for="(items,index) in item.list" :key="index" @click.native="areaCodeCall(items)"></index-cell>
			</index-section>
    </ul>
    
    <div class="index-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="index-indexlist-navlist">
        <li class="index-indexlist-navitem" v-for="(section,sIndex) in sections" :key="sIndex">{{ section.index }}</li>
      </ul>
    </div>
    
    <div class="index-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
  </div>
</template>

<style lang="less" scoped>
    .xz-icon{
      float: right;
      margin-right: 12px;
      font-size: 18px;
      color: #137CFF;
    }
    .index-cell-wrapper-area{
      background-color: #fff;
      box-sizing: border-box;
      color: inherit;
      height: 48px;
      line-height: 48px;
      display: block;
      overflow: hidden;
      position: absolute;
      top: 0;
      z-index: 999;
      width: 100%;
      text-decoration: none;
      border-bottom: 1px solid #d9d9d9;
      span{
        padding: 0 10px;
      }
    }
    .index-cell-wrapper-area:after{
      content: '';
      display: block;
      // background-image: url('../../assets/images/icon_select-arear.png');
      background-repeat: no-repeat;
      width: 1.4rem;
      height: 1rem;
      position: absolute;
      top: 50%;
        right: 1rem;
        background-size: .8rem;
        margin-top: -.3rem;
    }
    .index-indexlist {
        width: 100%;
        position: relative;
        overflow: hidden
    }
    .index-indexlist-content {
        margin: 0;
        padding: 0;
        overflow: auto;
        padding-top: 50px;
    }
    .index-indexlist-nav {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        background-color: #fff;
        border-left: solid 1px #ddd;
        text-align: center;
        max-height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center
    }
    .index-indexlist-navlist {
        padding: 0;
        margin: 0;
        list-style: none;
        max-height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column
    }
    .index-indexlist-navitem {
        padding: 2px 6px;
        font-size: 13px;
        color: #137CFF;
        -webkit-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        -webkit-touch-callout: none
    }
    .index-indexlist-indicator {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
        text-align: center;
        line-height: 50px;
        background-color: rgba(0, 0, 0, .7);
        border-radius: 5px;
        color: #fff;
        font-size: 22px
    }
</style>

<script>
  import IndexSection from './IndexSection.vue'
  import IndexCell from './IndexCell.vue'
  export default {
    components: {
      IndexSection,
      IndexCell
    },
    name: 'index-list',
    props: {
      indexDataItem:{
        type:'',
        default:''
      },
      codeVal:'',//默认选中值
      codeCallData:{
        type: Function,
        default: function(){}
      },//回调值
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        sections: [],
        navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height,
        navOffsetX: 0
      };
    },
    watch: {
      sections() {
        this.init();
      },
      height(val) {
        if (val) {
          this.currentHeight = val;
        }
      }
    },
    methods: {
      areaCodeCall(val) {
        this.$emit('codeCallData',val);
      },
      init() {
        this.$nextTick(() => {
          this.navWidth = this.$refs.nav.clientWidth;
        });
        let listItems = this.$refs.content.getElementsByTagName('li');
        if (listItems.length > 0) {
          this.firstSection = listItems[0];
        }
      },
      handleTouchStart(e) {
        if (e.target.tagName !== 'LI') {
          return;
        }
        this.navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime);
        }
        this.moving = true;
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      },
      handleTouchMove(e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
      },
      handleTouchEnd() {
        this.indicatorTime = setTimeout(() => {
          this.moving = false;
          this.currentIndicator = '';
        }, 500);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      },
      scrollList(y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('index-indexlist-navitem')) {
          return;
        }
        this.currentIndicator = currentItem.innerText;
        let targets = this.sections.filter(section => section.index === currentItem.innerText);
        let targetDOM;
        if (targets.length > 0) {
          targetDOM = targets[0].$el;
          this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
        }
      }
    },
    mounted() {
      if (!this.currentHeight) {
        window.scrollTo(0, 0);
        requestAnimationFrame(()=>{
          this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top;
        });
      }
      this.init();
    }
  };
</script>