/** 订单API
 * 产品套餐订单
 */
const ORDER = {
    /** 套餐订单列表
     * get请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    productOrderList(req, res) {
        // get请求, 参数格式
        getReq = {
            student_id: 1000,
            order_no: 3456784567,
            created_time_start: 1525017600000, // 2018/04/30
            created_time_end: 1525795200000, // 2018/05/09
            updated_time_start: 1525017600000, // 2018/04/30
            updated_time_end: 1525795200000, // 2018/05/09
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'GET') {
            request = req.query
            console.log('GET productOrderList', request)
            if (req.query.student_id) {
                code = 200
                msg = '套餐订单列表获取成功'
            }
            data = {
                total: 3,
                page_size: 10,
                page_num: 1,
                list: [
                    {
                        "id": 70303,
                        "orderno": "81806270397124678",
                        "tradeId": "",
                        "wxTradeId": -1,
                        "uid": 110284,
                        "openId": "onhLcsr_1SW2sfSZ7OqU-AInwqCs",
                        "pid": 193,
                        "pname": "50分钟160节陪练套餐",
                        "payableFee": 11000,
                        "totalFee": 11000,
                        "actualFee": 11000,
                        "classNum": 160,
                        "coupon": "",
                        "payMethod": 3,
                        "payStatus": 1,
                        "paySend": 0,
                        "instrument": 0,
                        "cancelReason": "",
                        "comment": "",
                        "oldOrderId": 0,
                        "oldOrderNo": null,
                        "timeCreated": 1530083814,
                        "timeUpdated": 1530083830,
                        "timePay": 1530083814,
                        "doId": 0,
                        "isUpgrade": 0,
                        "imageCount": 1,
                        "productFee": 11000,
                        "couponFee": 0,
                        "paySubStatus": 0,
                        "orderType": 0,
                        "userName": "yy转介绍3小时掉落2",
                        "userTel": "65412313131",
                        "kefuId": 0,
                        "kefuIdRe": 0,
                        "isOldOrder": 2,
                        "openInvoiceStatus": 1,
                        "openCameraStatus": 0,
                        "items": [
                            {
                                "id": 124624,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 68.75,
                                "totalAmount": 160,
                                "isDelete": 0
                            }
                        ],
                        "package_list": [
                            {
                                "id": 124624,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 68.75,
                                "totalAmount": 160,
                                "isDelete": 0
                            }
                        ],
                        "gift_list": [
                            {
                                "id": 125743,
                                "userId": 398876,
                                "type": 2,
                                "leftBit": false,
                                "instrumentId": 1,
                                "timeType": 1,
                                "name": "钢琴",
                                "price": 0,
                                "totalAmount": 10,
                                "isDelete": 0
                            }
                        ],
                        "isNewVersion": 1
                    },
                    {
                        "id": 70300,
                        "orderno": "81806270510753879",
                        "tradeId": "",
                        "wxTradeId": -1,
                        "uid": 110284,
                        "openId": "onhLcsr_1SW2sfSZ7OqU-AInwqCs",
                        "pid": 191,
                        "pname": "50分钟60节陪练套餐",
                        "payableFee": 4888,
                        "totalFee": 4888,
                        "actualFee": 4888,
                        "classNum": 60,
                        "coupon": "",
                        "payMethod": 3,
                        "payStatus": 1,
                        "paySend": 0,
                        "instrument": 0,
                        "cancelReason": "",
                        "comment": "",
                        "oldOrderId": 0,
                        "oldOrderNo": null,
                        "timeCreated": 1530082885,
                        "timeUpdated": 1530082925,
                        "timePay": 1530082885,
                        "doId": 0,
                        "isUpgrade": 0,
                        "imageCount": 1,
                        "productFee": 4888,
                        "couponFee": 0,
                        "paySubStatus": 1,
                        "orderType": 0,
                        "userName": "yy转介绍3小时掉落2",
                        "userTel": "65412313131",
                        "kefuId": 0,
                        "kefuIdRe": 0,
                        "isOldOrder": 2,
                        "openInvoiceStatus": 1,
                        "openCameraStatus": 0,
                        "items": [
                            {
                                "id": 124620,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 81.47,
                                "totalAmount": 60,
                                "isDelete": 0
                            }
                        ],
                        "package_list": [
                            {
                                "id": 124620,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 81.47,
                                "totalAmount": 60,
                                "isDelete": 0
                            }
                        ],
                        "gift_list": [
                            {
                                "id": 125143,
                                "type": 2,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 1,
                                "name": "手风琴",
                                "price": 0,
                                "totalAmount": 10,
                                "isDelete": 0
                            }
                        ],
                        "isNewVersion": 1
                    },
                    {
                        "id": 70299,
                        "orderno": "81806271901092122",
                        "tradeId": "",
                        "wxTradeId": -1,
                        "uid": 110284,
                        "openId": "onhLcsr_1SW2sfSZ7OqU-AInwqCs",
                        "pid": 193,
                        "pname": "50分钟160节陪练套餐",
                        "payableFee": 11000,
                        "totalFee": 11000,
                        "actualFee": 11000,
                        "classNum": 160,
                        "coupon": "",
                        "payMethod": 3,
                        "payStatus": 1,
                        "paySend": 0,
                        "instrument": 0,
                        "cancelReason": "",
                        "comment": "",
                        "oldOrderId": 0,
                        "oldOrderNo": null,
                        "timeCreated": 1530082810,
                        "timeUpdated": 1530082832,
                        "timePay": 1530082810,
                        "doId": 0,
                        "isUpgrade": 0,
                        "imageCount": 1,
                        "productFee": 11000,
                        "couponFee": 0,
                        "paySubStatus": 1,
                        "orderType": 0,
                        "userName": "yy转介绍3小时掉落2",
                        "userTel": "65412313131",
                        "kefuId": 0,
                        "kefuIdRe": 0,
                        "isOldOrder": 2,
                        "openInvoiceStatus": 0,
                        "openCameraStatus": 0,
                        "items": [
                            {
                                "id": 124619,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 68.75,
                                "totalAmount": 160,
                                "isDelete": 0
                            }
                        ],
                        "package_list": [
                            {
                                "id": 124619,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 68.75,
                                "totalAmount": 160,
                                "isDelete": 0
                            }
                        ],
                        "gift_list": [
                            {
                                "id": 165143,
                                "type": 2,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 1,
                                "name": "手风琴",
                                "price": 0,
                                "totalAmount": 10,
                                "isDelete": 0
                            }
                        ],
                        "isNewVersion": 1
                    },
                    {
                        "id": 702459,
                        "orderno": "818063456792122",
                        "tradeId": "",
                        "wxTradeId": -1,
                        "uid": 110284,
                        "openId": "onhLcsr_1SW2sfSZ7OqU-AInwqCs",
                        "pid": 193,
                        "pname": "50分钟160节陪练套餐",
                        "payableFee": 11000,
                        "totalFee": 11000,
                        "actualFee": 11000,
                        "classNum": 160,
                        "coupon": "",
                        "payMethod": 3,
                        "payStatus": 1,
                        "paySend": 0,
                        "instrument": 0,
                        "cancelReason": "",
                        "comment": "",
                        "oldOrderId": 0,
                        "oldOrderNo": null,
                        "timeCreated": 1530082810,
                        "timeUpdated": 1530082832,
                        "timePay": 1530082810,
                        "doId": 0,
                        "isUpgrade": 0,
                        "imageCount": 1,
                        "productFee": 11000,
                        "couponFee": 0,
                        "paySubStatus": 1,
                        "orderType": 0,
                        "userName": "yy转介绍3小时掉落2",
                        "userTel": "65412313131",
                        "kefuId": 0,
                        "kefuIdRe": 0,
                        "isOldOrder": 2,
                        "openInvoiceStatus": 0,
                        "openCameraStatus": 1,
                        "items": [
                            {
                                "id": 124619,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 68.75,
                                "totalAmount": 160,
                                "isDelete": 0
                            }
                        ],
                        "package_list": [
                            {
                                "id": 124619,
                                "type": 3,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 3,
                                "name": "手风琴",
                                "price": 68.75,
                                "totalAmount": 160,
                                "isDelete": 0
                            }
                        ],
                        "gift_list": [
                            {
                                "id": 128763,
                                "type": 2,
                                "leftBit": false,
                                "instrumentId": 3,
                                "timeType": 1,
                                "name": "手风琴",
                                "price": 0,
                                "totalAmount": 10,
                                "isDelete": 0
                            }
                        ],
                        "isNewVersion": 1
                    }
                ]
            }
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 套餐订单支付链接
     * get请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    productOrderLink(req, res) {
        // get请求, 参数格式
        getReq = {
            order_no: 3456784567
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'GET') {
            request = req.query
            console.log('GET productOrderLink', request)
            if (req.query.order_no) {
                code = 200
                msg = '订单支付链接获取成功'
            }
            data = {
                url: 'https://vippl-dev.peilian.com/singleSparring/record/50691/'
            }
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 开启申请发票入口
     * post请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    enableInvoiceApplication(req, res) {
        // post请求, 参数格式
        getReq = {
            order_no: 3456784567
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'POST') {
            request = req.body
            console.log('POST enableInvoiceApplication', request)
            if (request.order_no) {
                code = 200
                msg = '申请发票入口开启成功'
            }
            data = {}
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 开启申请镜头入口前的检查
     * post请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    checkCameraApplication(req, res) {
        // post请求, 参数格式
        getReq = {
            order_no: 3456784567,
            student_id: 34567
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'POST') {
            request = req.body
            console.log('POST checkCameraApplication', request)
            if (request.order_no && request.student_id) {
                code = 200
                msg = '请求成功'
            }
            if (request.order_no == 81806270510753879) {
                data = {
                    status: false
                }
            } else {
                data = {
                    status: true
                }
            }
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 开启申请镜头入口
     * post请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    enableCameraApplication(req, res) {
        // post请求, 参数格式
        getReq = {
            order_no: 3456784567
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'POST') {
            request = req.body
            console.log('POST enableCameraApplication', request)
            if (request.order_no) {
                code = 200
                msg = '申请镜头入口开启成功'
            }
        }
        res.json({
            code: code,
            data: data,
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 支付详情
     * post请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
     getPaymentFlow(req, res) {
         // get请求, 参数格式
         getReq = {
             action: 'list',
             order_no: 81807250747264054,
             _: 1532336768357
         }
         let request = {}
         let code = 401
         let msg = '参数错误'
         let data = {}
         if (req.method === 'GET') {
             request = req.query
             console.log('GET getPaymentFlow', request)
             if (req.query.order_no) {
                 code = 200
                 msg = '订单支付详情获取成功'
             }
             data = {
                 list: [
                    {
                        "id":12590,
                        "paymentNo":"20180711466565873024544768",
                        "tradeNo":null,
                        "orderNo":"81807110124419291",
                        "payChannel":2,
                        "payAmount":6588,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-11 11:26:13",
                        "status":1,
                        "remark":null,
                        "timeCreate":"2018-07-11 11:26:13",
                        "timeUpdate":"2018-07-11 11:26:13",
                        "payImages":[
                            {
                                "filePath":"order/image/eb978b71317780e857e5c8f1dba33a99",
                                "timeCreated":1531279572
                            }
                        ],
                        "image_list":"http://test001.pnlyy.com/order/image/eb978b71317780e857e5c8f1dba33a99"
                    },
                    {
                        "id":12579,
                        "paymentNo":"20180710466318619596636160",
                        "tradeNo":null,
                        "orderNo":"81807100176860986",
                        "payChannel":6,
                        "payAmount":9985.21,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-10 19:03:43",
                        "status":0,
                        "remark":null,
                        "timeCreate":"2018-07-10 19:03:43",
                        "timeUpdate":"2018-07-10 19:03:43",
                        "payImages":null,
                        "image_list":""
                    },
                    {
                        "id":12578,
                        "paymentNo":"20180710466317600779223040",
                        "tradeNo":null,
                        "orderNo":"81807100176860986",
                        "payChannel":6,
                        "payAmount":9985.21,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-10 18:59:40",
                        "status":0,
                        "remark":null,
                        "timeCreate":"2018-07-10 18:59:40",
                        "timeUpdate":"2018-07-10 18:59:40",
                        "payImages":null,
                        "image_list":""
                    },
                    {
                        "id":12577,
                        "paymentNo":"20180710466317473129775104",
                        "tradeNo":null,
                        "orderNo":"81807100176860986",
                        "payChannel":6,
                        "payAmount":0.1,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-10 18:59:09",
                        "status":0,
                        "remark":null,
                        "timeCreate":"2018-07-10 18:59:09",
                        "timeUpdate":"2018-07-10 18:59:09",
                        "payImages":null,
                        "image_list":""
                    },
                    {
                        "id":12576,
                        "paymentNo":"20180710466315580471066624",
                        "tradeNo":null,
                        "orderNo":"81807100176860986",
                        "payChannel":6,
                        "payAmount":0.01,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-10 18:51:38",
                        "status":0,
                        "remark":null,
                        "timeCreate":"2018-07-10 18:51:38",
                        "timeUpdate":"2018-07-10 18:51:38",
                        "payImages":null,
                        "image_list":""
                    },
                    {
                        "id":12574,
                        "paymentNo":"20180710466308586343317504",
                        "tradeNo":null,
                        "orderNo":"81807100176860986",
                        "payChannel":6,
                        "payAmount":0.01,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-10 18:23:51",
                        "status":0,
                        "remark":null,
                        "timeCreate":"2018-07-10 18:23:51",
                        "timeUpdate":"2018-07-10 18:23:51",
                        "payImages":null,
                        "image_list":""
                    },
                    {
                        "id":12573,
                        "paymentNo":"20180710466307557333745664",
                        "tradeNo":"2018071021001004050534913031",
                        "orderNo":"81807100176860986",
                        "payChannel":6,
                        "payAmount":1.79,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-10 18:20:23",
                        "status":1,
                        "remark":null,
                        "timeCreate":"2018-07-10 18:19:45",
                        "timeUpdate":"2018-07-10 18:20:24",
                        "payImages":null,
                        "image_list":""
                    },
                    {
                        "id":12572,
                        "paymentNo":"20180710466304739394797568",
                        "tradeNo":"2018071021001004050534912787",
                        "orderNo":"81807100176860986",
                        "payChannel":6,
                        "payAmount":1,
                        "type":1,
                        "payerId":null,
                        "timePay":"2018-07-10 18:08:44",
                        "status":1,
                        "remark":null,
                        "timeCreate":"2018-07-10 18:08:33",
                        "timeUpdate":"2018-07-10 18:08:45",
                        "payImages":null,
                        "image_list":""
                    }
                ]
             }
         }
         res.json({
             code: code,
             data: data,
             request: request,
             time: new Date().getTime(),
             msg: msg
         })
     }
}

module.exports = ORDER
