/**/
import setRequest from '../api/request'

const APICONGIF = {
    // 示例api使用
    getInitInfo: function (params: any) {
        return setRequest.post("aaaa/info", params)
    },
    // 博客数据
    getBlogInfo: function (params: any) {
        return setRequest.get("mock/blog.json", params)
    },
    // 社交数据
    getSocialInfo: function (params: any) {
        return setRequest.get("mock/social.json", params)
    },
    // 时间轴
    getHomeList: function (params: any) {
        return setRequest.get("mock/home.js", params)
    }
}
export default APICONGIF
