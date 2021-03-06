# WMS

后台管理系统需求分析和技术选型
===
需求分析
---
##### 商品管理 -> 添加/编辑商品，查看商品，上/下架

##### 品类管理 -> 添加品类，查看品类

##### 订单管理 -> 订单列表，订单详情，发货

##### 用户管理 -> 管理员登录，用户登录

技术选型
---
##### 语言：React、sass、Es6
##### 架构：前后端分离，分层架构、模块化开发
##### 辅助工具： Yarn、webpack3.10、git

发布过程
---
环境配置、代码部署、nginx配置、域名解析


接口文档
===
>## 用户接口

| 一个普通标题 | 一个普通标题 | 一个普通标题 |
| ------ | ------ | ------ |
| 短文本 | 中等文本 | 稍微长一点的文本 |
| 稍微长一点的文本 | 短文本 | 中等文本 |


页面加载
===
##### URL解析 -> DNS查询 -> 资源请求 -> 浏览器解析
URL结构
---
协议+域名/端口+路径+参数+哈希

DNS查询
---
浏览器 ----> DNS缓存+DNS服务器
##### DNS优化
dns-prefetch,即dns预获取是前端优化的一部分；一般来说，前端优化中与DNS有关的有两点：一个是减少DNS的请求次数，另一个就是进行DNS预获取。
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="dns-prefetch" href="//cdn.bootcss.com">
    <title></title>
</head>
<body></body>
</html>
```

资源请求
---
浏览器 ----> 后端服务器

浏览器解析
---
<img src="/img/bower.png" alt="图片名称" />


安装react
===
插件
---
+ HtmlWebpackPlugin
+ babel-loader
+ css-loader、style-loader
+ sass-loader、node-sass
+ extract-text-webpack-plugin
+ url-loader

