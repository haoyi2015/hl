## 安装方法

打开终端 ，输入：

```bash
git clone git 地址
```

切换到克隆下来的文件夹：

```bash
cd vue-admin
```

然后输入：

```bash
yarn 或者 npm install 建议使用yarn

特别说明请选择最新版本安装
```

开发环境

```bash
yarn serve 启动服务
```

发布环境

```bash
yarn build
```

## 项目说明（尽可能使用函数试编程）

```bash
1.找出字符串中率先出现的四个非数字字符？
非函数试

let words = [], count = 0;
let text = str.split('');
for (let i = 0; couont < 4, i < text.length; i++) {
  if(!text[i].match(/[0-9]/)) {
    words = words.concat(text[i]);
    count++;
  }
}
```
```bash
函数试

let words = str.split('').filter(function(x){
  return (!x.match(/[1-9]+/))}).slice(0,4);
```

```bash
2.分别实现数组所有元素相加、相乘、相与？

非函数试
function plus(array) {
  let res = array[0];
  for (let i = 1; i < array.length; i++) {
    res += array[i];
  }
}

function mul(array) {
  let res = array[0];
  for (let i = 1; i < array.length; i++) {
    res *= array[i];
  }
}

function and (array) {
  let res = array[0];
  for (let i = 1; i < array.length; i++) {
    res = res & array[i];
  }
}

plus(array);
mul(array);
and(array);
```

```bash
函数试

let ops = {
  "plus": (x,y)=>x+y,
  "mul" : (x,y)=>x*y,
  "and" : (x,y)=>x&y
}

function operation(op, array) {
  return array.slice(1).reduce(ops[op], array[0]);
}

operation("plus", array);
operation("mul", array);
operation("and", array);
```