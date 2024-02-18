---
date: 2024-02-18
title: 八股文
tags:
    - 八股文
---

# js

<details>
  ##<summary>js数据类型 8种</summary>
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
