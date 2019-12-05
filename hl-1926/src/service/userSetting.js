import req from '../config/request'
/**
 1. 获取用户提醒设置list
 */
export const getUserSetList = param => {
     return req.get('/student-new/get-user-permissions-list',param)
    //return req.get('/january-activity/get-student-address-info',param)
}
/**
 2. 用户提醒设置提交数据
 */
export const postUserSet = param => {
    return req.post('/student-new/update-user-permission',param)
}