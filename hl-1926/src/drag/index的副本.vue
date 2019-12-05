<template>
    <section>
         <!-- :style="{height: wrapBoxH-1 + 12 +'px', width: wrapBoxW + 12 +'px'}" -->
        <!-- <div class="wrap-box" @touchstart.prevent="start" @touchmove.prevent="move" @touchend.prevent="end"> -->
        <div class="wrap-box" @touchstart="start" @touchmove="move" @touchend="end">
            <img v-if="userImg" class="wrap-user" :style="{
                left: moveX+'px',
                top: moveY+'px',
                '-webkit-transform': 'scale(' + scalMultiple + ')',
                '-moz-transform': 'scale(' + scalMultiple + ')',
                '-ms-transform': 'scale(' + scalMultiple + ')',
                '-o-transform': 'scale(' + scalMultiple + ')',
                transform: 'scale(' + scalMultiple + ')'
            }" :src="userImg" />
            <!-- <img class="wrap-bg" v-lazy="imgList[wrapBg].url" :key="imgList[wrapBg].url"/> -->
            <img class="wrap-bg" :src="imgList[wrapBg].url" />
        </div>
    </section>
</template>
<style lang="less" scoped>
    .wrap-box{
        margin: 5px auto 5px;
        position: relative;
        overflow: hidden;
        border: 6px solid #fff;
        img[lazy="loading"]{
            width: 100%;
            height: 100%;
        }
        img{
            width: 100%;
        }
        .wrap-user{
            position: absolute;
            z-index: 1;
        }
        .wrap-bg{
            position: relative;
            z-index: 2;
        }
    }
</style>
<script>
let bStart = 0, bginX, bginY, starts = [];
let scalMultiple = 1, moveX = 0, moveY = 0, count=0, scales;
import { getEvtLocation, getDistance } from './touchMove'
export default {
    data () {
        return {
            userImg: '/banner/2.jpg',
            moveX: 0,
            moveY: 0,
            scalMultiple: 1,
            wrapBoxH: 0,
            wrapBoxW: 0,
            wrapBg: 0,   //当前选中模板
            imgList: [
                {
                    "id":"55",
                    "url":"http://paaprdqlh.bkt.clouddn.com/poster/template/template483983?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:ZwWY3c2gNe3apgB_PeHNgs0AsPc=",
                    "thumb_img":"http://paaprdqlh.bkt.clouddn.com/poster/template/preview518499?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:6zvw861ZR4JdsN6CtFwQyQarZ78="
                },
                {
                    "id":"56",
                    "url":"http://paaprdqlh.bkt.clouddn.com/poster/template/template572304?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:iLSaMXdMERfcRrKdlukhd3xPV40=",
                    "thumb_img":"http://paaprdqlh.bkt.clouddn.com/poster/template/preview986247?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:VdORMzTeuI_md9f1L-kWUx6TmMo="
                },
                {
                    "id":"57",
                    "url":"http://paaprdqlh.bkt.clouddn.com/poster/template/template448986?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:J-HUUEDPBpad8nEhGXMXGy7DyA8=",
                    "thumb_img":"http://paaprdqlh.bkt.clouddn.com/poster/template/preview949764?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:iepxjSfo0SxWFbW8MEGK1OfbTLQ="
                },
                {
                    "id":"70",
                    "url":"http://paaprdqlh.bkt.clouddn.com/poster/template/template866235?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:KdPXzrarLxn1XDcDIx48TTe8gqo=",
                    "thumb_img":"http://paaprdqlh.bkt.clouddn.com/poster/template/preview612233?e=1558694316&token=tM193uNBWVubyf1od06tTI50euAd31tOOg3GXsA4:Z66RjsAyxT5hSqjTVYEUoaDaxdg="
                }
            ]
        }
    },
    methods: {
        start(ev) {
            const _this = this
            bStart = 1;
            let poi = getEvtLocation(ev);//_this.getEvtLocation(ev);
            bginX = poi.x;
            bginY = poi.y;
            //判断是否是两个手指
            // console.log(ev)
            if (ev.targetTouches.length == 2) {
                starts = ev.touches
            }
        },
        move(ev) {
            const _this = this;
            if (bStart === 0) return;
            let poi = getEvtLocation(ev),//_this.getEvtLocation(ev),
                offsetX = poi.x - bginX,
                offsetY = poi.y - bginY;

            if (ev.targetTouches.length == 2) {//判断移动的时候是否是两根手指
                let now = ev.touches;  //得到第二组两个点

                if(ev.scale !== undefined){
                    scales = ev.scale;
                }else{
                    // scales = _this.getDistance(now[0], now[1]) / _this.getDistance(starts[0], starts[1]); //得到缩放比例，getDistance是勾股定理的一个方法
                    scales = getDistance(now[0], now[1]) / getDistance(starts[0], starts[1]); //得到缩放比例，getDistance是勾股定理的一个方法
                }

                //限制缩小的最小值
                if (scales > 1) {
                    if(_this.scalMultiple <=3){
                        _this.scalMultiple *= 1.01;
                    }
                } else if (scales < 1) {
                    if(_this.scalMultiple > 0.2){
                        _this.scalMultiple *= 0.99;
                    }
                } else {
                    _this.scalMultiple *= 1
                }
                bginX = poi.x;
                bginY = poi.y;
            } else {
                //一根手指执行拖动
                bginX = poi.x;
                bginY = poi.y;
                // 累计偏移量 后台需要
                moveX += Number(offsetX);
                moveY += Number(offsetY);
                _this.moveX = moveX;
                _this.moveY = moveY;
                console.log(_this.moveX,_this.moveY)
            }
        },
        end(ev) {
            bStart = 0;
        },
        getEvtLocation(ev) {
            return {
                x: ev.touches[0].clientX,
                y: ev.touches[0].clientY
            }
        },
        getDistance(p1, p2) {
            let x = p2.pageX - p1.pageX,
                y = p2.pageY - p1.pageY;
            return Math.sqrt((x * x) + (y * y));
        }
    }
}
</script>
