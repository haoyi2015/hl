<template>
  <section>
    <div class="container">
      <input type="text" v-model="message">
      <!-- <button type="button"
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">
        Copy!
      </button> -->
      <!-- <a href="javascript:;" @click="add($event)">onCopy</a> -->
      <br/>
      <br/>
      <button @click="add($event)">onCopy</button>
      <br/>
      <br/>
      <!-- <button
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">测试点击</button> -->
        <br/>
        <br/>
      <div ref="com">html</div>
      <div
        v-drag="TestCopy"
        style="width:160px;border:1px solid red;padding:30px" data-content="">
        我可以拖拽
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
var VueClipboardConfig = {
  autoSetContainer: false
};
Vue.directive('drag', {
  bind:function(el, binding, vnode){  //inserted 钩子函数:当元素被插入父元素时触发,可省略
    let oDiv = el;  //el --> 触发的DOM元素
      oDiv.onmousedown = function(elements){
        const attributesDom = elements.target.attributes['data-content'];
          let content = attributesDom&&attributesDom.nodeValue ? attributesDom.nodeValue : elements.target.innerText
          let target = null;
          let curNode = elements
              target = document.createElement('div');
              target.id = 'tempTarget';
              target.style.opacity = '0';
              target.innerText = content;
              document.body.appendChild(target);
          try {
            let range = document.createRange();
              range.selectNode(target);
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
              document.execCommand('copy');
              window.getSelection().removeAllRanges();
              console.log('复制成功');
          } catch (elements) {
              console.log('复制失败');
          }
      }
  }
})

Vue.directive('clipboard', {
  bind: function (el, binding, vnode) {
    console.log(binding.arg+'-----clipboard')
    if(binding.arg === 'success') {
      //el._v_clipboard_success = binding.value
      console.log('success')
    } else if(binding.arg === 'error') {
      console.log('error')
      //el._v_clipboard_error = binding.value
    } else {
      //copy(el,'innerText','new.Date()')
      var clipboard = new Clipboard(el, {
        text: function () { return binding.value },
        action: function () { return binding.arg === 'cut' ? 'cut' : 'copy' },
        container: VueClipboardConfig.autoSetContainer ? el : undefined
      })
      clipboard.on('success', function (e) {
        var callback = el._v_clipboard_success
        callback && callback(e)
      })
      clipboard.on('error', function (e) {
        var callback = el._v_clipboard_error
        callback && callback(e)
      })
      el._v_clipboard = clipboard
    }
  },
  update: function (el, binding) {
    if(binding.arg === 'success') {
      el._v_clipboard_success = binding.value
    } else if(binding.arg === 'error') {
      el._v_clipboard_error = binding.value
    } else {
      el._v_clipboard.text = function () { return binding.value }
      el._v_clipboard.action = function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
    }
  },
  unbind: function (el, binding) {
    console.log(el)
    if(binding.arg === 'success') {
      delete el._v_clipboard_success
    } else if(binding.arg === 'error') {
      delete el._v_clipboard_error
    } else {
      el._v_clipboard.destroy()
      delete el._v_clipboard
    }
  }
})
// import VueClipboard from './vue-clipboard.js'
// Vue.use(VueClipboard)

/**
 * 一键复制
 * @param  {String} id [需要复制的内容]
 * @param  {String} attr [需要 copy 的属性，默认是 innerText，主要用途例如赋值 a 标签上的 href 链接]
 *
 * range + selection
 *
 * 1.创建一个 range
 * 2.把内容放入 range
 * 3.把 range 放入 selection
 *
 * 注意：参数 attr 不能是自定义属性
 * 注意：对于 user-select: none 的元素无效
 */
function copy (elements, attr, content) {
    let target = null;

    if (attr) {
        let curNode = elements//document.querySelector('#' + id);
        target = document.createElement('div');
        target.id = 'tempTarget';
        target.style.opacity = '0';
        console.log("curNode")
        console.log(curNode)
        target.innerText = content?content : curNode[attr];
        document.body.appendChild(target);
    } else {
        target = elements//document.querySelector('#' + id);
    }

    try {
        let range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('复制成功');
    } catch (e) {
        console.log('复制失败');
    }

    if (attr) {
        // remove temp target
        target.parentElement.removeChild(target);
    }
}

export default {
  data () {
    return {
      message: 'Copy These Text'
    }
  },
  mounted() {
    //copy()
  },
  methods: {
    clipboardFun() {
      console.log(111)
    },
    add(e) {
      //copy
      console.log(e)
      copy(e,'innerText','')
    },
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
    TestCopy: function (e) {
      console.log('TestCopy')
    }
  }
}
</script>
