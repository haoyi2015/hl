/** 产品套餐API
 * 产品套餐
 */
const PRODUCT = {
    /** 套餐列表
     * 
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    list(req, res) {
        // get请求，获取套餐列表
        getReq = {
            token: ''
        }
        res.json({
            code: 200,
            data: {
                total: 2,
                page_size: 10,
                page_num: 1,
                list: [
                    {
                        id: 1,
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '2016-05-2018-04-13 00:00',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                    }, {
                        id: 2,
                        classStatus: '购买课程',
                        classInfo: '50分钟课程',
                        skTimes: '2016-05-2018-04-13 00:00',
                        teacher: '老师',
                        student: '还不知道呢',
                        cancelType: '个人取消',
                        cancelDec: '取消原因'
                    }
                ]
            },
            time: new Date().getTime(),
            msg: '产品套餐列表加载成功'
        })
    },
    /** 获取套餐列表
     * get请求
     * @param {JSON} req 请求内容
     * @param {JSON} res 响应内容
     */
    getPackageList(req, res) {
        getReq = {
            keywords: ''
        }
        let request = {}
        if (req.method === 'GET') {
            request = req.query
        }
        res.json({
            code: 200,
            data: {
                list: [
                    {
                        package: '套餐类型一',
                        product: [
                            {
                                name: '【高级】50分钟365节高级陪练套餐',
                                duration: '50分钟',
                                times: 365,
                                price: 500,
                                price1: 200,
                                url: 'http://wx.peilian.com/product/detail?id=229'
                            }, {
                                name: '【高级】50分钟160节高级陪练套餐',
                                duration: '50分钟',
                                times: 160,
                                price: 500,
                                price1: 200,
                                url: 'http://wx.peilian.com/product/detail?id=230'
                            }
                        ]
                    }, {
                        package: '初学者套餐',
                        product: [
                            {
                                name: '50分钟100节陪练套餐',
                                duration: '50分钟',
                                times: 100,
                                price: 8000,
                                price1: 5000,
                                url: 'http://wx.peilian.com/product/detail?id=231'
                            }, {
                                name: '25分钟100节陪练套餐',
                                duration: '25分钟',
                                times: 100,
                                price: 6000,
                                price1: 4000,
                                url: 'http://wx.peilian.com/product/detail?id=232'
                            }
                        ]
                    }
                ]
            },
            request: request,
            time: new Date().getTime(),
            msg: '产品套餐列表加载成功'
        })
    }
}

module.exports = PRODUCT