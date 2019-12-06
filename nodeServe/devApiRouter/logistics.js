/**
 * 物流相关API
 */
const LOGISTICS = {
    /** 获取物流需求单详情
     * get请求
     * @param {Object} req 请求内容
     * @param {JSON} res 响应内容
     */
    getLogisticsDemand(req, res) {
        let request = {}
        let code = 401
        let msg = '参数错误'
        let data = {}
        if (req.method === 'GET') {
            request = req.query
            code = 200
            msg = '获取物流需求单详情成功'
            data = {
                username: '物流测试用户名34567890',
                product: '25分钟90节陪练套餐',
                instrument: '钢琴',
                paid_cost: 0.01,
                paid_time: '2018-05-09 20:42:42',
                item_list: [4, 2],
                invoice_total: 0.01,
                recipient: '张三李四王五',
                phone: '15888888888',
                address: '上海市杨浦区江浦路一千号一号楼一单元妖妖铃号',
                post_code: '200000',
                invoice_type: ''
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

module.exports = LOGISTICS
