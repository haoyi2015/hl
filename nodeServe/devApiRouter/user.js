const user = {
    list(req, res) {
        res.json({
            code: 200,
            data: [{
                    id: 1,
                    name: '小明'
                },
                {
                    id: 2,
                    name: '小红'
                }
            ],
            time: new Date().getTime(),
            msg: '用户列表加载成功'
        });
    },
    info(req, res) {
        res.json({
            code: 200,
            data: {
                id: 1,
                name: '小明',
                roles: 'admin',
                avatar: '/static/img/img.2aab7b4.jpg'
            },
            time: new Date().getTime(),
            msg: '用户信息获取成功'
        });
    },
    add(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '用户添加成功'
        });
    },
    delete(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '用户删除成功'
        });
    },
    login(req, res) {
        res.json({
            code: 200,
            data: {
                userid: 34,
                username: '名称',
                token: 'alskdjf23lkjtwlkejtrlw45uqkj'
            },
            time: new Date().getTime(),
            msg: '登陆成功'
        });
    },
    logout(req, res) {
        res.json({
            code: 200,
            data: {},
            time: new Date().getTime(),
            msg: '退出成功'
        });
    },
    userKeynote(req, res) {
        // get请求, 参数格式
        getReq = {
            action: 'list',
            id: 1532336768357
        }
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'GET') {
            request = req.query
            console.log('GET userKeynote', request)
            if (req.query.id) {
                code = 200
                msg = '重点用户获取成功'
            }
            data = {
                list: [
                    {
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '新签-组员',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                        }, {
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '2016-05-2018-04-13 00:00',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                        }, {
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '2016-05-2018-04-13 00:00',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                    },{
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '2016-05-2018-04-13 00:00',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                        }, {
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '2016-05-2018-04-13 00:00',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                        }, {
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '2016-05-2018-04-13 00:00',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                    }
               ]
            }
        }
        res.json({
            code: code,
            data: data,
            //request: request,
            time: new Date().getTime(),
            msg: msg
        })
    },
}

module.exports = user
