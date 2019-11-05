#莫问归期的第一个 Vue 项目

## 这是一个基于Vue 的移动app项目

## 项目开发步骤
## 用（传统方式）命令把修改过后的代码上传github
1.git add .
2.git commit -m "提交信息"
3.git push

## 完成首页App组件
1.完成 Header 区域，使用的事 Mint-UI 中的 Header 组件
2.制作底部的 Tabbar 区域，使用的事 MUI 的 Tabbar.html
  + 在制作 购物车 小图标的时候，操作会更多一些
  + 先把扩展图标的 css 样式，拷贝到项目中
  + 拷贝 扩展字体库 ttf 文件到项目中
  + 为 购物车 小图标，添加 如下样式
3.要在中间区域放置一个 router-view 来展示路由匹配规则的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图

## 加载首页轮播图数据
1.获取数据，使用 vue-resource 来获取
2.使用 vue-resource 的 this.$http.get 获取数据
3.获取到的数据，保存到 data 身上，不让在别的属性身上不能用
4.使用 v-for 循环渲染每个 item 项

## 改造九宫格
1.从MUI中的例子中找
2.像这种我们就是去找现成的，没找到再问问，再没问到，就自己敲

## 改造 新闻资讯 链接

## 新闻资讯 页面 制作
1.绘制界面 使用 MUI 中的 media-list.html
2.使用 vue-resoure 获取数据
3.渲染真实数据   我们刚开始做页面的时候，得放一些假数据在上面，把样式都设定好之后，在获取真实得数据渲染

## 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造为 router-link 同时 在跳转的时候应该提供唯一的ID标识符
2.创建新闻详情的组件页面 NewInfo.vue
3.在 路由模块中，将 新闻详情的 路由地址 和组件页面对应起来
4.每一个新闻详情都有一个 唯一的 id 值，所以在进行路由的跳转的时候 要将 id 值传入 router-link :to="'/home/newsinfo/'+item.id" 这里的to一定要绑定相对应的 id

## 实现 新闻详情 的页面布局和数据渲染
1.先把页面的基本结构布局 ，然后再获取数据渲染

## 单独封装一个 comment.vue 评论子组件
1.先创建一个单独的 comment.vue 组件模板，因为在很多组件中都会用到评论子组件
2.在需要使用的 comment 组件的 页面中，先手动导入 comment 组件
3.在父组件中，使用 'components' 属性，将刚才导入的 comment 组件 注册为自己的子组件
4.将注册子组件的时候，注册名称，以标签的形式，在页面中引用即可

## 发表评论
1.把文本框双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则Toast提示用户，评论内容不能为空
4.通过 vue-resourse 发送一个请求，把评论内容提交给服务器
5.当发表评论后，重新刷新列表，以查看最新的评论
  +如果重新调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
  +换一种思路，当评论成功后，再客户端，手动拼接出以个最新的评论对象，然后调用数组的 unshift 方法，把最新的评论，追加到 data 中 comments的开头，这样，就能完美实现刷新列表的需求

## 改造图片分析 按钮为 路由的链接并显示对应的组件页面

## 绘制 图片列表 组件页面结构并美化样式
1.制作 顶部的滑动条
2.制作 底部的图片列表

### 制作顶部滑动条的 坑  这个是重点
1.需要借助于 MUI 中的 tab-top-webview-main.html
2.需要把 slider 区域的 mui-fullscreen 通过这个，我觉得在引入别的组件的时候，出现了问题，我们要学会去检查组件
3.滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下
  +在对应的组件中 导入 mui.js
  +调用官方提供的方式去初始化
  ```
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```
4.我们在初始化 滑动条 的时候，导入的 mui.js 但是，控制台报错：`Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
  +经过检查与推测，最大的可能是 mui.js 中用到了 `'caller', 'callee', and 'arguments'` 东西，但是 webpack 打包好的 bundle.js 中，默认是启用的严格模式的，所以，这两者起了冲突
  +解决方案： 1. 把mui.js中的非严格模式的代码改掉，但是不现实；2. 把 webpack 打包时候的严格模式禁用掉
  +第一种方法我们解决不了 所以采用第二种方法
    +装包 `cnpm install babel-plugin-transform-remove-strict-mode -D`
    +在 .babelrc 的 plugins 属性 中 加入 `"transform-remove-strict-mode"`
  +滑动的时候 会出现错误`[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL>`
    +解决方法，可以加上`*{
                        touch-action: pan-y
                        }`
    +原因：这是 chrome 为了提高页面的流畅度设计的一个东西
5.刚进入 图片分享页面的时候，滑动条无法正常工作，发现，如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化 滑动条的代码，搬到了 mounted 生命周期函数中
6.重新运行的时候，底部的 tap-bar 又不能点击 这是因为 mui 的文件有问题  解决办法 就是把 tabbar 的标签中含有 `mui-tab-item` 类名 重新改写一下名字
7.获取所有的分类，并渲染 分类列表

### 制作图片列表区域
1.图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的组件 `Lazyload`
2.根据 `lazy-load` 的使用文档，尝试使用
3.渲染图片列表数据

### 实现了 图片列表的 懒加载改造和样式美化

## 实现了 点击图片 跳转到 图片详情页面
1.在改造 li 成 router-link 的时候，需要使用 tag 属性指定渲染的为哪种元素

## 实现了 详情页面的美化，同时获取数据渲染页面

##  实现 图片详情中 缩略图的功能
1.使用 插件 vue-preview 这个缩略图 插件 to：目前是不行的 要解决 它和严格模式的冲突
2.获取到所有的图片列表，然后使用 v-for 指令渲染数据
3.注意： img 标签上的 class 不能去掉
4.注意： 每个 图片数据对象中，必须要有 w 和 h 属性

## 绘制 商品列表 页面基本结构并美化

## 尝试在手机上 去进行项目得预览和测试
1.手机和开发项目的电脑 处于同一 网络中 就是手机可以访问到电脑的 IP
2.打开自己的 项目中 package.json 文件 在 dev 脚步中，添加一个 --host 指令，把当前电脑的 wifi ip 地址 设置为 --host 的指令值
  + ipconfig
3.然后在手机端  输入 ip 地址：端口号
  + 手机调试过程中 发现 新闻资讯栏 点击没有  是mui 中 点击事件的问题  只需要把 click 换成 tap  注意 这个tap 只能在mui中使用
