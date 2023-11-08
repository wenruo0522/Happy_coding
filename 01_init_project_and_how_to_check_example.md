## 写代码前的准备

- 初始化仓库

  ```npm init```

- 安装必须的依赖

  - 使用 `terser-webpack-plugin` 来压缩美化代码

## 目录结构

`src/js/index.js` file contains all the data structures and algorithms listed by chapter.

```
|_examples(how to use each data structure and algorithm, organized by chapter)
|_src
|___js(source code: JavaScript version)
|_____data-structures
|_______models(classes used by DS: Node, ValuePair, ...)
|_____others(other algorithms such as palindome checker, hanoi tower)
|___ts(source code: TypeScript version)
|_____data-structures
|_______models
|_____others
|_test(unit tests with Mocha and Chai for src)
|___js
|___ts
```

## 使用 Node 运行代码示例

- 安装 [Node](https://nodejs.org)
- 打开终端 `terminal/cmd` 并切换至代码主目录下
- 安装依赖 `npm install`
- 查看示例，需要运行 `http-server examples` 或者 `npm run serve` 并打开浏览器 `http://127.0.0.1:8080`
- 或者 `cd examples/chapter04` 并直接查看示例代码，例如 `node 01-Stack.js`  // ToDo：这里需要补充下 node 的使用用例

## 浏览器中运行代码示例

- 右键点击您要查看的示例文件 `html` 并`Open with Chrome (or any other browser)`
- 或者直接点击对应的文件，例如 `examples/chapter04/01-Stack.html` 并查看控制台

## Happy Coding!

