<template>
    <div>
        <!-- <div class="" v-for="(item,index) in videoData">
            <aplayer
                :aplayerParm="{
                    videoData: item,
                    poster: false,
                    alone: true,
                    bntPosition: false,
                    videoIndex: index
                    }"/>
        </div> -->
        <aplayer
            :mini="false"
            :miniPosition="'right-bottom'"
            :videoPosition="{
                flag: true,
                weizhi:'top'
            }"
            :aplayerParm="{
                videoData: videoData,
                poster: true,
                alone: false,
                bntPosition: true
                }"/>
    </div>
</template>
<script>
    /*
    * bntPosition 播放按钮的位置  true 左边  false 右边
    * videoData 音频文件对象
    * poster 是否显示头播放
    * alone 是否是单独播放列表
    * videoPosition 播放器的位置(整个)
    * mini 播放器是否是迷你行
    * 播放器所在位置miniPosition  [left-bottom,left-top,right-top,right-bottom]
     */
    import aplayer from '@/views/player/pcPlayer'

    export default {
        name: 'app',
        data() {
            return {
                videoData: [
                    {
                        "ID":18,
                        "Title":"04期 | 我的将军啊",
                        "CreateTime":"2018-07-26 15:34:24",
                        "TimeLong":"59",
                        "Media":"http://h5maicai360.ufile.ucloud.com.cn/_temp_74682.mp3",
                        "Cover":"http://hlh5.ufile.ucloud.com.cn/31727636682160570428154.jpg"
                    },
                    {
                        "ID":17,
                        "Title":"03期 | 不仅仅是喜欢",
                        "CreateTime":"2018-07-26 15:33:10",
                        "TimeLong":"100",
                        "Media":"http://h5maicai360.ufile.ucloud.com.cn/_temp_84343.mp3",
                        "Cover":"http://hlh5.ufile.ucloud.com.cn/61005636682159883940577.jpg"
                    },
                    {
                        "ID":16,
                        "Title":"02期 | 我的一个道姑朋友",
                        "CreateTime":"2018-07-26 15:21:05",
                        "TimeLong":"30",
                        "Media":"http://h5maicai360.ufile.ucloud.com.cn/_temp_07842.mp3",
                        "Cover":"http://hlh5.ufile.ucloud.com.cn/32030636682152491870311.jpg"
                    },
                    {
                        "ID":15,
                        "Title":"01期 | 体面",
                        "CreateTime":"2018-07-26 15:19:28",
                        "TimeLong":"80",
                        "Media":"http://h5maicai360.ufile.ucloud.com.cn/_temp_55760.mp3",
                        "Cover":"http://hlh5.ufile.ucloud.com.cn/00852636682151540174359.jpg"
                    }
                ],
                poster: ''
            }
        },
        components: {
            aplayer
        },
        methods:{

        },
        mounted(){

        },
        watch: {

        }
    }
</script>
