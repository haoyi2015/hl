<template>
    <article style="width:100%;">
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
} from './dom'
const progressBtnWidth = parseInt(document.documentElement.style.fontSize)
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
            // console.log('Start', e)
            this.touch.initiated = true
            this.touch.startX = e.touches[0].pageX
            this.touch.left = this.$refs.progress.clientWidth
        },
        progressTouchMove(e) {
            // console.log('Move', e)
            if (!this.touch.initiated) {
                return
            }
            this._triggerPercent()
            const deltaX = e.touches[0].pageX - this.touch.startX
            const offsetWidth = Math.min(Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX)))
            this._offset(offsetWidth)
        },
        progressTouchEnd (e) {
            // console.log('End', e)
            this.touch.initiated = false
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            this.$emit('percentChangeEnd', percent)
        },
        _triggerPercent() {
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            // console.log('_triggerPercent', percent, this.$refs.progress.clientWidth + '/' + barWidth)
            this.$emit('percentChange', percent)
        },
        _offset(offsetWidth) {
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
        }
    },
    watch: {
        percent(newPercent) {
            // console.log('newPercent', newPercent)
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
$color-theme: rgb(253,94,2);
$color-theme-l: rgb(255,255,255);
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
    height: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    position: relative;
    .bar-inner {
        // width:100%;
        height:0.1rem;
        background:rgba(238,238,238,0.4);
        border-radius:0.18rem;
        .progress {
            height:100%;
            width: 0px;
            background: $color-theme;
        }
        .progress-btn-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            width:1rem;
            height:1rem;
            border-radius: 50%;
            .progress-btn {
                box-sizing: border-box;
                border-radius: 50%;
                background: $color-theme-l;
                width:1rem;
                height:1rem;
            }
        }
    }
}
</style>
