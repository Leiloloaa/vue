<template>
  <div class="photoinfo-container">
    <h3>标题</h3>
    <p class="subtitle">
      <span>发表时间：2019-03-14 09：30：00</span>
      <span>点击次数：20次</span>
    </p>
    <hr>


    <!-- 缩略图区域 -->
    <!-- 缩略图的 vue-preview 这个 和 我移除严格模式会起冲突  这是一个待解决的问题 -->
    <!-- 图片内容区域 --> 
    <!-- 项目文档中说明了 要用 v-html 渲染 内容 -->
    <!-- <div class="content" v-html="photoinfo.content"></div> -->
    <div class="content">
      最简单的就是好的，我们公司以客户为本，一心一意为客户服务，你来，你就赚到了。
    </div>
    <!-- 放置一个现成的评论 子组件 -->
    <!-- 3. 将组件放入页面 -->
    <cmt-box></cmt-box>
  </div>
</template>

<script>
// 1. 导入相应的组件
import comment from '../subcomponents/comment.vue'

export default {
  data(){
    return{}
  },
  components:{
    // 2. 注册相应的子组件 如果要穿 id 的话  还要加以个 props 属性 这就涉及到父组件向子组件传值了
    "cmt-box":comment
  }
}
</script>


<style lang="scss" scoped>
.photoinfo-container{
  padding: 3px;
  h3{
    color:#26A2FF;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
