---
date: 2024-03-08
title: ts
description: 刷体操刷出感觉了，来点总结
tags:  
- typescript
---

## 技巧

- 模式匹配 提取
  - extends ? :
  - infer
- 重新构造返回一个新的type(当前的type不满足需求，由当前type变化引申出一个新的type)
  - type infer 类型参数可以保存参数类型
  - type、infer、类型参数声明的变量都不能修改，想对类型做各种变换产生新的类型就需要重新构造。（返回一个新的type）
