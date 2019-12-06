const SELLER = {
    list(req, res) {
        res.json({
            code: 200,
            data: [
                {
                    id: 1,
                    classStatus: '购买课程',
                    classInfo: '50分钟课程',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 4,
                    classStatus: '购买课程',
                    classInfo: '50分钟课程',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 5,
                    classStatus: '购买课程',
                    classInfo: '50分钟课程',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 6,
                    classStatus: '购买课程',
                    classInfo: '50分钟课程',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 10,
                    classStatus: '购买课程',
                    classInfo: '50分钟课程',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                },
                {
                    id: 12,
                    classStatus: '购买课程',
                    classInfo: '50分钟课程',
                    skTimes: '2016-05-2018-04-13 00:00',
                    teacher: '老师',
                    student: '还不知道呢',
                    cancelType: '个人取消',
                    cancelDec: '取消原因'
                }
            ],
            time: new Date().getTime(),
            msg: '销售列表加载成功'
        })
    },
    info(req, res) {
        res.json({
            code: 200,
            data: {
                id: 34,
                classStatus: '购买课程',
                classInfo: '50分钟课程',
                skTimes: '2016-05-2018-04-13 00:00',
                teacher: '老师',
                student: '还不知道呢',
                cancelType: '个人取消',
                cancelDec: '取消原因'
            },
            time: new Date().getTime(),
            msg: '销售信息获取成功'
        })
    },
    add(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '销售信息添加成功'
        })
    },
    delete(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '销售信息删除成功'
        })
    },
    update(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '销售信息更新成功'
        })
    },
    /** get请求, 搜索课程顾问
     * 绑定课程顾问
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getSellerConsultant(req, res) {
        // 参数格式
        let param = {
            type: 'N', // 'N'新签, 'R'复购
            keywords: '张', // 关键字
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'GET') {
            request = req.query
            console.log('GET getSellerConsultant', request)
            let studentId = req.query.student_id
            let keywords = req.query.keywords
            let type = req.query.type
            // 有type和keywords关键词则返回对应顾问列表
            if (typeof keywords !== 'undefined' && typeof type !== 'undefined' && type.replace(/(^\s*)|(\s*$)/g, '') !== '') {
                code = 200
                if (type === 'N') {
                    msg = '新签顾问检索成功'
                    data = {
                        list: [
                            {
                                id: 1557,
                                name: '【新签】张东湖'
                            }, {
                                id: 9057,
                                name: '【新签】张烨'
                            }, {
                                id: 9323,
                                name: '【新签】张烨组员'
                            }
                        ]
                    }
                } else if (type === 'R') {
                    msg = '复购顾问检索成功'
                    data = {
                        list: [
                            {
                                id: 1647,
                                name: '【复购】张东礼'
                            }, {
                                id: 3457,
                                name: '【复购】张烨欣'
                            }, {
                                id: 3073,
                                name: '【复购】张烨'
                            }
                        ]
                    }
                }
            } else if (studentId) {
                code = 200
                data = {
                    consultant_n: "新签辛勤啊",
                    consultant_r: "复购复购复购哈345"
                }
                msg = '课程顾问获取成功'
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
    /** post请求, 修改课程顾问
     * 绑定课程顾问
     * @param {Object} req 请求内容
     * @param {JSON} res 响应内容
     */
    postSellerConsultant(req, res) {
        // 参数格式
        let param = {
            type: 'N', // 'N'新签, 'R'复购
            consultant_id: 2345678, // 顾问id
            student_id: 34567 // 学生id
        }
        let request = {}
        let code = 401
        let data = {}
        let msg = '参数错误'
        if (req.method === 'POST') {
            request = req.body
            console.log('POST postSellerConsultant', request)
            let studentId = Number(req.body.student_id)
            let consultantId = Number(req.body.consultant_id)
            let type = req.body.type
            if ((typeof consultantId !== 'undefined') && (typeof type !== 'undefined') && (type.replace(/(^\s*)|(\s*$)/g, '') !== '')) {
                code = 200
                if (consultantId === 0) {
                    msg = '取消新签绑定成功'
                } else if (consultantId === -1) {
                    msg = '取消复购绑定成功'
                } else {
                    if (type === 'N') {
                        msg = '新签顾问绑定成功'
                        data = {
                            student_id: studentId,
                            consultant_id: consultantId,
                            name: '新签顾问名称'
                        }
                    } else if (type === 'R') {
                        msg = '复购顾问绑定成功'
                        data = {
                            student_id: studentId,
                            consultant_id: consultantId,
                            name: '复购顾问名称'
                        }
                    }
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
    /** post请求, 给原新签顾问增加分配权重
     * 绑定课程顾问
     * @param {Object} req 请求内容
     * @param {JSON} res 响应内容
     */
    postDistributeGrowth(req, res) {
        // 参数格式
        let param = {
            consultant_id: 2345678, // 顾问id
            student_id: 34567 // 学生id
        }
        let request = {}
        let code = 401
        let data = {}
        let msg = '参数错误'
        if (req.method === 'POST') {
            request = req.body
            console.log('POST postDistributeGrowth', request)
            let studentId = Number(req.body.student_id)
            let consultantId = Number(req.body.consultant_id)
            if (studentId && consultantId) {
                code = 200
                msg = '增加分配权重成功'
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
    /** get请求, 获取学生渠道
     * 用于学生渠道的修改
     */
    getSellerChannel (req, res) {
        // 检索列表参数格式
        let param = {
            keywords: '张'
        }
        // 获取学生对应的渠道参数格式
        param = {
            student_id: 34567
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        if (req.method === 'GET') {
            request = req.query
            console.log('GET getSellerChannel', request)
            let studentId = req.query.student_id
            let keywords = req.query.keywords
            if (typeof keywords !== 'undefined' && keywords.replace(/(^\s*)|(\s*$)/g, '') !== '') {
                code = 200
                data = {
                    list: [{"id":"2_5868715","name":"[家长] zhangdonghai_jiazhan (12345678901)","name_hidden":"zhangdonghai_jiazhan  (家长)"},{"id":"2_5869079","name":"[家长] 张XX (123456789011)","name_hidden":"张XX  (家长)"},{"id":"2_5869081","name":"[家长] zhangAA (12345678907)","name_hidden":"zhangAA  (家长)"},{"id":"2_5870017","name":"[家长] 11 (12345678911)","name_hidden":"11  (家长)"},{"id":"2_5870073","name":"[家长] qq (12345678912)","name_hidden":"qq  (家长)"},{"id":"2_5870097","name":"[家长] 测试2222 (12345678987)","name_hidden":"测试2222  (家长)"},{"id":"2_5870747","name":"[家长] abcde (12345678998)","name_hidden":"abcde  (家长)"},{"id":"2_5870773","name":"[家长] crm23213 (12345678951)","name_hidden":"crm23213  (家长)"},{"id":"2_5871023","name":"[家长] asd (123456789032)","name_hidden":"asd  (家长)"},{"id":"2_903218301","name":"[家长] 123456789 (13195982536)","name_hidden":"123456789  (家长)"},{"id":"2_903218413","name":"[家长] 张排课2 (123456789001)","name_hidden":"张排课2  (家长)"},{"id":"2_903220011","name":"[家长] 测试账号ggggg_==的假8888的8 (123456789123456)","name_hidden":"测试账号ggggg_==的假8888的8  (家长)"},{"id":"2_903222249","name":"[家长] console.log('uui (14223456789)","name_hidden":"console.log('uui  (家长)"}],
                }
                msg = '渠道列表检索成功'
            } else if (studentId) {
                code = 200
                data = {
                    id: "2_5868715",
                    name: "[家长] 张东海_家长 (12345678901)"
                }
                msg = '渠道获取成功'
            }
        }
        res.json({
            code: code,
            data: data || {},
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
    /** post请求, 修改学生渠道
     * 用于学生渠道的修改
     */
    postSellerChannel (req, res) {
        // 获取对应的渠道参数格式
        param = {
            student_id: 34567,
            channel_id: 345678
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        if (req.method === 'POST') {
            request = req.body
            console.log('GET postSellerChannel', request)
            let studentId = req.body.student_id
            // let channelId = req.body.channel_id
            // if (studentId && channelId) { // channelId可为空
            if (studentId) {
                code = 200
                data = {}
                msg = '渠道修改成功'
            }
        }
        res.json({
            code: code,
            data: data || {},
            request: request,
            time: new Date().getTime(),
            msg: msg
        })
    }
}

module.exports = SELLER
