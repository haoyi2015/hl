/**
 * 移动计算x,y位置
 * @param ev 当前主体参数对象
 */
export function getEvtLocation (ev) {
    return {
        x: ev.touches[0].clientX,
        y: ev.touches[0].clientY
    }
}

/**
 * 旋转偏移量计算
 * @param x1,y1 得到缩放比例，getDistance是勾股定理的一个方法
 */
export function getDistance(x1,y1) {
    let x = y1.pageX - x1.pageX,
        y = y1.pageY - x1.pageY;
    return Math.sqrt((x * x) + (y * y));
}