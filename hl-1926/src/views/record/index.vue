<template>
    <section class="record-warp11">
        <!-- <h2>轨迹圈</h2>
            <ul id='timeline' v-for="(item,index) in recordData">
                <li class='work' v-for="(items,nm) in item.itemList">
                    <input class='radio' :id="'work'+(nm)" name='works' type='radio' checked>
                    <div class="relative">
                    <label :for="'work'+(nm)">小轨迹</label>
                    <span class='date'>{{ items.date }}</span>
                    <span class='circle'></span>
                    </div>
                    <div class='content'>
                    <p>{{ items.eventTitle }}</p>
                    </div>
                </li>
            </ul> -->
        <div class="time-line-content">
            <div class="time-line-tags">
                <div class="time-tags-title">足迹</div>
                <div class="time-tags-content">
                    <ul class="time-tags-list">
                        <li class="time-item" v-for="(year,inx) in recordData[0].yearList">
                            <a class="time-link active">{{ year }} 年</a>
                        </li>
                        <!-- <li class="time-item"><a class="time-link"></a></li> -->
                    </ul>
                </div>
            </div>
            <div class="current-month-articles">
                <div class="articles-statistics">
                    我们的足迹<span class="article-total"></span>
                    <span>👣</span></div>
                <ul class="el-timeline">
                    <li class="el-timeline-item" v-for="(item,index) in recordData[0].itemList">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
                        </div>
                        <div class="el-timeline-item__wrapper">
                            <div class="el-timeline-item__timestamp is-top">
                                {{ item.date }}
                            </div>
                            <div class="el-timeline-item__content">
                                <div class="el-card is-always-shadow">
                                    <div class="el-card__body"><h4 class="article-title">{{ item.eventTitle }}</h4>
                                        <div class="blog-info"><span class="blog-info-item">
                                            😊 两个可爱</span></div>
                                        <p class="article-summary">{{ item.decCont }}</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </li>
                    <!-- <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
                
                        </div>
            
                        <div class="el-timeline-item__wrapper">
                            <div class="el-timeline-item__timestamp is-top">
                                2019-04-16
                            </div>
                            <div class="el-timeline-item__content">
                                <div class="el-card is-always-shadow">
                        
                                    <div class="el-card__body"><h4 class="article-title">谈谈遇到的面试题（1）</h4>
                                        <div class="blog-info"><span class="blog-info-item">😊 Others
                        </span></div>
                                        <p class="article-summary">在面试过程，还是发现自己对很多概念很模糊，下面就那些回答不好的问题做一个整理。
                                            谈谈前端缓存的理解？缓存的目的是为减少服务器的压力、同时提高页面加载的性能。常见的缓存有以下几种：</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </li>
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
                
                        </div>
            
                        <div class="el-timeline-item__wrapper">
                            <div class="el-timeline-item__timestamp is-top">
                                2019-04-07
                            </div>
                            <div class="el-timeline-item__content">
                                <div class="el-card is-always-shadow">
                        
                                    <div class="el-card__body"><h4 class="article-title">前端常见性能优化技巧</h4>
                                        <div class="blog-info"><span class="blog-info-item">😊 JavaScript
                        </span></div>
                                        <p class="article-summary">前端优化是一个非常大概念，很难用一两篇文章讲完，所以下面简单介绍其前端优化的常见方向。
                                            1. 文件体积 1.使用webpack插件对压缩html、j、c</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </li>
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
                
                        </div>
            
                        <div class="el-timeline-item__wrapper">
                            <div class="el-timeline-item__timestamp is-top">
                                2019-04-07
                            </div>
                            <div class="el-timeline-item__content">
                                <div class="el-card is-always-shadow">
                        
                                    <div class="el-card__body"><h4 class="article-title">从输入URL到页面加载发生了什么（简要说明）</h4>
                                        <div class="blog-info"><span class="blog-info-item">😊 Others
                        </span></div>
                                        <p class="article-summary">这是一道前端后端都会考的面试题。简单来说，可以分为以下几个过程：
                                            DNS解析缓存查找TCP三次握手连接发送HTTP请求服务器处理请求并返回HTTP报文</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </li>
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
                
                        </div>
            
                        <div class="el-timeline-item__wrapper">
                            <div class="el-timeline-item__timestamp is-top">
                                2019-04-07
                            </div>
                            <div class="el-timeline-item__content">
                                <div class="el-card is-always-shadow">
                        
                                    <div class="el-card__body"><h4 class="article-title">CSS垂直居中技巧,23种（收藏）</h4>
                                        <div class="blog-info"><span class="blog-info-item">😊 CSS
                        </span></div>
                                        <p class="article-summary">1.Line-height情景：单行文字垂直居中技巧
                                            这个方式应该是最多人知道的了，常见于单行文字的应用，像是按钮这一类对象，或者是下拉框、导航此类元素最常见到的方式了。此方式的原理是在于将单行文字的行高设定后，文字会位于行高的垂直中间位置，利用此原理就能轻松达成垂直居中的需求了。</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </li>
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
                
                        </div>
            
                        <div class="el-timeline-item__wrapper">
                            <div class="el-timeline-item__timestamp is-top">
                                2019-04-01
                            </div>
                            <div class="el-timeline-item__content">
                                <div class="el-card is-always-shadow">
                        
                                    <div class="el-card__body"><h4 class="article-title">部署此博客网站遇到的坑</h4>
                                        <div class="blog-info"><span class="blog-info-item">😊 Server
                        </span></div>
                                        <p class="article-summary">在搭建此博客网站过程中，遇到了很多坑，这里就主要的几个坑来聊聊
                                            部署环境centOS 7.2 + myql5.7 + tomcat8.5.39
                                            1.远程访问数据库被拒遇到这个问题，首先想到防火墙没开放端口，然后启动服务器的防火墙以及开放3306端口。但是此时端口依然被拒。</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </li>
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
                
                        </div>
            
                        <div class="el-timeline-item__wrapper">
                            <div class="el-timeline-item__timestamp is-top">
                                2019-04-01
                            </div>
                            <div class="el-timeline-item__content">
                                <div class="el-card is-always-shadow">
                        
                                    <div class="el-card__body"><h4 class="article-title">建站之由</h4>
                                        <div class="blog-info">
                                            <span class="blog-info-item">😊 Others</span></div>
                                        <p class="article-summary">本人是一名前端，目前在深圳搬砖，性格较为内向，很少社交，平时大部分时间被工作所占据，而周末是睡觉、看视频、玩玩游戏的重复，这种单调的节奏像温水煮青蛙一样慢慢消磨着我对于生活的激情。去年下半年...</p>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </li> -->
                </ul>
                <div class="read-more-wrapper">
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
ul,li{
    list-style: none;
}
.time-line-content{
    display: flex;
    // visibility: hidden;
    transform: translateY(50px);
    transition: .8s;
    -webkit-transition: .8s;
    margin: 0 2rem;
}
.time-line-tags{
    // flex: 1;
    width: 150px;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    margin-right: 10px;
}
.time-line-tags .time-tags-title{
    padding-left: 40px;
    color: #fff;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: .1em;
}
.time-line-tags .time-tags-content{
    margin-top: 40px;
}
.time-tags-content .time-tags-list .time-item {
    color: #fff;
    padding: 10px 0 10px 30px;
    letter-spacing: 1px;
    font-size: 16px;
}
.time-tags-list .time-item .time-link.active{
    color: #F44336;
}
.current-month-articles {
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
}
.current-month-articles .articles-statistics {
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
    padding-left: 30px;
}
.time-line-content .current-month-articles .articles-statistics .article-total {
    margin: 0 4px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
}
.el-timeline {
    margin: 0;
    font-size: 14px;
    list-style: none;
    max-height: 660px;
    overflow: auto;
}
.el-timeline-item {
    position: relative;
    padding-bottom: 20px;
}
.el-timeline-item__tail {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
}
.el-timeline-item__node--normal {
    left: -1px;
    width: 12px;
    height: 12px;
}
.el-timeline-item__node {
    position: absolute;
    background-color: #e4e7ed;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
.el-timeline-item__wrapper {
    position: relative;
    padding-left: 28px;
    margin-right: 20px;
    top: -3px;
}
.el-timeline-item__timestamp.is-top {
    margin-bottom: 8px;
    padding-top: 4px;
    color: #fff;
    font-size: 15px;
}
.el-timeline-item__timestamp {
    color: #909399;
    line-height: 1;
    font-size: 13px;
}
.el-timeline-item__content {
    color: #303133;
}
.el-card.is-always-shadow{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.el-card {
    border: 1px solid #ebeef5;
    // background-color: #fff;
    color: #303133;
    transition: .3s;
    background-image: url('/images/png.png');
    background-position: center;
}
.el-card {
    border-radius: 4px;
    overflow: hidden;
}
.el-card__body {
    padding: 20px;
}
.time-line-content .current-month-articles .article-title {
    color: #000;
    margin-bottom: 8px;
    letter-spacing: 1px;
    cursor: pointer;
}
.time-line-content .current-month-articles .blog-info {
    font-size: 12px;
    color: #777;
    margin-bottom: 10px;
}
.time-line-content .current-month-articles .blog-info .blog-info-item {
    margin-right: 20px;
}
.time-line-content .current-month-articles .article-summary {
    line-height: 1.6;
    margin-bottom: 10px;
}
.record-warp1 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  font-size: 100%;
  font-family: 'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
  color: #eee9dc;
  background: #48b379;
}
.record-warp{
    margin: 0 auto;
    padding: 0 5%;
    color: #fff;
}

h2 {
  margin: 3em 0 0 0;
  font-size: 1.5em;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* -------------------------------------
 * timeline
 * ------------------------------------- */
#timeline {
  list-style: none;
  margin: 50px 0 30px 120px;
  padding-left: 32px;
  border-left: 3px solid #eee9dc;
}
#timeline li {
  margin: 40px 0;
  position: relative;
}
#timeline p {
  margin: 0 0 15px;
}

