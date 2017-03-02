---
layout: post
title: "es6-configAndInstall"
date: 2017-02-24 
description: "es6环境配置和安装"
tag: es6
---  

##es6 环境安装与配置
1、首先安装node.js的环境。
2、npm安装es6转码规则。
```
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015
# react转码规则
$ npm install --save-dev babel-preset-react
# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```
3、安装命令行转码babel-cli
```
$ npm install --save-dev babel-cli
# 转码结果输出到标准输出
$ babel example.js
# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js
# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib
# -s 参数生成source map文件
$ babel src -d lib -s
```
4、改写或者新加文件 package.json
```
{
  "description": "es6 demo",
  "author": "ben",
  "license": "MIT",
  "devDependencies": {
    "babel-cli": "^6.22.2",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.23.0",
    "babel-preset-stage-0": "^6.22.0",
    "babel-register": "^6.23.0",
    "es-checker": "^1.4.0"
  },
  "scripts": {
    "build": "babel src -d lib"
  }
}
```

> 转码的时候，就执行下面的命令。$ npm run build

----------
5、项目根目录建立一个.babelrc 文件,里面内容为：
```
{
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ],
  "plugins": []
}
```

6、babel-node命令可以直接运行ES6脚本
```
$ babel-node es6.js  
或者如下：
$ babel-node
> (x => x * 2)(1)
2
```