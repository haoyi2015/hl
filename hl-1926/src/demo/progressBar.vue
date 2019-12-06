<template>
<article style="margin:16px;padding:20px;background: #f2f3f4;height:300px">
    <div class="progress-bar" ref="progressBar" @click="progressClick">
        <div class="bar-inner">
            <div class="progress" ref="progress"></div>
            <div class="progress-btn-wrapper" ref="progressBtn" @touchstart.prevent="progressTouchStart" @touchmove.prevent="progressTouchMove" @touchend.prevent="progressTouchEnd">
                <div class="progress-btn"></div>
            </div>
        </div>
    </div>
</article>
</template>

<script>
import {
    prefixStyle
} from '@/assets/js/dom'
const progressBtnWidth = 16
const transform = prefixStyle('transform')

export default {
    data() {
        return {
            newPercent: 0
        }
    },
    props: {
        percent: {
            type: Number,
            default: 0
        }
    },
    created() {
        this.touch = {}
    },
    methods: {
        progressClick(e) {
            // 这个有 bug
            // this._offset(e.offsetX)
            const rect = this.$refs.progressBar.getBoundingClientRect()
            // rect.left 元素距离左边的距离
            // e.pageX 点击距离左边的距离
            const offsetWidth = e.pageX - rect.left
            // console.log(rect, e.pageX)
            this._offset(offsetWidth)
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            this.$emit('percentChangeEnd', percent)
        },
        progressTouchStart(e) {
            this.touch.initiated = true
            this.touch.startX = e.touches[0].pageX
            this.touch.left = this.$refs.progress.clientWidth
        },
        progressTouchMove(e) {
            if (!this.touch.initiated) {
                return
            }
            this._triggerPercent()
            const deltaX = e.touches[0].pageX - this.touch.startX
            const offsetWidth = Math.min(Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX)))
            this._offset(offsetWidth)
        },
        progressTouchEnd(e) {
            this.touch.initiated = false
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            this.$emit('percentChangeEnd', percent)
        },
        _triggerPercent() {
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            this.$emit('percentChange', percent)
        },
        _offset(offsetWidth) {
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
        }
    },
    watch: {
        percent(newPercent) {
            if (newPercent >= 0 && !this.touch.initiated) {
                const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
                const offsetWidth = newPercent * barWidth
                this._offset(offsetWidth)
            }
        }
    }
}
</script>

<style scoped lang="scss">
// 颜色定义规范
$color-background: #F2F3F4;
$color-background-d: rgba(0, 0, 0, 0.3);
$color-highlight-background: rgb(253, 108, 98);
$color-dialog-background: rgb(204, 204, 204);
$color-theme: rgb(212, 68, 57);
$color-theme-l: rgb(241, 241, 241);
$color-theme-g: rgb(219, 219, 219);
$color-theme-d: rgba(19, 19, 19, 0.6);
$color-sub-theme: rgb(240, 116, 107);
$color-text: #2E3030;
$color-text-g: #757575;
$color-text-ggg: #c7c7c7;
$color-text-gg: rgb(219, 219, 219);
$color-text-l: rgb(241, 241, 241);
$color-text-lm: rgb(228, 228, 228);
$color-text-ll: rgba(255, 255, 255, 0.8);

//字体定义规范
$font-size-small-ss: 9px;
$font-size-small-s: 10px;
$font-size-small: 11px;
$font-size-small-x: 12px;
$font-size-medium: 14px;
$font-size-medium-x: 16px;
$font-size-large-s: 17px;
$font-size-large: 18px;
$font-size-large-x: 22px;

.progress-bar {
    height: 30px;
    .bar-inner {
        position: relative;
        top: 13px;
        height: 4px;
        background: rgba(0, 0, 0, 0.3);
        .progress {
            position: absolute;
            height: 100%;
            background: $color-theme;
        }
        .progress-btn-wrapper {
            position: absolute;
            left: -8px;
            top: -13px;
            width: 30px;
            height: 30px;
            border: green 1px solid;
            border-radius: 50%;
            .progress-btn {
                position: relative;
                top: 7px;
                left: 7px;
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                border: 5px solid $color-theme-l;
                border-radius: 50%;
                background: $color-theme;
            }
        }
    }
}
</style>
