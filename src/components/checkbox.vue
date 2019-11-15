<template>
    <article class="b-tab">
        <section class="tab-warp">
            <div v-if="!chkbType">
                <!-- 单选</h2> -->
                <ul class="check-cells check-cells_radio">
                    <li class="check-cell" v-for="item in phones" :key="item.id" @click="clickRadio(item.id)">
                        <div class="check-cell__bd">
                            <p>{{item.name}}</p>
                        </div>
                        <div class="check-cell__ft">
                            <span class="check-icon-success" :class="radio == item.id ? 'chkbchecked':'no-success' "></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-if="chkbType">
                <!-- 多选 -->
                <ul class="check-cells check-cells_checkbox">
                    <li class="check-cell" v-for="items in phones" :flag="Checkbox.includes(items.id)" @click="clickCheckbox(items.id)">
                        <div class="check-cell__bd">
                            <p>{{items.name}}</p>
                        </div>
                        <div class="check-cell__ft">
                            <span class="check-icon-success" :class="Checkbox.includes(items.id) ? 'chkbchecked':'no-success' "></span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </article>
</template>
<style lang="scss" scoped>
    .check-icon-success.no-success{
        color: #C9C9C9
    }
    .check-icon-success.chkbchecked{
        color: #09BB07
    }
    .check-cells {
        margin-top: 1.17647059em;
        background-color: #FFFFFF;
        line-height: 1.47058824;
        font-size: 17px;
        overflow: hidden;
        position: relative;
    }
    .check-cells:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        z-index: 2;
    }
    .check-cell {
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .check-cell:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 15px;
        z-index: 2;
    }
    .check-cell__bd {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .check-cells_radio .check-cell__ft {
        padding-left: 0.35em;
    }
    .check-cell__ft {
        text-align: right;
        color: #808080;
    }
    .check-icon-success {
        font-size: 23px;
    }
    [class^="check-icon-"], [class*=" check-icon-"] {
        display: inline-block;
        vertical-align: middle;
        font: normal normal normal 14px/1 "weui";
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
    }
    .check-icon-success:before {
        content: "\EA06";
    }
    [class^="check-icon-"]:before, [class*=" check-icon-"]:before {
        display: inline-block;
        margin-left: .2em;
        margin-right: .2em;
    }
</style>
<script>
    //数组的扩展
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }
    export default {
        props:{
            chkbData:{
                type: '',
                default () {
                  return {}
                }
            },
            chkbType:{
                type: Boolean,
                required: true,
            }
        },
        data(){
            return{
                name:'Simon Zhang',
                phones:Array.isArray(this.chkbData)?this.chkbData:[this.chkbData],
                items:'',
                checkValues:[],
                checkIds:[],
                //定义一个变量 用于储存id 单选只储存一个使用字符串
                radio:'',
                //多选储存多个id 则使用数组
                Checkbox:[]
            }
        },
        created(){
            console.info(1)
        },
        computed:{
            filterCheckValues:function(){
                let value = this.checkValues;
                let reValue = '';
                for (let i = 0; i < value.length; i++) {
                    reValue += value[i] + '、'
                }
                reValue = reValue.substring(0, reValue.length - 1)
                return reValue;
            }
        },
        methods:{
            setCheckValue(ev, item) {
                var id = 'food-' + item.id;
                if (ev.target.checked) {
                    this.checkIds.push(id);
                } else if (this.checkIds.indexOf(id) > -1) {
                    this.checkIds.remove(id);
                }
            },
            showCheck() {
                console.log(this.checkIds)
            },
            clickRadio(e){
                if(this.radio == e){
                    // 如果已经点击则取消点击样式
                    this.radio = ''
                }
                else{
                    // 把点击的元素id放入radio中
                    this.radio = e;
                }
                this.$emit('checkbox-fun', this.radio);
            },
            clickCheckbox(e){
                if(this.Checkbox.includes(e)){
                    this.Checkbox.splice(this.Checkbox.indexOf(e),1);
                }else{
                    // 把点击的元素id放入Checkbox数组中
                    this.Checkbox.push(e);
                }
                this.$emit('checkbox-fun', this.Checkbox);
            }
        },
        mounted() {

        },
        watch:{
            chkbType:function(v){
                console.log(v+'----------监听变化')
                this.Checkbox =[]
                this.radio =''
                this.$emit('checkbox-fun', v?this.Checkbox:this.radio);
            }
        }
    }
</script>
