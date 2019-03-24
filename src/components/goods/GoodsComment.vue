<template>
  <div>
    <cmtbox></cmtbox>
    <!-- 在获取真实数据的时候 要
    cmtbox :id="this.$router.params.id" -->
  </div>
</template>

<script>
import cmtbox from '../subcomponents/comment.vue'


export default {
  components:{
    cmtbox
  }
}
</script>

<style lang="scss" scoped>

</style>
