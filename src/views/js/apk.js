function isWeiXin(){ 
        var ua = window.navigator.userAgent.toLowerCase(); 
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
        return true; 
        }else{ 
        return false; 
        } 
        } 
        var askBrowserAlert = '请在手机上使用浏览器打开本页面，或者扫描下面的二维码，即可安装';
        $(document).ready(function() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            var dowVals ='',iOStips='';
            if (isWeiXin()) {
                //Safari
                if(isAndroid){
                    $('.view-alert span').html('浏览器')
                }
                if(isiOS){
                    $('.view-alert span').html('Safari')
                }
                setTimeout(function() {
                    $('.view-alert').slideDown(1000);
                }, 500);
            }
            $('#down_load').click(function(){
                install_loading();
            })
            function install_loading(){
                if (isWeiXin()) {
                    if(isAndroid){
                        alert('点击右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可安装')
                    }
                    if(isiOS){
                        alert('点击右上角按钮，然后在弹出的菜单中，点击在Safari中打开，即可安装')
                    }
                }else{
                    if(isiOS){
                        alert(iOStips);
                        return false
                    }
                    window.location.href=dowVals
                }
            }
            var appDow ={
                trDomFun:function(datas){
                    //图片
                    var trDom ='';
                            for(var i=0; i<datas.length; i++){
                                trDom +='<td class="text-center" width="20%" style="border:none;">'+
                                    '<div style="width:230px;">'+
                                    '<img src="assets/detail_images/'+datas[i]+'" style="width:230px;" />'+
                                    '</div>'+
                                '</td>'
                            }
                        return trDom;
                },
                breaDcrumb:function(bdata){
                    var bstr ='';
                    bstr+='<li>版本：'+bdata.appEdition+'</li>'+
                        '<li>大小：'+bdata.appSize+'</li>'+
                        '<li>更新时间：'+bdata.appTimes+'</li>'
                    return bstr;
                }
            }
            $.ajax({
                type: "GET",
                url:'./assets/detail.json',
                data: {},
                dataType: "json",
                success: function(res){
                    var breadcrumb = {
                        appSize:res.size,
                        appEdition:res.version_name,
                        appTimes:res.update_time
                    }
                    $('#trDoms tr').html(appDow.trDomFun(res.detail_images));
                    $('#appIntroduce').html(res.detail);
                    $('#breadcrumb').html(appDow.breaDcrumb(breadcrumb));
                    $('#hName').html(res.name);
                    $('#appIcon').attr('src',res.icon);
                    $('#appQrcode').attr('src',res.qrcode);
                        dowVals=res.android_apk_download;
                        iOStips =res.iOS_tips;
                }
            });
        });