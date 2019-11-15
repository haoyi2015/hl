## popup弹窗
popup弹窗用于替换原生popup美化

## Usage
```
<template>
  <div>
     <a @click="popupOpen" href="javascript:;" class="weui-btn weui-btn_primary">popup弹窗</a>
    <popup :open.sync="openFullTitle" :full="true" title="title" direction="right">
      <div style="padding:0 0.2rem">
      新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。
      学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。
      </div>
    </popup>
  </div>
</template>
<script>
#1 引用组件形式
import popup from '../components/popup'
export default {
  ...
  components: { popup },
  ...
};
</script>
```

## Options
配置项 | 值类型 | 描述
--- | --- | ---
direction | string | top right bottom left