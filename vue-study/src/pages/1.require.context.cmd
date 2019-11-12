# vue-使用技巧

## 1.require.context()

# 1.场景:如页面需要导入多个组件,原始写法:

```
    import titleCom from '@/components/home/titleCom'
    import bannerCom from '@/components/home/bannerCom'
    import cellCom from '@/components/home/cellCom'
    components:{titleCom,bannerCom,cellCom}
```

# 2.这样就写了大量重复的代码,利用 require.context 可以写成

```
    const path = require('path')
    const files = require.context('@/components/home', false, /\.vue$/)
    const modules = {}
    files.keys().forEach(key => {
    const name = path.basename(key, '.vue')
    modules[name] = files(key).default || files(key)
    })
    components:modules
```

# 3.API 方法

```
    实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用
    require.context(directory,useSubdirectories,regExp)
    接收三个参数:
    directory：说明需要检索的目录
    useSubdirectories：是否检索子目录
    regExp: 匹配文件的正则表达式,一般是文件名
```