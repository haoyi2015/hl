<template>
    <div>
        <image-slider :images="images" :params="{minMoveDistance: 50, autoPlay: true}"></image-slider>

        <div style="margin-top: 20px;">
            <button @click="changeImages3">更换图片(3张)</button>
            <button @click="changeImages2">更换图片(2张)</button>
        </div>
    </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider';
export default {
  name: 'app',
  components: {
    [ImageSlider.name]: ImageSlider
  },
  data () {
    return {
        images: [
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
        ]
    }
  },
    methods: {
        changeImages3: function() {
            this.images = [
                "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            ];
        },
        changeImages2: function() {
            this.images = [
                "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            ];
        }
    }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    button {
        background-color: green;
        color: #ffffff;
        border-radius: 3px;
        padding: 5px 10px;
        border: none;
    }
</style>