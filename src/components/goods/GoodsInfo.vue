<template>
  <div class="goodsinfo-container">
    <!-- 因为实现的是半场动画 只能用钩子函数 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <!-- 购物车 小球 -->
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper> -->
          <swiper :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥2399</del>&nbsp;&nbsp;
            销售价：
            <span class="now_price">￥2199</span>
          </p>
          <p>
            购买数量：
            <numberbox @getCount="getSelectedCount(count)" :max="stock_quantity"></numberbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
            <!-- 分析：如何实现加入购物车的时候，拿到选择的数量 -->
            <!-- 1. 分析发现： 按钮输入 goodsinfo 页面 数字 输入 numberbox 组件 -->
            <!-- 2. 由于涉及到父子组件的嵌套，无法直接在 goodsinfo 页面中 直接获取到 选中商品的数量 -->
            <!-- 3. 解决方法： 子组件向父组件传值（事件调用机制）-->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法，同时把数据作为参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <!-- 注意： 在获取数据的时候，要将 id 传过去，这才是对应的图文介绍 我这里省略，因为这是假数据 -->
        <mt-button type="primary" size="large" plain @click="goDesc()">图文介绍</mt-button>
        <!-- br 没用 就说明父元素是 流式布局 -->
        <mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import numberbox from "../subcomponents/goodsinfo_numberbox.vue";
export default {
  data() {
    return {
      stock_quantity: 60, // 购物车的最大值
      ballFlag: false, // 控制 隐藏和显示 的小球的标识符
      selectedCount: 1 // 默认选中数量为1
    };
  },
  components: {
    swiper,
    numberbox
  },
  methods: {
    goDesc() {
      // 点击使用编程式导航跳转到 图文介绍页面
      // 第二种 编程式导航方法 2. 传递对象 如果获取到了 id 值的话就可以使用第三种方法
      this.$router.push({ path: "/home/goodsdesc" });
    },
    goComment() {
      // 去商品评论页面
      this.$router.push({ path: "/home/goodscomment" });
    },
    addToShopCar() {
      // 添加到购物车
      this.ballFlag = !this.ballFlag;
      // { id：商品的id， count：要购买的数量， price：商品的单价， selected： false}
      // 拼接出一个要保存到 store 中 car 数组里的商品对象
      var goodsinfo = [{
        id: 9,
        title: "小米 （MI） 小米9 64G 全网通",
        count: this.selectedCount,
        price: 2999,
        selected: false
      },{
           id: 11,
        title: "小米 （MI） 小米play 64G 全网通",
        count: this.selectedCount,
        price: 1999,
        selected: false
        }];
      // 调用方法 将商品加入购物车
      this.$store.commit("addToCar", goodsinfo);
    },
    beforeEnter(el) {
      // 起始位置
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      // 分析 小球优化问题
      // 1. 先分析导致 动画 不准确的 根本原因:我们把小球的 最终位置 写死了,已经局限在了某一分辨率下的 滑动条 未滚动的情况下
      // 2. 只要分辨率和测试的时候不一样,或者滚动条有一定的滚动距离之后,问题就出现了
      // 3. 因此,经过分析,发现:不能把小球的终点位置坐标写死,而是应该根据不同的情况,动态的计算我们这个坐标值
      // 4. 得出解题思路:先得到 徽标得 横纵坐标 再得到 小球的 横纵坐标,然后 让 x y 值求差,得到结果,就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的位置
      //  获取小球的位置 通过 ref
      //  徽标的位置 比较特殊 为了简化操作 我们利用 dom 去解决问题 domObject.getBoundingClientRect()

      // 获取小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取徽标的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const XDirt = badgePosition.left - ballPosition.left;
      const YDirt = badgePosition.top - ballPosition.top;

      // 要加上 不然没有动画
      el.offsetWidth;
      // es6 的字符串拼接
      el.style.transform = `translate(${XDirt}px,${YDirt}px)`;
      // 这里有 bug
      el.style.transition = "all 1s cubic-bezier(.37,-0.1,1,.51)";
      // done 表示函数的引用
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count) {
      // 当子组件把 选中数量的值 传递给父组件的时候，把选中的数量的值 保存到 data 上
      this.selectedCount = count;
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden; // 这个可以解决 卡片 上面的空白

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    top: 411px;
    left: 78px;
  }

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
}
</style>
