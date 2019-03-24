<template>
  <div>
    <!-- 要注意层次结构 -->
    <div class="goods-list">
      <!--  第一种 用 router-link 进行路由跳转 -->
      <!--  在网页中，有两种跳转方式： -->
      <!--  方式1：使用 a 标签的形式叫做 标签跳转 -->
      <!--  方式2：使用 window.location.href 的形式 叫做 编程式导航 -->
      <router-link class="goods-item" tap="div" to="/home/goodsinfo">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥1499</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </router-link>
      <div class="goods-item" @click="goDetail()">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img
          src="//g-search2.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01Z4oLNF29zFgiQpWnc_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
          alt
        >
        <h1 class="title">【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥2199</span>
            <span class="old">￥2699</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goDetail(){
      // 使用 JS 的形式进行路由导航

      //注意： 一定要区分 route 和 router 这两个对象
      //其中 this.$route 式路由参数对象 所有的路由中的参数 params query 都属于它
      //其中 this.$router 是一个路由导航对象，用它可以方便的使用 js 代码 实现路由的前进后退跳转到新的 URL 地址
      
      // 1. 这是最简单的
      // this.$router.push('/home/goodsinfo')

      // 2. 传递对象
      this.$router.push({ path: '/home/goodsinfo' })

      // 3. 传递命名的路由
      // router.push({ name: 'user', params: { userId: '123' } })
    
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  // 默认是竖着排列 为满足我们的需求 要在最外面的容器中 设置为流式布局 在加上 flex-wrap: wrap; 就不会溢出
  // flew 布局要注意
  // 流式布局 它会依次的把这些标签从上往下排 有些标题很长 多一行的话  少的标题 盒子的高度就会比实际的大  会留出空隙 来适应其他的盒子
  // 解决 办法： 第一种 给父元素 加 相对定位 子元素 加 绝对定位 然后 设置 bottom 为 原本 留出的像素
  //            第二种 改变 流式布局的 主轴方向 默认是 X轴  现在改成 Y 轴 并且设置两端贴端对齐 display: flex;flex-direction: column;justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  //考虑到网速慢得原因 图片还没有加载出来得时候 会挤在一起 我们就给它加一个 最小得高度 意思是 不管图片大小 没加载出来都可以有这么大
  //得版面，大得图片可以继续扩大
  min-height:100px;
  .goods-item {
    // 保证一行 放两个
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      // 充满盒子
      width: 100%;
    }
    .title {
      font-size: 13px;
    }
  }
  .info {
    background-color: #ddd;
    p{
      margin: 0;
      padding: 5px;
    }
    .price {
      .now {
        color: red;
        font-size: 13px;
        font-weight: bold;
      }
      .old {
        text-decoration: line-through;
        font-size: 11px;
        margin-left: 8px;
      }
    }
    .sell {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
  }
}
</style>
