<template>
    <div class="">
        <button class="weui-btn weui-btn_mini weui-btn_primary" @click="showToast">show toast</button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import toast from '@/components/Toast/plugin'
    Vue.use(toast)
    export default {
        methods: {
            showToast() {
                this.$toast({
                    title: '1',
                    content: '您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息您有一条新消息',
                    type: '',
                    onShow: () => {
                        console.log('on toast show')
                    },
                    onHide: () => {
                        console.log('on toast hide')
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
</style>
