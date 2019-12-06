const CLASS = {
    list(req, res) {
        res.json({
            code: 200,
            data: [
                {
                    id: 1,
                    classStatus: 1,
                    classTime: '00:30 - 00:55',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 4,
                    classStatus: 2,
                    classTime: '00:30 - 00:55',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 5,
                    classStatus: '购买课程',
                    classTime: '00:30 - 00:55',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 6,
                    classStatus: '购买课程',
                    classTime: '00:30 - 00:55',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 10,
                    classStatus: '购买课程',
                    classTime: '00:30 - 00:55',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 12,
                    classStatus: '购买课程',
                    classTime: '00:30 - 00:55',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                }
            ],
            time: new Date().getTime(),
            msg: '课程列表加载成功'
        })
    },
    info(req, res) {
        res.json({
            code: 200,
            data: {
                id: 34,
                classStatus: '购买课程',
                classInfo: '00:30 - 00:55',
                skTimes: '2016-05-2018-04-13 00:00',
                teacher: '老师',
                student: '还不知道呢',
                cancelType: '个人取消',
                cancelDec: '取消原因'
            },
            time: new Date().getTime(),
            msg: '课程信息获取成功'
        })
    },
    add(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '课程信息添加成功'
        })
    },
    delete(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '课程信息删除成功'
        })
    },
    update(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '课程信息更新成功'
        })
    },
    /** 课时记录
     *
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    history(req, res) {
        // get请求，获取学生的课时记录
        getReq = {
            student_id: 103839
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
            msg: '课时记录加载成功'
        })
    },
    /** 课后记录
     * get请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    record(req, res) {
        // get请求，获取学生的课后记录
        getReq = {
            student_id: 103839,
            status: 1, // 0: 未上过, 1: 已完成
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'GET') {
            request = req.query
            code = 200
            msg = '获取课后记录成功'
            let status = Number(req.query.status)
            data = {
                total: 2,
                page_size: 10,
                page_num: 1,
                list: [
                    {
                        id: 2345,
                        type: '[购买课]',
                        teacher_name: 'vip_程庚',
                        planned_time: '2018-07-17 14:40:11', // 排课时间
                        period: '2018-07-17 14:00 - 14:50', // 课程时间
                        status: status, // 课单状态
                        url: 'https://vippl-dev.peilian.com/singleSparring/record/50691/'
                    }, {
                        id: 7654,
                        type: '[购买课]',
                        teacher_name: 'vip_程庚',
                        planned_time: '2018-07-18 14:40:11', // 排课时间
                        period: '2018-07-17 14:00 - 14:50', // 课程时间
                        status: status, // 课单状态
                        url: 'https://vippl-dev.peilian.com/singleSparring/record/50692/'
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

module.exports = CLASS
