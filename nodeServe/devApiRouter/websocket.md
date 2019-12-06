## 使用 express-ws 提供本地开发所用的 Websocket

### 运行

执行 npm run dev 时，本服务自动附加运行，即可使用

### 安装

```shell
npm install express-ws -D
```

###  基本配置

> 在文件/build/dev-server.js 中导入服务文件及配置

```javascript
var app = express()
var expressWs = require('express-ws')
expressWs(app)
app.ws('/', require('../devApiRouter/websocket.js'))
```

### 服务端完整的示例代码

```javascript
var express = require('express')
var app = express()
var expressWs = require('express-ws')
var util = require('util')

expressWs(app)
app.ws('/ws', function(ws, request, next) {
    util.inspect(ws)
    ws.on('message', function(msg) {
        console.log('receive_message', msg)
        ws.send('echo:' + msg)
    })
})
app.listen(3000)
```

### 客户端的示例代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Websocket客户端示例</title>
</head>
<body>
<script>
    var ws = new WebSocket('ws://localhost:3000/ws');
    ws.onmessage = function (e) {
        console.log('_message', e.data);
    };
    ws.onerror = function (err) {
        console.log('_error', err);
    };
    ws.onopen = function () {
        console.log('_connect')
    };
    ws.onclose = function () {
        console.log('_close');
    };
    // ws.send('test message data'); // 测试发送消息
</script>
</body>
</html>
```

### 客户端接收消息基本格式

```json
{
	"event": "CONNECT",
		"response":
			{
                "client_id": "MTkyLjE2OC40MC43NV85NjA1XzQ0Mg=="
            }
}
```

### 服务端发送的消息类型说明(15个)

| event字段值          | 说明             |
| -------------------- | ---------------- |
| CONNECT              | 连接成功         |
| CLOSE                | 关闭连接         |
| RTRANSFER            | 转接请求         |
| TRANSFER_ERROR       | 转接失败         |
| TRANSFER             | 请求转接成功     |
| REFUSE_TRANSFER      | 请求转接拒绝     |
| SEND_MESSAGE_ERROR   | 消息发送失败     |
| SEND_MESSAGE_SUCCESS | 消息发送成功     |
| NEW_MESSAGE          | 当前聊天新消息   |
| DAY_ACCESS           | 今日接待人数     |
| NEW_MESSAGE_USER     | 不在聊天的新消息 |
| ONLINE               | 上线通知         |
| WOMSG                | 工单消息         |
| QIANGDAN             | 抢单消息         |
| TIMER                | timer消息        |

