<template>
    <article class="">
        <div class="container">
            <input value="admin" readonly/>
            <input type="password" value="1234567890" readonly/>
            <div ref="captcha" id="captcha" style="position: relative"></div>
            <div ref="msg" id="msg"></div>
        </div>
    </article>
</template>

<script>
    require('@/assets/Verification/jigsaw.css');
    require('@/assets/Verification/jigsaw.js');

    export default{

        mounted(){
            const self = this
            //初始化滑块
            jigsaws.init(this.$refs.captcha, function() {//对调
                console.info('登录成功！')
            })
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 310px;
        margin: 100px auto;
    }

    input {
        display: block;
        width: 290px;
        line-height: 40px;
        margin: 10px 0;
        padding: 0 10px;
        outline: none;
        border: 1px solid #c8cccf;
        border-radius: 4px;
        color: #6a6f77;
    }

    #msg {
        width: 100%;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
    }

    a:link,
    a:visited,
    a:hover,
    a:active {
        margin-left: 100px;
        color: #0366D6;
    }
</style>
