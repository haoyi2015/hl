## confirm 用法说明 ##

    ```
    this.$confirm(
        {
            title: '微信 2',
            contant: '啥玩意',
            okBntText: '我知道了',
            cancelBntText: '取消啊'
        }
    ).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })

    ```
## 参数 ##

    | 参数名字 | 类型 | 值 |
    | ------  | ------ | ------ |
    | title | 标题内容 | |
    | contant   | 展示内容 | 可自定义配置 可加入html|
    | okBntText   | 按钮内容 | 不显示不需要传值|
    | cancelBntText   | 按钮内容 | 不显示不需要传值|



```
 https://www.cnblogs.com/conglvse/p/9667647.html
```