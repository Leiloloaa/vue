<template>
  <div>
    <!-- 问题： -->
    <!-- 进入页面后 要先手动刷新 按钮才会有用 ？？？-->
    <!-- 如何解决此问题 -->
    <!-- 问题：因为 这个库存量是通过异步获取的 所以我们也不知道什么时候能够获取到  但是总有一刻 能够获取到-->
    <!-- 用 watch 属性监听，来监听父组件传递过来的 max 值，不管 watch 会被触发几次，但是最后一次肯定是一个合法的 max 数值 -->
    <!-- 用了 watch 就可以不用 :data-numbox-max="max" 我这是没有获取数据 所以还是要属性绑定死的值  -->
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <!-- <div class="mui-numbox" data-numbox-min="1"> -->
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <!-- 文本框有一个监听 文本框内容是否改变的事件 @change -->
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        value="1"
        @change="countChanged"
        ref="numbox"
      >
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>


<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    //初始化 数字选择框
    mui("mui-numbox").numbox();
    //测试 max 的值
    console.log(this.max);
  },
  methods: {
    countChanged() {
      // 每当文本框的数据被修改的时候，立即把最新的数据，通过事件调用，传递给父组件
      // console.log(this.$refs.numbox.value);
    }
  },
  props: ["max"],
  watch: {
    // 属性监听
    max: function(newVal, oldVal) {
      // 使用 js api 来设置 numbox 的最大值
      mui("mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
