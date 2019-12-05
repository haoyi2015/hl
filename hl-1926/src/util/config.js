// 公共方法
/**
 * @param AddDayCount 必传 今天前后N天的日期
 * @param dateStr： 非必传 获取传入日期前后N天的日期：'2018-01-20'
 * @param type 非必传 'lhRili'类型格式如'2018-7-3'
 * @return 返回日期'2018/01/20'
 */
export const getDateStr = (AddDayCount, dateStr, type) => {
    // console.log('getDateStr', AddDayCount, dateStr, type)
    var dd
    if (!dateStr) {
    dd = new Date()
    } else {
    // 判断是否为IOS
    const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    
    let formatDateStr = isIOS ? dateStr.replace(/-/g, '/') : dateStr
    dd = new Date((formatDateStr.length < 12) ? formatDateStr + ' 00:00:00' : formatDateStr)
    }
    dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
    
    let y = dd.getFullYear()
    let m
    let d
    if (type === 'lhRili') {
    m = dd.getMonth() + 1
    d = dd.getDate()
    } else {
    let currentMon = (dd.getMonth() + 1)
    let getDate = dd.getDate()
    m = currentMon < 10 ? '0' + currentMon : currentMon // 获取当前月份的日期，不足10补0
    d = getDate < 10 ? '0' + getDate : getDate // 获取当前几号，不足10补0
    }
    
    let time = y + '-' + m + '-' + d
    return time
   }