/**
 * 素材类API
 */
const MATERIAL = {
    list(req, res) {
        res.json({
            code: 200,
            data: [{
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
            msg: '素材列表加载成功'
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
            msg: '素材信息获取成功'
        })
    },
    add(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '素材信息添加成功'
        })
    },
    delete(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '素材信息删除成功'
        })
    },
    /** 获取销售套餐海报
     * get请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getPackagePoster(req, res) {
        res.json({
            code: 200,
            data: {
                list: [{
                    name: '海报146',
                    img: 'http://test001.pnlyy.com/poster/image/ef887cd09199928871909870b9be5f87'
                }, {
                    name: '海报144',
                    img: 'http://test001.pnlyy.com/poster/image/46340acba1c6203fc03bf115513a3eb9'
                }, {
                    name: '海报140',
                    img: 'http://test001.pnlyy.com/poster/image/33f6d2f9c33dc68f6fafb61d5e2344cf'
                }, {
                    name: '海报54',
                    img: 'http://test001.pnlyy.com/poster/image/e9cf4fdd9a0699e74b58e1fcd4f41a53'
                }, {
                    name: '测试海报改名',
                    img: 'http://test001.pnlyy.com/poster/image/b3491ccdc038998554cca18db6f84ca1'
                }, {
                    name: '海报4',
                    img: 'http://test001.pnlyy.com/poster/image/cb06ebd4f391e8c9472f4dc7cfaf82a0'
                }, {
                    name: '海报2',
                    img: 'http://test001.pnlyy.com/poster/image/5abb8643efbfbd896bce59040c0cf049'
                }, {
                    name: '海报1',
                    img: 'http://test001.pnlyy.com/poster/image/cae16c1059c10bf216b2cf8456173aca'
                }]
            },
            time: new Date().getTime(),
            msg: '获取销售套餐海报成功'
        })
    },
    /** 获取转介绍海报
     * get请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getIntroductionPoster(req, res) {
        res.json({
            code: 200,
            data: {
                list: [{
                    name: '转介绍海报09876543',
                    img: 'http://test001.pnlyy.com/poster/image/ef887cd09199928871909870b9be5f87'
                }, {
                    name: '转介绍海报234567890',
                    img: 'http://test001.pnlyy.com/poster/image/cb06ebd4f391e8c9472f4dc7cfaf82a0'
                }, {
                    name: '转介绍海报dsfgt456uyj',
                    img: 'http://test001.pnlyy.com/poster/image/5abb8643efbfbd896bce59040c0cf049'
                }]
            },
            time: new Date().getTime(),
            msg: '获取转介绍海报成功'
        })
    }
}

module.exports = MATERIAL
