/* rem reset */
;(function(doc, win) {
    let docEl = doc.documentElement;
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    let recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth > 640) {
            clientWidth = 480;
        }
        docEl.style.fontSize = (clientWidth / 320) * 20 + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
;(function($){
    function getUrlParameter(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    //var httpUrl ='http://pnlstudent.cc';
    var httpUrl = 'http://yii.pnlyy.com';
    $(function(){
        //加值
        const compile =function(code){
            var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
            for(var i=0;i<code.length;i++){
                c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
            }
            return c;
        }
        function encrypt(str, pwd) {
            if (pwd == null || pwd.length <= 0) {
                console.log("Please enter a password with which to encrypt the message.");
                return null;
            }
            var prand = "";
            for (var i = 0; i < pwd.length; i++) {
                prand += pwd.charCodeAt(i).toString();
            }
            var sPos = Math.floor(prand.length / 5);
            var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
            var incr = Math.ceil(pwd.length / 2);
            var modu = Math.pow(2, 31) - 1;
            if (mult < 2) {
                console.log("Algorithm cannot find a suitable hash. Please choose a different password. \nPossible considerations are to choose a more complex or longer password.");
                return null;
            }
            var salt = Math.round(Math.random() * 1000000000) % 100000000;
            prand += salt;
            while (prand.length > 10) {
                prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
            }
            prand = (mult * prand + incr) % modu;
            var enc_chr = "";
            var enc_str = "";
            for (var i = 0; i < str.length; i++) {
                enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
                if (enc_chr < 16) {
                    enc_str += "0" + enc_chr.toString(16);
                } else enc_str += enc_chr.toString(16);
                prand = (mult * prand + incr) % modu;
            }
            salt = salt.toString(16);
            while (salt.length < 8) salt = "0" + salt;
            enc_str += salt;
            return enc_str;
        }
        //解值
        const uncompile =function(code){
            code = unescape(code);
            var c = String.fromCharCode(code.charCodeAt(0) - code.length);
            for (var i = 1; i < code.length; i++) {
                c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
            }
            return c;
        }
        //限制只能手机访问
        var systemFun =function(){
            var system = {};  
            var p = navigator.platform;  
            var u = navigator.userAgent;  
              
            system.win = p.indexOf("Win") == 0;  
            system.mac = p.indexOf("Mac") == 0;
            system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
            console.log(system.win+'system.win');
            console.log(system.mac+'system.mac');
            console.log(system.x11+'system.x11'); 
            if (system.win || system.mac || system.xll) {//如果是PC转   
                if (u.indexOf('Windows Phone') > -1) {  //win手机端  
                }else {}
                console.log('PC端');
                return false;
            }else{
                console.log('手机端');
                return true
            }
        }
        if(systemFun()){
            //图表初始化
            var reports ={
                order:'',
                chart1: [],
                chart1_total: [[85],[83],[89],[71],[80],[88],[83],[86],[84],[95],[85],[90],[81],[84],[79]],
                chart2: [],
                chart2_fun: [444, 583, 817, 1132, 1300, 1562, 1700, 1900, 2093, 1900, 1800, 1600, 1500, 1250, 1000, 800, 600, 368, 344, 196, 157, 114, 101, 88, 57, 22, 10, 5, 2],
                chart2_total: [21, 2, 4, 6, 8, 10, 12, 14, 15, 18, 23, 28, 30, 32, 24, 35, 40, 45, 50, 70, 90, 100, 110, 120, 130, 140, 150, 200, 300],
                chart3: [],
                chart3_total: [33.6, 78.8, 0, 20, 100, 203.6, 98.8, 38.5],
                chart4: [],
                chart4_total: [800,300, 500, 200, 1000],
                // 数字转换数组    type为1 单个是数字 否则转换为数组   
                transformArr:function(num,arr,type){
                    num=Number(num);
                    const _this=this;
                    let resultArr = [];
                    if(type != 1){
                        resultArr.push([num]);
                        for (let i = 0; i < arr.length-1; i++) {
                            resultArr.push([0]);
                        }
                    }else{
                        resultArr.push(num);
                        for (let i = 0; i < arr.length-1; i++) {
                            resultArr.push(0);
                        }
                    }
                    return resultArr;
                },
                oneChart:function(){
                    var options = {
                        chart: {
                          type: "scatter",
                          zoomType: "xy"
                        },
                        title: {
                          text: ""
                        },
                        subtitle: {
                          text: ""
                        },
                        xAxis: {
                          title: {
                            enabled: false,
                            text: ""
                          },
                          startOnTick: true,
                          endOnTick: true,
                          showLastLabel: true,
                          gridLineWidth: 0,
                          labels: {
                            enabled: false
                          },
                          min: 0
                          //   max: 12
                        },
                        yAxis: {
                          title: {
                            text: ""
                          },
                          min: 55,
                          max: 100
                        },
                        legend: {
                          layout: "vertical",
                          align: "left",
                          verticalAlign: "top",
                          //x: 100,
                          //y: 55,
                          floating: false,
                          backgroundColor:
                            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
                            "#FFFFFF",
                          borderWidth: 1,
                          shadow: false,
                          enabled: false //控制x轴名字是否显示
                        },
                        plotOptions: {
                          series: {
                            states: {
                              hover: {
                                enabled: false
                              }
                            }
                          },
                          scatter: {
                            marker: {
                              radius: 10,
                              symbol: "circle"
                            },
                            tooltip: {
                              headerFormat: "<b>{series.name}</b><br>",
                              pointFormat: "{point.x} cm, {point.y} kg",
                              enabled: false //是否显示提示框
                            }
                          }
                        },
                        tooltip: {
                          enabled: false //是否显示提示框
                        },
                        colors: ["#6FD29D", "#FD5E02"],
                        series: [
                          {
                            name: "女",
                            //color: 'rgba(223, 83, 83, .5)',
                            data: reports.chart1_total
                          },
                          {
                            name: "男",
                            data: reports.arrsort_one(reports.chart1_total, reports.chart1)
                          }
                        ]
                      };
                      var chart = Highcharts.chart("container-one", options);
                },
                twoChart:function(){
                    var options = {
                        title: {
                          text: ""
                        },
                        xAxis: [
                          {
                            labels:{ 
                                //  step:4
                            },
                            categories: reports.chart2_total,
                            title: {
                              text: "上课次数",
                              align: "high",
                            }
                          },
                          {
                            title: { text: "" },
                            opposite: true,
                            lineWidth: 0, //设置坐标宽度
                            labels: {
                              enabled: false
                            }
                          }
                        ],
                        legend: {
                          enabled: false //控制x轴名字是否显示
                        },
                        tooltip: {
                          enabled: false //是否显示提示框
                        },
                        colors: ["#6FD29D", "#FD5E02"],
                        yAxis: [
                          {
                            title: { 
                            // text: "人数",
                            text: "",
                            align: "high",
                            },
                            // max: 3000,
                            min: 0
                          },
                          {
                            title: { text: "" },
                            opposite: true,
                            labels: {
                              enabled: false
                            }
                          }
                        ],
                        series: [
                          {
                            data: reports.chart2_fun,
                          },
                          {
                            name: "",
                            type: "line",
                            data: reports.arrReplace(reports.arrsort_two(reports.chart2_total, reports.chart2, 1).arr2),
                            // data: reports.arrsort_two(reports.chart2_total, reports.chart2, 1).arr2,
                            // data: [null,null,817,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
                            // data: [2, 2, 2, 2, 2, 2, 1.4, 2, 2, 2, 2, 2, 2, 2],
                            marker: {
                              radius: 6,
                              symbol: "circle"
                            }
                          }
                        ]
                      };
                      var chart = Highcharts.chart("container-two", options);
                },
                threeChart:function(){
                    var options = {
                        chart: {
                          type: "column"
                        },
                        title: {
                          text: ""
                        },
                        xAxis: {
                          categories: ["", "", ""],
                          labels: {
                            enabled: false
                          }
                        },
                        yAxis: [
                          {
                            min: 0,
                            title: {
                              text: ""
                            }
                          },
                          {
                            title: {
                              text: ""
                            },
                            opposite: false
                          }
                        ],
                        legend: {
                          shadow: false,
                          enabled: false //控制x轴名字是否显示
                        },
                        tooltip: {
                          shared: true,
                          enabled: false //是否显示提示框
                        },
                        plotOptions: {
                          column: {
                            grouping: false,
                            shadow: false,
                            borderWidth: 0
                          }
                        },
                        colors: ["#FD5E02", "#6FD29D"],
                        series: [
                          {
                            name: "",
                            //color: 'rgba(248,161,63,1)',
                            data: reports.arrsort(reports.chart3_total, reports.chart3, 2).arr2,
                            tooltip: {
                              valuePrefix: "$",
                              valueSuffix: " M"
                            },
                            pointPadding: 0.3,
                            pointPlacement: 0.2,
                            yAxis: 1
                          },
                          {
                            name: "",
                            color: "rgba(92,185,118,1)",
                            data: reports.chart3_total,
                            tooltip: {
                              valuePrefix: "$",
                              valueSuffix: " M"
                            },
                            pointPadding: 0.3,
                            pointPlacement: 0.2,
                            yAxis: 1
                          }
                        ]
                      };
                      //   console.log(reports.arrsort(reports.chart3_total,reports.chart3,2));
                      var chart = Highcharts.chart("container-three", options);
                },
                fourChart:function(){
                    var options = {
                        chart: {
                          type: "bar"
                        },
                        title: {
                          text: ""
                        },
                        xAxis: {
                          categories: ["1", "2", "3", "4", "5"]
                        },
                        yAxis: {
                          min: 0,
                          max: 1000,
                          title: {
                            text: "练习分钟",
                            align: "high"
                          }
                        },
                        legend: {
                          reversed: true,
                          enabled: false //控制x轴名字是否显示
                        },
                        tooltip: {
                          enabled: false //是否显示提示框
                        },
                        plotOptions: {
                          series: {
                            stacking: "normal"
                          }
                        },
                        colors: ["#FD5E02", "#6FD29D"],
                        series: [
                          {
                            name: "小张",
                            // 个人
                            // data: reports. chart4
                            data: reports.arrsort(reports.chart4_total, reports.chart4, 2).arr2
                          },
                          {
                            name: "小彭",
                            // 总体
                            data: reports.chart4_total
                          }
                        ]
                      };
                      var chart = Highcharts.chart("container-four", options);
                },
                // arr1 是多个点的   arr2 是一个点的   type =1 就是 null  否则替为 0
                arrsort:function(arr1,arr2,type) {
                    var totalArr = arr1.concat([]);
                    var user = 0;
                    var num = 0;

                    for (let i = 0; i < arr2.length; i++) {
                        if (type != 1) {
                          if (arr2[i] != 0) {
                            user = arr2[i];
                            arr2[i] = 0;
                          }
                        } else {
                          if (arr2[i] != null) {
                            user = arr2[i];
                            arr2[i] = null;
                          }
                        }
                      }

                      var order = 0;
                      totalArr.push(user);
                      var newArr = totalArr.sort(function(a, b) {
                        return a - b;
                      });

                      for (let i = 0; i < newArr.length; i++) {
                        if (newArr[i] == user) {
                          num++;
                          if (num > 1) {
                            order = i;
                          } else {
                            Math.abs(newArr[i] - newArr[i - 1]) >
                            Math.abs(newArr[i] - newArr[i + 1])
                              ? (order = i + 1)
                              : (order = i);
                          }
                        }
                      }

                      // arr1 是多个点的   arr2 是一个点的   type =1 就是 null  否则替为 0
                      if (type == 1) {
                        arr1.splice(order - 1, 1, null);
                      } else {
                        arr1.splice(order - 1, 1, 0);
                      }

                      arr2[order - 1] = user;
                      if (type != 1) {
                        for (let i = 0; i < arr2.length; i++) {
                          if (arr2[i] == 0) {
                            arr2[i] = 0;
                          }
                        }
                      }
                      let arrObj = { arr1, arr2 };
                      return arrObj;
                },
                arrsort_two(arr1, arr2, type) {
                      var totalArr = arr1.concat([]);
                      var user = 0;
                      var num = 0;
                      for (let i = 0; i < arr2.length; i++) {
                          if (arr2[i] != null) {
                            user = arr2[i];
                            arr2[i] = null;
                          }
                      }
                      
                      var order = 0;
                      totalArr.push(user);
                      var newArr = totalArr.sort(function(a, b) {
                        return a - b;
                      });
                    
                      for (let i = 0; i < newArr.length; i++) {
                        if (newArr[i] == user) {
                          num++;
                          if (num > 1) {
                            order = i;
                          } else {
                            Math.abs(newArr[i] - newArr[i - 1]) >
                            Math.abs(newArr[i] - newArr[i + 1])
                              ? (order = i + 1)
                              : (order = i);
                          }
                        }
                      }
                      // arr1 是多个点的   arr2 是一个点的   type =1 就是 null  否则替为 0
                      arr1.splice(order - 1, 1, user);
                      arr2[order - 1] = user;
                      let arrObj = { arr1, arr2 };
                      reports.order=order;
                      return arrObj;
                },
                arrsort_one(arr1, arr2) {
                      var totalArr_complex = arr1.concat([]);
                      var user = 0;
                      var num = 0;
                      for (let i = 0; i < arr2.length; i++) {
                        if (arr2[i][0] != 0) {
                          user = arr2[i][0];
                          arr2[i][0] = 0;
                        }
                      }
                      user = [user];
                      var order = 0;
                      totalArr_complex.push(user);
                      var totalArr = [];

                      for (let i = 0; i < totalArr_complex.length; i++) {
                        totalArr.push(totalArr_complex[i][0]);
                      }

                      var newArr = totalArr.sort(function(a, b) {
                        return a - b;
                      });
                      for (let i = 0; i < newArr.length; i++) {
                        if (newArr[i] == user[0]) {
                          num++;
                          if (num > 1) {
                            order = i;
                          } else {
                            Math.abs(newArr[i] - newArr[i - 1]) >
                            Math.abs(newArr[i] - newArr[i + 1])
                              ? (order = i + 1)
                              : (order = i);
                          }
                        }
                      }
                      arr1.splice(order, 1, [0]);
                      arr2[order] = user;
                      return arr2;
                },
                // 数字转换数组    type为1 单个是数字 否则转换为数组   
                transformArr(num,arr,type){
                    num=Number(num);
                    let resultArr = [];
                    if(type != 1){
                        resultArr.push([num]);
                        for (let i = 0; i < arr.length-1; i++) {
                            resultArr.push([0]);
                        }
                    }else{
                        resultArr.push(num);
                        for (let i = 0; i < arr.length-1; i++) {
                            resultArr.push(0);
                        }
                    }
                    return resultArr;
                },
                // 数字转换数组    type为1 单个是数字 否则转换为数组   
                transformArr_null(num,arr){
                    num=Number(num);
                    let resultArr = [];
                    resultArr.push(num);
                    for (let i = 0; i < arr.length-1; i++) {
                        resultArr.push(null);
                    }
                    return resultArr;
                },
                arrReplace(arr){
                    for (let i = 0; i < arr.length; i++) {
                        if(arr[i]!=null){
                            arr[i]=reports.chart2_fun[reports.order-1];
                        }
                    }
                    return arr;
                }
            }
            //显示分享层
            var gsFlag = true
            $('body').on('click','#getReport',function(){
                $("#shareClose").show();
                if(gsFlag){
                    gsFlag =false;
                    GetStat(1);
                }
            });
            //关闭分享层
            $('#shareClose').click(function(){
                $(this).hide();
            });
            //刷新
            $('#shareCloseNet').click(function(){
                window.location.href=window.location.href; 
            });
            
            let wxConfig = {};
            
            //初始化JS 数据绑定
            const REPORT_INIT =function(datas){
                var items = datas||'';

                $('.h-name').val(items.nick);
                $('.h-bfb').val(items.finish_class_minutes_score+'%');
                $('.h-gjc').val(items.title);
                //$('.h-cid').val(compile(""+items.id+""));
                $('.h-cid').val(encrypt(items.id,1));

                $('.reg_days').text(items.reg_days);

                $('.user-name').text(items.nick+' 2017 年度成绩单');
                $('.span-name').text(items.nick);
                $('.sp-comprehensive').text(items.class_evaluate);
                $('.sp-nubs').text(items.class_evaluate_score+'%');
                $('.sp-upload').text(items.upload_image);
                $('.sp-upload-b').text(items.upload_image_score+'%');

                $('.week-nums').text(items.last_3_week_fix_class_amount);
                $('.week-nums-b').text(items.last_3_week_fix_class_amount_score);
                $('.sp-practice').text(items.finish_class_minutes);
                $('.sp-practice-b').text(items.finish_class_minutes_score);

                $('.class-numbs').attr('data-nums',items.finish_class);

                $('.class-numbs-times').attr('data-nums',items.finish_class_minutes);
                $('.upload_image').attr('data-nums',items.upload_image);
                $('.up-ui-label').attr('data-nums',items.upload_image_score);
                $('.qnian-numbs').attr('data-nums',items.introduct_amount);
                $('.yyu-numbs').attr('data-nums',items.class_80_evaluate);
                $('.ui-label').attr('data-nums',items.class_80_evaluate_score);
                $('.first_formal_class_teacher').text(items.first_formal_class_teacher);
                $('.first_formal_class_time').text(items.first_formal_class_time);
                $('.first_formal_class_evaluate_time').text(items.first_formal_class_evaluate_time);
                $('.first_formal_class_evaluate_teacher').text(items.first_formal_class_evaluate_teacher);
                $('.first_formal_class_evaluate_score').text(items.first_formal_class_evaluate_score);
                $('.last_3_week_fix_class_teacher').text(items.last_3_week_fix_class_teacher);
                $('.last_3_week_fix_class_amount').text(items.last_3_week_fix_class_amount);
                $('.reg_time').text(items.reg_time);
                $('.first_class_time').text(items.first_class_time);
                $('.first_class_teacher').text(items.first_class_teacher);
                $('.first_formal_class_time').text(items.first_formal_class_time);
                //判断显示那个层

                //1-用户不是统计用户，2-用户未上购买课 3-已上购买课
                //items.first_class_time ='';

                /*本地赋值*/
                //items.status =2;
                //items.first_class_time ='1'

                //用户 status 为3
                if(items.status==3){
                    //用户没有体验课记录
                    if(!items.first_class_time){
                        $('.a2').show();
                        $('.cent-si,#first_class_time').hide();
                        $('#firstBox').addClass('two-bgs');
                        $('.slide-img12').addClass('tws');
                        $('.slide-img13').addClass('tws');
                    }
                    //用户有体验课记录
                    if(items.first_class_time){
                        $('.a2').show();
                        $('#firstBox').addClass('two-bg');
                    }
                    //体验课购买课都为空
                    if(!items.first_class_time&&!items.first_formal_class_time){
                        $('#firstBox').addClass('two-bgs');
                    }
                    $('#index-box').show();

                    //图表一
                    reports.chart1=reports.transformArr(items.class_evaluate,reports.chart1_total,2);

                    //图表二
                    reports.chart2=reports.transformArr_null(parseInt(items.upload_image),reports.chart2_total);
                    
                    //图表三
                    reports.chart3=reports.transformArr(items.last_3_week_fix_class_amount,reports.chart3_total,1);

                    //图表四
                    reports.chart4=reports.transformArr(items.finish_class_minutes,reports.chart4_total,1);
                }
                
                //用户 status 为2
                if(items.status==2){
                    if(!items.first_class_time){
                        $('.a1,.cent-si').show();//用户无体验课纪录 status 为2
                        $('#first_class_time').remove();
                        $('#firstBox').addClass('three-bgs');
                    }
                    if(items.first_class_time){
                        $('.a1,.cent-si').show();//用户无体验课纪录 status 为2
                        $('#firstBox').addClass('three-bg');
                    }
                    //体验课购买课都为空
                    if(!items.first_class_time&&!items.first_formal_class_time){
                        $('#firstBox').addClass('two-bgs');
                    }
                    $('#index-box').show();
                }
                if(!items.first_class_teacher){
                    $('#first_class_teacher').remove();
                }
                if(!items.first_formal_class_time){
                    $('#first_formal_class_time').remove();
                }
                
                //最近三个月
                if(items.last_3_week_fix_class_amount){
                    $('.cent-c').show();
                }else{
                    $('.cent-c').hide();
                    $('#ulBox').addClass('mt-two');
                }
                //在VIP陪练共完成 
                if(items.finish_class<=0){
                    $('.swiper-slide5').remove();
                }
                //共上传曲谱
                if(items.upload_image<=0){
                    $('.swiper-slide4').remove();
                }
                //在音乐方面展现天赋，共收到
                if(items.class_evaluate<=0){
                    $('.swiper-slide3').remove();
                }
                //全年共邀请
                if(items.introduct_amount<=0){
                    $('.swiper-slide2').remove();
                }

                reports.oneChart();
                reports.threeChart();
                reports.fourChart();
                reports.twoChart();
                //最后一屏位置计算
                var swiperScrollbar = new Swiper('.swiper-container-scrollbar', {
                    scrollbar: '.swiper-container-scrollbar .swiper-scrollbar',
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheelControl: true,
                    freeMode: true,
                    nested: true
                });
            }
            //初始化接口请求
            const GetData = function(){
                $.ajax({
                    type: "GET",
                    url:httpUrl+'/seventeen-end-activity/info',
                    //url: "http://yii.pnlyy.com/double-twelve-activity/info",
                    data: {
                        u:window.location.href
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.code == 200){
                            if(data.data.status==1){
                                //A类用户
                                var sid =''
                                if(getUrlParameter('share_id')!=null&&getUrlParameter('share_id')!=""){
                                    sid = getUrlParameter('share_id');
                                }
                                window.location.href='/yearEnd?share_id='+sid;
                                return false
                            }
                            //data.data.status =2
                            if(data.data.status==2){
                                REPORT_INIT(data.data);
                                $('.arrw-one').hide();
                                $('.arrw-two').show();
                                $('.swiper-slide2,.swiper-slide3,.swiper-slide4,.swiper-slide5,.swiper-slide6,.swiper-slide7').remove();
                            }
                            if(data.data.status==3){
                                REPORT_INIT(data.data);
                                $('.arrw-one').show();
                                var anmTwo = true;
                                var swiperV = new Swiper('.swiper-container-v', {
                                    direction: 'vertical',
                                    onSlideChangeEnd: function (swiper) {
                                        var len =$('.swiper-wrapper .swiper-len').length;
                                        var slides = $('.swiper-slide-active').data('slide');
                                        wx.hideOptionMenu();
                                        $('.arrw-one').show();
                                        if(slides==5){
                                            //在VIP陪练共完成 执行动画
                                            if(anmTwo){
                                                anmTwo =false;
                                                $('.class-numbs').animation(1);
                                                $('.class-numbs-times').animation(1);
                                            }
                                        }
                                        if(slides==4){
                                            $('.upload_image').animation(1);
                                            $('.up-ui-label').animation(2);
                                        }
                                        if(slides==3){
                                            $('.yyu-numbs').animation(1);
                                            $('.ui-label').animation(2);
                                        }
                                        if(slides==2){
                                            $('.qnian-numbs').animation(1);
                                        }
                                        console.log(slides+' slides')
                                        if(slides==7){
                                            wx.showOptionMenu();
                                            $('.arrw-two,.arrw-one').hide();
                                        }
                                        console.info("页面跳转到第:", swiper.activeIndex, " 页")
                                    },
                                    onTouchEnd:function(swiper){
                                        //console.log('onTouchEnd')
                                    }
                                });
                            }
                            wxConfig ={
                                appId: data.data.appId,
                                nonceStr: data.data.nonceStr,
                                signature: data.data.signature,
                                timestamp: data.data.timestamp
                            }
                            $('.mack-warp').hide();
                            //微信配置
                            wx.config({
                                debug: true, // 开启调试模式
                                appId: wxConfig.appId, // 必填，公众号的唯一标识
                                timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
                                nonceStr: wxConfig.nonceStr, // 必填，生成签名的随机串
                                signature: wxConfig.signature, // 必填，签名
                                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表
                            });
                            //关键词判断
                            var gjc = $('.h-gjc').val(),
                                vals ='';
                            switch(parseInt(gjc)){
                                case 3:
                                  vals='积极';
                                  break;
                                case 5:
                                  vals='努力';
                                  break;
                                case 2:
                                  vals='专注';
                                  break;
                                case 6:
                                  vals='刻苦';
                                  break;
                                case 4:
                                  vals='进取';
                                  break;
                                case 1:
                                  vals='好学';
                                  break;
                                case 7:
                                  vals='勤奋';
                                  break;
                                default:
                                  break;
                                }
                            wx.ready(function() {
                                wx.onMenuShareTimeline({
                                    //朋友圈
                                    title: $('.h-name').val()+"小朋友通过一年的努力，获得2017年度关键词:"+vals+"", // 分享标题
                                    link: 'http://vippl.dev.pnlyy.com/reportCard?share_id='+$('.h-cid').val(), // 分享链接
                                    desc: $('.h-name').val()+"小朋友通过一年的努力，获得2017年度关键词:"+vals+"",
                                    imgUrl:"http://vippl.dev.pnlyy.com/static/transcript/poster_wechat_small@2x.png", // 分享图标
                                    success: function() {
                                        GetStat(2);
                                    },
                                    cancel: function() {
                                    }
                                });
                                wx.onMenuShareAppMessage({
                                    //分享给朋友
                                    title: $('.h-name').val()+"打败全球"+$('.h-bfb').val()+"的小朋友", // 分享标题
                                    desc: "荣获2017年度关键词："+vals+"", // 分享描述
                                    link: 'http://vippl.dev.pnlyy.com/reportCard?share_id='+$('.h-cid').val(), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                                    imgUrl: "http://vippl.dev.pnlyy.com/static/transcript/poster_wechat_small@2x.png", // 分享图标如果type是music或video，则要提供数据链接，默认为空
                                    success: function() {
                                        GetStat(2);
                                    },
                                    cancel: function() {
                                    }
                                });
                                wx.hideOptionMenu(); //隐藏右上角菜单
                            });
                        }else if(data.code == 80400){
                            //未获取用户信息
                            let blackUrl =window.location.href;
                            //window.location.href ='http://yii.pnlyy.com/site/login?returnUrl='+blackUrl;
                        }else{
                        }
                    },
                    error:function(xhr,textStatus){
                        $('#shareCloseNet').show();
                        $('#shareClose,.mack-warp').hide();
                        console.log('错误')
                        console.log(xhr)
                        console.log(textStatus)
                    },
                    complete:function(){
                        console.log('结束')
                    }
                });
            }
            //统计分享数
            const GetStat=function(types){
                $.ajax({
                    type: "GET",
                    url:httpUrl+'/seventeen-end-activity/stat',
                    //url: "http://yii.pnlyy.com/double-twelve-activity/info",
                    data: {
                        type:types
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){

                    }
                });
            }
            GetData();
        }else{
            $('body').html('<div class="share-mack">'+
                    '<div class="d-m-img txt">'+
                        '抱歉--请在手机客户端打开链接'+
                    '</div>'+
                '</div>');
        }
        /*type 1 数字滚动   2 百分比滚动*/
    });
    $.fn.extend({
        animation:function(op){
            var  i = 0;
            if(op==2){
                i=5;
            }
            var meter = $(this),
            nums = meter.data('nums'),
            k,
            counter = function(ops) {
                if (i <= nums) {
                    if(op==2){
                        var str = ""+nums+"";
                        console.log(str.split('.')[1]);
                        //str.match(/.(\S*)/)[1]
                        //parseFloat(percent.toFixed(1))
                        //parseFloat(i+Math.random()).toFixed(1)
                        meter.find('i').html(i + '.'+str.split('.')[1]);
                        meter.css({
                            width:i+'%'
                        });
                        if(i>=90){
                            console.log(100)
                            meter.addClass('barus')
                        }
                    }
                    if(op==1){
                        meter.html(i.toString());
                        //判断位置大小
                        if(i<10){
                           meter.css({
                              width:'1.4rem'
                           })
                        }
                        if(i>10){
                           meter.css({
                              width:'2.4rem'
                           })
                        }
                        if(i>=88){
                            meter.addClass('barus')
                            meter.css({
                              //width:'3.2rem'
                           })
                        }
                        if(i>=100&&i<900){
                            meter.addClass('barus')
                            meter.css({
                              width:'3.4rem'
                           })
                        }
                        if(i>=1000){
                            meter.addClass('barus')
                            meter.css({
                              width:'5rem'
                           })
                        }
                    }
                    i++;
                } else {
                    window.clearInterval(k);
                }
            };

            function init(options) {
                options = options || {};
                var time = options.time ? options.time : 0,
                    interval = 10;

                k = window.setInterval(counter, interval);
                setTimeout(function() {
                    console.log('done');
                }, time);
            }
            var parms ={
                time:100000,
                nums:50,
                dom:''
            }
            init(parms);
        }
    })
})(jQuery);