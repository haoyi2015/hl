/**
 * 
 * 如何准确判断JS数据类型？
 * 
 * typeof 无法准确判断复杂数据类型
 * instanceof 无法正确判断基本数据类型
 * 
 * 本文提供两个思路:
 *  1.首先通过typeof判断出是否是复杂数据类型，如果是，再使用instanceof判断
 *  2.定义自己的数据类型
 *  (附测试代码)
 */


/**
 * isComplex判断是否是复杂数据类型，如果是返回true,否则返回false
 * @param {*} data 需要被判断类型的数据
 */

function isComplex(data) {
    if (data && (typeof data === 'object' || typeof data === 'function')) {
        return true;
    }
    return false;
}


/**
 * 定义自己的基本数据类型
 */

class PrimitiveString {
    static [Symbol.hasInstance](data) {
        return typeof data === 'string';
    }
}

class PrimitiveNumber {
    static [Symbol.hasInstance](data) {
        return typeof data === 'number';
    }
}

class PrimitiveUndefined {
    static [Symbol.hasInstance](data) {
        return typeof data === 'undefined';
    }
}

class PrimitiveBool {
    static [Symbol.hasInstance](data) {
        return typeof data === 'boolean';
    }
}

class PrimitiveNull {
    static [Symbol.hasInstance](data) {
        return data === null;
    }
}

class PrimitiveSymbol {
    static [Symbol.hasInstance](data) {
        return typeof data === 'symbol';
    }
}




/**
 * 测试 
 */

let num = 2;
console.log(num instanceof PrimitiveNumber);    //true
console.log('isComplex: ', isComplex(num));

let str = 'Yvette';
console.log(str instanceof PrimitiveString);    //true
console.log('isComplex: ', isComplex(str));

let flag = false;
console.log(flag instanceof PrimitiveBool);     //true
console.log('isComplex: ', isComplex(flag));

let und = undefined;
console.log(und instanceof PrimitiveUndefined); //true
console.log('isComplex: ', isComplex(und));

let nul = null;
console.log(nul instanceof PrimitiveNull);      //true
console.log('isComplex: ', isComplex(nul));

let sym = Symbol(10);
console.log(sym instanceof PrimitiveSymbol);    //true
console.log('isComplex: ', isComplex(sym));

console.log('isComplex: ', isComplex(isComplex)); //true

// 判断对象里面某个元素是否有值
var obj = { 'id': 1, 'name': 2, code: '3', status: '', other: '' }
Object.values(obj).some(v => v == '')


if (!Object.values(obj).some(v => v == '')) {
    //全部有值
    return 1
} else {
    return false;
}
//or
if (Object.values(obj).every(v => !!v)) {
    //全部有值
    return 3
} else {
    return false;
}
//or
var arr;
if((arr = Object.keys(obj).filter(v=>!obj[v])).length<=0){
  //全部有值
}else{
  console.log(arr);//[status,other]
}


const actions = new Map([
    [1, ['processing','IndexPage']],
    [2, ['fail','FailPage']],
    [3, ['fail','FailPage']],
    [4, ['success','SuccessPage']],
    [5, ['cancel','CancelPage']],
    ['default', ['other','Index']]
  ])
  /**
   * 按钮点击事件
   * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
   */
  const onButtonClick = (status)=>{
    let action = actions.get(status) || actions.get('default')
    // sendLog(action[0])
    // jumpTo(action[1])
  }
  

  var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
//javascriptc中文网,JS中文网-前端进阶资源分享
console.log(window.number);


// call

