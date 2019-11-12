/**
 * JavaScript对象类型[Object]概述
 *
 * @param {*} name
 * @param {*} colors
 * @returns
 */

// 工厂模式创建对象
/* 说明
    利用水果工厂可以很容易的创建一种新的水果，每个新创建的水果都是包括两个属性和一个方法的 Object。因为没有水果对象，所以不能通过 instanceof 得出苹果是水果的结论
*/
function createFruit(name,colors) {
    var o = new Object();
    o.name = name;
    o.colors = colors;
    o.getInfo = function () {
        console.log(this.name+"是"+this.colors+"的");
    }
    return o;
}
var apple = createFruit("苹果",["红色","黄色"]);

// 构造函数方式创建对象
/* 说明
    利用构造函数模式可以解决对象识别问题，但其主要问题是每个方法在每个实例上重新创建一遍，没有做到方法的重用。
*/
function fun (name,colors) {
    this.name = name;
    this.colors = colors
    this.getInfo = function () {
        console.log(this.name+"是"+this.colors+"的");
    }
}

var aa = new fun("苹果",["红色","黄色"])

// 原型模式创建对象
/*
    原型模式没办法向构造函数传递参数，原型中所有的属性是被多实例共享的，对于引用类型的共享属性的操作可能引起突出的问题。例如向苹果的颜色属性put一个"红色"（apple.colors.push("红色")），哪么所有水果通过原型访问到的颜色都是"红色"，而这是很危险的。
*/

function fun () {}
fun.prototype.name = '水果'
fun.prototype.colors = []
fun.prototype.getInfo = function () {
    console.log(this.name+"是"+this.colors+"的");
}
var ap = new fun()
ap.name = '🍎'

// 组合模式创建对象
/*
    组合模式是最常见的创建自定义对象的方式，构造函数模式用于定义实例属性，原型模式用于定义方法和共享属性。可以最大限度的节省内存。
*/
function fun (name, colors) {
    this.name = name
    this.colors = colors
}
fun.prototype = {
    constructor: fun,
    getInfo: function () {
        console.log(this.name+"是"+this.colors+"的");
    }
}
var ap = new fun("苹果",["红色","黄色"])
ap

// 动态原型模式创建对象
/*
    很完美的方式，把所有信息都封装在构造函数中。只有在getInfo()方法不存在的情况下，才会将它添加到原型中。原型的这段代码只会在初次调用构造函数时才会执行。
*/
function fun (name,colors) {
    this.name = name
    this.colors = colors
    if(typeof this.getInfo !='function') {
        fun.prototype.getInfo = function () {
            console.log(this.name+"是"+this.colors+"的");
        }
    }
}
var ap = new fun("苹果",["红色","黄色"])

// 寄生构造函数模式创建对象
/*
    这种方式和工厂模式代码其实是一样的，只是函数名采用了Fruit的首字母大写的形式，并且用new来进行初始化。这种模式可以在特殊的情况下用来为对象创建构造函数。
*/
function fun (name,colors) {
    var o = {}
        o.name = name
        o.colors = colors
        o.getInfo = function () {
            console.log(this.name+"是"+this.colors+"的");
        }
    return o
}
var ap = new fun("苹果",["红色","黄色"])

// 稳妥构造函数模式创建对象
/*
    稳妥对象（durable objects）是由道格拉斯（douglas）发明。指的是没有公共属性，并且其方法也不引用this的对象。适合在安全环境中实用
*/
function fun (name,colors) {
    var o = {}
    o.getInfo = function () {
        console.log(name+"是"+colors+"的");
    }
    return o
}
var ap = new fun("苹果",["红色","黄色"])

// 访问属性介绍
/*
    Object对象中的第一项都被称为属性（函数被称为方法），一般来说属性值可以通过点号（.）或中括号（[]）加属性名的方式获得。属性名可以是字符串（String）也可以是数字（Number），但一般最好不要用数字做为属性名称，如果用数字做属性名称，只能采用中括号的方式访问属性。
*/
var ageGroup = {15:"儿童",60:"老人"};
//输出 儿童
console.log(ageGroup["15"]);
//抛出 SyntaxError 
console.log(ageGroup.15);

// 点号（.）

var people = {name:"iFat3",sex:"男"};
//输出 iFat3
console.log(people.name);

// 中括号（[]）

var people = {name:"iFat3",sex:"男"};
//输出 iFat3
console.log(people["name"]);

// 属性存在性判定

var people = {name:"iFat3",sex:"男"};

console.log('name' in people)

if('name' in people){
    alert(JSON.stringify(people))
}

// 自有属性判定
var people = {name:"iFat3",sex:"男"};
console.log(people.hasOwnProperty('age'))

// 枚举属性 实际就是for in 
var people = {name:"iFat3",sex:"男"}
for(var i in people){
    console.log(i)
}

// 删除属性
var people = {name:"iFat3",sex:"男"};
delete people.sex
console.log(people.sex)   //不存在值
delete people.toString();
//输出 [object Object]
console.log(people.toString());

// 对象序列化  使用 JSON.stringify

var people = {name:"iFat3",sex:"男"};
var peopleStr = JSON.stringify(people);
//输出 string
console.log(typeof peopleStr);
//输出 {"name":"iFat3","sex":"男"}
console.log(peopleStr);

// 对象反序列化  使用JSON.parse

var people = {name:"iFat3",sex:"男"};
var peopleStr = JSON.stringify(people);
var people2 = JSON.parse(peopleStr);
//输出 object
console.log(typeof people2);
//输出 iFat3
console.log(people2.name);