class Utils{
    /*
     * 通过参数名获取URL传递的参数值（方法一）
     * name参数名字
     */
     GetQueryString(name){
         let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
         let r = window.location.search.substr(1).match(reg);
             if (r != null)
                 return (r[2]);
             return null;
     }
     /*
      * 通过参数名获取URL传递的参数值(js获取url传递参数)（方法二）
      * name参数名字
      */
     GetRequest(){
        let url = location.search || location.href; //获取url中"?"符后的字串
        let theRequest = new Object();
        if (url.indexOf("?") != -1) {
            let str = url.substr(1);
            strs = str.split("&");
            for(let i = 0; i < strs.length; i ++) {
              theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
            }
       }
       return theRequest;
    }
    /*
     * 生成6位数的单号
     */
    generateMixed(){
        let Num = "";
        for (let i = 0; i < 6; i++) {
            Num += Math.floor(Math.random() * 10);
        }
        return Num;
    }
    /*
     * 当前日期时间
     */
    showDate(){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        if (minute < 10) {
            minute = "0" + minute;
        }

        if (second < 10) {
            second = "0" + second;
        }
        return year + '-' + month + '-' + day + '  ' + hour + ':' + minute;
    }
    /*
     * 判断是哪个终端
     */
    versions(){
        let u = window.navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
            iPad: u.indexOf('iPad') > -1, //是否为iPad
            webApp: u.indexOf('Safari') == -1, //是否为web应用程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
        }
    }()
    /*
     * 判断客户端是否为 PC 还是手持设备  true为pc,false为手持设备
     */
    IsPC(){
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) >= 0) {
                flag = false;
                break;
            }
        }
        //如果是PC浏览器的话，显示移动端打开，
        if(flag){
            $("body").empty().append("<div style='text-align: center;position:absolute;top:30%;left:0;bottom:0;right:0;font-size:2rem'>请使用手持设备访问<div>");
        }
        return flag;
    }
    // 窗口响应事件
    responseWin(){
        return function(){
            /*window.onresize = function(){
                return common.IsPC();
            };*/
            return common.IsPC();
        }();
    }
    /*
     * 获取请求头的http
     */
    protocol(){
        return (("https:" == document.location.protocol) ? " https://" : " http://")
    }
}


export {Utils};
