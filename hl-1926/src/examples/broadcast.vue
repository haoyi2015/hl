<template>
  <section>
    <br>
    <swiper-view
        :imgList="images"
        :lazyImg="gifd">
    </swiper-view>
    <br>
    <swiper-view
        :imgList="images"
        :lazyImg="gifd">
    </swiper-view>
  </section>
</template>
<script>
import swiperView from '@/components/popImgView/popImgView';

export default {
  data () {
    return {
      broadcastImg:{
        imagList: [],
        index: 0
      },
      gifd:'/lazy-loading.gif',
      timeNow:(new Date()).getTime(),
      timeBefore:1516140000,
      flag: false,
      images: [
        {
          imgSrc : './banner/1.jpg',
          linkHref : 'javascript:;',
          imgAlt : '图片缺失'
        },
        {
          imgSrc : './banner/2.jpg',
          linkHref : 'javascript:;',
          imgAlt : '图片缺失'
        },
        {
          imgSrc : './banner/3.jpg',
          linkHref : 'javascript:;',
          imgAlt : '图片缺失'
        }
      ]
    }
  },
  components : {
    swiperView
  },
  methods : {
    button (i) {
      this.broadcastImg = {
        imagList: this.images,
        index: i
      }
      let broadcast = new Broadcast('',this.broadcastImg,{
          transitionTime : 100, // 动画过渡时间，默认为800ms
          intervalTime : 5000, // 图片切换时间，默认为5s
          circulatoryRotation : false, //是否开启循环滑动
          tranAutoPlay : false, //是否开启自动轮播
          tranSpot : true, //是否有圆点
          tranArrow : true,//是否显示左右箭头
          tranIndex : i //控制是那张图片
        });
    }
  },
  directives:{
    broadcast:{
      inserted: function(el,binding) {
        // binding.value 为我们传入的形参，即图片的地址和图片点击链接
        let broadcast = new Broadcast(el,binding.value,{
          transitionTime : 100, // 动画过渡时间，默认为800ms
          intervalTime : 5000, // 图片切换时间，默认为5s
          circulatoryRotation : false, //是否开启循环滑动
          tranAutoPlay : false, //是否开启自动轮播
          tranSpot : true, //是否有圆点
          tranArrow : true,//是否显示左右箭头
          tranIndex : binding.value.index //控制是那张图片
        });
      }
    }
  }
}
</script>
<style lang="less">
.imgs{
  width: 100px;
  height: 100px;
  float: left;
  margin: 10px;
  img{
    width: 100px;
    height: 100px;
  }
}
</style>
