<template>
    <section class="record-warp">
        <h2>轨迹圈</h2>
            <!-- <p>可自由增加时间点和说明内容</p> -->
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
            <!-- <li class='work'>
                <input class='radio' id='work4' name='works' type='radio'>
                <div class="relative">
                <label for='work4'>信念</label>
                <span class='date'>2016年9月8日</span>
                <span class='circle'></span>
                </div>
                <div class='content'>
                <p>第二步是信念。你要相信你已经拥有它了。要有一种毫不动摇的信念，就是我的说法，要相信还没有实现的事，“你的愿望就是我的命令”，宇宙就会开始运作安排，从而满足你心中的愿望。</p>
                <p>大多数的时候，假如我们要求的事物没有出现在生活中，我们会感到沮丧和失望，我们甚至会开始怀疑，这种怀疑会让人感到心灰意冷。接受这个感觉，然后用坚定的信念代替它：“我知道……我知道……我知道……，它就要实现了。”</p>
                </div>
            </li>
            <li class='work'>
                <input class='radio' id='work3' name='works' type='radio'>
                <div class="relative">
                <label for='work3'>要求</label>
                <span class='date'>2016年8月8日</span>
                <span class='circle'></span>
                </div>
                <div class='content'>
                <p>第一个阶段，是做出要求，对宇宙发出指令，让宇宙了解你想要些什么，宇宙就会自动回应你的想法。</p>
                <p>这是一个很有意思的过程，就好比把宇宙当成一本货物的目录，你翻着它，然后决定“我要经历这个，我要那种东西，我要跟那种人一起生活”，你就是那个跟宇宙下订单的人。其实就是这样简单。</p>
                </div>
            </li> -->
            </ul>
    </section>
</template>
<style lang="scss" scoped>
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
import home from '../../public/mock/home'
export default {
    data () {
        return {
            recordData: home.list
        }
    }
}
</script>