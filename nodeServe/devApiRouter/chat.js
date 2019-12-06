/** 聊天API
 * @建议 接口要有版本管理, 用户要有统一标示
 * @统一路径 /chat，用例：https://api.peilian.com/v1/chat/history
 * @get 数据获取, 示例为变量getReq
 * @post 数据提交、修改, 示例为变量postReq, 其他的再做类似处理
 * @字段没值的 统一返回空字符串"", 前端可以直接根据字段值判断显示, 示例: {{value | '暂无'}}
 * @token 参数token可以在http请求处统一添加，参数当前客服的id应该不需要添加，已经有token来做用户识别了
 * @code码 非200必须返回msg字段，用于友好错误提示，或者可以制定错误码规范，前端根据错误码做对应提示
 */
const CHAT = {
    /** get请求，获取聊天在线状态
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getStatus(req, res) {
        getReq = {
            token: '',
        }
        res.json({
            code: 200, // 200 成功，其他code设置失败
            data: {
                status: true
            },
            time: new Date().getTime(),
            msg: '状态获取成功'
        })
    },
    /** post请求, 聊天在线状态设置
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postStatus(req, res) {
        // post请求，设置在线状态
        postReq = {
            status: 0 // 1在线，2离线，3空闲，4忙碌，5小休
        }
        let msg = '状态更新失败'
        let request = req.body
        let status = 0
        let code = 400
        console.log('POST online', request)
        if (request && req.method === 'POST') {
            status = Number(request.status)
            code = 200
            switch (status) {
                case 1:
                    msg = '已设置状态在线'
                    break;
                case 2:
                    msg = '已设置状态离线'
                    break;
                case 3:
                    msg = '已设置状态空闲'
                    break;
                case 4:
                    msg = '已设置状态忙碌'
                    break;
                case 5:
                    msg = '已设置状态小休'
                    break;
                default:
                    code = 400
                    msg = '状态参数错误'
                    break;
            }
        }
        res.json({
            code: code,
            data: {
                status: status
            },
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 聊天消息记录
     * 问题: 记录所有客服跟用户的记录还是只有当前客服的记录, 当前为所有
     * 问题1: 这个位置偏移量，是当前已经加载的数量还是位置记录
     * 问题2: 需确认，客户的头像是否需要，在用户信息里已经有头像字段，此处可不要
     * 问题3: 聊天类型: ['系统消息', '自动聊天机器人', '客户']
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getHistory(req, res) {
        // get请求，获取聊天记录
        getReq = {
            uuid: '',
            offect: 0 // 当前记录的位置偏移量
        }
        res.json({
            code: 200, // 200 成功
            data: [
                {
                    "id": 10635,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/04/23 15:54",
                    "message": "罗杰在2018-04-23 15:54:55【提交订单，等待支付】</br>订单内容： 测试 </br>订单金额：0.02元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 21515,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10603,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/04/23 14:24",
                    "message": "罗杰在2018-04-23 14:24:20【提交订单，等待支付】</br>订单内容： 测试 </br>订单金额：0.02元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 21411,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10601,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/04/18 16:48",
                    "message": "罗杰在2018-04-18 16:48:22【完成支付】</br>订单内容： 50分钟100节陪练套餐 </br>订单金额：0.03 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 19307,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 8327,
                    "tag": 1,
                    "type": 1,
                    "time_created": "2018/04/18 16:05",
                    "message": "家长您好，由于现在是接待高峰期，不能及时回复您，深表歉意，请您耐心等待。如有任何紧急问题，欢迎随时拨打客服热线4006060854，很高兴为您服务，祝您生活愉快！",
                    "name": "自动聊天机器人",
                    "head_url": "http://test001.pnlyy.com/user/head/f2e16c0fa00d7ab4e7decba2b06772d2",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10599,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/04/18 15:51",
                    "message": "罗杰在2018-04-18 15:51:21【完成支付】</br>订单内容： 50分钟100节陪练套餐 </br>订单金额：0.03 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 19257,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10597,
                    "tag": 0,
                    "type": 1,
                    "time_created": "2018/04/18 15:48",
                    "message": "用户预约了一节体验课,请点击上方-预约体验课,为其安排老师",
                    "name": "罗杰",
                    "head_url": "http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664",
                    "status": 0,
                    "chat_id": 19255,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10595,
                    "tag": 0,
                    "type": 1,
                    "time_created": "2018/04/18 15:47",
                    "message": "罗杰在2018-04-18 15:47:44注册成为新用户",
                    "name": "罗杰",
                    "head_url": "http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664",
                    "status": 0,
                    "chat_id": 19253,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 7806,
                    "tag": 0,
                    "type": 1,
                    "time_created": "2018/07/02 15:55",
                    "message": "111",
                    "name": "张西海",
                    "head_url": "http://static.pnlyy.com/avatar.png",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 7805,
                    "tag": 0,
                    "type": 1,
                    "time_created": "2018/07/02 15:54",
                    "message": 0,
                    "name": "罗杰",
                    "head_url": "http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664",
                    "status": 0,
                    "chat_id": 52281,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 7804,
                    "tag": 1,
                    "type": 1,
                    "time_created": "2018/07/02 15:54",
                    "message": "111",
                    "name": "张西海",
                    "head_url": "http://static.pnlyy.com/avatar.png",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 9706,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/06/27 13:54",
                    "message": "罗杰在2018-06-27 13:54:40【完成支付】</br>订单内容： 测试 </br>订单金额：0.02 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 51652,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 9702,
                    "tag": 0,
                    "type": 1,
                    "time_created": "2018/06/27 13:28",
                    "message": "4545454",
                    "name": "罗杰",
                    "head_url": "http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664",
                    "status": 0,
                    "chat_id": 51647,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10993,
                    "tag": 1,
                    "type": 1,
                    "time_created": "2018/04/24 16:10",
                    "message": 0,
                    "name": "罗杰qqq",
                    "head_url": "http://static.pnlyy.com/avatar.png",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10991,
                    "tag": 0,
                    "type": 1,
                    "time_created": "2018/04/24 16:07",
                    "message": "牛B了",
                    "name": "罗杰",
                    "head_url": "http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664",
                    "status": 0,
                    "chat_id": 22005,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10989,
                    "tag": 0,
                    "type": 1,
                    "time_created": "2018/04/24 16:07",
                    "message": "额",
                    "name": "罗杰",
                    "head_url": "http://test001.pnlyy.com/user/whead_icon_56b82b778b6abb2883bbeec3bf9cf613_1524037664",
                    "status": 0,
                    "chat_id": 22003,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10987,
                    "tag": 1,
                    "type": 1,
                    "time_created": "2018/04/24 16:06",
                    "message": "test",
                    "name": "罗杰qqq",
                    "head_url": "http://static.pnlyy.com/avatar.png",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 10729,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/04/23 19:49",
                    "message": "罗杰在2018-04-23 19:49:07【完成支付】</br>订单内容： 测试 </br>订单金额：0 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 21657,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 7904,
                    "tag": 1,
                    "type": 2,
                    "time_created": "2018/07/04 11:04",
                    "message": "https://tests001.pnlyy.com/poster/image/b3491ccdc038998554cca18db6f84ca1",
                    "name": "豆振江",
                    "head_url": "http://test001.pnlyy.com/user/head/e7d66ed3b395f543c4999ef733251eb5",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 1,
                    "from_to": "微信公众号"
                },
                {
                    "id": 7903,
                    "tag": 1,
                    "type": 2,
                    "time_created": "2018/07/04 11:04",
                    "message": "https://tests001.pnlyy.com/poster/image/0401712405efc2604aa0fda4be77bdbe",
                    "name": "豆振江",
                    "head_url": "http://test001.pnlyy.com/user/head/e7d66ed3b395f543c4999ef733251eb5",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 1,
                    "from_to": "微信公众号"
                },
                {
                    "id": 7901,
                    "tag": 1,
                    "type": 1,
                    "time_created": "2018/07/04 11:03",
                    "message": "号外！号外！crm发票199家长您好，这是我们为您制作的专属二维码海报，您可以保存下来，转发到朋友圈，也可以根据您个人意愿配点评语，截图发送给我，今日报名的用户我们即刻赠送您2节课程，老用户每个月可以来平台领取海报，转发海报都能额外获得1节赠课哦！后续您每有朋友扫码后关注报名正式课您家小朋友都会获得10节课的赠送。",
                    "name": "豆振江",
                    "head_url": "http://test001.pnlyy.com/user/head/e7d66ed3b395f543c4999ef733251eb5",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 1,
                    "from_to": "微信公众号"
                },
                {
                    "id": 7902,
                    "tag": 1,
                    "type": 2,
                    "time_created": "2018/07/04 11:03",
                    "message": "https://tests001.pnlyy.com/chat/image/636eb6f0542235dc710c1e9a5e3f38a0",
                    "name": "豆振江",
                    "head_url": "http://test001.pnlyy.com/user/head/e7d66ed3b395f543c4999ef733251eb5",
                    "status": 0,
                    "chat_id": 0,
                    "length": 0,
                    "is_fail": 1,
                    "from_to": "微信公众号"
                },
                {
                    "id": 9393,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/06/21 19:15",
                    "message": "crm发票199在2018-06-21 19:15:56【完成支付】</br>订单内容： 【高级】50分钟160节高级陪练套餐 </br>订单金额：14888 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 49870,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 9380,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/06/21 17:28",
                    "message": "crm发票199在2018-06-21 17:28:17【完成支付】</br>订单内容： 【高级】50分钟365节高级陪练套餐 </br>订单金额：21888 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 49835,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 9379,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/06/21 17:19",
                    "message": "crm发票199在2018-06-21 17:19:00【完成支付】</br>订单内容： 【高级】50分钟80节高级陪练套餐 </br>订单金额：8888 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 49834,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 9378,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/06/21 16:48",
                    "message": "crm发票199在2018-06-21 16:48:09【完成支付】</br>订单内容： 50分钟60节陪练套餐 </br>订单金额：4888 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 49823,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                },
                {
                    "id": 9293,
                    "tag": 2,
                    "type": 1,
                    "time_created": "2018/06/21 16:42",
                    "message": "crm发票199在2018-06-21 16:42:57【完成支付】</br>订单内容： 50分钟60节陪练套餐 </br>订单金额：4888 元",
                    "name": "",
                    "head_url": "",
                    "status": 0,
                    "chat_id": 49820,
                    "length": 0,
                    "is_fail": 0,
                    "from_to": "微信公众号"
                }
            ],
            time: new Date().getTime(),
            msg: '聊天记录列表获取成功'
        })
    },
    /** 消息处理
     * 将待处理的消息设置成已处理
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    dealMessage(req, res) {
        // post请求，处理消息
        postReq = {
            chatid: 26551, // 消息id
        }
        res.json({
            code: 200, // 200 成功，其他code设置失败
            data: {},
            time: new Date().getTime(),
            msg: '消息已处理成功'
        })
    },
    /** 客户基本信息
     * 此接口应归类到用户类接口内
     * 问题：不同来源的用户如何识别，系统有统一的标示吗
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    clientInfo(req, res) {
        // get请求，获取客户基本信息
        getReq = {
            uuid: '', // 客户id
            token: ''
        }
        res.json({
            code: 200,
            data: {
                uid: 345,
                uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                initId: 106621,
                studentId: 102459,
                name: '注册姓名',
                real_name: '真实姓名',
                nick_name: '微信名称',
                avatar: 'http://static.pnlyy.com/avatar.png',
                type: 'wechat', // wechat 微信用户，site 官网用户
                mobile: '18405090001',
                subscribe_time: '2018-05-09 10:30',
                payTime: '2018-05-09 11:12',
                channelId: 34,
                channel_name: '通道名称',
                have_app: 0,
                consultant_n: '新签客服',
                consultant_r: '复购客服',
                source: 'wechat', // wechat 微信，site 官网
                region: '地区',
                reg: true // true 已注册，false 未注册
            },
            time: new Date().getTime(),
            msg: '客户信息加载成功'
        })
    },
    /** 历史接待的客户
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    clientRecent(req, res) {
        // get请求，获取客户基本信息
        getReq = {
            uuid: '', // 客户id
            token: ''
        }
        res.json({
            code: 200,
            data: {
                total: 2,
                list: [{
                    uid: 345,
                    uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                    initId: 106621,
                    studentId: 102459,
                    name: '注册姓名',
                    real_name: '真实姓名',
                    nick_name: '微信名称',
                    avatar: 'http://static.pnlyy.com/avatar.png',
                    type: 'wechat', // wechat 微信用户，site 官网用户
                    mobile: '134****0467',
                    subscribe_time: '2018-05-09 10:30',
                    payTime: '2018-05-09 11:12',
                    channelId: 34,
                    channel_name: '通道名称',
                    have_app: 0,
                    consultant_n: '新签客服',
                    consultant_r: '复购客服',
                    source: 'wechat', // wechat 微信，site 官网
                    region: '地区',
                    reg: true // true 已注册，false 未注册
                }, {
                    uid: 346,
                    uuid: '1f3c5be5-7bfa-9792-0374-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6kjeiyA_fko',
                    initId: 106622,
                    studentId: 102460,
                    name: '注册姓名22',
                    real_name: '真实姓名222',
                    nick_name: '微信名称22',
                    avatar: 'http://static.pnlyy.com/avatar.png',
                    type: 'wechat', // wechat 微信用户，site 官网用户
                    mobile: '158****0001',
                    subscribe_time: '2018-05-03 10:30',
                    payTime: '2018-05-09 11:12',
                    channelId: 34,
                    channel_name: '通道名称22',
                    have_app: 0,
                    consultant_n: '新签客服2',
                    consultant_r: '复购客服2',
                    source: 'wechat', // wechat 微信，site 官网
                    region: '地区',
                    reg: true // true 已注册，false 未注册
                }]
            },
            time: new Date().getTime(),
            msg: '接待客户加载成功'
        })
    },
    /** 一周内的课程，, 最近的课程及计划安排
     * 从当天开始, 连续的7天
     */
    weekCoursePlan(req, res) {
        getReq = {
            day: '', // 1 - 7对应包括今天之后的七天
        }
        let request = {}
        if (req.method === 'GET') {
            request = req.query
            console.log('GET weekCoursePlan', request)
            let day = Number(req.query.day)
            let resData = {}
            if (day === 3) {
                resData = {
                    "day": day,
                    "list": [
                        {
                            "id": "24585030",
                            "teacher_name": "蒋春风(被离职无效)",
                            "marks": "",
                            "student_id": "110184",
                            "student_name": "crm用户199",
                            "student_icon": "http://test001.pnlyy.com/user/whead_icon_onhLcsr_1SW2sfSZ7OqU-AInwqCs_1529570524",
                            "peripheral": "有",
                            "teacher_id": "1911",
                            "class_type": "购买课",
                            "teacher_later": "",
                            "student_later": "",
                            "teacher_in_time_status": "未进入教室",
                            "student_in_time_status": "未进入教室",
                            "class_time": {
                                "day": "07/04 ",
                                "time": "14:30-15:20"
                            },
                            "class_status": 0,
                            "teacher_icon": "http://test001.pnlyy.com/user/head_icon/e6ffe5959dd69f10cf463dd4ae9a8d39",
                            "student_net": "",
                            "student_app": "",
                            "teacher_net": "",
                            "teacher_app": "(V2.2.1)",
                            "student_status": "未进入教室",
                            "teacher_status": "未进入教室",
                            "student_class": "red",
                            "teacher_class": "red",
                            "music_score": true // 是否有乐谱
                        },
                        {
                            "id": "24585025",
                            "teacher_name": "张张张",
                            "marks": "",
                            "student_id": "110184",
                            "student_name": "crm发票199",
                            "student_icon": "http://test001.pnlyy.com/user/head_icon/e6ffe5959dd69f10cf463dd4ae9a8d39",
                            "peripheral": "有",
                            "teacher_id": "1912",
                            "class_type": "购买课",
                            "teacher_later": "",
                            "student_later": "",
                            "teacher_in_time_status": "未进入教室",
                            "student_in_time_status": "迟到了",
                            "class_time": {
                                "day": "07/04 ",
                                "time": "16:30-17:20"
                            },
                            "class_status": 0,
                            "teacher_icon": "http://test001.pnlyy.com/user/whead_icon_onhLcsr_1SW2sfSZ7OqU-AInwqCs_1529570524",
                            "student_net": "",
                            "student_app": "",
                            "teacher_net": "",
                            "teacher_app": "(V2.2.1)",
                            "student_status": "未进入教室",
                            "teacher_status": "未进入教室",
                            "student_class": "red",
                            "teacher_class": "red",
                            "music_score": false // 是否有乐谱
                        }
                    ],
                    "week": []
                }
            } else if (day) {
                resData = {
                    "day": day,
                    "list": [],
                    "week": []
                }
            } else {
                resData = {
                    "day": 1,
                    "list": [],
                    "week": [
                        {
                            day: 1,
                            dayName: '今',
                            count: 0
                        }, {
                            day: 2,
                            dayName: '二',
                            count: 0
                        }, {
                            day: 3,
                            dayName: '三',
                            count: 2
                        }, {
                            day: 4,
                            dayName: '四',
                            count: 0
                        }, {
                            day: 5,
                            dayName: '五',
                            count: 0
                        }, {
                            day: 6,
                            dayName: '六',
                            count: 0
                        }, {
                            day: 7,
                            dayName: '日',
                            count: 0
                        }
                    ]
                }
            }
            res.json({
                code: 200,
                data: resData,
                request: request,
                time: new Date().getTime(),
                msg: '最近课程加载成功'
            })
        }
    },
    /** 快速回复信息列表
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getQuickMessage(req, res) {
        getReq = {
            role: '', // 用户角色
            cata: '' // 分类
        }
        let request = {}
        let role = ''
        if (req.method === 'GET') {
            console.log('GET getQuickMessage', request)
            request = req.query
            role = req.query.role
        }
        let cate = []
        let list = []
        if (role === '0') {
            cate = [
                {id: '80', name: '注册已付费客户'},
                {id: '81', name: '新用户'},
                {id: '355', name: '测试素材管理'},
                {id: '428', name: '发票'},
                {id: 'other', name: '其他'}
            ]
            list = []
        } else if (role === '1') {
            cate = [
                {id: '1', name: '课前'},
                {id: '2', name: '课后'},
                {id: '3', name: '付款后'},
                {id: '329', name: '测试'},
                {id: '335', name: '素材测试'},
                {id: '413', name: '测试1'},
                {id: '420', name: '发票'},
                {id: 'other', name: '其他'}
            ]
            list = [{
                title: '结束语&开头语',
                list: [{
                    title: '开头语',
                    message: '您好，很高兴为您服务，请问有什么可以帮到您？/:,@-D'
                }, {
                    title: '结束语（正常）',
                    message: '感谢您对我们的支持。'
                }, {
                    title: '结束语（抱怨）',
                    message: '感谢您对我们的理解。'
                }, {
                    title: '结束语(转海报)',
                    message: '赠课已录入系统，感谢您对我们的支持和分享，/:,@-D'
                }]
            }, {
                title: '取消课',
                list: [{
                    title: '取消临时课程',
                    message: `家长您好，已经帮您取消了。下次您可以按如下的步骤自助取消哦！
                    【自助取消课操作指南】
                    1、点击VIP陪练微信公众号下方“我的课程”按钮；
                    2、点击“课程管理”即可查看或取消最近30天内的已预约课程；
                    
                    PS:您每月享有4次免费课前两小时内取消课程的机会哦！课前2小时外取消不计入次数。`
                }, {
                    title: '取消固定课程',
                    message: '家长您好，已经帮您取消了。考虑到小孩的练琴习惯和课程的连贯，建议您后续尽量以固定课的形式安排上课时间哦！'
                }]
            }, {
                title: '加课程',
                list: [{
                    title: '加临时课程',
                    message: '家长您好，临时排课我们尽量安排您原来的固定课老师，如果安排不上，给您排一位同等级老师可以吗？'
                }, {
                    title: '加固定课程',
                    message: '家长您好，麻烦告诉我们具体的时间，以便为您安排。我们尽量安排您原来的固定课老师，如果安排不上，给您排一位同等级老师可以吗？'
                }, {
                    title: '加课完毕回复',
                    message: '已为您安排完毕，请问您需要更新上传曲谱吗？'
                }]
            }]
        } else if (role === '4') {
            cate = [
                {id: '57', name: '注册已付费客户'},
                {id: '58', name: '新用户'},
                {id: '349', name: '测试素材管理'},
                {id: '424', name: '发票'},
                {id: 'other', name: '其他'}
            ]
            list = []
        }
        res.json({
            code: 200,
            data: {
                cate: cate || [],
                list: list || []
            },
            request: request || {},
            time: new Date().getTime(),
            msg: '快速回复消息加载成功'
        })
    },
    /** 未回复的客户
     * 等待接待的客户
     * @注意: 这里面等待的客户是全部等待列表
     */
    getNotificationList(req, res) {
        // get请求, 等待接待的列表
        res.json({
            code: 200, // 200 成功
            data: {
                total: 30,
                list: [{"is_connect":"0","user_name":"","user_id":0,"open_id":"onhLcsk1QrKVI9Ho4v6nUgHJINe4","uuid":"e5c9d115-33e9-6d29-e782-53d1a0a8d135","kefu_name":"益韶主管"},{"is_connect":"1","user_name":"crm蔡雪虎05070002","user_id":"102621","open_id":"","uuid":"dd58e279-df4b-2a37-2d67-a87ac58bb69c","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"app_test1010","user_id":"100803","open_id":"","uuid":"12f918e6-bf95-66e2-8438-bdba5b4cabb6","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"官网106869","user_id":0,"open_id":"","uuid":"f7d9524a-9cdd-7c0e-6ed8-1ca76a7f95a1","kefu_name":"益韶主管"},{"is_connect":"1","user_name":"小可可","user_id":"102657","open_id":"","uuid":"a0e9c9de-2813-5343-6eb1-f01d8974e340","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"JC排课勿动050908","user_id":"102829","open_id":"","uuid":"7e1a46f1-935e-c6eb-47d0-e7e0583a7659","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"crm蔡雪虎05240003","user_id":"103421","open_id":"","uuid":"9ea969af-3ec2-68b5-59c3-5d10f5f54f82","kefu_name":"test复购组员"},{"is_connect":"0","user_name":"ce shi","user_id":"103293","open_id":"","uuid":"b66b262b-2126-b98d-5846-83ef235b40e2","kefu_name":"张东海"},{"is_connect":"0","user_name":"佩奇已经不滴滴人了","user_id":"103413","open_id":"","uuid":"94a2cf34-99e3-5ac4-d5e6-1999383aa223","kefu_name":"杨艳1"},{"is_connect":"0","user_name":"小程序pk700","user_id":"103369","open_id":"","uuid":"42aba28b-7f58-8d50-4103-b4357f8d0065","kefu_name":"杨艳1"},{"is_connect":"0","user_name":"小猪123","user_id":"103085","open_id":"","uuid":"c5546261-c758-611d-e935-bc1dda423897","kefu_name":"杨艳1"},{"is_connect":"0","user_name":"教研04","user_id":"103431","open_id":"","uuid":"c2d4dd0c-d328-d6ea-7930-5809926d6423","kefu_name":"张西海"},{"is_connect":"0","user_name":"crm蔡雪虎05240005","user_id":"103427","open_id":"","uuid":"649e0d78-6700-4953-7f95-e5badd84eb30","kefu_name":"商松林"},{"is_connect":"0","user_name":"教研05","user_id":"103435","open_id":"","uuid":"d3b730e3-f3c9-fcd6-4b5e-24010cde1e8a","kefu_name":"张西海"},{"is_connect":"0","user_name":"教研06","user_id":"103437","open_id":"","uuid":"f8c27da1-9530-5fce-80f9-efa5108b3dc4","kefu_name":"张西海"},{"is_connect":"0","user_name":"xcxpk20","user_id":"103443","open_id":"","uuid":"02dead96-b18b-7e3a-46b9-4016de226de9","kefu_name":"商松林"},{"is_connect":"0","user_name":"llltttt","user_id":"103445","open_id":"","uuid":"158816be-44ca-9382-8c8f-b2ea129dbfb2","kefu_name":"张西海"},{"is_connect":"0","user_name":"官网注册账号105463","user_id":"102167","open_id":"","uuid":"96c8a5eb-e50f-e8df-5d11-3e0eafa9fe67","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"crm转移业绩001","user_id":"102221","open_id":"","uuid":"dac68003-bc85-4539-8f8b-b148e3e6fafd","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"小孩子","user_id":"103465","open_id":"","uuid":"ffe417a2-77e4-6911-b914-8ef81b333b2a","kefu_name":"杨艳1"},{"is_connect":"0","user_name":"哈哈哈哈","user_id":"103473","open_id":"","uuid":"b1e75355-4c6e-ae98-c318-5653c4aaa25c","kefu_name":"测试4"},{"is_connect":"0","user_name":"killa","user_id":"103419","open_id":"","uuid":"462e237c-120d-a400-d7af-5b7d8820efca","kefu_name":"普通新签"},{"is_connect":"0","user_name":"crm订单管理999","user_id":"102849","open_id":"","uuid":"8bf3d561-5be5-e91d-171e-2e21350c89dc","kefu_name":"张西海"},{"is_connect":"0","user_name":"crm订单专用099","user_id":"102593","open_id":"","uuid":"7de06530-0867-bb6e-7f7d-f54fed95f37f","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"黄成伟测试1号","user_id":"102807","open_id":"","uuid":"3beb2870-1564-3006-b44c-e582aedc3cb3","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"crm蔡雪虎05090001","user_id":"102759","open_id":"","uuid":"acae8b08-4c79-8895-0a45-48c9e54941ac","kefu_name":"前端VP"},{"is_connect":"0","user_name":"教研7","user_id":"103475","open_id":"","uuid":"765e1a01-5a75-db0b-7764-e69e517c132d","kefu_name":"张西海"},{"is_connect":"0","user_name":"JC排课勿动050901","user_id":"102781","open_id":"","uuid":"ff3872d5-9a7f-61fe-d8f0-4e50b7e672a7","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"yy测试5906","user_id":"102827","open_id":"","uuid":"adccaf12-1b92-f6b1-a1d3-251363b01687","kefu_name":"益韶主管"},{"is_connect":"0","user_name":"小程序测试800","user_id":"101711","open_id":"","uuid":"2a525719-8470-98b9-a83d-575be9278f86","kefu_name":"vp"}]
            },
            time: new Date().getTime(),
            msg: '客户列表获取成功'
        })
    },
    /** 聊天转接
     * 将接待的客户转接给其他客户来处理
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    transfer(req, res) {
        // type: send: 直接转接给他人 || request: 发起人：请求转接 || accept: 接收人：接受转接 || refuse: 接收人：拒绝转接
        postReq = {
            type: 'send',
            uuid: '', // 转移的客户
            sender: '请求者',
            receiver: '接收者'
        }
        let code = 400
        let msg = '参数错误'
        let data = ''
        let request = {}
        if (req.method === 'GET') {
            code = 200
            request = req.query
            msg = '可转接客服列表加载成功'
            data = {
                total: 4,
                list: [
                    {
                        kefu_id: 1133,
                        head_icon: 'http://test001.pnlyy.com/user/head/bfc55d883d8aebf279c9976388078553',
                        name: '闻嘉安(新签)',
                    },
                    {
                        kefu_id: 1133,
                        head_icon: 'http://test001.pnlyy.com/user/head/38b8ea64e39cc390888b612e07aba3c9',
                        name: '王涛',
                    },
                    {
                        kefu_id: 1133,
                        head_icon: 'http://static.pnlyy.com/avatar.png',
                        name: '张西海',
                    },
                    {
                        kefu_id: 1133,
                        head_icon: 'http://test001.pnlyy.com/user/head/d0b0519e9009a5c71bea856bf75356d5',
                        name: '新签-组员',
                    }
                ]
            }
        } else if (req.method === 'POST') {
            request = req.body
            if (request.type === 'send') {
                code = 200
                msg = '转接成功'
            } else if (request.type === 'request') {
                code = 200
                msg = '转接请求已发送'
            } else if (request.type === 'accept') {
                code = 200
                msg = '转接请求已接受'
            } else if (request.type === 'refuse') {
                code = 200
                msg = '转接请求已拒绝'
            }
        }
        res.json({
            code: code || 500,
            data: data || {},
            request: request,
            time: new Date().getTime(),
            msg: msg || '服务器错误'
        })
    },
    /** 接入客户
     * 分为直接接入与他人转接两个类型
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    access(req, res) {
        // post请求，接待客户
        // 接入成功则返回用户信息
        postReq = {
            uuid: '', // 接待的客户id
        }
        let code = 400
        let data = ''
        let msg = '参数错误'
        console.log('POST access', req.body) // , Number(req.body.message_id))
        if (req.method === 'POST') {
            if (req.body.uuid && req.body.uuid === '12f918e6-bf95-66e2-8438-bdba5b4cabb6') {
                code = 400
                data = {}
                msg = '模拟: 接入失败'
            } else if (req.body.uuid && req.body.uuid === 'e5c9d115-33e9-6d29-e782-53d1a0a8d135') {
                code = 50013
                data = {
                    kefu_name: '占用接入聊天的客服名字',
                    kefu_uuid: '675ae9ad-343f-1518-7d9c-f3cff2d6ae78',
                    student_uuid: req.body.uuid
                }
                msg = '该用户正在接待中'
            } else if (req.body.uuid) {
                code = 200
                data = {
                    chatId: 3434,// 返回聊天id
                    student_info: {
                        uid: 3453,
                        uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                        openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                        initId: 106621,
                        studentId: 102459,
                        name: '注册姓名',
                        real_name: '真实姓名',
                        nick_name: '微信名称',
                        avatar: 'http://static.pnlyy.com/avatar.png',
                        type: 'wechat', // wechat 微信用户，site 官网用户
                        mobile: '18405090001',
                        subscribe_time: '2018-05-09 10:30',
                        payTime: '2018-05-09 11:12',
                        channelId: 34,
                        channel_name: '通道名称',
                        have_app: 0,
                        consultant_n: '新签客服',
                        consultant_r: '复购客服',
                        source: 'wechat', // wechat 微信，site 官网
                        region: '地区',
                        reg: true // true 已注册，false 未注册
                    }
                }
                msg = '接入客户成功'
            }
        }
        res.json({
            code: code || 500,
            data: data || {},
            time: new Date().getTime(),
            msg: msg || '服务器错误'
        })
    },
    /** post请求, 退出当前接待客户
     * 关闭当前客户的接待
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postEject(req, res) {
        postReq = {
            chat_id: 34546,
            uuid: '' // 接待的客户id
        }
        res.json({
            code: 200,
            data: {
                chat_id: 3434 // 返回聊天id
            },
            time: new Date().getTime(),
            msg: '退出接待成功'
        })
    },
    /** get请求, 表情图片列表
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getEmoji(req, res) {
        res.json({
            code: 200, // 200 成功
            data: {
                total: 88,
                list: [
                    {
                        "emoji": "/::)",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_1"
                    },
                    {
                        "emoji": "/::~",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_2"
                    },
                    {
                        "emoji": "/::B",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_3"
                    },
                    {
                        "emoji": "/::|",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_4"
                    },
                    {
                        "emoji": "/::<",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_5"
                    },
                    {
                        "emoji": "/::$",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_6"
                    },
                    {
                        "emoji": "/::X",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_7"
                    },
                    {
                        "emoji": "/::Z",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_8"
                    },
                    {
                        "emoji": "/::'(",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_9"
                    },
                    {
                        "emoji": "/::-|",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_10"
                    },
                    {
                        "emoji": "/::@",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_11"
                    },
                    {
                        "emoji": "/::P",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_12"
                    },
                    {
                        "emoji": "/::D",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_13"
                    },
                    {
                        "emoji": "/::O",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_14"
                    },
                    {
                        "emoji": "/::(",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_15"
                    },
                    {
                        "emoji": "/:--b",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_16"
                    },
                    {
                        "emoji": "/::Q",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_17"
                    },
                    {
                        "emoji": "/::T",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_18"
                    },
                    {
                        "emoji": "/:,@P",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_19"
                    },
                    {
                        "emoji": "/:,@-D",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_20"
                    },
                    {
                        "emoji": "/::d",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_21"
                    },
                    {
                        "emoji": "/:,@o",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_22"
                    },
                    {
                        "emoji": "/::g",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_23"
                    },
                    {
                        "emoji": "/:|-)",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_24"
                    },
                    {
                        "emoji": "/::!",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_25"
                    },
                    {
                        "emoji": "/::L",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_26"
                    },
                    {
                        "emoji": "/::>",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_27"
                    },
                    {
                        "emoji": "/::,@",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_28"
                    },
                    {
                        "emoji": "/:,@f",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_29"
                    },
                    {
                        "emoji": "/::-S",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_30"
                    },
                    {
                        "emoji": "/:?",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_31"
                    },
                    {
                        "emoji": "/:,@x",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_32"
                    },
                    {
                        "emoji": "/:,@@",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_33"
                    },
                    {
                        "emoji": "/::8",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_34"
                    },
                    {
                        "emoji": "/:,@!",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_35"
                    },
                    {
                        "emoji": "/:xx",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_36"
                    },
                    {
                        "emoji": "/:bye",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_37"
                    },
                    {
                        "emoji": "/:wipe",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_38"
                    },
                    {
                        "emoji": "/:dig",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_39"
                    },
                    {
                        "emoji": "/:&-(",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_40"
                    },
                    {
                        "emoji": "/:B-)",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_41"
                    },
                    {
                        "emoji": "/:<@",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_42"
                    },
                    {
                        "emoji": "/:@>",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_43"
                    },
                    {
                        "emoji": "/::-O",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_44"
                    },
                    {
                        "emoji": "/:>-|",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_45"
                    },
                    {
                        "emoji": "/:P-(",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_46"
                    },
                    {
                        "emoji": "/::'|",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_47"
                    },
                    {
                        "emoji": "/:X-)",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_48"
                    },
                    {
                        "emoji": "/::*",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_49"
                    },
                    {
                        "emoji": "/:@x",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_50"
                    },
                    {
                        "emoji": "/:8*",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_51"
                    },
                    {
                        "emoji": "/:hug",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_52"
                    },
                    {
                        "emoji": "/:moon",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_53"
                    },
                    {
                        "emoji": "/:sun",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_54"
                    },
                    {
                        "emoji": "/:bome",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_55"
                    },
                    {
                        "emoji": "/:!!!",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_56"
                    },
                    {
                        "emoji": "/:pd",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_57"
                    },
                    {
                        "emoji": "/:pig",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_58"
                    },
                    {
                        "emoji": "/:<W>",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_59"
                    },
                    {
                        "emoji": "/:coffee",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_60"
                    },
                    {
                        "emoji": "/:eat",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_61"
                    },
                    {
                        "emoji": "/:heart",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_62"
                    },
                    {
                        "emoji": "/:strong",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_63"
                    },
                    {
                        "emoji": "/:weak",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_64"
                    },
                    {
                        "emoji": "/:share",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_65"
                    },
                    {
                        "emoji": "/:v",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_66"
                    },
                    {
                        "emoji": "/:@)",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_67"
                    },
                    {
                        "emoji": "/:jj",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_68"
                    },
                    {
                        "emoji": "/:ok",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_69"
                    },
                    {
                        "emoji": "/:no",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_70"
                    },
                    {
                        "emoji": "/:rose",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_71"
                    },
                    {
                        "emoji": "/:fade",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_72"
                    },
                    {
                        "emoji": "/:showlove",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_73"
                    },
                    {
                        "emoji": "/:love",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_74"
                    },
                    {
                        "emoji": "/:<L>",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_75"
                    },
                    {
                        "emoji": "/:jump",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_76"
                    },
                    {
                        "emoji": "/:shake",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_77"
                    },
                    {
                        "emoji": "/:circle",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_78"
                    },
                    {
                        "emoji": "[Smirk]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_79"
                    },
                    {
                        "emoji": "[Hey]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_80"
                    },
                    {
                        "emoji": "[Facepalm]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_81"
                    },
                    {
                        "emoji": "[Smart]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_82"
                    },
                    {
                        "emoji": "[Tea]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_83"
                    },
                    {
                        "emoji": "[Packet]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_84"
                    },
                    {
                        "emoji": "[Candle]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_85"
                    },
                    {
                        "emoji": "[Yeah!]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_86"
                    },
                    {
                        "emoji": "[Concerned]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_87"
                    },
                    {
                        "emoji": "[Chick]",
                        "image_path": "https://tests001.pnlyy.com/chat/image/emoji1027_88"
                    }
                ]
            },
            time: new Date().getTime(),
            msg: '表情图片列表获取成功'
        })
    },
    /** get请求, 短信模板列表
     * 问题: 是否根据用户返回不同的类型, 如新签客户只返回新签的, 或者在接口中用参数请求确认
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getMobileMessage(req, res) {
        // get响应
        res.json({
            code: 200, // 200 成功
            data: [{
                title: '新签',
                list: [{
                    id: 0,
                    type: '【手动推送】',
                    title: '联系失败通知',
                    tips: '',
                    message: '【VIP陪练】家长您好，我是“VIP陪练”的课程顾问******老师，刚才拨打您的电话未能接通，我们会等您方便时再次联系，请您留意接听。如有任何问题欢迎随时联系我，电话******，或拨打客服热线4006060854。很高兴为您服务，祝您生活愉快！ 另外，我的微信号同手机号，为方便后期沟通，您可以加下我的微信。'
                }, {
                    id: 1,
                    type: '【自动推送】',
                    title: '体验课前提醒',
                    tips: '第一节体验课前2小时',
                    message: 'VIP陪练】家长您好，您预约的【******】体验课，将在******准时开始。为了保证正常上课，请您提前安装好【VIP陪练】app，并完成课程乐谱上传。如有任何问题欢迎随时联系您的课程顾问******老师，电话******，或拨打客服热线4006060854。很高兴为您服务，祝您生活愉快'
                }, {
                    id: 2,
                    type: '【自动推送】',
                    title: '体验课后通知',
                    tips: '课后弹窗“小问卷”时',
                    message: '【VIP陪练】家长您好，您孩子的体验课即将结束。为了及时了解课程效果，我们的课程顾问******老师，将在稍后和您联系，请注意接听来电为021-80187360的电话。很高兴为您服务，祝您生活愉快！'
                }, {
                    id: 3,
                    type: '【手动推送】',
                    title: '体验课取消通知',
                    tips: '',
                    message: '【VIP陪练】家长您好！十分遗憾，暂时未能帮您安排体验课。当您确认时间后，可以随时与您的课程顾问******老师联系，电话******，或拨打客服热线4006060854。很高兴为您服务，祝您生活愉快！'
                }]
            }, {
                title: '复购',
                list: [{
                    id: 4,
                    type: '【手动推送】',
                    title: '错误课联系失败',
                    tips: '',
                    message: '【VIP陪练】家长您好！因您孩子的上课老师上课时间有变动，导致部分预排课程无法上课，给您带来不便，我们深表歉意。由于刚刚致电给您未接通，麻烦您方便的时候可以在微信公众留言，或者拨打客服热线4006060854咨询。祝您生活愉快！'
                }, {
                    id: 5,
                    type: '【手动推送】',
                    title: '错误课换老师通知',
                    tips: '',
                    message: '【VIP陪练】家长您好，您的固定老师因个人原因请假了，为了保证课程的正常进行，教师组已经安排好了一位经验丰富的老师代课，如果您有需要指定的老师可以给我们留言哦！给您造成不好的体验实在非常抱歉呢。'
                }, {
                    id: 6,
                    type: '【手动推送】',
                    title: '上课学生超时联系不到',
                    tips: '',
                    message: '【VIP陪练】家长您好，刚刚上课过程中您的陪练老师一直呼叫您都无人响应，电话也联系不到您。由于老师后面还有课程，今天的课就先帮您取消了。如果您需要重新安排课程可以随时给我们留言，或者拨打客服热线4006060854联系我们。祝您生活愉快！'
                }, {
                    id: 7,
                    type: '【手动推送】',
                    title: '上课学生未进入教室',
                    tips: '',
                    message: '【VIP陪练】家长您好，现在已经到上课时间了。老师一直呼叫您但无人接听呢，建议您重启一下软件再进入教室哦。如果您在进入教室的过程中遇到任何困难可以随时微信公众号留言，或者拨打客服热线4006060854联系我们。祝您生活愉快！'
                }]
            }],
            time: new Date().getTime(),
            msg: '短信模板列表获取成功'
        })
    },
    /** post请求, 发送模板短信
     * 问题: 是否根据用户返回不同的类型, 如新签客户只返回新签的, 或者在接口中用参数请求确认
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postMobileMessage(req, res) {
        postReq = {
            message_id: 2, // 短信id
            student_id: 456,
        }
        let code = 200
        let msg = '短信发送成功'
        let request = req.body
        console.log('POST message', req.body, Number(req.body.message_id))
        if (req.method === 'POST' && Number(req.body.message_id) === 4) {
            code = 400
            msg = '模拟: 短信发送失败'
        }
        // post响应
        res.json({
            code: code,
            data: {},
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** post请求, 发送回执
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postReceipt(req, res) {
        // post请求, 发送短信
        postReq = {
            chat_token: 'abc',
            kefu_uuid: 'daf49574-cb93-5f57-899b-c6dc25bf632e',
            user_uuid: 'c68f2cfb-f659-c09b-e2a2-f021ee2a11c0',
        }
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '回执发送成功'
        })
    },
    /** get请求, 获取课程评价信息
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getRate(req, res) {
        // get请求
        getReq = {
            uuid: 345678
        }
        res.json({
            code: 200,
            data: {
                "practice_times": 7,
                "comment_good": 4,
                "complain_times": 1,
                "rate": 3,
                "rate_good": 3.5
            },
            time: new Date().getTime(),
            msg: '评价信息获取成功'
        })
    },
    uploadImage(req, res) {
        // post请求
        getReq = {
            uuid: 345678
        }
        console.log(req, req.files)
        res.json({
            code: 200,
            data: {
                host: "http://test001.pnlyy.com/",
                kefu_name: "客服名字",
                key :"chat/image/a9f5256a2cac36efeebede27721ebf64"
            },
            request: req.body,
            time: new Date().getTime(),
            msg: '图片上传成功'
        })
    }
}

module.exports = CHAT