.date {
  margin-top: -10px;
  top: 50%;
  left: -158px;
  font-size: 0.95em;
  line-height: 20px;
  position: absolute;
}

.circle {
  margin-top: -10px;
  top: 50%;
  left: -44px;
  width: 10px;
  height: 10px;
  background: #48b379;
  border: 5px solid #eee9dc;
  border-radius: 50%;
  display: block;
  position: absolute;
}

.content {
  max-height: 20px;
  padding: 50px 20px 0;
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5em;
  position: relative;
}
.content:before, .content:after {
  content: "";
  width: 0;
  height: 0;
  border: solid transparent;
  position: absolute;
  pointer-events: none;
  right: 100%;
}
.content:before {
  border-right-color: inherit;
  border-width: 20px;
  top: 50%;
  margin-top: -20px;
}
.content:after {
//   border-right-color: #48b379;
  border-width: 18px;
  top: 50%;
  margin-top: -18px;
}
.content p {
  max-height: 0;
  color: transparent;
  text-align: justify;
  text-indent: 2em;
  word-break: break-word;
  hyphens: auto;
  overflow: hidden;
}

label {
  font-size: 1.3em;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  top: 20px;
  transition: transform 0.2s linear;
}

.radio {
  display: none;
}

.radio:checked + .relative label {
  cursor: auto;
  transform: translateX(42px);
}
.radio:checked + .relative .circle {
  background: #f98262;
}
.radio:checked ~ .content {
  max-height: 180px;
  border-color: #eee9dc;
  margin-right: 20px;
  transform: translateX(20px);
  transition: max-height 0.4s linear, border-color 0.5s linear, transform 0.2s linear;
}
.radio:checked ~ .content p {
  max-height: 200px;
  color: #eee9dc;
  transition: color 0.3s linear 0.3s;
}

/* -------------------------------------
 * mobile phones (vertical version only)
 * ------------------------------------- */
@media screen and (max-width: 767px) {
  #timeline {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }
  #timeline li {
    margin: 50px 0;
  }

  label {
    width: 85%;
    font-size: 1.1em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    transform: translateX(18px);
  }

  .content {
    padding-top: 45px;
    border-color: #eee9dc;
  }
  .content:before, .content:after {
    border: solid transparent;
    bottom: 100%;
  }
  .content:before {
    border-bottom-color: inherit;
    border-width: 17px;
    top: -16px;
    left: 50px;
    margin-left: -17px;
  }
  .content:after {
    border-bottom-color: #48b379;
    border-width: 20px;
    top: -20px;
    left: 50px;
    margin-left: -20px;
  }
  .content p {
    font-size: 0.9em;
    line-height: 1.4;
  }

  .circle, .date {
    display: none;
  }
}
</style>
<script>
import home from '../../../public/mock/home'
export default {
    data () {
        return {
            recordData: home.list
        }
    }
}
</script>