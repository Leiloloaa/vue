// 所有 JS 文件的入口
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入时间插件
import moment from 'moment'
// 定义全局的过滤器 过滤器的第一个参数是过滤器的名称 第二个参数是函数 
// 而函数的第一个参数是 | 管道符前面的数据，也就是要过滤的数据
Vue.filter('dataFormat', function (datastr, parttern = "YYYY-MM-DD HH:mm:ss") {
  // 格式化时间的函数 我们可以使用 node 中的 moment 
  // 直接使用 moment() 是得到当前的时间 moment(datastr) 这样是得到指定的时间
  return moment(datastr).format(parttern)
})

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
// Vue.http.options.root = 'http://vue.studyit.io';
// 全局设置 POST 时候表单数据格式组织形式
// Vue.http.options.emulateJSON = true;

// 3. 导入 vuex
import Vuex from 'vuex'
Vue.use(Vuex)



// 每次打开网页之前，先从本地存储中，把购物车的数据读取出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

// 注意： 这个 Vuex.Store 一定要大写
var store = new Vuex.Store({
  state: {
    // 只调用 state 中的数据 this.$store.state.***
    car: car // 将购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象
    // { id：商品的id， count：要购买的数量， price：商品的单价， selected： false}
  },
  mutations: {
    // 涉及到修改之后 一定要这通过 mutations 的方法来修改数据 this.$store.commit('方法名称','唯一的参数')
    addToCar(state,goodsinfo){
      // 点击加入购物车，把商品的信息保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车之前有的话，只更新数量即可
      // 2. 如果没有，就 push 到 car 中就可以
      
      // 认为购物车里面没有
      var flag = false

      // 遍历方法 some 找到了就会停止
      state.car.some(item => {
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          // 找到了 之后就 返回 结束遍历
          flag = true
          return true
        }
      })
      
      // 如果最终 flag 还是等于 false 就直接把商品 push 到 car 中
      if(!flag){
        state.car.push(goodsinfo)
      }

      // 当更新 car 之后，把 car 中的数据，存储到本地的 localstorage 中
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: {
    // this.$store.getters.***
    // 相当于 计算属性，也相当于 filters
    getAllCount(state) {
      var c= 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    }
  }
})


// router 和 resource 在main.js中导入之后，方可使用


// 按需导入 Mint-UI 中得组件 如果是这样的话，就不能实现 懒加载的 小图标 要实现的话要全部导入
// import { Header, Swipe, SwipeItem, Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装 图片预览插件
// import VuePreview from 'vue-preview'

// // defalut install
// Vue.use(VuePreview)

// // with parameters install
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 导入 App 组件
import app from './App.vue'


// Vue实例
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router, //1.4 挂载路由对象到 VM 实例上
  store // 挂载 store 状态管理对象
})