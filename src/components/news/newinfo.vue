<template>
  <div class="newsinfo-container">
    <!-- 大标题  -->
    <h3 class="title">新闻资讯</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间</span>
      <span>点击：0次</span>
    </p>

    <hr>
    <!-- 新闻内容区域 -->
    <div class="content">
      #莫问归期的第一个 Vue 项目
      ##曾经有一份真挚的爱情放在我面前，我没有好好的珍惜
      ##等到失去的时候，我却后悔莫及
      ##如果，能给这份爱加一个期限，我希望是一万年
    </div>

    <!-- 评论区域 -->
    <com-box></com-box>
  </div>
</template>

<script>
// 1. 导入评论子组件
import comment from "../subcomponents/comment.vue";
export default {
  // data() {
  //   return {
  //     id: this.$route.params.id 将 URL 地址中传递过来的 ID 值，挂载到 data 上，方便调用
  //   }
  // }
  data(){
    return{}
  },
  components: {
    // 2. 注册子组件
    "com-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px; //页面中 左右边距一定要留出来
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 12px;
    color: #266add;
    display: flex;
    justify-content: space-between;
  }
  .content {
    height: 400px;
  }
}
</style>
