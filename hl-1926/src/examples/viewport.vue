<template>
    <div class="main">
        <img src="@/assets/img/6.jpg" :style="styles" alt="">
    </div>
</template>
<style>
    .main {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        position: relative;
        overflow: hidden;
        text-align: center;
    }
</style>

<script>
    function viewport() {
        var scale = 1,
            clientWidth = document.documentElement.clientWidth || 320,
            clientHeight = document.documentElement.clientHeight || 592; //486  592
            scale = clientWidth / clientHeight >= 320 / 592 ? clientHeight / 592 : clientWidth / 320;
        var scaleVal = "width=320, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no";
        document.getElementById("viewport").setAttribute("content", scaleVal) 
    }
    export default {
        components: {

        },
        data () {
            return {
                styles: 'width:'+(750/2)+'px;height:'+(1206/2)+'px',
                //styles: 'width:'+(646/2)+'px;height:'+(1124/2)+'px'
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
                    "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
            "http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320",
                ]
            }
        },
        mounted () {
            viewport()
        }
    }
</script>
