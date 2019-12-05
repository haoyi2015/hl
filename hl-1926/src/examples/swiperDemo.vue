<template>
    <div class="container">
        <div>实例一</div>
        <slider-swiper class="swiper" @transitionend="transitionend"
            ref="swiper1" :defaultSlide="1"
            :interval="1500" :pagination="true">
            <slider-item v-for="(v, k) in list" :key="k">
                <img style="width:100%; height:260px" :src="v.src" alt="">
            </slider-item>
        </slider-swiper>
        <br>
        <div>实例二</div>
        <image-slider :images="images" :params="{minMoveDistance: 50, autoPlay: true}"></image-slider>
        <br>
        <!-- <div>实例三</div>
        <banner :bannerlist="bannerlist"></banner> -->
    </div>
</template>
<style lang="less" scoped>
    .container{
        max-width: 640px;
        margin: 0 auto;
    }
</style>
<script>
import { SliderSwiper, SliderItem }from '@/components/mkSwiper'
// import Banner from '@/components/vue-banner/banner'
import ImageSlider from '@/components/ImageSlider';
export default {
    components: {
        SliderSwiper,
        SliderItem,
        // Banner,
        ImageSlider
    },
    data() {
        return {
            currentSlide: 100,
            imgList: [],
            list: [
                {src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'},
                {src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'},
                {src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'},
                {src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'},
                {src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'},
                {src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'}
            ],
            bannerlist: [
                {
                    picurl: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'
                },
                {
                    picurl: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'
                },
                {
                    picurl: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320'
                }
            ],
            images: [
                "http://img.ishequ360.com/images/test/banner1@1x.jpeg",
                "http://img.ishequ360.com/images/test/banner6@1x.jpeg",
                "http://img.ishequ360.com/images/test/banner3@1x.jpeg",
                "http://img.ishequ360.com/images/test/banner4@1x.jpeg",
                "http://img.ishequ360.com/images/test/banner5@1x.jpeg",
            ],
            active: 0,
            options: {
                speed: 500
            }
        }
    },
    created () {
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        transitionend(current) {
            this.currentSlide = current;
        }
    }
}
</script>
