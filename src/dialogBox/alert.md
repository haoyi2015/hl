## alert弹窗
alert弹窗用于替换原生alert美化

## Usage
```
<template>
  <div>
    <a @click="handleOpen" href="javascript:;" class="weui-btn weui-btn_plain-default">alert弹窗</a>
    <alert :open.sync="open" title="标题">alert</alert>
  </div>
</template>
<script>
#1 引用组件形式
import alert from '../components/alert'
export default {
  ...
  components: { alert },
  ...
};
#2 全局注册，需要在main.js注入
使用
this.$alert({message: 'alert',title:'标题'}).then(() => {
  console.log('confirm---')
})
</script>
```

## Options
配置项 | 值类型 | 描述
--- | --- | ---
message | string | 显示内容，默认`空`,可传入dom
title   | string | 弹窗标题