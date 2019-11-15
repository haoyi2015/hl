<template>
  <div class="demo-button">
    <div>
      <button>默认按钮</button>
      <button type="primary">主要按钮</button>
      <button type="success">成功按钮</button>
      <button type="info">信息按钮</button>
      <button type="warning">警告按钮</button>
      <button type="danger">危险按钮</button>
    </div>
  </div>
</template>

<script>
// import DtButton from '../src/button'
export default {
  name: 'buttonWrap',
  components: {
    // DtButton
  }
}
</script>

<style lang="less" scoped>
.demo-button{
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>