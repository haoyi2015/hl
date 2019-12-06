// 本地开发dev接口
const express = require('express')
const router = express.Router()
const USER = require('./user')
const STUDENT = require('./student')
const TEACHER = require('./teacher')
const CLASS = require('./class')
const CLASS_CANCEL = require('./class-cancel')
const CLASS_ERROR = require('./class-error')
const SELLER = require('./seller')
const MATERIAL = require('./material')
const CHAT = require('./chat')
const LOGISTICS = require('./logistics')
const SHEET_MUSIC = require('./sheetMusic') // 乐谱管理

const ORDER = require('./order')
const PRODUCT = require('./product')

const CHARGE = require('./classOperation')

// 用户信息
router.get('/user', USER.list)
router.post('/user/login', USER.login)
router.post('/user/logout', USER.logout)
router.post('/user/add', USER.add)
router.post('/user/info', USER.info)
router.post('/user/delete', USER.delete)

// 学生
router.get('/student', STUDENT.getList) // 获取筛选学生列表
router.get('/student/info', STUDENT.getInfo) // 获取学生信息
router.post('/student/info', STUDENT.postInfo) // 修改学生信息
router.post('/student/high', STUDENT.postHigh) // 修改学生高危状态
router.get('/student/buyHistory', STUDENT.getBuyHistory) // 获取学生购买/体验记录
router.get('/student/instrument', STUDENT.getInstrument) // 获取学生基本练琴信息
router.post('/student/instrument', STUDENT.postInstrument) // 添加/修改学生基本练琴信息
router.get('/student/consultant', STUDENT.getConsultant) // 获取学生绑定的课程顾问
router.post('/student/consultant', STUDENT.postConsultant) // 修改学生绑定的课程顾问
router.get('/student/remarks', STUDENT.getRemarks) // 获取学生备注信息
router.post('/student/remarks', STUDENT.postRemarks) // 修改学生备注信息
router.get('/student/visit', STUDENT.getVisit) // 获取学生回访记录
router.post('/student/visit', STUDENT.postVisit) // 添加/修改学生回访记录

// 老师信息
router.get('/teacher', TEACHER.list)
router.get('/teacher/info', TEACHER.info)
router.post('/teacher/add', TEACHER.add)
router.post('/teacher/delete', TEACHER.delete)
router.post('/teacher/update', TEACHER.update)

// 课表信息
router.post('/class', CLASS.list)
router.get('/class/info', CLASS.info)
router.post('/class/add', CLASS.add)
router.post('/class/delete', CLASS.delete)
router.get('/course/history-record', CLASS.record) // get请求, 侧边栏课后记录

// 取消课表
router.post('/class-cancel', CLASS_CANCEL.list)
router.get('/class-cancel/info', CLASS_CANCEL.info)
router.post('/class-cancel/add', CLASS_CANCEL.add)
router.post('/class-cancel/delete', CLASS_CANCEL.delete)
router.post('/class-cancel/update', CLASS_CANCEL.update)

// 错误课表
router.post('/class-error', CLASS_ERROR.list)
router.get('/class-error/info', CLASS_ERROR.info)
router.post('/class-error/add', CLASS_ERROR.add)
router.post('/class-error/delete', CLASS_ERROR.delete)
router.post('/class-error/update', CLASS_ERROR.update)

// 销售, 新签、复购
router.get('/seller', SELLER.list)
router.get('/seller/info', SELLER.info)
router.post('/seller/add', SELLER.add)
router.post('/seller/delete', SELLER.delete)
router.post('/seller/update', SELLER.update)
router.get('/seller/channel', SELLER.getSellerChannel) // get请求, 获取学生渠道
router.post('/seller/channel', SELLER.postSellerChannel) // post请求, 修改学生渠道
router.get('/seller/consultant', SELLER.getSellerConsultant) // get请求, 获取课程顾问新签、复购, 用于学生绑定课程顾问
router.post('/seller/consultant', SELLER.postSellerConsultant) // post请求, 修改课程顾问新签、复购, 用于学生绑定课程顾问
router.post('/seller/consultant-distribute-growth', SELLER.postDistributeGrowth) // post请求, 给原新签顾问增加分配权重

// 素材管理
router.post('/material', MATERIAL.list)
router.get('/material/info', MATERIAL.info)
router.post('/material/add', MATERIAL.add)
router.post('/material/delete', MATERIAL.delete)
router.get('/material/package-poster', MATERIAL.getPackagePoster) // get请求, 获取销售套餐海报
router.get('/material/introduction-poster', MATERIAL.getIntroductionPoster) // get请求, 获取转介绍海报

