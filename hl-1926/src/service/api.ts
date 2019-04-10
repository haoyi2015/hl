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
    }
}
export default APICONGIF
