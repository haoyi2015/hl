<template>
    <article class="b-tab">
        <section class="tab-warp">
            <div>
                <h2>单选</h2>
                <ul class="bq-li">
                    <li v-for="item in phones" :key="item.id" :class="radio == item.id ? 'bgColor':'' " @click="clickRadio(item.id)">{{item.name}}</li>
                    <div class="clean"></div>
                </ul>
            </div>
            <div>
                <h2>多选</h2>
                <ul class="bq-li">
                    <li v-for="items in phones" :flag="Checkbox.includes(items.id)" :class="Checkbox.includes(items.id) ? 'bgColor':'' " @click="clickCheckbox(items.id)">{{items.name}}</li>
                    <div class="clean"></div>
                </ul>
            </div>
        </section>
        <h2>多选按钮</h2>
        <div class="check-area" v-show="items.length!=0">
            <ul>
                <li class="border-1px" v-for="(item,index) in items">
                    <input class="self-checkbox" type="checkbox" :id="'checkbox-'+item.id" :data-id="'food-'+item.id" name="radio" :value="item.value" v-model="checkValues" @click="setCheckValue($event,item)">
                    <label :for="'checkbox-'+item.id"></label>
                    <span>{{item.value}}</span>
                </li>
            </ul>
            <p>您选择了：<span v-show="checkValues.length">{{filterCheckValues}}</span></p>
            <div class="btn">
                <button @click="showCheck(checkIds)">按钮</button>
                <span v-show="checkIds.length">{{checkIds}}</span>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
    ul,
    li {
        list-style-type: none;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .b-tab{
        .border-1px {
            position: relative;
        }

        .border-1px:after {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            border-top: 1px solid rgba(7, 17, 27, .1);
            content: ' ';
        }

        @media (-webkit-min-device-pixel-ratio: 1.5),
        (min-device-pixel-ratio: 1.5) {
            .border-1px::after {
                -webkit-transform: scaleY(0.7);
                transform: scaleY(0.7);
            }
        }

        @media (-webkit-min-device-pixel-ratio: 2),
        (min-device-pixel-ratio: 2) {
            .border-1px ::after {
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
            }
        }

        #example {
            margin: 20px;
        }

        h3 {
            font-size: 26px;
            margin-left: 20px;
            height: 60px;
        }

        .self-checkbox {
            display: none;
        }

        .self-checkbox+label {
            margin-top: 16px;
            -webkit-appearance: none;
            background-color: #fff;
            border: 2px solid #aaa;
            border-radius: 5px;
            display: inline-block;
            position: relative;
            width: 30px;
            height: 30px;
            box-sizing: border-box;
            vertical-align: top;
        }

        .self-checkbox:checked+label {
            border: 2px #47d9bf solid;
        }

        .self-checkbox:checked+label:after {
            display: inline-block;
            text-align: center;
            content: '√';
            width: 100%;
            height: 30px;
            line-height: 26px;
            color: #47d9bf;
            font-size: 18px;
            text-shadow: 0px 0px 5px #47d9bf;
        }

        .check-area {
            width: 400px;
            padding: 12px 20px;
            border: 1px solid #aaa;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        li {
            height: 60px;
        }

        li .self-radio+label {
            vertical-align: middle;
        }

        li span {
            margin-left: 20px;
            display: inline-block;
            line-height: 60px;
            font-size: 22px;
        }

        p {
            height: 60px;
            line-height: 60px;
            margin-left: 20px;
        }

        p span {
            color: #f00;
        }

        .btn {
            margin: 20px auto;
            width: 100%;
            text-align: center;
        }

        .btn button {
            width: 120px;
            height: 40px;
            line-height: 30px;
            font-size: 16px;
            color: #fff;
            background: #47d9bf;
            border: 1px #23d5b6 solid;
            border-radius: 6px;
            text-align: center;
            outline: none;
        }

        .btn button:hover {
            background: #23d5b6;
        }
        .bgColor{
            background: green;
            color: #fff;
        }
        .bq-li{
            clear: both;
            overflow: hidden;
        }
        .bq-li li{
            width: 40px;
            height: 40px;
            line-height: 40px;
            float: left;
            text-align: center;
            border-radius: 6px;
            font-size: 13px;
            margin:6px;
        }
        .tab-warp{
            display: block;
            border: 1px solid #999;
            clear: both;
            overflow: hidden;
            padding: 8px;
            border-radius: 5px;
            width: 400px;
        }
        h2{
            font-size: 14px;
        }
    }
</style>
<script>
    /*//数组的扩展 lang="ts"
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }

    import { Component, Vue } from 'vue-property-decorator';
    //mock 数据
    let itemData = [
        { id: '20170811001', value: '香蕉' },
        { id: '20170811002', value: '苹果' },
        { id: '20170811003', value: '梨子' },
        { id: '20170811004', value: '葡萄' }
    ]
    let phones = [
            {
                id:1,
                name:'华为',
            },
            {
                id:2,
                name:'荣耀',
            },
            {
                id:3,
                name:'小米',
            },
            {
                id:4,
                name:'魅族',
            },
            {
                id:5,
                name:'OPPO',
            },
            {
                id:6,
                name:'vivo',
            }
        ]

    @Component //必须加 不然数据试图不会更新
    export default class tab extends Vue {
        name:string = 'Simon Zhang'
        phones:object = phones
        items:string = ''
        checkValues:object = []
        checkIds:object = []
        //定义一个变量 用于储存id 单选只储存一个使用字符串
        radio:string = ''
        //多选储存多个id 则使用数组
        Checkbox:object = []

        // computed
        get filterCheckValues():string {
            let value = this.checkValues;
            let reValue = '';
            for (let i = 0; i < value.length; i++) {
                reValue += value[i] + '、'
            }
            reValue = reValue.substring(0, reValue.length - 1)
            return reValue;
        }
        // methods
        initData():void {
            var self = this;
            self.items = itemData;
            if (itemData.length != 0) {
                self.checkValues[0] = self.items[0].value;
                self.checkIds[0] = 'food-' + self.items[0].id;
            }
        }
        setCheckValue(ev, item):void {
            var id = 'food-' + item.id;
            if (ev.target.checked) {
                this.checkIds.push(id);
            } else if (this.checkIds.indexOf(id) > -1) {
                this.checkIds.remove(id);
            }
        }
        showCheck():void {
            console.log(this.checkIds)
        }
        clickRadio(e):void{
            if(this.radio == e){
                // 如果已经点击则取消点击样式
                this.radio = ''
            }
            else{
                // 把点击的元素id放入radio中
                this.radio = e;
            }
        }
        clickCheckbox(e):void{
            if(this.Checkbox.includes(e)){
                this.Checkbox.splice(this.Checkbox.indexOf(e),1);
            }else{
                // 把点击的元素id放入Checkbox数组中
                this.Checkbox.push(e);
            }
            console.log(this.Checkbox)
        }
        mounted() {
            this.initData();
        }
    }*/
</script>
