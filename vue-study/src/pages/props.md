# vue-使用技巧

## 3.组件通讯

## (1.props

```
这个应该非常属性,就是父传子的属性;
props 值可以是一个数组或对象;

// 数组:不建议使用
props:[]

// 对象
props:{
 inpVal:{
  type:Number, //传入值限定类型
  // type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol
  // type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
  required: true, //是否必传
  default:200,  //默认值,对象或数组默认值必须从一个工厂函数获取如 default:()=>[]
  validator:(value) {
    // 这个值必须匹配下列字符串中的一个
    return ['success', 'warning', 'danger'].indexOf(value) !== -1
  }
 }
}
```

## (2.$emit

```
这个也应该非常常见,触发子组件触发父组件给自己绑定的事件,其实就是子传父的方法
// 父组件
<home @title="title">
// 子组件
this.$emit('title',[{title:'这是title'}])
```

## (3.vuex

```
1.这个也是很常用的,vuex 是一个状态管理器
2.是一个独立的插件,适合数据共享多的项目里面,因为如果只是简单的通讯,使用起来会比较重
3.API
state:定义存贮数据的仓库 ,可通过this.$store.state 或mapState访问
getter:获取 store 值,可认为是 store 的计算属性,可通过this.$store.getter 或
       mapGetters访问
mutation:同步改变 store 值,为什么会设计成同步,因为mutation是直接改变 store 值,
         vue 对操作进行了记录,如果是异步无法追踪改变.可通过mapMutations调用
action:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
       访问
modules:模块,如果状态过多,可以拆分成模块,最后在入口通过...解构引入

```
## (3.$attrs和$listeners

```
2.4.0 新增
这两个是不常用属性,但是高级用法很常见;
1.$attrs
场景:如果父传子有很多值,那么在子组件需要定义多个 props
解决:$attrs获取子传父中未在 props 定义的值

// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},

相对应的如果子组件定义了 props,打印的值就是剔除定义的属性

props: {
  width: {
    type: String,
    default: ''
  }
},
mounted() {
  console.log(this.$attrs) //{title: "这是标题", height: "80", imgUrl: "imgUrl"}
},

2.$listeners
场景:子组件需要调用父组件的方法
解决:父组件的方法可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用

// 父组件
<home @change="change"/>

// 子组件
mounted() {
  console.log(this.$listeners) //即可拿到 change 事件
}

如果是孙组件要访问父组件的属性和调用方法,直接一级一级传下去就可以

3.inheritAttrs
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},

inheritAttrs默认值为true，true的意思是将父组件中除了props外的属性添加到子组件的根节点上(说明，即使设置为true，子组件仍然可以通过$attr获取到props意外的属性)
将inheritAttrs:false后,属性就不会显示在根节点上了

```
## (3.vuex

```
1.这个也是很常用的,vuex 是一个状态管理器
2.是一个独立的插件,适合数据共享多的项目里面,因为如果只是简单的通讯,使用起来会比较重
3.API
state:定义存贮数据的仓库 ,可通过this.$store.state 或mapState访问
getter:获取 store 值,可认为是 store 的计算属性,可通过this.$store.getter 或
       mapGetters访问
mutation:同步改变 store 值,为什么会设计成同步,因为mutation是直接改变 store 值,
         vue 对操作进行了记录,如果是异步无法追踪改变.可通过mapMutations调用
action:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
       访问
modules:模块,如果状态过多,可以拆分成模块,最后在入口通过...解构引入

```
## (3.vuex

```
1.这个也是很常用的,vuex 是一个状态管理器
2.是一个独立的插件,适合数据共享多的项目里面,因为如果只是简单的通讯,使用起来会比较重
3.API
state:定义存贮数据的仓库 ,可通过this.$store.state 或mapState访问
getter:获取 store 值,可认为是 store 的计算属性,可通过this.$store.getter 或
       mapGetters访问
mutation:同步改变 store 值,为什么会设计成同步,因为mutation是直接改变 store 值,
         vue 对操作进行了记录,如果是异步无法追踪改变.可通过mapMutations调用
action:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
       访问
modules:模块,如果状态过多,可以拆分成模块,最后在入口通过...解构引入

```