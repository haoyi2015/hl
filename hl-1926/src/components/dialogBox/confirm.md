## confirm弹窗
confirm弹窗用于替换原生confirm美化

## Usage
```
<template>
  <div>
    <a class="weui-btn weui-btn_plain-default" @click="confirmHandleOpen1">confirm弹窗1</a><br />
    <a class="weui-btn weui-btn_plain-primary" @click="confirmHandleOpen2">confirm弹窗2</a><br />
    
    <confirm :open.sync="open1">确认删除？</confirm>
  </div>
</template>
<script>
#1 引用组件形式
import confirm from '../components/confirm'
export default {
  ...
  components: { confirm },
  ...
};
#2 全局注册，需要在main.js注入
使用
this.$confirm({message: str,title:'标题'}).then(() => {
  console.log('confirm')
}).catch(() => {
  console.log('cancel')
})
</script>
```

## Options
配置项 | 值类型 | 描述
--- | --- | ---
message | string | 显示内容，默认`空`,可传入dom
title   | string | 弹窗标题
confirm | string | 确认回调
cancel  | string | 取消回调