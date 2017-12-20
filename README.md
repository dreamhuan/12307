# 软件工程前端大作业23333

确保有nodejs环境，且在Chrome浏览器开发

按顺序执行以下命令
1. `npm i -g yarn`
1. `yarn`
1. `npm run data`
1. `npm run dev`

命名一律用小驼峰，即第2个单词开始首字母大写（css class名除外，那个用下划线分隔单词）

开发适配Chrome浏览器iphone6 plus模式

另外部分用了es6语法，简单解释下要用的：
import表示导入，因为是webpack打包的，所以新建xxx.less文件后要应用要去app/app.js最后加上一句import，别的遇到了再说吧。。。（另外，less，sass都配了，用哪个随意吧，混着用也行）然后，这么做的直接后果就是**所有的css都是全局的**所以做好作用域隔离，有些需要不同页面全局切换的样式用js修改class吧。。。
