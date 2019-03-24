import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import newList from './components/news/newList.vue'
import newsinfo from './components/news/newinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


var router = new VueRouter({
  routes: [//配置路由规则
    //路由重定向 默认一打开就是 首页
    { path: '/' ,redirect : '/home'},
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newList', component: newList},
    // 注意，这些名称最好是复制粘贴过来，以免出错，自己手写的有时候会出现问题，还
    // 会花很长的时间去找，得不偿失
    { path: '/home/newsinfo', component: newsinfo},
    { path: '/home/photolist', component: PhotoList},
    { path: '/home/photoinfo', component: PhotoInfo},
    { path: '/home/goodslist', component: GoodsList},
    { path: '/home/goodsinfo', component: GoodsInfo},
    { path: '/home/goodsdesc', component: GoodsDesc},
    { path: '/home/goodscomment', component: GoodsComment},
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router