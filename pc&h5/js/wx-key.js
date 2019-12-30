/** 
 * 微信模版信息key提取
 */

let text = "内容{{first.DATA}}办理单位：{{keyword1.DATA}}办理时间：{{keyword2.DATA}}办理情况：{{keyword3.DATA}}{{remark.DATA}}"

let regex = /\{\{(.+?)\./g;
let result;
while ((result = regex.exec(text)) != null) {
    console.log(result[1]);
    console.log("{{}}--之内内容提取")
}


let text1 = '亲爱的#customer#，您已成功购买了#brand#的商品，订单编号为#order#，请凭订单编号或⼿机号⾄商家处消费！#url# 请保留此短信，及时查看消费情况哦！'
let regex1 = /\#(.+?)\#/g;
let result1;
while ((result1 = regex1.exec(text1)) != null) {
    console.log(result1[1]);
    console.log("#--之内内容提取")
}