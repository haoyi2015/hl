/**
 * 学生API
 */
const STUDENT = {
    /** get请求，获取筛选学生列表
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getList(req, res) {
        // 参数格式
        let param = {
            student_type: 0,
            time_type: 0,
            time_start: '2014-01-01',
            time_end: '2020-01-01',
            visit_time: 0,
            keyword: '',
            is_export: 0,
            page_num: 1,
            page_size: 10
        }
        res.json({
            code: 200,
            data: {
                total: 1246,
                page_size: 10,
                page_num: 1,
                list: [{
                    uid: 3,
                    uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                    studentId: 102459,
                    name: '注册姓名',
                    real_name: '真实姓名',
                    nick_name: '转介绍分配2',
                    channel: '购11买课程',
                    subscribe_time: '2018-05-09 10:30', // 1525833000000
                    birthday: '2010-05-04',
                    source: 'wechat', // wechat 微信，site 官网
                    kefu: '新签客服',
                    kefu_re: '复购客服',
                    level: '小提琴: 初级'
                }, {
                    uid: 53,
                    uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                    studentId: 102459,
                    name: '注册姓名',
                    real_name: '真实姓名',
                    nick_name: '转介绍分配2',
                    channel: '购11买课程',
                    subscribe_time: '2018-05-09 10:30', // 1525833000000
                    birthday: '2010-05-04',
                    source: 'wechat', // wechat 微信，site 官网
                    kefu: '新签客服',
                    kefu_re: '复购客服',
                    level: '小提琴: 初级'
                }, {
                    uid: 345,
                    uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                    studentId: 102459,
                    name: '注册姓名',
                    real_name: '真实姓名',
                    nick_name: '转介绍分配2',
                    channel: '购11买课程',
                    subscribe_time: '2018-05-09 10:30', // 1525833000000
                    birthday: '2010-05-04',
                    source: 'wechat', // wechat 微信，site 官网
                    kefu: '新签客服',
                    kefu_re: '复购客服',
                    level: '小提琴: 初级'
                }, {
                    uid: 345,
                    uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                    studentId: 102459,
                    name: '注册姓名',
                    real_name: '真实姓名',
                    nick_name: '转介绍分配2',
                    channel: '购11买课程',
                    subscribe_time: '2018-05-09 10:30', // 1525833000000
                    birthday: '2010-05-04',
                    source: 'wechat', // wechat 微信，site 官网
                    kefu: '新签客服',
                    kefu_re: '复购客服',
                    level: '小提琴: 初级'
                }, {
                    uid: 345,
                    uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                    studentId: 102459,
                    name: '注册姓名',
                    real_name: '真实姓名',
                    nick_name: '转介绍分配2',
                    channel: '购11买课程',
                    subscribe_time: '2018-05-09 10:30', // 1525833000000
                    birthday: '2010-05-04',
                    source: 'wechat', // wechat 微信，site 官网
                    kefu: '新签客服',
                    kefu_re: '复购客服',
                    level: '小提琴: 初级'
                }, {
                    uid: 345,
                    uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                    openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                    studentId: 102459,
                    name: '注册姓名',
                    real_name: '真实姓名',
                    nick_name: '转介绍分配2',
                    channel: '购11买课程',
                    subscribe_time: '2018-05-09 10:30', // 1525833000000
                    birthday: '2010-05-04',
                    source: 'wechat', // wechat 微信，site 官网
                    kefu: '新签客服',
                    kefu_re: '复购客服',
                    level: '小提琴: 初级'
                }]
            },
            time: new Date().getTime(),
            msg: '学生列表获取成功'
        })
    },
    /** get请求，获取学生信息
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getInfo(req, res) {
        // 参数格式
        let param = {
            student_id: 333
        }
        // 必须包含的字段 {age, name, birthday, avatar, phone, nick_name, studentId, subscribe_time, exclass, province, city, remark, highRisk}
        res.json({
            code: 200,
            data: {
                uid: 345,
                uuid: '1f3c5be5-7bfa-9792-0664-4765040539e0',
                openid: 'onhLcsiPWSl5-F3OK6ugUYyA_fko',
                initId: 106621,
                studentId: 102459,
                age: 6, // 年龄
                name: '注册姓名',
                birthday: '2012-05-09',
                nick_name: '微信名称',
                avatar: 'http://static.pnlyy.com/avatar.png',
                exclass: 1, // 体验课类型
                phone: '18405090001',
                subscribe_time: '2018-05-09 10:30',
                payTime: '2018-05-09 11:12',
                channelId: 34,
                channel_name: '通道名称',
                have_app: 0,
                consultant_n: '新签客服',
                consultant_r: '复购客服',
                source: 'wechat', // wechat 微信，site 官网
                region: '+86',
                reg: true, // true 已注册，false 未注册
                province: 1,
                city: 2,
                remark: '该学生很有可能是未来国家领导人',
                highRisk : 0 // 高危标识
            },
            time: new Date().getTime(),
            msg: '学生信息获取成功'
        })
    },
    /** post请求，修改学生信息
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postInfo(req, res) {
        // 参数格式
        let param = {
            student_id: 103533,
            name: '学生姓名', // 学生姓名
            area_code: '+86', // 家长手机地区码
            phone: '18429358295', // 家长手机
            initId: 107977,
            age: 6, // 学生年龄
            birth: 1336492800000, // 学生生日 '2012/05/09'
            province: 1, // 所属省
            city: 2, // 所属市
            remark: 'ddd', // 备注信息
            exclass: 1,
            uuid: 'a1f4603c-4294-857d-306c-d04839b88996',
            srcType: 1
        }
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '学生信息更新成功'
        })
    },
    /** 标记高危用户
     * post请求，修改学生高危状态
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postHigh(req, res) {
        // 参数格式
        let param = {
            student_id: 103533,
            high: 1, // [1: 设置高危用户, 0: 取消高危用户]
        }
        let type = 0
        let msg = '参数错误'
        let code = 401
        if (req.method === 'POST') {
            code = 200
            if (Number(req.body.high) === 1) {
                type = 1
                msg = '已成功标记为高危用户'
            } else {
                type = 0
                msg = '已成功取消高危标记'
            }
        }
        res.json({
            code: code,
            data: {
                high: type
            },
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** 获取学生备注信息
     * get请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getRemarks(req, res) {
        // 参数格式
        let param = {
            student_id: 103533
        }
        res.json({
            code: 200,
            data: {
                requirements: '保持安静',
                remarks: '该学生很有可能是国家未来领导人',
                original_class_time: ''
            },
            time: new Date().getTime(),
            msg: '学生备注获取成功'
        })
    },
    /** 修改学生备注信息
     * post请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postRemarks(req, res) {
        // 参数格式
        let param = {
            student_id: 103533, // 学生id
            requirements: '', // 上课要求(仅老师可看信息)
            remarks: '', // 学生备注(仅电销团队可见)
            original_class_time: '' // 自己老师上课时间
        }
        let request = {}
        if (req.method === 'POST') {
            request = req.body
        }
        res.json({
            code: 200,
            data: {},
            request: request,
            time: new Date().getTime(),
            msg: '学生备注更新成功'
        })
    },
    /** get请求，获取学生绑定的课程顾问
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getConsultant(req, res) {
        // 参数格式
        let param = {
            student_id: 103533
        }
        res.json({
            code: 200,
            data: {
                kefu_id: 9275,
                kefu_name: '杨艳1'
            },
            time: new Date().getTime(),
            msg: '课程顾问获取成功'
        })
    },
    /** post请求，修改学生绑定的课程顾问
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postConsultant(req, res) {
        // 参数格式
        let param = {
            student_id: 103533,
            kefu_id: 1133
        }
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '课程顾问绑定成功' // 未付费用户，不能绑定复购顾问|客服身份异常|绑定成功
        })
    },
    /** get请求, 购买/体验记录
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getBuyHistory(req, res) {
        // 参数格式
        let param = {
            student_id: 3434
        }
        res.json({
            code: 200,
            data: {
                total: 2,
                list: [{
                        "order": {
                            "name": null,
                            "is_delete": 0,
                            "pay_sub_status": 1,
                            "order_no": null
                        },
                        "left_list": [{
                            "leftId": 124385,
                            "orderId": 0,
                            "instrument": 1,
                            "timeType": 3,
                            "type": 1,
                            "totalAmount": 1,
                            "acAmount": 1,
                            "appointAmount": 0,
                            "name": "体验课",
                            "pname": null,
                            "paySubStatus": null,
                            "leftBit": 0,
                            "isDelete": 0,
                            "orderNo": ""
                        }],
                        "order_id": 0,
                        "left_bit": 0,
                        "product_type": 1
                    },
                    {
                        "order": {
                            "name": null,
                            "is_delete": 0,
                            "pay_sub_status": 1,
                            "order_no": null
                        },
                        "left_list": [{
                            "leftId": 124391,
                            "orderId": 0,
                            "instrument": 3,
                            "timeType": 1,
                            "type": 2,
                            "totalAmount": 1,
                            "acAmount": 1,
                            "appointAmount": 0,
                            "name": "赠送课",
                            "pname": null,
                            "paySubStatus": null,
                            "leftBit": 0,
                            "isDelete": 0,
                            "orderNo": ""
                        }],
                        "order_id": 0,
                        "left_bit": 0,
                        "product_type": 2
                    },
                    {
                        "order": {
                            "name": "25分钟365节陪练套餐",
                            "is_delete": 0,
                            "pay_sub_status": 1,
                            "order_no": "81806011482691589"
                        },
                        "left_list": [{
                                "leftId": 124397,
                                "orderId": 69707,
                                "instrument": 1,
                                "timeType": 1,
                                "type": 3,
                                "totalAmount": 365,
                                "acAmount": 365,
                                "appointAmount": 0,
                                "name": "钢琴",
                                "pname": "25分钟365节陪练套餐",
                                "paySubStatus": 1,
                                "leftBit": 1,
                                "isDelete": 0,
                                "orderNo": "81806011482691589"
                            },
                            {
                                "leftId": 124399,
                                "orderId": 69707,
                                "instrument": 1,
                                "timeType": 1,
                                "type": 2,
                                "totalAmount": 20,
                                "acAmount": 20,
                                "appointAmount": 0,
                                "name": "钢琴",
                                "pname": "25分钟365节陪练套餐",
                                "paySubStatus": 1,
                                "leftBit": 1,
                                "isDelete": 0,
                                "orderNo": "81806011482691589"
                            }
                        ],
                        "order_id": 69707,
                        "left_bit": 1
                    }
                ]
            },
            time: new Date().getTime(),
            msg: '学生信息获取成功'
        })
    },
    /** get请求，获取学生回访记录
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getVisit(req, res) {
        // 参数格式
        let param = {
            student_id: 103533
        }
        res.json({
            code: 200,
            data: {
                total: 2,
                page_size: 10,
                page_num: 1,
                list: [{
                    time: '',
                    nextTime: '',
                    nextNote: ''
                }]
            },
            time: new Date().getTime(),
            msg: '获取回访记录成功'
        })
    },
    /** post请求，添加/修改回访记录
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postVisit(req, res) {
        // 参数格式
        let param = {
            student_id: 103533,
            student_status: '',
            note: ''
        }
        // 添加成功
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '添加回访记录成功'
        })
    },
    /** get请求，获取学生基本练琴信息
     * 在用户回访中创建与更新
     * 显示在聊天面板顶部中间部分的仪表盘
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getInstrument(req, res) {
        let request = {}
        if (req.method === 'GET') {
            request = req.query
            console.log('getInstrument GET', req.query)
        } else if (req.method === 'POST') {
            request = req.params
            console.log('getInstrument POST', req.params)
        } else {
            request = req.params
            console.log('getInstrument ' + req.method, req.params)
        }
        let instrument_id = Number(req.query.instrument_id) || 34
        if (req.query.student_id == '345') {
            res.json({
                code: 200,
                data: {
                    list: [{
                        id: 35,
                        name: '手风琴'
                    }],
                    instrument: {
                        id: 35,
                        main_class_rate: '',
                        back_time: '',
                        classrate_backtime: '周二 / 优',
                        course_book: [],
                        time_prelevel: '1.5年 / 启蒙',
                        practice_rate: '每周2次',
                        rec_teacher: [],
                        practice_times: '\u6682\u672a\u966a\u7ec3',
                        student_fix_count: '\u6682\u65e0\u6392\u8bfe',
                        teacher_type: '严厉',
                        test_level: '启蒙（0-2）',
                        time_left: []
                    }
                },
                request: request,
                time: new Date().getTime(),
                msg: '乐器信息加载成功'
            })
        } else {
            res.json({
                code: 200,
                data: {
                    list: [{
                        id: 34,
                        name: '小提琴'
                    }, {
                        id: 35,
                        name: '手风琴'
                    }],
                    instrument: {
                        id: instrument_id,
                        main_class_rate: '',
                        back_time: '',
                        classrate_backtime: '周一 / 差',
                        course_book: [],
                        time_prelevel: '1年 / 启蒙',
                        practice_rate: '每周1次',
                        rec_teacher: [],
                        practice_times: '\u6682\u672a\u966a\u7ec3',
                        student_fix_count: '\u6682\u65e0\u6392\u8bfe',
                        teacher_type: '和蔼',
                        test_level: '启蒙（0-2）',
                        time_left: []
                    }
                },
                request: request,
                time: new Date().getTime(),
                msg: '乐器信息加载成功'
            })
        }
    },
    /** post请求，添加/修改基本练琴信息
     * 用户回访中创建与更新
     * 显示在聊天面板顶部中间部分的仪表盘
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    postInstrument(req, res) {
        // 参数格式
        let param = {
            student_id: 103799,
            instrument_id: 3,
            learn_time: 0,
            back_time: 2,
            practice_rate: 2,
            teacher_type: 1,
            test_level: 1, // 已考等级
            student_device: 1, // 设备
            student_age: 2, // 年龄
            student_sex: 1, // 性别
            country_type: 1, // 国内/国外
            level_plan: 2, // 计划考级
            back_class_status: 2, // 
            practice_duration: [1, 2, 3], // 练琴遇到的问题，字段建议修改为practice_problem
            is_accompany: 0, // 是否陪着练琴
            family_guide: 0, // 家长是否指导
            course_book: [551, 557] // 最近使用教材
        }
        // 更新成功
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '学生练琴信息更新成功'
        })
    }
}

module.exports = STUDENT