<template>
    <div class="detail-container page">
        <div class="card-block">
            <h3 class="card-title">是时候撸一波 JS 基础啦,撸熟了,银十速拿 offer;</h3>
            <p class="card-text">创建时间：2019</p>
            <p class="card-text">简述：是时候撸一波 JS 基础啦,撸熟了,银十速拿 offer;是时候撸一波 JS 基础啦,撸熟了,银十速拿 offer;</p>
            <p class="card-text">
                <img class="cont" @error="imgLoadError(detailItem)" src="http://192.168.43.137:8888/webPC/uploadImage/0_up_timg.jpeg" alt="">
            </p>
            <p class="card-text cont">是时候撸一波 JS 基础啦,撸熟了,银十速拿 offer;是时候撸一波 JS 基础啦,撸熟了,银十速拿 offer;是时候撸一波 JS 基础啦,撸熟了,银十速拿 offer;</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .page {
        position: relative;
        min-height: 100vh;
        overflow: visible;
        margin: 20px auto;
        max-width: 1080px;
    }
    .detail-container{
        padding-top: 55px;
        .card-block{
            position: relative;
            background: #fff;
            padding: 35px;
            border-radius: 3px;
        }
        .card-title{
            font-family: Roboto,sans-serif;
            font-weight: 600;
            line-height: 1.2;
            color: #37474f;
            font-size: 18px;
        }
        .card-text{
            font-family: Roboto,sans-serif;
            font-size: 13px;
            font-weight: 400;
            line-height: 1.57142857;
            color: #76838f;
            margin-top: 12px;
            img.cont{
                width: 100%;
            }
        }
        .cont{
            font-size: 14px;
            color: #333;
        }
    }
</style>
<script>
//import { getArticleDetail } from "@/api/article";
//import { errImage } from "@/utils/mixins/img"
export default {
    //mixins: [errImage],
    data() {
        return {
            detailItem: {}
        }
    },
    created () {
        //this.getArticleDetail()
    },
    methods: {
        getArticleDetail() {
            //this.listLoading = true;
            let param = {
                articleId: this.$route.query.article_id
            }
            getArticleDetail(param).then(res => {
                this.detailItem = res.data.list;
                console.log(this.detailItem)
            }).catch(err => {
	
            });
        }
    },
    mounted () {}
};
</script>

