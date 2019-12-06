function Broadcast(el, imagesAndUrl, ops, imgIndex) {
  if (el == null || imagesAndUrl == null) {
    console.log("请传入节点或者图片数据及链接！");
    return;
  }
  this.el = el;
  this.imagesAndUrl = imagesAndUrl.imagList;
  this.imagesAndUrlLen = this.imagesAndUrl.length;
  this.timer = ops.transitionTime || 100;
  this.intervalTime = ops.intervalTime || 5000;
  this.circulatoryRotation = ops.circulatoryRotation || false;
  this.tranAutoPlay = ops.tranAutoPlay || false;
  this.tranSpot = ops.tranSpot || false;

  // 定义一些全局变量
  this.index = ops.tranIndex || 0;
  this.animationMark = false;
  this.init();
}

// init => 添加dom节点,初始化界面
Broadcast.prototype.init = function () {
  // 动态添加一些css样式
  let cssStr = `.broadcastMe .broadcastMe-list {width: ${(this.imagesAndUrl.length + 2) * this.el.clientWidth}px;}.broadcastMe .broadcastMe-list .broadcastMe-item {width:${this.el.clientWidth}px;}`
  let styleNode = document.createElement('style');
  styleNode.innerText = cssStr;
  document.head.appendChild(styleNode)
  let clientWidth = document.documentElement.clientWidth,
    clientHeight = document.documentElement.clientHeight,
    mrW = this.circulatoryRotation || this.tranAutoPlay ? '-' + this.el.clientWidth : 0;
  if (this.index > 0) {
    mrW = '-' + (this.index * this.el.clientWidth)
  }

  var html = `<div class="broadcastMe" style="width:${clientWidth}px;height:${clientHeight}px;">
                <div class="broadcastMe-list" style="left:${mrW}px">`;
  let temStr = ''
  //无缝轮播，收尾多加一张
  if (this.circulatoryRotation || this.tranAutoPlay) {
    temStr = `<div class="broadcastMe-item">
          <a href="${this.imagesAndUrl[this.imagesAndUrl.length - 1].linkHref == null ? "#" : this.imagesAndUrl[this.imagesAndUrl.length - 1].linkHref}">
            <img src="${this.imagesAndUrl[this.imagesAndUrl.length - 1].imgSrc}" alt="${this.imagesAndUrl[this.imagesAndUrl.length - 1].imgAlt}">
          </a>
        </div>`
  }
  this.imagesAndUrl.map(item => {
    temStr += `<div class="broadcastMe-item">
                  <a href="${item.linkHref == null ? "#" : item.linkHref}">
                    <img src="${item.imgSrc}" alt="${item.imgAlt}">
                  </a>
              </div>`
  })
  if (this.circulatoryRotation || this.tranAutoPlay) {
    temStr += `<div class="broadcastMe-item">
              <a href="${this.imagesAndUrl[0].linkHref == null ? "#" : this.imagesAndUrl[0].linkHref}">
                <img src="${this.imagesAndUrl[0].imgSrc}" alt="${this.imagesAndUrl[0].imgAlt}">
                </a>
            </div>`
  }
  html += temStr + "</div>"
  this.el.innerHTML += html + "</div>";
  // 调用绑定事件
  this.bindEvent();
}

// bindEvent => 绑定节点事件/自动轮播开启事件
Broadcast.prototype.bindEvent = function () {
  // 获取要用到的节点信息
  this.broadcastMe = this.el.getElementsByClassName('broadcastMe')[0];
  this.broadcastMeList = this.el.getElementsByClassName('broadcastMe-list')[0];

  // 开启自动轮播
  var timer = null
  if (this.tranAutoPlay) {
    timer = setInterval(autoPlay.bind(this), this.intervalTime);
  }
  this.el.addEventListener("mouseover", () => {
    clearInterval(timer);
  })

  //开启自动轮播
  if (this.tranAutoPlay) {
    this.el.addEventListener("mouseout", () => {
      timer = setInterval(autoPlay.bind(this), this.intervalTime);
    })
  }

  // 移动端手指滑动
  let stratPointX = 0;
  let offsetX = 0;
  this.el.addEventListener("touchstart", (e) => {
    // 清楚定时器，因为移动端不能监听到Mouseover时间
    clearInterval(timer);
    stratPointX = e.changedTouches[0].pageX;
    offsetX = this.broadcastMeList.offsetLeft;
    this.animationMark = true;
  })
  this.el.addEventListener("touchmove", (e) => {
    //当屏幕有多个touch或者页面被缩放过，就不执行touchmove操作
    if (e.targetTouches.length > 1 || e.scale && e.scale !== 1) return;
    let disX = e.changedTouches[0].pageX - stratPointX,
      left = offsetX + disX;

    this.broadcastMeList.style.transitionProperty = 'none';
    this.broadcastMeList.style.left = left + 'px';
  })
  this.el.addEventListener("touchend", () => {
    let left = this.broadcastMeList.offsetLeft;
    // 判断正在滚动的图片距离左右图片的远近，
    this.index = Math.round(-left / this.el.clientWidth);
    this.animationMark = false;
    // 开启定时器
    if (this.tranAutoPlay) {
      timer = setInterval(autoPlay.bind(this), this.intervalTime);
    }
    this.render();
  })

  // 封装自动轮播
  function autoPlay() {
    if (this.animationMark) return;
    this.index++;
    this.render();
  }
}

// render => 根据index的值，渲染当前要显示的界面
Broadcast.prototype.render = function (i) {
  let lens = this.imagesAndUrlLen;
  if (this.animationMark) return;
  this.animationMark = true;
  // 修改broadcastMeList 的left值
  this.broadcastMeList.style.left = (-1) * this.el.clientWidth * this.index + 'px';
  this.broadcastMeList.style.transition = 'left ' + this.timer / 1000 + 's';

  setTimeout(() => {
    // 添加判断，防止出界
    if (this.index <= 0) {
      if (this.circulatoryRotation || this.tranAutoPlay) {
        //循环轮播
        //this.broadcastMeList.style.transitionProperty = 'none';
        this.index = lens;
        //this.broadcastMeList.style.left = (-1) * this.el.clientWidth * this.index + 'px';
        assignVal(true,this.index);
      } else {
        this.broadcastMeList.style.left = 0;
      }
    } else if (this.index > lens) {
      if (this.circulatoryRotation || this.tranAutoPlay) {
        //this.broadcastMeList.style.transitionProperty = 'none';
        this.index = 1;
        //this.broadcastMeList.style.left = (-1) * this.el.clientWidth * this.index + 'px';
        assignVal(true,this.index);
      } else {
        //this.broadcastMeList.style.left = (-1) * this.el.clientWidth * (this.index - 1) + 'px'
        assignVal(false,(this.index - 1));
      }
    } else if ((this.index >= lens) && !this.circulatoryRotation && !this.tranAutoPlay) {
      //this.broadcastMeList.style.left = (-1) * this.el.clientWidth * (this.index - 1) + 'px'
      assignVal(false,(this.index - 1));
    }
    this.animationMark = false;
  }, this.timer)

  const assignVal = ((fs, val)=>{
    this.broadcastMeList.style.transitionProperty = 'none';
    this.broadcastMeList.style.left = (-1) * this.el.clientWidth * val + 'px';
  })
}
// 如果是在vue的环境下使用，取消下面的注释
module.exports = Broadcast;