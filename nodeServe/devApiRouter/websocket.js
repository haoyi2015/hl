const util = require('util')

let allWsUser = new Array()

function CheckIsNew(x, list) {
    for (var i = 0; i < list.length; i++) {
        if (x.uuid == list[i]['uuid']) {
            return false
        }
    }
    return true
}

function checkIsFirst(msg) {
    // 连接用户管理
    if (msg.do && msg.do === 'init') {
        if (CheckIsNew(msg, allWsUser)) {
            allWsUser.push({
                'uuid': new Date().getTime(), // 临时生成用户的uuid
                'ws': ws
            })
        } else {
            for (let i = 0; i < allWsUser.length; i++) {
                if (msg.uuid == allWsUser[i]['uuid']) {
                    // if (msg.Data != 'userregister') {
                    allWsUser[i]['ws'].send(msg.uuid)
                    break
                    // }
                }
            }
        }
        console.log(allWsUser)
    }
}

const websocket = (ws, req, next) => {
    util.inspect(ws)
    ws.on('message', function (msg) {
        console.log('websocket receive:', msg)
        let rmsg = JSON.parse(msg)
        // checkIsFirst(msg)
        let res = {
            'event': '',
            'response': {},
            'msg': '',
            'request': rmsg, // 客户端发来的消息
            'time': new Date().getTime()
        }
        switch (rmsg.do) {
            case 'init':
                res.event = 'CONNECT'
                res.msg = '连接成功'
                res.response = {
                    'uuid': rmsg.uuid
                }
                break
            case 'heartbeat':
                res.event = 'BEART_BEAT'
                break
            case 'send_message':
                res.event = 'SEND_MESSAGE_SUCCESS'
                res.response = {
                    'id': 10597,
                    'tag': 0,
                    'type': 1,
                    'time_created': '2018/04/18 15:48',
                    'message': '用户预约了一节体验课,请点击上方-预约体验课,为其安排老师',
                    'name': '罗杰',
                    'head_url': 'http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664',
                    'status': 0,
                    'chat_id': 19255,
                    'length': 0,
                    'is_fail': 0,
                    'from_to': '微信公众号'
                }
                break
            // 测试：发送一条新消息
            case 'test_get_message':
                res.event = 'NEW_MESSAGE'
                res.response = {
                    'id': 10597,
                    'tag': 0,
                    'type': 1,
                    'time_created': '2018/04/18 15:48',
                    'message': '用户预约了一节体验课,请点击上方-预约体验课,为其安排老师',
                    'name': '罗杰',
                    'head_url': 'http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664',
                    'status': 0,
                    'chat_id': 19255,
                    'length': 0,
                    'is_fail': 0,
                    'from_to': '微信公众号'
                }
                break
            // 测试：发送工单通知
            case 'test_get_workorder':
                res.event = 'WORK_ORDER'
                res.response = {
                    'newsNum': 1,
                    'urgencyNum': 4,
                    'updateNum': 2,
                    'newsTenMinOutNum': 34,
                    'sendWaitNum': 5,
                    'sendDoingNum': 3,
                    'sendBeingDoneNum': 6,
                    'sendDoneNum': 1,
                    'sendUpdateWaitNum': 2,
                    'sendUpdateDoingNum': 7,
                    'sendUpdateBeingDoneNum': 8,
                    'sendUpdateDoneNum': 6
                }
                break
            // 测试：发送抢单通知
            case 'test_get_gradorder':
                res.event = 'GRAD_ORDER'
                res.response = {
                    'newsNum': 2,
                    'urgencyNum': 2,
                    'updateNum': 2,
                    'newsTenMinOutNum': 0,
                    'sendWaitNum': 5,
                    'sendDoingNum': 2,
                    'sendBeingDoneNum': 0,
                    'sendDoneNum': 2,
                    'sendUpdateWaitNum': 2,
                    'sendUpdateDoingNum': 0,
                    'sendUpdateBeingDoneNum': 0,
                    'sendUpdateDoneNum': 6
                }
                break
            case 'test_get_today_access_num':
                res.event = 'DAY_ACCESS'
                res.response = {
                    count: 4
                }
            default:
                res.event = ''
                break
        }
        ws.send(JSON.stringify(res))
    })
}

module.exports = websocket