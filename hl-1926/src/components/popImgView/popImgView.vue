<template>
    <section>
        <a @click="imgView(imgList,index)" v-for="(item,index) in imgList" :key="index" class="img-view" href="javascript:;">
            <!-- <img class="lazy-img" src="" lazy="loading" :lazy-src='item'> -->
            <img :src="lazyImg" lazy="loading" :data-src="item.imgSrc" class="lazy-img" v-lazyload>
        </a>
    </section>
</template>
<style lang="less">
    .img-view{
        width: 100px;
        height: 90px;
        display: block;
        float: left;
        border: 1px solid #f5f2f2;
        border-radius: 3px;
        margin-right: 8px;
        margin-bottom: .44rem;
        overflow: hidden;
        text-align: center;
        position: relative;
    }
    .lazy-img{
        display: inline-block;
        width: 60px;
        height: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -30px;
        margin-top: -30px;
    }
    .lazy-img.loaded{
        width: 100%;
        height: auto;
        position: static;
        top: 0;
        left: 0;
        margin-left: 0;
        margin-top: 0;
    }
    .lazy-img.loaderror{
        display: inline-block;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -16px;
        margin-top: -16px;
    }
    .lazy-img[lazy="loading"]{
        // width: 60px;
        // height: 60px;
        // background:url('../assets/images/5-121204194032-50.gif') no-repeat center;
    }
.broadcast{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #000;
  .broadcastMe{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .broadcastMe-list{
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-transition-property: -webkit-transform;
      transition-property: -webkit-transform;
      -o-transition-property: transform;
      transition-property: transform;
      transition-property: transform,-webkit-transform;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
    }
    .broadcastMe-item{
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      position: relative;
      -webkit-transition-property: -webkit-transform;
      transition-property: -webkit-transform;
      -o-transition-property: transform;
      transition-property: transform;
      transition-property: transform,-webkit-transform;
      a{
          color: red;
      }
      img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        position: absolute;
        left: 50%;
        top: 50%;
      }
    }
    .broadcastMe-tool{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      padding-bottom: 0.5rem;
      z-index: 9;
    }
    .broad-close{
        color: #fff;
        width: 32px;
        height: 32px;
        background: red;
        position:absolute;
        top: 0;
        right: 0;
        text-align: center;
        line-height: 32px;
        font-size: 20px;
        border-radius: 50%;
        z-index: 878;
    }
    .broad-close:after{
        content: "X";
    }
  }
}
.broadcast.open{
    opacity: 1;
    display: block;
}
.broadcast.close{
   overflow: hidden;
   opacity: 0;
   display: none;
}
</style>
<script>
    import SwiperView from '../popImgView/imgView';
    let imgList = [],delay,time = 250,offset = 0,flag = true;

    // 节流函数，防止短时间多次触发_loadImg
    const lazyLoad =(()=>{
        clearTimeout(delay)
        delay = setTimeout(() => {
          _lazyLoadImg()
        }, time)
    })
    
    const _lazyLoadImg = (() =>{
        for (let i = 0, len = imgList.length; i < len; i++) {
          if (_isShowImg(imgList[i])) {
            new Promise((resolve, reject)=>{
                let imgs = new Image()
                imgs.src = imgList[i].getAttribute('data-src')
                imgs.onload = function(){
                   // 加载完成
                   resolve(imgs)
                }
                imgs.onerror = function(){
                   // 加载错误
                   reject(imgs)
                }
             }).then((imgs)=>{
                 imgList[i].src = imgList[i].getAttribute('data-src');
                 imgList[i].className = 'lazy-img loaded';
                 imgList[i].setAttribute('lazy','loaded');
             }).catch((error)=>{
                 imgList[i].src = '/public/favicon.ico'
                 imgList[i].className = 'lazy-img loaderror';
             })
            imgList.splice(i, 0);
          }
        }
    })

    const _isShowImg = ((el)=>{
        // getBoundingClientRect获取图片相对视口的位置
        let coords = el.getBoundingClientRect()
        // 判断图片出否出现在可视区
        return coords.top <= document.documentElement.clientHeight + parseInt(offset)
    })
    export default {
        props: {
            imgList: {
                type: '',
                default: ''
            },
            lazyImg: {
                type: '',
                default: ''
            }
        },
        data () {
            return {}
        },
        methods: {
            onscrollFun() {
                (function(){//立即执行函数
                    let imgList = [],delay,time = 0,offset = 0;
                    function _delay(){//函数节流
                        clearTimeout(delay);
                        delay = setTimeout(() => {
                            _loadImg();
                        },time)
                    };
                    function _loadImg(){//执行图片加载
                        for(let i = 0,len = imgList.length; i < len; i++){
                            if(_isShow(imgList[i])){
                                imgList[i].src = imgList[i].getAttribute('lazy-src');
                                imgList.splice(i,1);
                            }
                        }
                    };
                    function _isShow(el){//判断img是否出现在可视窗口
                        if(el){
                            let coords = el.getBoundingClientRect();
                            return (coords.left >= 0 && coords.left >= 0 && coords.top) <= (document.documentElement.clientHeight || window.innerHeight) + parseInt(offset);
                        } else{
                            console.log(el)
                        }
                    };
                    function imgLoad(selector){//获取所有需要实现懒加载图片对象引用并设置window监听事件scroll
                        let _selector = selector || '.lazy-img';
                        let nodes = document.querySelectorAll(_selector);
                        imgList = Array.apply(null,nodes);
                        window.addEventListener('scroll',_delay,false)
                    };
                    imgLoad('.lazy-img')
                })()
                return false
                let aImg = document.getElementsByClassName('lazy-img'),
                    len = aImg.length,
                    n = 0;//存储图片加载到的位置，避免每次都从第一张图片开始遍历
                window.onscroll = function() {
                    let seeHeight = document.documentElement.clientHeight,
                        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                        //console.log(seeHeight + scrollTop)
                    for (let i = n; i < len; i++) {
                        console.log(aImg[i].offsetTop+' offsetTop')
                        if (aImg[i].offsetTop < seeHeight + scrollTop) {
                            if (aImg[i].getAttribute('src') === '') {
                                aImg[i].src = aImg[i].getAttribute('lazy-src');
                                setTimeout(()=>{
                                    aImg[i].className = 'lazy-img loaded';
                                },200)
                                aImg[i].setAttribute('lazy', 'loaded');
                            }
                            n = i + 1;
                        }
                    }
                };
            },
            imgView (data,i) {
				let news = [],
					items = data;
				let imgViewImg = {
				        imagList: items,
				        index: i
			        }
				let swiperView = new SwiperView('',imgViewImg,{
			          transitionTime : 100, // 动画过渡时间，默认为800ms
			          intervalTime : 5000, // 图片切换时间，默认为5s
			          circulatoryRotation : false, //是否开启循环滑动
			          tranAutoPlay : false, //是否开启自动轮播
			          tranSpot : true, //是否有圆点
			          tranArrow : true,//是否显示左右箭头
                      tranIndex : i, //控制是那张图片先显示
                      tranClose : false //是否有关闭按钮
			        });
			}
        },
        mounted () {
            this.$nextTick(()=>{
                //this.onscrollFun();
            })

            //window.onscroll();
        },
        directives: {
            lazyload: {
              bind (el, binding) {
                imgList.push(el)
                // 初始化，第一次进入页面时应该显示的图片
                lazyLoad()
                window.addEventListener('scroll', lazyLoad, false)
              }
            }
          }
    }
</script>
