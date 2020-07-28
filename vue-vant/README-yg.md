1、主要ui框架 vantui + vue + vue-router + vuex

框架引入及相关配置 （main.js）

2、脚手架基于vue-cli3.0

脚手架相关配置（别名，端口，proxy等）

3、ajax框架Axios

ajax封装与调用demo
```
api部分：
export const getApiFn = () => ajax(url, param, 'GET or POST or..', 是否开启loading效果);
demo：
export const getUserInfo = (参数1, 参数1) => ajax(BASE_API + 'userInfo', {aa:参数1,bb:参数1}, 'GET', true);
使用：
async myFn () {
  let userInfo = await getUserInfo(参数1, 参数1);
  console.log(userInfo)
}
或者
myFn () {
  getUserInfo(参数1, 参数1).then((response) => {
        console.log(response)
      }, (err) => {
        console.log(err)
      });
}

```

4、vue-create-api 

```
一个能够让 Vue 组件通过 API 方式调用的插件
地址：https://github.com/cube-ui/vue-create-api/blob/master/README_zh-CN.md
```

5、部分前端工具：

```
eslint：代码风格检查工具，帮助我们规范代码书写（一定要养成良好的代码规范）
iconfont ：阿里巴巴图标库
fastclick ：消除 click 移动游览器 300ms 的延
vue-lazyload: 图片懒加载
vue-navigation：导航默认行为类似手机APP的页面导航
地址：https://github.com/zack24q/vue-navigation
vue-page-stack： 手机导航框架（重点）
地址：https://github.com/hezhongfeng/vue-page-stack/blob/master/README.zh-cn.md
vue-uuid：uuid
babel-plugin-transform-remove-console: 去掉生产环境console.log 参考：https://github.com/sunniejs/vue-h5-template
vue-i18n: 多语言支持参考文档http://kazupon.github.io/vue-i18n/zh/api/
vue-awesome-swiper: 轮播组件
vue-content-loader: vue 数据没有加载出来时候的先加载骨架屏，参考地址：https://github.com/egoist/vue-content-loader
vue-waterfall2: 瀑布流，参考地址：https://github.com/AwesomeDevin/vue-waterfall2/blob/master/CHINESE-README.md
better-scroll: 滚动实现，参考https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md
中文文档：https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html 
关闭sourcemap防止源码泄露

```

6、参考资料：
```
vue-music-webapp: 网页音乐app
地址：http://120.79.162.149:3002/#/singer
awesome-vue：https://github.com/vuejs/awesome-vue
vue资源库，地址：https://github.com/vuejs/awesome-vue
vue-vant-mobile：https://github.com/frontend-qin/vue-vant-mobile
vue-h5-template:https://github.com/sunniejs/vue-h5-template
kbone 
mpvue

```
7、平台优化：
```
1、配置多环境变量，可以根据不同的命令自动适配各环境下的变量，例：baseApi
2、配置 alias 别名，
   以前引入方式import { setLocalStore, getLocalStore } from '../../../config/global.js',
   现在引入方式import { setLocalStore, getLocalStore } from '@config/global.js'
3、配置 proxy 跨域,方便本地开发，并且可以配置多个api跨域请求
   proxy: {
      // 配置跨域处理 可以设置多个
      '/api': {
        target: 'http://xxxx.cn:7300/mock/kk/api/', // 测试
        // target: 'http://api.xxxx.cn/api/', // 生产
        ws: true, // 是否启用websockets
        changeOrigin: true // 开启代理，在本地创建一个虚拟服务端
      },
      // eslint-disable-next-line no-dupe-keys
      '/api': {
        target: 'http://172.20.112.101:3000/mock/36/api/', // 测试
        // target: 'http://api.xxxx.cn/api/', // 生产
        ws: true, // 是否启用websockets
        changeOrigin: true // 开启代理，在本地创建一个虚拟服务端
      },
    }

4、页面缓存判断<keep-alive>组件配合路由route.meta.keepAlive方式可以缓存页面，不用反复进行http请求，以达到一面缓存。
5、打包配置添加命令，不用每次手动改url在来打包
   具体看config目录下config/env.xxx.js
```
8、语法及前端规范

语法主要以vscode的各种插件配合检查，包括eslint、Vetur、Vetur、JavaScript (ES6) code snippets等语法检查，错误提示，修改正确语法才能进行编程，不用人工干预，还有内置了命令：npm run lint 提交代码前检查一下语法问题，没有语法在提交到svn上
```
// vscode 前端插件 自动补全，语法提示灯
Atom Keymap、Atom Keymap、Auto Rename Tag、Element UI Snippets、
ESLint、JavaScript (ES6) code snippets、Auto Close Tag、
Path Intellisense、Prettier - Code formatter
、vscode-icons、Vue 2 Snippets、Code Spell Checker、
Chinese (Simplified) Language Pack for Visual Studio Code、
Bracket Pair Colorizer 2
```