// 乐谱管理
router.get('/sheet-music/library', SHEET_MUSIC.sheetMusicLibrary) // get请求, 搜索乐谱库
router.get('/sheet-music/selected', SHEET_MUSIC.selectedSheetMusic) // get请求, 已经选择的乐谱
router.get('/sheet-music/last', SHEET_MUSIC.lastSelectedSheet) // get请求, 上次选择的乐谱
router.get('/sheet-music/image-upload', SHEET_MUSIC.studentUploadImage) // get请求, 自主上传的乐谱图片
router.post('/sheet-music/image-upload', SHEET_MUSIC.uploadImage) // post请求, 自主上传乐谱图片
router.get('/sheet-music/image-last', SHEET_MUSIC.lastUploadImage) // get请求, 上次上传的乐谱图片
router.post('/sheet-music/update', SHEET_MUSIC.saveSheetMusic) // post请求, 保存乐谱
router.post('/sheet-music/image-delete', SHEET_MUSIC.deleteUploadImage) // post请求, 删除已上传的图片

// 聊天待整理
router.get('/chat/status', CHAT.getStatus) // get请求，获取聊天在线状态
router.post('/chat/status', CHAT.postStatus) // post请求, 聊天在线状态设置
router.get('/chat/history', CHAT.getHistory) // get请求, 获取聊天记录列表
router.post('/chat/deal', CHAT.dealMessage) // post请求, 将待处理的消息设置成已处理
router.get('/chat/clientInfo', CHAT.clientInfo)
router.post('/chat/clientRecent', CHAT.clientRecent) // post请求, 获取接待人列表
router.get('/chat/weekCoursePlan', CHAT.weekCoursePlan) // 一周内的课程
router.get('/chat/quick-message', CHAT.getQuickMessage) // get请求, 快速回复信息列表
router.get('/chat/transfer', CHAT.transfer) // get请求, 获取可转接的客服人员列表
router.post('/chat/transfer', CHAT.transfer) // post请求, 处理转接
router.get('/chat/notification', CHAT.getNotificationList) // 未回复的客户
router.post('/chat/access', CHAT.access) // post请求, 打开聊天, 接入聊天
router.post('/chat/eject', CHAT.postEject) // post请求, 退出接待
router.get('/chat/emoji', CHAT.getEmoji) // get请求, 表情图片列表
router.get('/chat/sms', CHAT.getMobileMessage) // get请求, 短信模板列表
router.post('/chat/sms', CHAT.postMobileMessage) // post请求, 发送模板短信
router.post('/chat/receipt', CHAT.postReceipt) // post请求, 发送回执
router.get('/chat/getRate', CHAT.getRate) // get请求, 获取课程评价信息
router.post('/chat/uploadImage', CHAT.uploadImage) // post, 发送图片消息

// 订单
router.get('/order/product-order-list', ORDER.productOrderList) // get请求, 套餐订单列表
router.get('/order/product-order-link', ORDER.productOrderLink) // get请求, 套餐订单支付链接
router.post('/order/enable-invoice-application', ORDER.enableInvoiceApplication) // post请求, 开启申请发票入口
router.post('/order/check-camera-application', ORDER.checkCameraApplication) // post请求, 开启申请镜头入口前检查
router.post('/order/enable-camera-application', ORDER.enableCameraApplication) // post请求, 开启申请镜头入口
router.get('/order/get-payment-flow', ORDER.getPaymentFlow) // post请求, 订单支付详情

// 商品（产品）套餐
router.get('/product-package', PRODUCT.getPackageList) // 商品套餐

// 课程充值 赠送
router.get('/order/charge', CHARGE.getClassCharge) // get请求，获取充值用户信息
router.post('/order-middleware/create-product-order-with-image', CHARGE.setClassCharge) // post请求，课程充值
router.get('/order-middleware/get-all-product-list', CHARGE.getAllProduct) // get请求，获取所有套餐信息
router.get('/chat/give-class', CHARGE.getGiveClass) // post请求，获取赠送课信息
router.post('/chat/do-give-class', CHARGE.setGiveClass) // post请求，获取赠送课信息

// 课程变更
router.post('/order-middleware/product-order-modify', CHARGE.setOrderModify) // post请求，提交课程变更
router.get('/order-middleware/product-order-modify', CHARGE.getOrderModify) // get请求，获取课程变更页面信息

// 套餐升级
router.get('/order-middleware/product-order-upgrade', CHARGE.getUpdataMeal) // get请求，获取套餐页面信息
router.post('/order-middleware/product-order-upgrade', CHARGE.setUpdataMeal) // post请求，获取套餐页面信息

// 物流
router.get('/logistics/demand', LOGISTICS.getLogisticsDemand) // get请求, 获取物流需求单详情

//重点用户
router.get('/user/userKeynote', USER.userKeynote) // get请求，获取重点用户列表

// 完整示例
router.get('/news', function (req, res) {
    res.json({
        code: 200,
        data: {
            id: 1,
            name: '新闻名称1'
        },
        time: new Date().getTime(),
        msg: '新闻列表加载成功'
    })
})

module.exports = router
