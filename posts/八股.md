---
date: 2024-02-18
title: 八股文
tags:
    - 八股文
---

# js

## 一、数据类型

<details>
<summary>js数据类型 8种</summary>
基础数据类型：Null  Undefined  String  Boolean BigInt Symbol  Number

引用数据类型：Object

</details>

<details>
    <summary>数据类型检测的方式</summary>  

1.typeof  只能检测基础数据类型 null和[]会被检测为object  

```javascript
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
```

2.instanceof 只能检测引用数据类型（引用数据类型才有对象原型）

```javascript
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```

3.constructor  基础数据类型和引用数据类型都可以判断

```javascript
console.log((2).constructor === Number);                // true
console.log((true).constructor === Boolean);            // true
console.log(('str').constructor === String);            // true
console.log(([]).constructor === Array);                // true
console.log((function() {}).constructor === Function);  // true
console.log(({}).constructor === Object);               // true
```

4.Object.prototype.toString.call()

```javascript
var a = Object.prototype.toString;
 
console.log(a.call(2));              //Number
console.log(a.call(true));           //Boolean
console.log(a.call('str'));          //String
console.log(a.call([]));             //Array
console.log(a.call(function(){}));   //Function
console.log(a.call({}));             //Object
console.log(a.call(undefined));      //Undefined
console.log(a.call(null));           //Null
```

</details>

null和undefined区别  

>null表示变量值为空  
undefined表示有变量名称  

null的机器码和object的机器码都是000，所以typeof null == object  

0.1+0.2!= 0.3为什么  
>因为js相加是2进制相加转成10进制，0.1二进制和0.2二进制都为无限循环小数，相加也是无限循环小数，转成10进制为0.3000000004  
使0.1+0.2=0.3，使用toFix(2),2保留小数2位

typeof NaN为number，表示的是运算错误，失败返回的结果  

<details>
  <summary>Object.assign和扩展运算符 </summary>  

>```javascript
>扩展运算符：
>let outObj = {
>  inObj: {a: 1, b: 2}
>}
>let newObj = {...outObj}
>newObj.inObj.a = 2
>console.log(outObj) // {inObj: {a: 2, b: 2}}
>```  

>```javascript
>Object.assign():
>let outObj = {
>  inObj: {a: 1, b: 2}
>}
>let newObj = {...outObj}
>newObj.inObj.a = 2
>console.log(outObj) // {inObj: {a: 2, b: 2}}
>```

全都为浅拷贝  
</details>

判断对象是否为空对象

>Json.stringify()
>
>```javascript
>if(Json.stringify(Obj) == '{}' ){
> console.log('空对象');
>}
>```

>Object.keys()
>
>```javascript
>if(Object.keys(Obj).length < 0){
>     console.log('空对象');
>}
>```

## 二、ES6  

let、const、var的区别  

- 块级作用域  

>let,const有块级作用域，var没有块级作用域  

- 变量提升

> var存在变量提升，let，const不存在变量提升  

- 给全局添加属性  

> 浏览器的全局对象是window，node环境全局对象是global，var声明的变量可以在全局对象上访问，let，const不行。

- 重复声明  

> var可以重复声明变量，后面覆盖全面，let和const不能重复声明变量

- 暂时性死区

> let,const有，var没有

- 初始化设置  

> const需求初始化设置

const定义的变量值可以修改吗

> 基础数据类型不可以
> 引用数据类型可以

箭头函数this指向

- 箭头函数没有自己的 this 绑定，而是继承自最近的非箭头父级作用域的 this 值  

扩展运算符  
模版字符串`${}`
