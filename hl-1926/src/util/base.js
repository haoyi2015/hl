/**
 * 微信验证信息登陆
 * @param  {} getLogin
 * @param  urls 需要跳转的url
 */
export const getLogin = ((urls)=> {
    let blackUrl = urls ? urls : window.location.href;
    window.location.href = util_config.loginUrl + blackUrl;
})

/**
 * 判断是否是微信浏览器
 * @param  {} isWeiXin
 */
export const isWeiXin = (()=> {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    let ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
})

/**
 * 获取url参数object 真对外部调用H5页面时候使用
 * @param  {}  getParam 
 */
export const getParam = (()=> {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1),
            strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    let items = theRequest,
        query = {
            uid: items.uid||'',
            from: items.from||'',
            sign: items.sign||''
        },
        arr =[];
        for(let p in items){
            arr.push(p+'='+items[p]);
        }
    return {
        querys: query,
        mosaic: arr.join('&')||''
    }
})

/**
 * 限制访问设备
 * @param  {} flag
 * @param  {} txts
 */
export const eLimit = ((flag,txts)=> {
    //flag 是否需要提示层，txts 提示文本值
    let system = {},
        p = navigator.platform,
        u = navigator.userAgent,
        rtxts = {},
        host = window.location.host;
    // 环境检测 本地开发环境不做限制
    if(util_config.environment == "local"){
        rtxts.flag = true
        return rtxts;
    }
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

    if (system.win || system.mac || system.xll) {//如果是PC转
        if (u.indexOf('Windows Phone') > -1) {  //win手机端
        }else {}
        if(flag){
            rtxts.html = wirteDom(txts);
            document.getElementById('app').innerHTML = rtxts.html;
        }
        rtxts.flag = false;
    }else{
        rtxts.flag = true;
    }
    return rtxts;
})

/**
 * 限制访问设备提示
 * @param  {} text  文本信息
 */
export const wirteDom = ((text)=> {
    let txt =tx?tx:'抱歉，该链接只能在手机客户端访问!'
    let str =`<div class="share-mack-error">
            <div class="error-bg">
                <img src="/static/img/icon_error_bg_mobel.png" alt="" />
            </div>
            <div class="tips-txt">
                ${text}
            </div>
        </div>`
    return str
})

/**
 * 设备平台区分
 */
export const devIce = {
    // let u = navigator.userAgent
    // let config ={
    //         isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
    //         isiOS : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
    //     }
    // return config
    ua: navigator.userAgent,
    wechat() { return this.ua.match(/(MicroMessenger)\/([\d.]+)/i); },
    android() { return this.ua.match(/(Android);?[\s/]+([\d.]+)?/); },
    ios() { return this.ua.match(/(iPhone\sOS)\s([\d_]+)/); }
}