const _this = this
//补位 当某个字段不是两位数时补0
const fnW = ((str)=>{
    let num;
    str>=10?num=str:num="0"+str;
    return num;
})
const fnDate = (()=>{
    let date = new Date();
    let year = date.getFullYear();//当前年份
    let month = date.getMonth();//当前月份
    let data = date.getDate();//天
    let hours = date.getHours();//小时
    let minute = date.getMinutes();//分
    let second = date.getSeconds();//秒
    let time = year+"-"+fnW((month+1))+"-"+fnW(data)+" "+fnW(hours)+":"+fnW(minute)+":"+fnW(second);
    return [year,fnW((month+1)),fnW(data)]
})
/*
 导出当前年
*/
let tiemDate = fnDate()

/*
 过去了多少天
*/

let time = Date.parse(new Date());
let lasttime = Date.parse("2019-02-06");
let day = parseInt((time-lasttime)/(1000*60*60*24));
let dayTime = "认识"+day+"天"
export {
    tiemDate,
    dayTime
}