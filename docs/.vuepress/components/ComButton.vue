<template>
  <div class="demo-button">
    <div>
      <dt-button>默认按钮</dt-button>
      <dt-button type="primary" size="small">主要按钮</dt-button>
      <dt-button type="success">成功按钮</dt-button>
      <dt-button type="info">信息按钮</dt-button>
      <dt-button type="warning">警告按钮</dt-button>
      <dt-button type="danger">危险按钮</dt-button>
    </div>
    <div>
      <dt-button plain>默认按钮</dt-button>
      <dt-button plain type="primary" size="small">主要按钮</dt-button>
      <dt-button plain type="success">成功按钮</dt-button>
      <dt-button plain type="info">信息按钮</dt-button>
      <dt-button plain type="warning">警告按钮</dt-button>
      <dt-button plain type="danger">危险按钮</dt-button>
    </div>
    <div>
      <dt-button round>默认按钮</dt-button>
      <dt-button round type="primary" size="small">主要按钮</dt-button>
      <dt-button round type="success">成功按钮</dt-button>
      <dt-button round type="info">信息按钮</dt-button>
      <dt-button round type="warning">警告按钮</dt-button>
      <dt-button round type="danger">危险按钮</dt-button>
    </div>
    <div>
      <dt-button disabled>默认按钮</dt-button>
      <dt-button disabled type="primary" size="small">主要按钮</dt-button>
      <dt-button disabled type="success">成功按钮</dt-button>
      <dt-button disabled type="info">信息按钮</dt-button>
      <dt-button disabled type="warning">警告按钮</dt-button>
      <dt-button disabled type="danger">危险按钮</dt-button>
    </div>
  </div>
</template>

<script>
import DtButton from './button/button'
export default {
  name: 'buttonWrap',
  components: {
    DtButton
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

