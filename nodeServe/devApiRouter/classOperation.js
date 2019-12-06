const classOperation = {
    getClassCharge(req, res) {
        res.json({
            code: 200,
            data: {
                student: {
                    id: 323132,
                    wxnick: '何世玺宝宝',
                    nick: '玺狗子',
                    mobile: 18268344693,
                    c_kefuInfo: '蔡冉',
                    kefu_id: 9023
                }
            },
            time: new Date().getTime(),
            msg: '课程列表加载成功'
        })
    },
    setClassCharge(req, res) {
        res.json({
            code: 200,
            data: [],
            time: new Date().getTime(),
            msg: '课程列表加载成功'
        })
    },
    getAllProduct(req, res) {
        res.json({
            code: 200,
            data: [
                {
                    class_num: 1,
                    descp: "<p>测试专用</p>",
                    gift_class_num: 1,
                    id: '177',
                    name: '测试',
                    newprice: '0.02',
                    oldprice: '79',
                    picurl: "59290d8759959.jpg",
                    product_type: "1",
                    time_type: "1"
                },
                {
                    class_num: 1,
                    descp: "<p>测试专用</p>",
                    gift_class_num: 1,
                    id: '185',
                    name: '25分钟90节陪练套餐',
                    newprice: '0.02',
                    oldprice: '79',
                    picurl: "59290d8759959.jpg",
                    product_type: "1",
                    time_type: "1"
                },
                {
                    class_num: 1,
                    descp: "<p>测试专用</p>",
                    gift_class_num: 1,
                    id: '187',
                    name: "25分钟180节陪练套餐",
                    newprice: '0.02',
                    oldprice: '79',
                    picurl: "59290d8759959.jpg",
                    product_type: "1",
                    time_type: "2"
                },
                {
                    class_num: 0,
                    descp: "<p>测试专用</p>",
                    gift_class_num: 0,
                    id: '229',
                    name: "鱼眼镜头",
                    newprice: '0.02',
                    oldprice: '79',
                    picurl: "59290d8759959.jpg",
                    product_type: "1",
                    time_type: "1"
                },
                {
                    class_num: 1,
                    descp: "<p>测试专用</p>",
                    gift_class_num: 1,
                    id: '219',
                    name: "【高级】50分钟80节高级陪练套餐",
                    newprice: '0.02',
                    oldprice: '79',
                    picurl: "59290d8759959.jpg",
                    product_type: "10",
                    time_type: "3"
                },
            ],
            time: new Date().getTime(),
            msg: ''
        })
    },
    getGiveClass(req, res) {
        res.json({
            code: 200,
            data: {
                musicType: [
                    {               // 乐器类型
                        value: 0,
                        label: '钢琴'
                    }, {
                        value: 1,
                        label: '小提琴'
                    }, {
                        value: 2,
                        label: '手风琴'
                    }, {
                        value: 3,
                        label: '古筝'
                    }
                ],
                packageType: [
                    {              // 套餐选择
                        value: 1,
                        label: '25分钟课程'
                    }, {
                        value: 3,
                        label: '50分钟课程'
                    }
                ],
                giftReson: [
                    {                // 套餐选择
                        value: 21,
                        label: '首次付费-转发海报'
                    }, {
                        value: 22,
                        label: '付费用户-转发海报'
                    }, {
                        value: 23,
                        label: '网络、设备问题'
                    }, {
                        value: 24,
                        label: '老师问题'
                    }, {
                        value: 25,
                        label: '渠道-转介绍用户补送课'
                    }, {
                        value: 26,
                        label: '课程转账号（代付情况）'
                    }, {
                        value: 27,
                        label: '套餐拆分'
                    }, {
                        value: 28,
                        label: '乐器种类错误-重新充值'
                    }, {
                        value: 29,
                        label: '技术测试'
                    }, {
                        value: 0,
                        label: '其他'
                    }
                ],
            },
            time: new Date().getTime(),
            msg: ''
        })
    },
    setGiveClass(req, res) {
        res.json({
            code: 200,
            data: [],
            time: new Date().getTime(),
            msg: '12121'
        })
    },
    setOrderModify(req, res){
        res.json({
            code: 200,
            data: {
                student: {
                    id: 323132,
                    wxnick: '何世玺宝宝',
                    nick: '玺狗子',
                    mobile: 18268344693,
                    c_kefuInfo: '蔡冉',
                    kefu_id: 9023
                }
            },
            time: new Date().getTime(),
            msg: '课程列表加载成功'
        })
    },
    getOrderModify(req, res){
        res.json({
            code: 200,
            data: {
                student: {
                    orderno: 323132,
                    c_kefuInfo: '新签: 新签-NEW, 复购: 肖露',
                    kefu_id: 11,
                    kefu_id_re:22,
                    paySubStatus: 1,
                    mobile: 18268344693,
                    userName: '玺乖乖',
                    use_class_num: 1,
                    c_packageRemain: 8000,
                    c_giftRemain: 2000,
                    package_list: [
                        { instrument_id: 1, instrument_name: '钢琴',  time_type: 3, class_num: 12 },
                        { instrument_id: 3, instrument_name: '手风琴',  time_type: 1, class_num: 13 },
                        { instrument_id: 4, instrument_name: '古筝',  time_type: 5, class_num: 14 }
                    ],
                    gift_list: [
                        { instrument_id: 1, instrument_name: '钢琴',  time_type: 1, class_num: 1},
                        { instrument_id: 3, instrument_name: '手风琴',  time_type: 3, class_num: 2 },
                        { instrument_id: 4, instrument_name: '古筝',  time_type: 5, class_num: 3 }
                    ]
                },
                order: {
                    class_num: 40,
                    descp: "<p>测试专用</p>",
                    gift_class_num: 40,
                    id: '177',
                    name: '25分钟40节陪练套餐',
                    newprice: '2000',
                    oldprice: '7900',
                    picurl: "59290d8759959.jpg",
                    product_type: "1",
                    time_type: "1",
                }
            },
            time: new Date().getTime(),
            msg: '课程列表加载成功'
        })
    },
    getUpdataMeal(req, res){
        res.json({
            code: 200,
            data: {
                student: {
                    orderno: 323132,
                    c_kefuInfo: '新签: 新签-NEW, 复购: 肖露',
                    kefu_id: 11,
                    kefu_id_re:22,
                    paySubStatus: 1,
                    mobile: 18268344693,
                    userName: '玺乖乖',
                    use_class_num: 1,
                    package_list: [
                        { instrument_id: 1, instrument_name: '钢琴',  time_type: 3, class_num: 12 },
                        { instrument_id: 3, instrument_name: '手风琴',  time_type: 1, class_num: 13 },
                        { instrument_id: 4, instrument_name: '古筝',  time_type: 5, class_num: 14 }
                    ],
                    gift_list: [
                        { instrument_id: 1, instrument_name: '钢琴',  time_type: 1, class_num: 1},
                        { instrument_id: 3, instrument_name: '手风琴',  time_type: 3, class_num: 2 },
                        { instrument_id: 4, instrument_name: '古筝',  time_type: 5, class_num: 3 }
                    ]
                },
                order: {
                    class_num: 40,
                    descp: "<p>测试专用</p>",
                    gift_class_num: 40,
                    id: '177',
                    name: '25分钟40节陪练套餐',
                    newprice: '2000',
                    oldprice: '7900',
                    picurl: "59290d8759959.jpg",
                    product_type: "1",
                    time_type: "1",
                }
            },
            time: new Date().getTime(),
            msg: '课程列表加载成功'
        })
    },
    setUpdataMeal(req, res){
        res.json({
            code: 200,
            data: [],
            time: new Date().getTime(),
            msg: "无法发送微信消息, 请复制以下信息在聊天信息页面发送:<br>: 尊敬的家长，您的VIP陪练课程订单已生成，请点击此链接进行支付，链接：https://vippl-dev.peilian.com/static/payment/payment.html?token=81807160384576576-3206d41466d0f702d96c0662d9b95083"
        })
    }
}

module.exports = classOperation