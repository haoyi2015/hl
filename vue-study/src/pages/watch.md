# vue-使用技巧

## 2.watch

## (1.常用用法 -- 场景:表格初始进来需要调查询接口 getList(),然后input 改变会重新查询

```
created(){
  this.getList()
},
watch: {
  inpVal(){
    this.getList()
  }
}
```

## (2.立即执行   可以直接利用 watch 的immediate和handler属性简写

```
watch: {
  inpVal:{
    handler: 'getList',
      immediate: true
  }
}
```

## (3.深度监听 -- watch 的 deep 属性,深度监听,也就是监听复杂数据类型

```
watch:{
  inpValObj:{
    handler(newVal,oldVal){
      console.log(newVal)
      console.log(oldVal)
    },
    deep:true
  }
}
```