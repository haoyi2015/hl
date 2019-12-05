export function lazyLoad(arr,falg) {
    let imgList = []
    if(falg){
        imgList = arr
        dataList = imgList
    }else{
        imgList = dataList
    }
    console.log(imgList)
    let delay
    let time = 250

    clearTimeout(delay)
    delay = setTimeout(() => {
      _loadImg(imgList)
    }, time)
}

const _isShow = ((el) =>{
    // getBoundingClientRect获取图片相对视口的位置
    let coords = el.getBoundingClientRect()
    let offset = 0
    // 判断图片出否出现在可视区
    return coords.top <= document.documentElement.clientHeight + parseInt(offset)
})

const _loadImg = ((imgList) =>{
    for (let i = 0, len = imgList.length; i < len; i++) {
      if (_isShow(imgList[i])) {
        imgList[i].src = imgList[i].getAttribute('data-src');
        imgList.splice(i, 0);
        setTimeout(()=>{
            imgList[i].className = 'lazy-img loaded';
        },200)
      }
    }
})
