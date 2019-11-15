var systemFun =function(){
    var system = {};
    var p = navigator.platform;
    var u = navigator.userAgent;

    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if (system.win || system.mac || system.xll) {//如果是PC
        if (u.indexOf('Windows Phone') > -1) {  //win手机端
        }else {}
        return false;
    }else{
        return true
    }
}
if(systemFun()){
    function getUrlParameter(name) {
       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if (r != null) return unescape(r[2]);
       return null;
    }
    function wxFlag(){
        var ua = window.navigator.userAgent.toLowerCase();
        //通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }
    var netStr ='<div class="toast-wrap">'+
            '<span class="toast-msg"></span>'+
         '</div>';
   function Toast(msg,duration){
         duration=isNaN(duration)?3000:duration;
         var m = document.createElement('div'),
             w = document.body.clientWidth - 100;
         m.className = 'toast-wrap';
         m.innerHTML = '<span class="toast-msg" style="width:'+w+'px;margin-left:-'+w/2+'px">'+msg+'</div>';
         document.body.appendChild(m);
         setTimeout(function() {
             var d = 0.5;
             m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
             m.style.opacity = '0';
             setTimeout(function() { document.body.removeChild(m) }, d * 1000);
         }, duration);
     }
   var netStrs ='<div id="nets" class="netw-mack">'+
            '<div class="net-box">'+
                '您网络不稳定，请稍后重试！！'+
                '<button class="net-bnt"><a href="">刷新试试</a></button>'+
            '</div>'+
        '</div>';
    var timeSet;
    window.onload = function(){
        var hrefs = window.location.href,
            htps = hrefs.search("https") != -1?'https://':'http://',
            payFs = true,
            apiUrl = htps+'yii.peilian.com',
            htpUrl = htps+'vippl-dev.peilian.com',
            loginUrl = htps+'yii.peilian.com/site/login?returnUrl=',
            $http = axios;

        var appPay = new Vue({
            el: '#payApp',
            data: {
                erType: 1,
                warpFlag: true,
                maxMonery: '',
                moneryVal: '',
                agreeFlag: false,
                payFlag: false, //付款按钮状态
                shareFlag: false,
                paramsObj: {},
                packageList: [], //陪练课
                giftList: [], // 赠送课
                detailData: '', //订单数据集合
                payText: '',
                payMaxMsg: false,
                payPostFlag: true,
                payMiyao:'',
                payPostFlagWx:false,
                payNo:'',
                wxRequestConfig: {}, //支付配置参数
                product_image:'',
                dateItems: '',
                endTime: '',
                orderEndFlage: true //订单状态
            },
            created: function() {
                this.payMiyao = getUrlParameter('token');
                if(wxFlag()){
                    if(this.payMiyao){
                        this.orderDetail();
                    }else{
                        window.location.replace('/errorpage');
                    }
                }else{
                    this.payPostFlagWx = true;
                    var wxStr ='<section class="prohibit-no-wx">'+
                    '<img class="wx-logo" src="pay/pay-close-icon.png" /><br /><br />'+
                    '请在微信客户端打开'+
                    '</section>';
                    document.getElementById('payApp').style.display = 'block';
                    document.getElementById('payApp').innerHTML = wxStr;
                }
            },
            methods: {
               timestampToTime: function (timestamp) {
                   var date = new Date(timestamp * 1000), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
                   Y = date.getFullYear() + '/',
                   M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/',
                   D = date.getDate() + ' ',
                   h = date.getHours() + ':',
                   m = date.getMinutes() + ':',
                   s = date.getSeconds();
                   return Y+M+D+h+m+s
               },
               timeDown: function () {
                   var _this = this;
                   var endTime = new Date(_this.endTime)
                   var nowTime = new Date();

                   var leftTime = _this.endTime||0;
                   var d = parseInt(leftTime/(24*60*60))
                   var h = _this.formate(parseInt(leftTime/(60*60)%24))
                   var m = _this.formate(parseInt(leftTime/60%60))
                   var s = _this.formate(parseInt(leftTime%60))

                   if(leftTime <= 0){
                       _this.orderEndFlage = false;
                       _this.flag = true;
                   }
                   --_this.endTime;
                   //this.time = `${d}天${h}小时${m}分${s}秒`
                   _this.dateItems = h+':'+m+':'+s //`${h}:${m}:${s}`
               },
               formate: function (time) {
                   if(time>=10){
                       return time
                   }else{
                       return '0'+time//`0${time}`
                   }
               },
               returnFloat: function(value){
                     var value = Math.round(parseFloat(value)*100)/100;
                     var xsd=value.toString().split(".");
                     if(xsd.length==1){
                         value=value.toString()+".00";
                         return value;
                     }
                     if(xsd.length>1){
                         if(xsd[1].length<2){
                             value=value.toString()+"0";
                         }
                         return value;
                     }
                },
               userAgr: function(){
                    window.location.href ='/payment-agreement?token='+this.payMiyao+'';
               },
               agreeFun: function() {
                    //用户协议
                    this.agreeFlag = this.agreeFlag == true ? false : true;
               },
               focusFun: function(){
                    document.getElementById('payFoot').style.position ='static';
                    document.getElementById('payCant').style.paddingBottom =0;
                },
               blurfns: function(){
                    setTimeout(function(){
                        document.getElementById('payFoot').style.position ='fixed';
                        document.getElementById('payCant').style.paddingBottom ='128px';
                    },200)
                },
               payStatus: function(){
                    //Toast('请稍后，支付结果处理中，请勿重复操作',1500);
                    //成功回调
                    var _this = this,
                        params ={
                            pay_no: _this.payNo
                        };
                    $http({
                        method: 'post',
                        url: apiUrl+'/product-order/payment-result?token='+_this.payMiyao+'',
                        transformRequest: [function(data) {
                            var ret = []
                            for (var it in data) {
                                ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
                            }
                            return ret.join('&')||''
                        }],
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: params,
                        withCredentials: true,
                        crossDomain: true
                    })
                    .then(function(res) {
                        if(res.data.code ==200){
                            sessionStorage.setItem('ms_paynumbs', _this.payNo)
                            if(res.data.data.pay_status==1){
                                window.location.replace('/payment-success?token='+_this.payMiyao+'&payNo='+_this.payNo+'');
                            }else if(res.data.data.pay_status==2){
                                window.location.replace('/payment-fail?token='+that.payMiyao+'&payNo='+_this.payNo+'');
                            }else if(res.data.data.pay_status==0){
                                window.location.replace('/for-payment?token='+that.payMiyao+'&payNo='+_this.payNo+'');
                            }
                        }
                    })
                    .catch(function(error) {
                        if(error.response.status ==500){
                            Toast('您网络不稳定，请稍后重试！！',1000);
                            setTimeout(function(){
                                payFs = true;
                                _this.payPostFlag = true;
                                _this.payFlag = true;
                                _this.payText = '去支付';
                            })
                        }
                    });
                },
               myPayMentFun: function() {
                    var that = this;
                    //付款金额不能为空
                    if(that.moneryVal<0.01){
                        Toast('您的最低付款金额不能少于 0.01',1000);
                        return false;
                    }else if (!this.agreeFlag) {
                        Toast('您还没同意用户协议',500);
                        return false
                    }
                    if (that.payPostFlag) {
                        var wxConfig = '',
                            params = {
                                pay_method: 1,
                                pay_amount: that.moneryVal
                            };
                        if (payFs) {
                            payFs = false;
                            that.payPostFlag = false;
                            that.payFlag = false;
                            that.payText = '支付中...';
                            $http({
                                method: 'post',
                                url: apiUrl+'/product-order/pay?token='+that.payMiyao+'',
                                transformRequest: [function(data) {
                                    var ret = []
                                    for (var it in data) {
                                        ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
                                    }
                                    return ret.join('&')||''
                                }],
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                },
                                data: params,
                                withCredentials: true,
                                crossDomain: true
                            })
                            .then(function(res) {
                                that.payNo = res.data.data.pay_no;
                                if(res.data.code == 200){
                                    wxConfig = {
                                        appId: res.data.data.appId,
                                        nonceStr: res.data.data.nonceStr,
                                        package: res.data.data.package,
                                        paySign: res.data.data.paySign,
                                        signType: res.data.data.signType,
                                        timeStamp: ""+res.data.data.timeStamp+""
                                    };
                                    payFun(wxConfig);
                                }else{
                                    Toast('您订单状态已有变化，请重试！',1500);
                                    setTimeout(function(){
                                        window.location.href ='';
                                        payFs = true;
                                        that.payPostFlag = true;
                                        that.payFlag = true;
                                        that.payText = '去支付';
                                    },1500);
                                }
                            })
                            .catch(function(error) {
                                setTimeout(function(){
                                    payFs = true;
                                    that.payPostFlag = true;
                                    that.payFlag = true;
                                    that.payText = '去支付';
                                },1000)
                            });
                        }
                        //微信支付
                        function payFun (wxc){
                            function onBridgeReady() {
                                WeixinJSBridge.invoke(
                                'getBrandWCPayRequest', {
                                    "appId": wxConfig.appId,
                                    "timeStamp": wxConfig.timeStamp,
                                    "nonceStr": wxConfig.nonceStr,
                                    "package": wxConfig.package,
                                    "signType": wxConfig.signType,
                                    "paySign": wxConfig.paySign
                                },
                                function(res) {
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                        //支付成功
                                        that.payStatus();
                                    } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                                        //支付取消
                                        payFs = true;
                                        that.payPostFlag = true;
                                        that.payFlag = true;
                                        that.payText = '去支付';
                                        Toast('您已取消支付', 600);
                                    } else if (res.err_msg == "get_brand_wcpay_request:fail") {
                                        //支付失败
                                    }
                                }
                                );
                            }
                            if (typeof WeixinJSBridge == "undefined") {
                                if (document.addEventListener) {
                                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                                } else if (document.attachEvent) {
                                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                                }
                            } else {
                                onBridgeReady();
                            }
                        }
                    }
                },
               generationPay: function() {
                    //代付
                    this.shareFlag = true;
                },
               closeTips: function(event) {
                    //取消事件冒泡
                    this.shareFlag = false;
                },
               orderDetail: function() {
                    //订单详情
                    var _this = this,
                        params = {
                            token: _this.payMiyao || '',
                            share_url: window.location.href
                        };
                    clearInterval(timeSet);
                    //del data
                    sessionStorage.removeItem('ms_paynumbs');
                    $http.get(apiUrl+'/product-order/view-detail', {
                        params: params,
                        withCredentials: true,
                        crossDomain: true
                    })
                    .then(function(res) {
                        if(res.data.code == 200){
                            _this.detailData = res.data.data;
                            _this.packageList = res.data.data.package_list || ''; //陪练课
                            _this.giftList = res.data.data.gift_list || ''; //赠送
                            _this.moneryVal = _this.detailData.remain_fee;
                            _this.maxMonery = _this.detailData.remain_fee;
                            _this.detailData.total_fee = _this.returnFloat(_this.detailData.total_fee);
                            _this.detailData.remain_fee = _this.returnFloat(_this.detailData.remain_fee);
                            _this.detailData.payable_fee = _this.returnFloat(_this.detailData.payable_fee);
                            _this.product_image = _this.detailData.product_image||'';
                            //手机号
                            var strs = _this.detailData.student_mobile.toString();
                            var start = strs.slice(0,3);
                            var end = strs.slice(-4);
                            _this.detailData.student_mobile = start+'****'+end;
                            //设置title
                            var titleTxt ='';
                            if(_this.detailData.pay_status==0||_this.detailData.pay_status==4){
                                titleTxt ='订单确认页';
                                document.getElementById('payCant').style.paddingBottom ='128px';
                            }else if(_this.detailData.pay_status==1){
                                titleTxt ='订单已完成'
                            }else if(_this.detailData.pay_status==2){
                                titleTxt ='订单已关闭'
                            }
                            //全部支付 支付状态为 0
                            if(_this.detailData.pay_status==0&&_this.detailData.is_upgrade!=1){
                                //获取时间
                                var timesend = _this.timestampToTime(_this.detailData.time_end)
                                _this.endTime = _this.detailData.time_remain//timesend;
                                timeSet = setInterval(()=>{
                                    if(_this.flag == true){
                                        clearInterval(timeSet);
                                        _this.orderEndFlage = false;
                                        document.getElementById('payCant').style.paddingBottom ='0';
                                    }
                                    _this.timeDown();
                                },1001);
                            }
                            _this.changeTitle(titleTxt);
                            var wechat_share = res.data.data.wechat_share;
                            _this.warpFlag = true;
                            //show dom
                            setTimeout(function(){document.getElementById('payApp').style.display = 'block';document.getElementById('payLoader').style.display = 'none';},1001)
                            var wxConfig = {
                                appId: wechat_share.appId,
                                timestamp: wechat_share.timestamp,
                                nonceStr: wechat_share.nonceStr,
                                signature: wechat_share.signature,
                            }
                            _this.wxShareConfig(wxConfig)

                        }else if (res.data.code == 433) {
                            //未获取用户信息
                            var blackUrl = window.location.href;
                            window.location.href = loginUrl + blackUrl;
                        }else {
                            Toast(res.data.msg, 1000)
                            window.location.replace('/errorpage');
                        }
                    })
                    .catch(function(error) {
                        if(error.response.status>=400&& error.response.status <=600){
                            document.getElementById('payApp').style.display ='block';
                            document.getElementById('payApp').innerHTML = netStrs;
                            document.getElementById('nets').onclick = function(){
                                window.location.href ='';
                            }
                        }
                    });
                },
               changeTitle: function (title) {
                    //更改title
                    var isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent);
                    if(isIOS){
                        document.title = title;
                        var ifm = document.createElement('iframe');
                        ifm.src = '/favicon.ico';
                        ifm.style.display = 'none';
                        ifm.onload = function() {
                            setTimeout(function(){
                                ifm.remove();
                            }, 9)
                        }
                        document.body.appendChild(ifm);
                    } else {
                        document.title = title;
                    }
                },
               wxShareConfig: function(config) {
                    //微信分享配置
                    var _this = this,urlimg='';
                    wx.config({
                        debug: false, // 开启调试模式
                        appId: config.appId, // 必填，公众号的唯一标识
                        timestamp: config.timestamp, // 必填，生成签名的时间戳
                        nonceStr: config.nonceStr, // 必填，生成签名的随机串
                        signature: config.signature, // 必填，签名
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "hideOptionMenu", "hideMenuItems"] // 必填，需要使用的JS接口列表
                    });
                    if(!_this.product_image){
                        urlimg = htpUrl+"/static/payment/pay/goods-icon.png";
                    }else{
                        urlimg = _this.product_image;
                    }
                    wx.ready(function() {
                        var shareConfig = {
                            title: "有一笔VIP陪练订单，邀请您帮忙支付一下哦！",
                            link:  htpUrl+"/static/payment/payment.html?token="+_this.payMiyao+"",
                            imgUrl: urlimg,
                            desc: "您好，有一笔VIP陪练订单，邀请您慷慨解囊，帮忙支付一下哦！"
                        };
                        wx.hideMenuItems({
                            menuList: ["menuItem:share:qq", "menuItem:share:QZone", "menuItem:openWithQQBrowser", "menuItem:share:email", "menuItem:favorite", "menuItem:share:timeline"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮
                        });
                        wx.onMenuShareTimeline({
                            //朋友圈
                            title: shareConfig.title, // 分享标题
                            link: shareConfig.link, // 分享链接
                            desc: shareConfig.desc,
                            imgUrl: shareConfig.imgUrl, // 分享图标
                            success: function() {
                                _this.shareFlag = false;
                            },
                            cancel: function() {
                                _this.shareFlag = false;
                            }
                        });
                        wx.onMenuShareAppMessage({
                            //分享给朋友
                            title: shareConfig.title, // 分享标题
                            desc: shareConfig.desc, // 分享描述
                            link: shareConfig.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: shareConfig.imgUrl, // 分享图标如果type是music或video，则要提供数据链接，默认为空
                            success: function() {
                                _this.shareFlag = false;
                            },
                            cancel: function() {
                                _this.shareFlag = false;
                            }
                        });
                    });
                }
            },
            watch: {
                moneryVal: function(vals,oldVals) {
                    var that = this;
                    var reg1 = /^([1-9]\d*|0)([.]{1}[0-9]{1,2})?$/ ///^[0-9]+([.]{1}[0-9]{1,2})?$/ 【正整数或一位小数或者俩位小数的正则表达式的写法】///^d*(?:.d{0,2})?$/ ;
                    var reg = /([0-9]+\.[0-9]{2})[0-9]*/;
                    var nReg = /^[1-9]\d*$|^0$/;
                    if(vals.length>16){
                        that.payFlag = false;
                        that.payMaxMsg = true;
                        that.erType = 1;
                        return false
                    }
                    if(that.moneryVal=="."){
                        that.moneryVal = '';
                        return false;
                    }
                    //小数点后面位数
                    if(that.moneryVal.toString().indexOf('.')>=1&&that.moneryVal.toString().split(".")[1].length<=0){
                        that.payFlag = false;
                        that.payMaxMsg = true;
                        that.erType = 0;
                        return false
                    }
                    if (vals) {
                        that.moneryVal = that.moneryVal.toString();
                        that.moneryVal = that.moneryVal.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
                        that.moneryVal = that.moneryVal.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
                        that.moneryVal = that.moneryVal.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
                        that.moneryVal = that.moneryVal.replace(/^(\-)*(\d+)\.(\d\d).*$/g,'$1$2.$3'); //只能输入两个小数

                        if(that.moneryVal.indexOf(".")< 0 && that.moneryVal !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                            that.moneryVal = parseFloat(that.moneryVal);
                        }
                        if (parseFloat(that.moneryVal) > parseFloat(that.maxMonery)) {
                            that.payFlag = false;
                            that.payMaxMsg = true;
                            that.erType = 1;
                            return false;
                        }else{
                            that.payFlag = true;
                            that.payMaxMsg = false;
                        }
                    }else {
                        that.payFlag = false;
                        that.payMaxMsg = false;
                    }
                }
            }
        });
    }
}else{
    var wxStr ='<section class="prohibit-no-wx">'+
    '<img class="wx-logo" src="pay/pay-close-icon.png" /><br /><br />'+
    '请在微信客户端打开'+
    '</section>';
    document.getElementById('payApp').style.display = 'block';
    document.getElementById('payApp').innerHTML = wxStr;
}
