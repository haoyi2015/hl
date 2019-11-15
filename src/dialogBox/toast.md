## toast弹窗
toast弹窗用于替换原生toast美化

## Usage
```
<template>
  <div>
    ...
  </div>
</template>
<script>
# 全局注册，需要在main.js注入
使用
this.$toast({
  message: '操作成功',
  type: 'default'
})
</script>
```

## Options
配置项 | 值类型 | 描述
--- | --- | ---
message | string | 显示内容，默认`空`,可传入dom
type   | string | 类型