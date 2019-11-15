<template>
  <section>
    <button class="copy-bnt" @click="clipboardFun" :data-content="copyCont">{{ copyBnt }}</button>
  </section>
</template>
<script>
export default {
  props: {
    copyCont: {
      type: '',
      required: false,
    },
    copyBnt: {
      type: '',
      required: false,
    },
    copyCall: Function
  },
  methods: {
    clipboardFun (el) {
        let elements = el;  //el --> 触发的DOM元素
        const attributesDom = elements.target.attributes['data-content'];
          let content = (attributesDom&&attributesDom.nodeValue) ? attributesDom.nodeValue : elements.target.innerText
          let target = null,copyTarget = document.getElementById('copyTarget');
          let curNode = elements
              target = document.createElement('div');
              target.id = 'copyTarget';
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
              this.$emit('copyCall','success');
              if(copyTarget!=null){
                copyTarget.parentNode.removeChild(copyTarget);
                //copyTarget.remove();
              }
          } catch (elements) {
              console.log('复制失败');
              this.$emit('copyCall','fail');
              if(copyTarget!=null){
                copyTarget.remove();
              }
          }
    }
  }
}
</script>
