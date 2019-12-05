## switch

```
  <div slot="title" class="left-s">开关（{{checked}}）</div>
  <mk-switch slot="value" v-model="checked"/>

  <div slot="title" class="left-s">开关（{{value}}）</div>
  <mk-switch slot="value" name="" v-model="value" on-value="1" off-value="0" />

  <div slot="title" class="left-s">开关（{{checked}}）</div>
  <mk-switch @switchCall="swFun" small slot="value" v-model="checked"/>

```

| 参数 | 描述 | 值
| ----- | ----- | ----- 
| on/off-value | 与value或者选中值同步
| small | 设置大小（默认default）或者自己在使用地方设置大小
| switchCall | 设置回调监听（根据需要而定是否需要）