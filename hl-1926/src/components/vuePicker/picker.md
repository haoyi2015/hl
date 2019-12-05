pick 使用说明 （外用到better-scroll）

## Props

| 参数 | 描述 | 可选 | 类型 | 默认
| ----- | ----- | ----- | ----- | ----- |
| data | pick数据 || Array |
| anchor | 锚点位置 || Array |
| type | 内置 picker 类型<br>无需传入 data | date, time | String |
| textTitle | title 文案 || String |
| textConfirm | confirm 文案 || String | 确定
| textCancel | cancel 文案 || String | 取消
| colorTitle | title 颜色 || String | #000000
| colorConfirm | confirm 颜色 || String | #42b983
| colorCancel | cancel 颜色 || String | #999999
| swipeTime | 滚动速度([better-scroll swipeTime]

## 取值说明
返回值为 object =[
  {
    name:'',
    id:'',
    index:'
  }
]