```
// vscode 配置
{
    "atomKeymap.promptV3Features": true,
    "editor.multiCursorModifier": "ctrlCmd",
    // "editor.formatOnPaste": true,
    "workbench.colorTheme": "One Dark Pro",
    "files.autoSave": "onFocusChange",
    "editor.minimap.maxColumn": 30,
    //使用eslint规则重新格式化代码
    "eslint.autoFixOnSave": true,
    //去掉代码结尾的分号
    "prettier.semi": false,
    // prettier进行格式化时是否安装eslint配置去执行，建议false
    "prettier.eslintIntegration": true,
    //单引号包裹字符串
    "prettier.singleQuote": true,
    //让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            // 属性不强制折行对齐
            "wrap_attributes": "auto"
        }
    },
    //让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "eslint.validate": [
        "javascript",
        {
            "language": "vue",
            "autoFix": true
        },
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },
        "html",
        "javascript",
        "javascriptreact",
        "vue",
        "vue-html"
    ],
    "editor.minimap.enabled": false,
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "workbench.iconTheme": "vscode-icons",
    "editor.quickSuggestions": {
        "strings": true
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "window.zoomLevel": 0,
    "terminal.integrated.rendererType": "dom",
    "vsicons.dontShowNewVersionMessage": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "javascript.updateImportsOnFileMove.enabled": "always"
}
```
vue项目前端规范：

1、文件夹及文件命名
```
文件夹首字母小写驼峰命名 --- goodsDetail
文件首字母大写驼峰命名 --- GoodsDetail.vue

```
2、vue 文件规范
```
template部分：
模板标签使用kebab-case（短横线）--- <my-component></my-component>
错误使用 --- <MyComponent></MyComponent>

prop部分:
声明 prop的时候， 使用驼峰命名（myProps）， 模板中使用的时候， 用 - 连接（my-props）
demo --- props: { myProps: {}}
<my-component :my-props="abc"></my-component>

自定义事件名:
this.$emit（'my-event'）
<my-component @my-event="abc"></my-component>

```
3、js 常见规范

3.1 js 导入导出：

同一个文件夹下多个组件时，在导入导出时候应该建立一个index.js 文件来做统一管理，如下：
```
// index.js 文件
const AffairsNav = () => import('./AffairsNav');
const AffairsTab = () => import('./AffairsTab');
const AffairsDropdownMenu = () => import('./AffairsDropdownMenu');
const AffairsList = () => import('./AffairsList');
const AffairsListItem = () => import('./AffairsListItem');
export {
    AffairsNav,
    AffairsTab,
    AffairsDropdownMenu,
    AffairsList,
    AffairsListItem
}
// 文件引用
import { AffairsNav, AffairsTab, AffairsDropdownMenu, AffairsList } from './components'
// 错误使用如下
import AffairsNav from './components/AffairsNav'
import AffairsTab from './components/AffairsTab'
import AffairsDropdownMenu from './components/AffairsDropdownMenu'
import AffairsList from './components/AffairsList'
import xxxxx from './components/xxxx'
import xxxxx from './components/xxxx'
import xxxxx from './components/xxxx'
```
3.2 尽量使用别名导入：
项目已经使用了别名配置，应该尽量使用别名导入，可以简化代码
```
// vue.config.js
 config.resolve.alias
      .set('@src', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@views', resolve('src/views'))
      .set('@components', resolve('src/components'))
      .set('@utils', resolve('src/utils'))
      .set('@config', resolve('src/config'))
      
// 页面使用时
<!-- 正确 -->
import { xxxx } from '@src/plugins/xxxx'
import { xxxx } from '@api/xxxx'

<!-- 错误 -->
import { xxxx } from '../../../src/plugins/xxxx'
import { xxxx } from '../../src/api/xxxx'
```
4、vue常用指令尽量缩写
```
指令缩写，用 : 表示 v-bind: ，用 @ 表示 v-on:

<!-- 错误 -->
<input v-bind:value="value" v-on:input="onInput" />

<!-- 正确 -->
<input :value="value" @input="onInput" />
```
5、vue标签的 Props 应该有统一的顺序，依次为指令、属性和事件。
```
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```
6、vue组件选项的顺序
```
 export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {},
};
```
7、单文件组件顶级标签的顺序，单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。
```
<template>
  ...
</template>
// 这里是空行
<script>
  /* ... */
</script>
// 这里是空行
<style>
  /* ... */
</style>
```
8、备注
```
备注需要清晰明了，简洁，易懂即可，当文件代码特别少且易懂可以不用备注
```
9、命令

第一次运行

```
// 不建议使用cnpm install 安装依赖
第一次运行安装依赖： npm install
本地运行：npm run serve
测试环境打包：npm run stage
生产打包：npm run build
eslint检查：npm run lint
```
10、项目核心架构结构
```
.
├── public
│   ├── favicon.ico
│   ├── mock
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   ├── assets
│   │  ├── images
│   │  └── style
│   ├── components
│   ├── config
│   ├── i18n
│   ├── icons
│   ├── main.js
│   ├── plugins
│   │   ├── element.js
│   │   └── vant.js
│   ├── router
│   │   └── router.js
│   ├── store
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── mutation-type.js
│   │   ├── mutations.js
│   │   ├── state.js
│   │   └── store.js
│   │── utils
│   └── views
├── .env.development
├── .env.production
├── .env.staging
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── LICENSE
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── README.structure.md
└── vue.config.js

```