/*
    call 和 apply 的功能相同，区别在于传参的方式不一样:

    fn.call(obj, arg1, arg2, …),调用一个函数, 具有一个指定的this值和分别地提供的参数(参数的列表)。
    fn.apply(obj, [argsArray]),调用一个函数，具有一个指定的this值，以及作为一个数组（或类数组对象）提供的参数。
    call核心:

    将函数设为传入参数的属性
    指定this到函数并传入给定参数执行函数
    如果不传入参数或者参数为null，默认指向为 window / global
    删除参数上的函数
*/
Function.prototype.call = function (context) {
    /** 如果第一个参数传入的是 null 或者是 undefined, 那么指向this指向 window/global */
    /** 如果第一个参数传入的不是null或者是undefined, 那么必须是一个对象 */
    if (!context) {
        //context为null或者是undefined
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this; //this指向的是当前的函数(Function的实例)
    let args = [...arguments].slice(1);//获取除了this指向对象以外的参数, 空数组slice后返回的仍然是空数组
    let result = context.fn(...args); //隐式绑定,当前函数的this指向了context.
    delete context.fn;
    return result;
}

//测试代码
var foo = {
    name: 'Selina'
}
var name = 'Chirs';
function bar(job, age) {
    console.log(this.name);
    console.log(job, age);
}
bar.call(foo, 'programmer', 20);
// Selina programmer 20
bar.call(null, 'teacher', 25);
// 浏览器环境: Chirs teacher 25; node 环境: undefined teacher 25


// apple
Function.prototype.apply = function (context, rest) {
    if (!context) {
        //context为null或者是undefined时,设置默认值
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;
    let result;
    if(rest === undefined || rest === null) {
        //undefined 或者 是 null 不是 Iterator 对象，不能被 ...
        result = context.fn(rest);
    }else if(typeof rest === 'object') {
        result = context.fn(...rest);
    }
    delete context.fn;
    return result;
}
var foo = {
    name: 'Selina'
}
var name = 'Chirs';
function bar(job, age) {
    console.log(this.name);
    console.log(job, age);
}
bar.apply(foo, ['programmer', 20]);
// Selina programmer 20
bar.apply(null, ['teacher', 25]);
// 浏览器环境: Chirs programmer 20; node 环境: undefined teacher 25
//javascriptc中文网,JS中文网-前端进阶资源分享


// bind -- 解释bind

/*
bind 和 call/apply 有一个很重要的区别，一个函数被 call/apply 的时候，会直接调用，但是 bind 会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数
*/

Function.prototype.my_bind = function(context) {
    if(typeof this !== "function"){
      throw new TypeError("not a function");
  }
    let self = this;
    let args = [...arguments].slice(1);
    function Fn() {};
    Fn.prototype = this.prototype;
    let bound = function() {
        let res = [...args, ...arguments]; //bind传递的参数和函数调用时传递的参数拼接
        context = this instanceof Fn ? this : context || this;
        return self.apply(context, res);
    }
    //原型链
    bound.prototype = new Fn();
    return bound;
}

var name = 'Jack';
function person(age, job, gender){
    console.log(this.name , age, job, gender);
}
var Yve = {name : 'Yvette'};
let result = person.my_bind(Yve, 22, 'enginner')('female');   


// new的原理是什么？通过new的方式创建对象和通过字面量创建有什么区别？

/*
    new:

    创建一个新对象。
    这个新对象会被执行[[原型]]连接。
    将构造函数的作用域赋值给新对象，即this指向这个新对象.
    如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。

    字面：
    字面量创建对象，不会调用 Object构造函数, 简洁且性能更好;

    new Object() 方式创建对象本质上是方法调用，涉及到在proto链中遍历该方法，当找到该方法后，又会生产方法调用必须的 堆栈信息，方法调用结束后，还要释放该堆栈，性能不如字面量的方式。

    通过对象字面量定义对象时，不会调用Object构造函数。
*/

function new(func) {
    lat target = {};
    target.__proto__ = func.prototype;
    let res = func.call(target);
    if (typeof(res) == "object" || typeof(res) == "function") {
        return res;
    }
    return target;
  }

  // 谈谈你对原型的理解？

  /*
    在 JavaScript 中，每当定义一个对象（函数也是对象）时候，对象中都会包含一些预定义的属性。其中每个函数对象都有一个prototype 属性，这个属性指向函数的原型对象。使用原型对象的好处是所有对象实例共享它所包含的属性和方法。
  */

  // 什么是原型链？【原型链解决的是什么问题？】

  /*
    原型链解决的主要是继承问题。

    每个对象拥有一个原型对象，通过 proto (读音: dunder proto) 指针指向其原型对象，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null(Object.proptotype.proto 指向的是null)。这种关系被称为原型链 (prototype chain)，通过原型链一个对象可以拥有定义在其他对象中的属性和方法。

    构造函数 Parent、Parent.prototype 和 实例 p 的关系如下:(p.proto === Parent.prototype)
  */

  // prototype 和 __proto__ 区别是什么？

  /*
    prototype是构造函数的属性。

    proto 是每个实例都有的属性，可以访问 [[prototype]] 属性。

    实例的proto 与其构造函数的prototype指向的是同一个对象。
  */

function Student(name) {
    this.name = name;
}
Student.prototype.setAge = function(){
    this.age=20;
}
let Jack = new Student('jack');
console.log(Jack.__proto__);
//console.log(Object.getPrototypeOf(Jack));;
console.log(Student.prototype);
console.log(Jack.__proto__ === Student.prototype);//true


// 使用ES5实现一个继承？ -- 组合继承(最常用的继承方式)

function SuperType() {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
//javascriptc中文网,JS中文网-前端进阶资源分享
SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function() {
    console.log(this.age);
}


// 什么是深拷贝？深拷贝和浅拷贝有什么区别？

/*
    浅拷贝是指只复制第一层对象，但是当对象的属性是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。

    深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。
*/

// 实现一个深拷贝:

function deepClone(obj) { //递归拷贝
    if(obj === null) return null; //null 的情况
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(typeof obj !== 'object') {
        //如果不是复杂数据类型，直接返回
        return obj;
    }
    /**
     * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
     * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
     */
    let t = new obj.constructor();
    for(let key in obj) {
        //如果 obj[key] 是复杂数据类型，递归
        t[key] = deepClone(obj[key]);
    }
    return t;
}


// 防抖和节流的区别是什么？防抖和节流的实现。

/*
    防抖和节流的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，且每次触发函数的间隔小于设置的时间，防抖的情况下只会调用一次，而节流的情况会每隔一定时间调用一次函数。

    防抖(debounce): n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
*/

function debounce(func, wait, immediate=true) {
    let timeout, context, args;
        // 延迟执行函数
        const later = () =setTimeout(() ={
            // 延迟函数执行完毕，清空定时器
            timeout = null
            // 延迟执行的情况下，函数会在延迟函数中执行
            // 使用到之前缓存的参数和上下文
            if (!immediate) {
                func.apply(context, args);
                context = args = null;
            }
        }, wait);
        let debounced = function (...params) {
            if (!timeout) {
                timeout = later();
                if (immediate) {
                    //立即执行
                    func.apply(this, params);
                } else {
                    //闭包
                    context = this;
                    args = params;
                }
            } else {
                clearTimeout(timeout);
                timeout = later();
            }
        }
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };
    //javascriptc中文网,JS中文网-前端进阶资源分享
    return debounced;
};

/*
    防抖的应用场景:

    每次 resize/scroll 触发统计事件
    文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）
    节流(throttle): 高频事件在规定时间内只会执行一次，执行一次后，只有大于设定的执行周期后才会执行第二次。
*/

//underscore.js
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};
//javascriptc中文网,JS中文网-前端进阶资源分享
    var later = function () {
        previous = options.leading === false ? 0 : Date.now() || new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function () {
        var now = Date.now() || new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            // 判断是否设置了定时器和 trailing
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
};

/*
    函数节流的应用场景有:

    DOM 元素的拖拽功能实现（mousemove）
    射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
    计算鼠标移动的距离（mousemove）
    Canvas 模拟画板功能（mousemove）
    搜索联想（keyup）
    监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次
*/

// 取数组的最大值（ES5、ES6）

// ES5 的写法
Math.max.apply(null, [14, 3, 77, 30]);

// ES6 的写法
Math.max(...[14, 3, 77, 30]);

// reduce
[14,3,77,30].reduce((accumulator, currentValue)=>{
    return accumulator = accumulator currentValue ? accumulator : currentValue
});


// setTimeout倒计时为什么会出现误差？

/*
    setTimeout() 只是将事件插入了“任务队列”，必须等当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码消耗时间很长，也有可能要等很久，所以并没办法保证回调函数一定会在 setTimeout() 指定的时间执行。所以， setTimeout() 的第二个参数表示的是最少时间，并非是确切时间。

    HTML5标准规定了 setTimeout() 的第二个参数的最小值不得小于4毫秒，如果低于这个值，则默认是4毫秒。在此之前。老版本的浏览器都将最短时间设为10毫秒。另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常是间隔16毫秒执行。这时使用 requestAnimationFrame() 的效果要好于 setTimeout();
*/

// promise 有几种状态, Promise 有什么优缺点 ?

/*
    promise有三种状态: fulfilled, rejected, pending.

    Promise 的优点:

    一旦状态改变，就不会再变，任何时候都可以得到这个结果
    可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
    Promise 的缺点:

    无法取消 Promise
    当处于pending状态时，无法得知目前进展到哪一个阶段
*/

// Promise构造函数是同步还是异步执行，then中的方法呢 ?promise如何实现then处理 ?

/*
    Promise的构造函数是同步执行的。then中的方法是异步执行的。
*/

// Promise和setTimeout的区别 ?

/*
    Promise 是微任务，setTimeout 是宏任务，同一个事件循环中，promise总是先于 setTimeout 执行。
*/

// 如何实现 Promise.all ?

/*
    要实现 Promise.all,首先我们需要知道 Promise.all 的功能：

    如果传入的参数是一个空的可迭代对象，那么此promise对象回调完成(resolve),只有此情况，是同步执行的，其它都是异步返回的。
    如果传入的参数不包含任何 promise，则返回一个异步完成.
    promises 中所有的promise都“完成”时或参数中不包含 promise 时回调完成。
    如果参数中有一个promise失败，那么Promise.all返回的promise对象失败
    在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组
*/
Promise.all = function (promises) {
    return new Promise((resolve, reject) ={
        let index = 0;
        let result = [];
        if (promises.length === 0) {
            resolve(result);
        } else {
            setTimeout(() ={
                function processValue(i, data) {
                    result[i] = data;
                    if (++index === promises.length) {
                        resolve(result);
                    }
                }
                for (let i = 0; i < promises.length; i++) {
                    //promises[i] 可能是普通值
                    Promise.resolve(promises[i]).then((data) ={
                        processValue(i, data);
                    }, (err) ={
                        reject(err);
                        return;
                    });
                }
            })
        }
    });
}

// 如何实现 Promise.finally ?

/*
    不管成功还是失败，都会走到finally中,并且finally之后，还可以继续then。并且会将值原封不动的传递给后面的then.
*/

Promise.prototype.finally = function (callback) {
    return this.then((value) ={
        return Promise.resolve(callback()).then(() ={
            return value;
        });
    }, (err) ={
        return Promise.resolve(callback()).then(() ={
            throw err;
        });
    });
}

// 什么是函数柯里化？实现 sum(1)(2)(3) 返回结果是1,2,3之和

/*
    函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
*/
function sum(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}
console.log(sum(1)(2)(3)); // 6

/* 引申：实现一个curry函数，将普通函数进行柯里化: */

function curry(fn, args = []) {
    return function(){
        let rest = [...args, ...arguments];
        if (rest.length < fn.length) {
            return curry.call(this,fn,rest);
        }else{
            return fn.apply(this,rest);
        }
    }
}
//test
function sum(a,b,c) {
    return a+b+c;
}
let sumFn = curry(sum);
console.log(sumFn(1)(2)(3)); //6
console.log(sumFn(1)(2, 3)); //6
