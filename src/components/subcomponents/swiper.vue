<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中使用 v-for 渲染组件 -->
      <!-- 将来 谁使用 轮播图组件 就传递 lunbotuList -->
      <!-- 此时， lunbotuList 应该是 父组件向子组件传值来设置 -->
      <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" :class="{full:isfull}">
      </mt-swipe-item> -->
      <mt-swipe-item>
        <img src="../../images/1.jpg" alt="" :class="{full:isfull}">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/2.jpg" alt="" :class="{full:isfull}">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/3.jpg" alt="" :class="{full:isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>

  <!-- 分析 当轮播的图的宽度不一样时 改如何处理 -->
  <!-- 首页的轮播图我们一般都时设成 100% 的宽度 -->
  <!-- 在商品详情页面中，轮播图的图片 如果也使用宽高为100%的话 页面会不好看
       轮播图一般是高度100% 宽度 自适应
   -->
  <!-- 经过分析 得到问题的原因：首页中的轮播图 和详情中的轮播图，分歧点是 宽度
        是100% 还是自适应 -->
  <!-- 既然其他的方面都是没有冲突的，只是宽度有分歧，那么 我们可以定义一个属性，让 使用轮播图的调用者
        手动指定 是否为 100% 的宽度 -->
</template>

<script>
export default {
  data(){
    return{
      // lunbotuList:[
      //   { id: 1 , url="../../images/1.jpg"},
      //   { id: 1 , url="../../images/1.jpg"},
      //   { id: 1 , url="../../images/1.jpg"}
      // ]
    }
  },
  props:["isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;

  // 交集选择器
  // .mint-swipe-item {
  //   &:nth-child(1) {
  //     background-color: red;
  //   }
  //   &:nth-child(2) {
  //     background-color: blue;
  //   }
  //   &:nth-child(3) {
  //     background-color: green;
  //   }
  // }

  .img {
    // width: 100%;
    height: 100%;
  }
}

.full{
  width: 100%;
}
</style>
