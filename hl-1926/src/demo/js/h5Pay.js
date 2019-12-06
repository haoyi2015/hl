;(function(win,docm){
        var mKMain = {
            configs:{
                netStr: '<div class="toast-wrap">'+
                    '<span class="toast-msg"></span>'+
                '</div>',
                netStrs: '<div id="nets" class="netw-mack">'+
                    '<div class="net-box">'+
                        '您网络不稳定，请稍后重试！！'+
                        '<button class="net-bnt"><a href="">刷新试试</a></button>'+
                    '</div>'+
                '</div>'
            },
            systemFun: function(){//限制只能手机访问
                var system = {};
                var p = navigator.platform;
                var u = navigator.userAgent;

                system.win = p.indexOf("Win") == 0;
                system.mac = p.indexOf("Mac") == 0;
                system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
                if (system.win || system.mac || system.xll) {//如果是PC
                    if (u.indexOf('wins Phone') > -1) {  //win手机端
                    }else {}
                    return true;
                }else{
                    return true
                }
            },
            getUrlParameter: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = win.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
            },
            isWx: function(){
                var ua = win.navigator.userAgent.toLowerCase();
                //通过正则表达式匹配ua中是否含有MicroMessenger字符串
                if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                    return true;
                }else{
                    return false;
                }
            },
            mKtoast: function(msg,duration){
                duration=isNaN(duration)?3000:duration;
                var m = docm.createElement('div'),
                    w = docm.body.clientWidth - 100;
                m.className = 'toast-wrap';
                m.innerHTML = '<span class="toast-msg" style="width:'+w+'px;margin-left:-'+w/2+'px">'+msg+'</div>';
                docm.body.appendChild(m);
                setTimeout(function() {
                    var d = 0.5;
                    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                    m.style.opacity = '0';
                    setTimeout(function() { docm.body.removeChild(m) }, d * 1000);
                }, duration);
            },
            mKerrTips: function(txt){
                if(txt){
                    var wxStr ='<section class="prohibit-no-wx">'+
                    '<img class="wx-logo" src="pay/pay-close-icon.png" /><br /><br />'+txt+
                    '</section>';
                    docm.getElementById('payApp').style.display = 'block';
                    docm.getElementById('payApp').innerHTML = wxStr;
                }else{
                    docm.getElementById('payLoader').style.display = 'none';
                    docm.getElementById('payWarp').style.display = 'block';
                }
            },
            unPmlie: function(uVal) {
                uVal=unescape(uVal);
                var csv=String.fromCharCode(uVal.charCodeAt(0)-uVal.length);
                for(var i=1;i<uVal.length;i++){
                    csv+=String.fromCharCode(uVal.charCodeAt(i)-csv.charCodeAt(i-1));
                }
                return csv;
            }
        }
        if(mKMain.systemFun()){
            var timeSet;
            win.onload = function(){
                var hrefs = win.location.href,
                    htps = hrefs.search("https") != -1?'https://':'http://',
                    payFs = true,
                    apiUrl = htps+'yii.peilian.com',
                    //apiUrl = htps+'student.vip.local',
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
                        shareFlag: true,
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
                        state: '',
                        orderEndFlage: true, //订单状态
                        getSceneFlag: false, //鱼眼镜头权限
                        invoiceFlag: false, //发票状态是否可开发票
                        invoiceState: '',//发票状态值
                        invoiceItems: '',//发票信息对象
                        bntTxt: '申请鱼眼镜头',
                        invTxt: '申请发票',
                        process_token_invoice:'',
                        process_token_camera:'',
                        cameraBntFlag: true,
                        payTypeFlag: 'zfb'
                    },
                    created: function() {
                        var _this = this
                        if(mKMain.isWx()){
                            mKMain.mKerrTips();
                            return false
                        }else{
                            _this.payMiyao = mKMain.getUrlParameter('token');
                            if(_this.payMiyao){
                                _this.orderPayDetail();
                            }else{
                                //win.location.replace('/errorpage');
                            }
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
                    returnFloat: function(value) {
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
                    userAgr: function() {
                        win.location.href ='/payment-agreement?token='+this.payMiyao+'';
                    },
                    agreeFun: function() {
                            //用户协议
                            this.agreeFlag = this.agreeFlag == true ? false : true;
                    },
                    focusFun: function() {
                            docm.getElementById('payFoot').style.position ='static';
                            docm.getElementById('payCant').style.paddingBottom =0;
                        },
                    blurfns: function() {
                            setTimeout(function(){
                                docm.getElementById('payFoot').style.position ='fixed';
                                docm.getElementById('payCant').style.paddingBottom ='128px';
                            },200)
                        },
                    payType: function(t){//支付方式
                            var _this = this;
                            _this.payTypeFlag = t
                    },
                    payStatus: function() {
                            //mKMain.mKtoast('请稍后，支付结果处理中，请勿重复操作',1500);
                            //成功回调
                            return false
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
                                        win.location.replace('/payment-success?token='+_this.payMiyao+'&payNo='+_this.payNo+'');
                                    }else if(res.data.data.pay_status==2){
                                        win.location.replace('/payment-fail?token='+that.payMiyao+'&payNo='+_this.payNo+'');
                                    }else if(res.data.data.pay_status==0){
                                        win.location.replace('/for-payment?token='+that.payMiyao+'&payNo='+_this.payNo+'');
                                    }
                                }
                            })
                            .catch(function(error) {
                                if(error.response.status ==500){
                                    mKMain.mKtoast('您网络不稳定，请稍后重试！！',1000);
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
                                mKMain.mKtoast('您的最低付款金额不能少于 0.01',1000);
                                return false;
                            }else if (!this.agreeFlag) {
                                mKMain.mKtoast('您还没同意用户协议',500);
                                return false
                            }
                            mKMain.mKtoast('支付中...',1000);

                            setTimeout(function(){
                                mKMain.mKtoast('支付成功',1000);
                            },2000)
                            return false
                            if (that.payPostFlag) {
                                var params = {
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
                                        //支付请求
                                        }else{
                                            mKMain.mKtoast('您订单状态已有变化，请重试！',500);
                                            setTimeout(function(){
                                                win.location.href = location.href+'&time='+((new Date()).getTime());
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
                            }
                        },
                    closeTips: function(event) {
                            //取消事件冒泡
                            this.shareFlag = false;
                        },
                    orderPayDetail: function() {
                            //订单详情
                            var _this = this,
                                params = {
                                    pay_method: 'alipay',
                                    token: _this.payMiyao || '',
                                    share_url: win.location.href
                                };
                            clearInterval(timeSet);
                            //del data
                            sessionStorage.removeItem('ms_paynumbs');
                            sessionStorage.removeItem('process_token');
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
                                    if(mKMain.getUrlParameter('orderNum') ===mKMain.unPmlie(mKMain.getUrlParameter('abs'))){
                                        console.log('相同值')
                                        _this.moneryVal = mKMain.getUrlParameter('orderNum')
                                    }else{
                                        _this.moneryVal = _this.detailData.remain_fee;
                                    }
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
                                    _this.detailData.pay_status = 0
                                    var titleTxt ='';
                                    if(_this.detailData.pay_status==0||_this.detailData.pay_status==4){
                                        titleTxt ='订单确认页';
                                        docm.getElementById('payCant').style.paddingBottom ='128px';
                                    }else if(_this.detailData.pay_status==1){
                                        titleTxt ='订单已完成'
                                        _this.getCamera();
                                        _this.invoiceFun();
                                    }else if(_this.detailData.pay_status==2||_this.detailData.pay_status==3||_this.detailData.pay_status==7){
                                        titleTxt ='订单已关闭'
                                    }else if(_this.detailData.pay_status==6){
                                        titleTxt ='订单已升级'
                                        _this.getCamera();
                                        _this.invoiceFun();
                                    }else if(_this.detailData.pay_status==8){
                                        _this.getCamera();
                                        _this.invoiceFun();
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
                                                docm.getElementById('payCant').style.paddingBottom ='0';
                                            }
                                            _this.timeDown();
                                        },1001);
                                    }
                                    var wechat_share = res.data.data.wechat_share;
                                    _this.warpFlag = true;
                                    //show dom
                                    setTimeout(function(){docm.getElementById('artBox').style.display = 'block';docm.getElementById('payLoader').style.display = 'none';},1001)
                                }else if (res.data.code == 433) {
                                    //未获取用户信息 （支付宝支付不存在未获取用户信息）
                                    var blackUrl = win.location.href;
                                    win.location.href = loginUrl + blackUrl;
                                }else {
                                    mKMain.mKtoast(res.data.msg, 10000)
                                    //win.location.replace('/errorpage');
                                }
                            })
                            .catch(function(error) {
                                console.log(error)
                                if(error.response.status>=400&& error.response.status <=600){
                                    docm.getElementById('payApp').style.display ='block';
                                    docm.getElementById('payApp').innerHTML = netStrs;
                                    docm.getElementById('nets').onclick = function(){
                                        win.location.href ='';
                                    }
                                }
                            });
                        },
                    receive: function(){//申请鱼眼镜头
                        const _cthis = this
                        _cthis.cameraBntFlag = false
                        _cthis.applyForCamera()//是否可以申请验证
                    },
                    applyForCamera(){//二次确认是否可申请
                        var _sthis = this,
                            params ={
                                token: _sthis.payMiyao || ''
                            };
                        $http.get(apiUrl+'/product-order/apply-for-camera', {
                            params: params,
                            withCredentials: true,
                            crossDomain: true
                        })
                        .then(function(res) {
                            if(res.data.code == 200){
                                sessionStorage.setItem('process_token',res.data.data.process_token);
                                if(res.data.data.state >=30){
                                    sessionStorage.setItem('my_token',_sthis.payMiyao);
                                    win.location.href ='/info-result?t=camera'
                                }else{
                                    sessionStorage.setItem('my_token',_sthis.payMiyao);
                                    win.location.href ='/info-address?t=camera'
                                }
                            }else{
                                _sthis.cameraBntFlag = true
                            }
                        })
                        .catch(function(error) {
                            console.log(error)
                            _sthis.cameraBntFlag = true
                        });
                    },
                    invoiceFun(){ //申请发票
                        var _sthis = this,
                            params ={
                                pay_method: 'alipay',
                                token: _sthis.payMiyao || ''
                            };
                        $http.get(apiUrl+'/product-order/get-invoice-of-product-order', {
                            params: params,
                            withCredentials: true,
                            crossDomain: true
                        })
                        .then(function(res) {
                            if(res.data.code == 200){
                                _sthis.invoiceFlag = true;
                                _sthis.invoiceState = res.data.data.state;
                                _sthis.invoiceItems = res.data.data;
                                if((_sthis.invoiceItems.invoice!=null&&_sthis.invoiceItems.invoice.status>-1)||
                                    (_sthis.invoiceItems.process_id&&_sthis.invoiceItems.state>=30)
                                ){
                                    _sthis.invTxt = '查看发票'
                                }
                                _sthis.process_token_invoice = res.data.data.process_token?res.data.data.process_token:"";
                            }
                        })
                        .catch(function(error) {});
                    },
                    goInvoiceFun(){//申请发票
                        var gThis = this;
                        sessionStorage.setItem('process_token',gThis.process_token_invoice);
                        //-1.是未开票, 1是开票中 2.开票成功, 3. 失败, 4红冲
                        //没有申请过发票，可以开发票
                        if(gThis.invoiceItems.invoice == null){
                            //直接到开发票页面
                            sessionStorage.setItem('my_token',this.payMiyao);
                            win.location.href ='/info-invoice?t=invoice'
                        }else if(gThis.invoiceItems.invoice != null){
                                //申请过发票是纸质发票
                                if(gThis.invoiceItems.process_id&&gThis.invoiceItems.state){
                                    if(gThis.invoiceItems.state<30){
                                    //是纸质发票物流单  未开发票
                                    sessionStorage.setItem('my_token',this.payMiyao);
                                    win.location.href ='/info-invoice?t=invoice'
                                }else{
                                    //已经开发票
                                    sessionStorage.setItem('my_token',this.payMiyao);
                                    win.location.href ='/info-result?t=invoice'
                                }
                            }else{
                                //是电子发票  未开发票
                                if(gThis.invoiceItems.invoice.status<0){
                                    sessionStorage.setItem('my_token',this.payMiyao);
                                    win.location.href ='/info-invoice?t=invoice'
                                }else{
                                    //已经开发票
                                    sessionStorage.setItem('my_token',this.payMiyao);
                                    //isElectronicInvoice 1 是电子票
                                    if(gThis.invoiceItems.invoice.is_electronic_invoice == 1){
                                        win.location.href ='/info-view?t=invoice'
                                    }else{
                                        win.location.href ='/info-result?t=invoice'
                                    }
                                }
                            }
                        }
                    },
                    getCamera: function(){
                        //获取鱼眼镜头权限(订单完成才回去请求)
                        var _sthis = this,
                            params ={
                                pay_method: 'alipay',
                                token: _sthis.payMiyao || ''
                            };
                        $http.get(apiUrl+'/product-order/get-shipping-process-with-camera', {
                            params: params,
                            withCredentials: true,
                            crossDomain: true
                        })
                        .then(function(res) {
                            if(res.data.code == 200){
                                _sthis.getSceneFlag = true;
                                _sthis.state = res.data.data.state;
                                if(_sthis.state >=30){
                                    _sthis.bntTxt = '查看鱼眼镜头申请进度'
                                }
                                _sthis.process_token_camera = res.data.data.process_token?res.data.data.process_token:'';
                            }
                        })
                        .catch(function(error) {});
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
            mKMain.mKerrTips('请在手机浏览器上打开该链接');
        }
    })(window, document)
