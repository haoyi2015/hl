## toast用法说明 ##

    ```


    this.$toast({
        message: '数据请求失败<div>111</div>',
        align: '',// 设置类型 [top,center,bottom]
        type: 'default',
        iconFontImg: '字体icon图标  icon-ic_safe_default',
        iconImg: ' icon图片图标 图片完整地址'
        duration : 100000 //消失时间
    })

    默认

    this.$toast({
        message: '数据请求失败<div>111</div>',
        duration : 100000 //消失时间
    })
    ```
## 参数 ##

    | 参数名字 | 类型 | 值 |
    | ------  | ------ | ------ |
    | message | 提示内容 | 可自定义配置 可加入html|
    | align   | 设置位置 | [top,center,bottom] 不需要指定此字段不要传|
    | type    | 显示类型 | [default,icon]  so|
    | iconImg | 图片图标 | 图片完整地址 |
    | iconFontImg | 字体图标 | 字体图标名称 |
    | duration | toast显示时间 | 1000s |
    | toastStyle | 设置toast样式 | 实例：background：#000; color:#fff; |
