<template>
    <section style="padding: 0 12px;">
        <div class="weui-panel__hd">图片懒加载实例</div>
        <img width="160" height="160" v-lazy="''" >
        <div class="weui-panel__hd">多图列表点击放大预览实例</div>
        <img width="160" height="200" v-for="(img,index) in imgs"
        v-preview="img.url"
        :alt="img.title"
        :key="index"
        v-lazy="img.url"
        preview-title-enable="true"
        preview-nav-enable="true">
        <!--点击放大查看大图-->
        <big-preview></big-preview>
    </section>
</template>
<script>
    import Vue from 'vue'
    import VueLazyload from '@/components/lazyload'

    //Vue.use(VueLazyload)

    // 或者添加VueLazyload 选项
    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: '/img/share-logo.png',
        loading: '/img/loading-lazy.gif',
        attempt: 1,
        listenEvents: [ 'scroll' ]
    })
    //图片列表（包括点击放大）
    import vuePicturePreview from '@/components/picturePreview'
    Vue.use(vuePicturePreview)
    export default {
        data (){
            return {
                imgs: [
                    {
                        url: 'http://hilongjw.github.io/vue-lazyload/dist/avatar/test1.jpg',
                        title: '图片标题或者描述1'
                    },
                    {
                        url: 'http://hilongjw.github.io/vue-lazyload/dist/avatar/test3.jpg',
                        title: '图片标题或者描述2'
                    }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .weui-panel__hd {
      padding: 10px 0;
      color: #333;
      font-size: 16px;
      position: relative;
      font-weight: bold;
      margin-bottom: 16px;
    }
    .weui-panel__hd:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #E5E5E5;
        color: #E5E5E5;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 15px;
    }
    img[lazy="loading"]{
        width: 100px;
        height: 100px;
    }
</style>
