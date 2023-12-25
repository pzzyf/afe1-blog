---
date: 2023-05-16
title: mac便捷操作
tags:  
- mac
---
# terminal
快速打开项目  
聚焦搜索打开terminal ==> cd github文件夹 ===> code 文件名称

终端上查看代理设置  
networksetup -getwebproxy Wi-Fi  
networksetup -getsecurewebproxy Wi-Fi

Mac上怎样查看.git文件、隐藏文件  
展示  
 // 默认显示苹果所有文件 true  
defaults write com.apple.finder AppleShowAllFiles TRUE  
 // 这一步相当于确定  
killall Finder  
  
恢复  
defaults write com.apple.finder AppleShowAllFiles FALSE  
killall Finder  
