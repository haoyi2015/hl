/*
 * 环境配置
 * localhost／development／pre／production
 */
 //判断http还是https
 const hrefs = window.location.href;
 let htp = hrefs.search("https") != -1?'https://':'http://';
 const config = {
     // 本地环境
     localhost: {
         api: htp+'yii.peilian.com',
         vipplUrl:htp+'vippl-dev.peilian.com',
         loginUrl:htp+'yii.peilian.com/site/login?returnUrl=',
         link: {
             index: 'http://localhost:8080'
         }
     },
     // DEV环境
     development: {
         api: htp+'yii.peilian.com',
         vipplUrl:htp+'vippl-dev.peilian.com',
         loginUrl:htp+'yii.peilian.com/site/login?returnUrl=',
         link: {
             index: htp+'yii.peilian.com'
         }
     },
     // PRE环境
     pre: {
         api: htp+'yii-pre.peilian.com',
         vipplUrl:htp+'vippl-pre.peilian.com',
         loginUrl:htp+'wx.peilian.com/site/login?returnUrl=',
         link: {
             index: htp+'vippl-pre.peilian.com'
         }
     },
     // PRD环境
     production: {
         api: htp+'wx.peilian.com',
         vipplUrl:htp+'vippl.peilian.com',
         loginUrl:htp+'wx.peilian.com/site/login?returnUrl=',
         link: {
             index: htp+'vippl.peilian.com'
         }
     }
 };
 
 //检测环境
 const host = window.location.host;
 if (host.indexOf('vippl-dev.peilian.com') > -1||host.indexOf('vippl.dev.peilian.com') > -1) {
     global.util_config = config.development;
     global.util_config.environment = 'dev';
 } else if (host.indexOf('vippl-pre.peilian.com') > -1) {
     global.util_config = config.pre;
     global.util_config.environment = 'pre';
 } else if (host.indexOf('vippl.peilian.com') > -1) {
     global.util_config = config.production;
     global.util_config.environment = 'formal';
 } else {
     global.util_config = config.localhost;
     global.util_config.environment = 'local';
 }
 
 export default global.util_config
 