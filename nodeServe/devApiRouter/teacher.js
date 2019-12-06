const TEACHER = {
    list(req, res) {
        res.json({
            code: 200,
            data: {
                total: 2,
                page_size: 10,
                page_num: 1,
                list: [
                    {
                        id: 1883,
                        img: 'http://test001.pnlyy.com/user/head_icon/504147739714f2510d3c4e04eb4c96c5?imageMogr2/auto-orient',
                        name: 'CRM-王锴',
                        sex: '男',
                        tel: '18888888888',
                        conversionRate: 1,
                        level: '钢琴-高级-3',
                        resumeId: 34,
                        scheduleId: 234
                    }, {
                        id: 1885,
                        img: 'http://test001.pnlyy.com/upload/image/8f37ca9032b32109938afba62326496a?imageMogr2/auto-orient',
                        name: '王庆测试',
                        sex: '男',
                        tel: '18888888888',
                        conversionRate: 1,
                        level: '钢琴-启蒙-1，小提琴-启蒙-1，手风琴-启蒙-1，古筝-启蒙-1',
                        resumeId: 36,
                        scheduleId: 34
                    }, {
                        id: 1887,
                        img: 'http://test001.pnlyy.com/user/head_icon/e5888c6e9dc2e77d8fbbade11da53e35?imageMogr2/auto-orient',
                        name: 'vip_杨秦',
                        sex: '男',
                        tel: '18888888888',
                        conversionRate: 100,
                        level: '钢琴-高级-3',
                        resumeId: 36,
                        scheduleId: 235
                    }, {
                        id: 1889,
                        img: 'http://test001.pnlyy.com/user/head_icon/bc2db2d530567a57ba3b06be3947892e?imageMogr2/auto-orient',
                        name: 'vip_周林',
                        sex: '男',
                        tel: '18888888888',
                        conversionRate: 0,
                        level: '钢琴-高级-1',
                        resumeId: 36,
                        scheduleId: 235
                    }, {
                        id: 1883,
                        img: 'http://test001.pnlyy.com/upload/image/936f6eb16661cb4e46b87e12b67cad40?imageMogr2/auto-orient',
                        name: 'vip_杨锡钰',
                        sex: '女',
                        tel: '15555555555',
                        conversionRate: 1,
                        level: '钢琴-高级-1',
                        resumeId: 66,
                        scheduleId: 666
                    }, {
                        id: 1883,
                        img: 'http://test001.pnlyy.com/upload/image/a4f89bdb0bee2e743d9b782554e3663a?imageMogr2/auto-orient',
                        name: 'vip_杨文翰',
                        sex: '男',
                        tel: '18888888888',
                        conversionRate: 1,
                        level: '钢琴-启蒙-1，小提琴-启蒙-1，手风琴-启蒙-1，古筝-启蒙-1',
                        resumeId: 23,
                        scheduleId: 145
                    }
                ]
            },
            time: new Date().getTime(),
            msg: '老师列表加载成功'
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
            msg: '老师信息获取成功'
        })
    },
    add(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '老师信息添加成功'
        })
    },
    delete(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '老师信息删除成功'
        })
    },
    update(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '老师信息更新成功'
        })
    }
}

module.exports = TEACHER