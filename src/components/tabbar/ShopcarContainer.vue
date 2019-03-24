<template>
  <div class="shopcar-container">
    <div class="shop-list">

      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">

            <!-- 开关  -->
            <div class="mui-switch mui-switch-blue mui-switch-mini">
              <div class="mui-switch-handle"></div>
            </div>

            <img src="../../images/shouji.png">

            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.price }}</span>
                <numbox></numbox> 
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import numbox from "../subcomponents/shopcar_numberbox.vue";
export default {
  data() {
    return {
      goodslist: [
        {
           id: 9,
        title: "小米 （MI） 小米9 64G 全网通",
        count: this.selectedCount,
        price: 2999,
        selected: false
        },
        {
           id: 11,
        title: "小米 （MI） 小米play 64G 全网通",
        count: this.selectedCount,
        price: 1999,
        selected: false
        }
      ] // 购物车中所有的数据
    }
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
      if (idArr.length <= 0) {
        return;
      }
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .shop-list {
    .mui-card-content-inner{
       display: flex;
       align-items: center;
       padding: 0;
    }
    img {
      width: 80px;
      height: 80px;
    } 
    h1 {
        font-size: 13px;
        font-weight: bold;
    }
    .info {
      // display: flex;
      padding:0 5px;
      .price {
        display: flex;
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
