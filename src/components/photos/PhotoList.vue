<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <!--  这个解决 高亮问题 首先给class 加个冒号 属性绑定 后面就是表达式 数组里面的类是必须要有的 后面就是三元表达式
            <a :class="['mui-control-item', item.id == 0 ? ',mui-active':'']"
          -->
          <a class="mui-control-item mui-active" href="#item1mobile">推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">科技</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <!-- 如果获取到了图片，就可以用这个懒加载 -->
    <!-- <div>
      <ul>
        <li v-for="item in list" :key="item.id">
          <img v-lazy="item">
        </li>
      </ul>
    </div>-->
    <div>
      <ul class="photo-list">
        <router-link to="/home/photoinfo" tag= "li"> 
          <img src="../../images/1.jpg">
          <div class="info">
            <div class="info-title">
              <h1>室内装修就选贝壳，千万用户的选择</h1>
            </div>
            <div
              class="info-body"
            >我们提供很好的服务，从毛坯房开始设计，让你不会一脸懵逼。在未来，我确信你一定会比现在过的要更好，努力的人一定会获得更好的未来，机会也是留给有准备的人的。</div>
          </div>
        </router-link>
        <router-link to="/home/photoinfo" tag= "li">
          <img src="../../images/2.jpg">
          <div class="info">
            <div class="info-title">
              <h1>室内装修就选贝壳，千万用户的选择</h1>
            </div>
            <div
              class="info-body"
            >我们提供很好的服务，从毛坯房开始设计，让你不会一脸懵逼。在未来，我确信你一定会比现在过的要更好，努力的人一定会获得更好的未来，机会也是留给有准备的人的。</div>
          </div>
        </router-link>
        <router-link to="/home/photoinfo" tag= "li">
          <img src="../../images/3.jpg">
          <div class="info">
            <div class="info-title">
              <h1>室内装修就选贝壳，千万用户的选择</h1>
            </div>
            <div
              class="info-body"
            >我们提供很好的服务，从毛坯房开始设计，让你不会一脸懵逼。在未来，我确信你一定会比现在过的要更好，努力的人一定会获得更好的未来，机会也是留给有准备的人的。</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// 1. 导入 mui 的 js 文件
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      // cates:[]
      list: []
    };
  },
  created() {
    // getAllCategory()
  },
  mounted() {
    // 当 组件中的 DOM 结构被渲染好并放到页面中去后，会执行这个 钩子函数
    // 如果要操作元素，最好在 mounted 里面，因为，这个时候 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  mothods: {
    getAllCategory() {
      // 获取所有的图片分类
      // this.$http.get("").then(result => {
      //   if (result.body.status === 0) {
      //   根据项目文件说明，手动拼接出一个最完整的分类
      //     result.body.message.unshift({ title: "全部", id: 0 });
      //   }
      // });
      console.log("我已经在获取图片分类中...");
      // this.cates=result.body.message
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px 10px;
  padding-bottom: 0;
  li {
    background: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #999;
    position: relative;
    img {
      width: 100%;
      // 图片三像素问题 在设置好之后 图片下面会有一点多出来
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}

.info {
  padding: 2px;
  color: white;
  text-align: left;
  position: absolute;
  //这就表示 位置是在最下面
  bottom: 0;
  //设置背景颜色为 黑色 后面这个 0.4 是透明度
  background-color: rgba(0, 0, 0, 0.4);
  //为统一高度  因为图片中文字的多少不一样
  max-height: 90px;
  .info-title {
    h1 {
      font-size: 16px;
    }
  }
  .info-body {
    font-size: 14px;
  }
}
</style>
