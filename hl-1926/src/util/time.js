//补位 当某个字段不是两位数时补0
const fnW = ((str) => {
    let num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
})
const fnDate = (() => {
        let date = new Date();
        let year = date.getFullYear(); //当前年份
        let month = date.getMonth(); //当前月份
        let data = date.getDate(); //天
        let hours = date.getHours(); //小时
        let minute = date.getMinutes(); //分
        let second = date.getSeconds(); //秒
        let time = year + "-" + fnW((month + 1)) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute) + ":" + fnW(second);
        return [year, fnW((month + 1)), fnW(data)]
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
let day = parseInt((time - lasttime) / (1000 * 60 * 60 * 24));
let dayTime = "认识" + day + "天"

/***
 * 距离未来多少天
 * 1、负值 代表过去了多少天
 * 2、正值 代表距离设定的时间还有多少天
 * 说明:距离设定的莫一天并不包括（设定的那一天），如果需要，计算的结果加1就可以了！
 */
const getBeforeDate = ((n) => {
    let now = new Date();
    let aftertime = new Date(n);
    let year = now.getFullYear();
    let mon = now.getMonth() + 1;
    let day = now.getDate();
    let year_after = aftertime.getFullYear();
    let mon_after = aftertime.getMonth() + 1;
    let day_after = aftertime.getDate();
    let chs = 0;
    //获取当月的天数
    function DayNumOfMonth(Year, Month) {
        return 32 - new Date(Year, Month - 1, 32).getDate();
    }
    if (aftertime.getTime() - now.getTime() < 0) {
        let temp1 = day_after;
        let temp2 = mon_after;
        let temp3 = year_after;
        day_after = day;
        mon_after = mon;
        year_after = year;
        day = temp1;
        mon = temp2;
        year = temp3;
    }
    if (year == year_after) { //不跨年
        if (mon == mon_after) { //不跨年不跨月
            chs += day_after - day;
        } else { //不跨年跨月
            chs += DayNumOfMonth(year, mon) - day + 1; //加上第一个不满的
            for (let i = 1; i < mon_after - mon; i++) {
                chs += DayNumOfMonth(year, mon + i);
            }
            chs += day_after - 1; //加上
        }
    } else { //存在跨年
        chs += DayNumOfMonth(year, mon) - day + 1; //加上开始年份不满的一个月
        for (let m = 1; m < 12 - mon; m++) {
            chs += DayNumOfMonth(year, mon + m);
        }
        for (let j = 1; j < year_after - year; j++) {
            if ((year + j) % 400 == 0 || (year + j) % 4 == 0 && (year + j) % 100 != 0) {
                chs += 366;
            } else {
                chs += 365;
            }
        }
        for (let n = 1; n <= mon_after; n++) {
            chs += DayNumOfMonth(year_after, n);
        }
        chs += day_after - 1;
    }
    if (aftertime.getTime() - now.getTime() < 0) {
        return -chs;
    } else {
        return chs;
    }
})
export {
    tiemDate,
    dayTime,
    getBeforeDate
}