/**
 * baseApi: 域名地址
 * baseLogin: 登录
 * baseEnvironment: 环境检测
 * 域名获取，环境检测   （如果需要单独配置外网域名可自行添加变量）
 */
const host = window.location.host;
let baseApi = ''//'https://aa.bb.com'; //后端域名

if (host.indexOf('cc.aa.com') > -1) {
    baseApi = 'https://aa.bb.com';
}else if (host.indexOf('bb.cc.com') > -1) {
    baseApi = 'https://aa.bb.com';
}

export {
    baseApi
}