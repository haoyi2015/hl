const CLASS_ERROR = {
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
            msg: '课程列表加载成功'
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
    }
}

module.exports = CLASS_ERROR