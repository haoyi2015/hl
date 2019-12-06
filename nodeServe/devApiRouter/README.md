## 使用express提供本地开发所用的API

执行npm run dev 时本服务即可使用

在文件/build/dev-server.js中导入本API接口文件配置

```javascript
app.use('/dev', require('../devApiRouter')) // index.js
```



在目录/devApiRouter里存放api接口文档

文件index.js定义接口，简单的示例如下：

```javascript
const express = require('express')
const router = express.Router()
// 列表及分页 /list
router.get('/list', function (req, res) {
    // req为接口接收到的参数
    // res为接口返回的数据
    res.json({
        code: 200, // 返回成功200
        data: {
            total: 2, // 全部数量
            page_size: 10, // 每一页数量
            page_num: 1, // 当前页码
            list: [
                {
                    id: 1,
                    name: '新闻名称1'
                },
                {
                    id: 1,
                    name: '新闻名称1'
                }
            ]
        },
        time: new Date().getTime(),
        msg: '新闻列表加载成功'
    })
})
// 详情接口 /info
router.get('/info', function (req, res) {
    // req为接口接收到的参数
    // res为接口返回的数据
    res.json({
        code: 200, // 返回成功200
        data: {
            id: 1,
            name: '新闻名称1'
        },
        time: new Date().getTime(),
        msg: '新闻详情加载成功'
    })
})
module.exports = router
```

由于接口过多，分模块文件导入，除了index.js其他js文件均为单独的功能的接口模块

给后端的建议：接口要有版本管理, 用户要有统一标示,



> 开发使用的接口统一路径 /dev，用例：https://dev.api.peilian.com/v1/chat/order
>
> 参数token可以在请求处统一添加
>
> 参数当前用户的id应该不需要添加，使用token来做用户识别
>
> get 用于数据的获取，列表之类
>
> post 用于数据提交，修改、添加之类的功能， 其他的再做类似处理
>
>  id标识类数字的直接返回int类型
>
> 字段没值的 统一返回空字符串"", 前端可以直接根据字段值判断显示, 示例: {{value | '暂无'}}



