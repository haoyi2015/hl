<template>
    <div id="headed">
        <ul class="tab">
            <li v-for="(item,isn) in tabDatas" :key="isn">
                <div class="body_bottom" @click="jump(isn,item)" :class="{'active_color': index==isn}">{{item.name}}</div>
            </li>
        </ul>
        <div class="line"></div>
        <!-- 是否滑动  :style="{width: wd + 'px'}"
                 boxNum：代表有几个路由组件
                 marginLeft：偏移量
            -->
        <div class="cont-warp" :class="{shift: isMove}"
        :style="{width: boxNum * wd + 'px', marginLeft: marginLeft + 'px'}"
         @touchstart="start($event)" @touchmove="move($event)"
         @touchend="end($event)">
            <div class="w-list" ref="listDom">
                 <slot></slot>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        tabData:{
            type: '',
            default () {
              return {}
            }
        },
        widths:{
            type: '',
            default: ''
        }
    },
    data() {
        return {
            wd: this.widths?this.widths:document.documentElement.clientWidth,
            tabDatas: this.tabData,
            tabNum: 1, // tab 切换的页面宽度 ( 通过接口的数据计算 )
            index: 0, // 选中了第几个选项卡
            boxNum: 1, // 容器宽度
            marginLeft: 0, // 偏移量
            isMove: true, // 是否在滑动
            startX: 0,
            startY: 0,
            moveX: 0,
            movrY: 0,
            endX: 0,
            endY: 0,
            m_sX: 0,
            m_sY: 0,
            e_sX: 0,
            e_xY: 0,
            sML: 0
        }
    },
    methods: {
        jump(index) {
            this.index = index;
        },
        start(ev) {
            ev.stopPropagation();
            this.isMove = false;
            this.startX = ev.changedTouches[0].clientX;
            this.startY = ev.changedTouches[0].clientY;
            this.sML = this.marginLeft;
        },
        move(ev) {
            ev.stopPropagation();
            this.moveX = ev.changedTouches[0].clientX;
            this.moveY = ev.changedTouches[0].clientY;
            this.m_sX = this.moveX - this.startX;
            this.m_sY = this.moveY - this.startY;
            var marginLeft = this.sML + this.m_sX;

            marginLeft = marginLeft > 0 ? 0 : marginLeft;
            marginLeft = marginLeft < this.wd - this.boxNum * this.wd ? this.wd - this.boxNum * this.wd : marginLeft;
            this.marginLeft = marginLeft;
        },
        end(ev) {
            this.isMove = true;
            if (Math.abs(this.m_sX) > Math.abs(this.m_sY) && Math.abs(this.m_sX) > 60) {
                var multiple = this.m_sX > 0 ? -1 : 1;
                var index = this.index + multiple;
                index = index < 0 ? 0 : index;
                index = index > this.boxNum - 1 ? this.boxNum - 1 : index;
                this.index = index;
            } else {
                this.marginLeft = 0 - this.index * this.wd;
            }
        }
    },
    mounted() {
        //路由组件的数量
        const _this = this
        this.boxNum = 3;
        const setWidth = (()=>{
            let chiDom = this.$refs.listDom.childNodes,
                ws = this.wd?this.wd:document.documentElement.clientWidth;
            chiDom.forEach((item) => {
                item.style.width = ws+'px'
            })
        })
        setWidth()
        window.onresize = function() {
            _this.wd = document.documentElement.clientWidth;
            console.log('onresize')
            setWidth()
            _this.marginLeft = 0
            _this.index = 0
        }
    },
    components: {
        //组件的名称
        //Introduce, Agenda, Member
    },
    watch: {
        index: function(newValue, oldValue) {
            this.marginLeft = 0 - this.index * this.wd;
        }
    }
}
</script>

<style scoped="scoped" lang="less">
    .cont-warp{
        .w-list{
            .conents{
                min-width: 360px;
        		overflow: hidden;
        		float: left;
                div{
                    width: 100%;
                	height: 500px;
                	line-height: 500px;
                	text-align: center;
                    background: red
                }
            }
        }
    }

    #headed {
        width: 100%;
        overflow: hidden;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: #e6e6e6;
        margin-top: -2px;
    }

    .tab {
        overflow: hidden;
        padding: 0;
        margin: 0;
        height: 45px;
        line-height: 45px;
    }

    .tab li {
        float: left;
        list-style: none;
        width: 33.3%;
        text-align: center;
    }

    .body_bottom {
        width: 30px;
        height: 42px;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
    }

    .active_color {
        color: #d22330;
        border-bottom: 2px solid #d22330 !important;
    }

    .shift {
        transition-property: margin-left;
        transition-duration: 1s;
    }
</style>
