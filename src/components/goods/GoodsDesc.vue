<template>
  <div class="goodsdesc-container">
    <!-- 标题 -->
    <h3>Mi 6 骁龙835 全身玻璃</h3>
    <!-- <h3>{{ info.title }}</h3> -->
    <hr>

    <!-- 内容 -->
    <!-- <div class="content" v-html="info.content"></div> -->
    <div class="content">我是一只小青龙</div>
  </div>
</template>
 

<script>
export default {
  data() {
    return {
      info: {} // 图文数据
    };
  }
  // created(){
  //   this.getGoodsDesc()
  // },
  // methods: {
  //   // 获取数据
  //   // this.$route.params.id 是获取 id
  //   getGoodsDesc() {
  //     this.$http
  //         .get("api/goods/getdesc/" + this.$route.params.id)
  //         .then(result => {
  //           if (result.body.status === 0){
  //             this.info = result.bodu.message[0];
  //           }
  //         })
  //   }
  // }
};
</script>


<style lang="scss" scoped>
// 如果里面有图片没有显示出来的话 就将 scoped 去掉
//  然后在相对应的盒子里面 添加图片为 百分之百 宽度大小
.goodsdesc-container {
  h3 {
    font-size: 16px;
    color: #225aff;
    text-align: center;
    margin: 15px 0;
  }
  padding: 4px;
}
</style>
