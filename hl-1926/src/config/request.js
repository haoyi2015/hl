//引入axios
import axios from 'axios'
import baseEnv from './env'

let cancel ,promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
    //post 拦截处理
    if (config.method === 'post') {
        //处理from参数
        config.transformRequest = [function(data) {
            var ret = []
            for (var it in data) {
                ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
            }
            return ret.join('&')||''
        }]
    }
    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    if(response.data.code&&response.data.code!=200){
        return Promise.reject(response);
    }else{
        return response
    }
}, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.msg = '错误请求'
          break;
        case 401:
          err.msg = '未授权，请重新登录'
          break;
        case 403:
          err.msg = '拒绝访问'
          break;
        case 404:
          err.msg = '请求错误,未找到该资源'
          break;
        case 405:
          err.msg = '请求方法未允许'
          break;
        case 408:
          err.msg = '请求超时'
          break;
        case 500:
          err.msg = '服务器端出错'
          break;
        case 501:
          err.msg = '网络未实现'
          break;
        case 502:
          err.msg = '网络错误'
          break;
        case 503:
          err.msg = '服务不可用'
          break;
        case 504:
          err.msg = '网络超时'
          break;
        case 505:
          err.msg = 'http版本不支持该请求'
          break;
        default:
          err.msg = `连接错误${err.response.status}`
      }
    } else {
      err.msg = "连接到服务器失败"
    }
    return Promise.reject(err.response)
})

//设置请求域名
axios.defaults.baseURL = baseEnv.api||'/'
//设置默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.timeout = 5000

export default {
  //get请求
    get (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'get',
          url,
          params: param,
          withCredentials: true,
          crossDomain: true,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res.data)
        },err => {
          reject(err);
        }).catch((error) => {
          reject(error)
        })
      })
    },
  //post请求
    post (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'post',
          url,
          data: param,
          withCredentials: true,
          crossDomain: true,
          cancelToken: new CancelToken(c => {
            cancel = c
          })
        }).then(res => {
          resolve(res.data)
        },err => {
          reject(err);
        }).catch((error) => {
          reject(error)
        })
      })
    }
}