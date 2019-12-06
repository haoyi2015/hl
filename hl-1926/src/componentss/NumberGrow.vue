<template>
    <article class="clock-num">
        <div ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">0</div>
    </article>
</template>

<script>
export default {
    props: {
        time: {
            type: Number,
            default: 2
        },
        value: {
            type: Number,
            default: 10
        }
    },
    methods: {
        numberGrow(ele) {
            let _this = this

            let step = (_this.value * 10) / (_this.time * 1000)
            let current = 0
            let start = 0
            let t = setInterval(function() {
                start += step
                if (start > _this.value) {
                    clearInterval(t)
                    start = _this.value
                    t = null
                }
                if (current === start) {
                    return
                }
                current = start
                ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
            }, 10)
        }
    },
    mounted() {
        this.numberGrow(this.$refs.numberGrow)
    }
}
</script>

<style lang="scss">
.number-grow-warp {
    transform: translateZ(0);
}

.number-grow {
    font-family: Arial-BoldMT;
    font-size: 64px;
    color: #ffaf00;
    letter-spacing: 2.67px;
    margin: 110px 0 20px;
    display: block;
    line-height: 64px;
}
.clock-num {
    margin-top:10%;
    div{
        position:relative;
        background:#ffe8e8;
        border-radius:6px;
        max-width:296px;
        height:80px;
        line-height:80px;
        text-align:center;
        font-size:32px;
        margin:0px 5px;
        display: inline-block;
        padding: 8px 16px;
    }
}
</style>
