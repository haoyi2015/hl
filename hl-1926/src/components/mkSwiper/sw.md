```
<template>
    <section>
        <div class="container">

            <h1>只有一个 slide </h1>
            <!-- 只有一张图的时候 -->
            <slider-swiper class="swiper" v-if="list.length" @transitionend="transitionend" ref="swiper2" :defaultSlide="0" :interval="1500" :pagination="true">
                <slider-slide v-for="(v, k) in list2" :key="k" :class="map[k]">
                    {{v}}
                </slider-slide>
            </slider-swiper>

            <h1>有固定元素的时候</h1>
            <slider-swiper class="swiper" v-if="list.length" @transitionend="transitionend" ref="swiper1" :defaultSlide="3" :interval="1500" :pagination="true">
                <slider-slide v-for="(v, k) in list" :key="k" :class="map[k]">
                    {{v}}
                </slider-slide>
                <h1 class="global" slot="g">投放广告</h1>
            </slider-swiper>

            <slider-swiper v-if="list.length" :autoplay="false" class="ttt">
                <slider-slide v-for="(v, k) in imgList" :key="k" class="slide-slide">
                    <img :src="v" alt="">
                </slider-slide>
            </slider-swiper>


            <h1>通常情况</h1>
            <slider-swiper class="swiper" v-if="list.length" @transitionend="transitionend" ref="swiper" :defaultSlide="0" :interval="1500" :pagination="true" :vLock="true">
                <slider-slide v-for="(v, k) in list" :key="k" :class="map[k]">
                    {{v}}
                </slider-slide>
            </slider-swiper>

            <div class="text">当前是第{{currentSlide}}个slide</div>
            <div class="btn" @click="previous">上一个</div>
            <div class="btn" @click="next">下一个</div>
            <div class="btn" @click="slideTo">滚动到索引=3的</div>
        </div>
    </section>
</template>
<style lang="less" scoped>
.carousel {
    overflow: hidden;
    width: 100%;
    height: 500px;
    position: relative;
}
</style>
<script>
import carousel from './swiper.vue'
import { wcSwiper,wcSlide }from '../components/slider-swiper'
export default {
    components: {
        carousel,
        wcSwiper,
        wcSlide
    },
    data() {
        return {
            list: [],
            list2: [1],
            map: {
                0: 'slide a',
                1: 'slide b',
                2: 'slide c',
                3: 'slide d',
                4: 'slide e',
                5: 'slide f'
            },
            currentSlide: 100,
            imgList: ['https://bucket-zb-fanba.oss-cn-hangzhou.aliyuncs.com/4b4c9042e3754101ae11d4d97882cbc1.jpg', 'http://www.nvsay.com/uploads/allimg/161108/172-16110R2214b22.jpg', 'http://www.nvsay.com/uploads/allimg/161108/172-16110R2220UG.jpg',
                'http://t10.baidu.com/it/u=1863417261,812716211&fm=173&s=FAA0804142D83674D72CC59D0300D083&w=640&h=359&img.JPEG', 'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/0F/ChMkJlnJyEKIaQO_AM-mbhQo89QAAgyrABQofAAz6aG651.jpg'
            ],
            images: [
                'http://assets.bittyos.com/images/swiper/01.jpg',
                'http://assets.bittyos.com/images/swiper/02.jpg',
                'http://assets.bittyos.com/images/swiper/03.jpg',
                'http://assets.bittyos.com/images/swiper/04.jpg',
                'http://assets.bittyos.com/images/swiper/05.jpg'
            ],
            active: 0,
            options: {
                speed: 500
            }
        }
    },
    mounted() {
        this.fetchList();
    },
    methods: {
        fetchList() {
            this.list = [0, 1, 2, 3, 4, 5];
        },
        transitionend(current) {
            // console.log('')
            // console.log(current,'dangqin')
            this.currentSlide = current;
            document.querySelector('.text').innerHTML = '当前是第' + current + '个 slide';
        },
        previous() {
            this.$refs.swiper.previous();
        },
        next() {
            this.$refs.swiper.next();
        },
        slideTo() {
            this.$refs.swiper.slideTo(3);
        }
    }
}
</script>

```
