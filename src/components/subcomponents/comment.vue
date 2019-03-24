<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-03-09 09-00-00
        </div>
        <div class="cmt-body">
          爱看星星的小石头
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          第2楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-03-09 09-00-00
        </div>
        <div class="cmt-body">
          爱看星星的小石头
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          第3楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-03-09 09-00-00
        </div>
        <div class="cmt-body">
          爱看星星的小石头
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          第4楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-03-09 09-00-00
        </div>
        <div class="cmt-body">
          爱看星星的小石头
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          第5楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-03-09 09-00-00
        </div>
        <div class="cmt-body">
          爱看星星的小石头
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          第6楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-03-09 09-00-00
        </div>
        <div class="cmt-body">
          爱看星星的小石头
        </div>
      </div>
    </div>
    <!-- 如果加了 plain 按钮就会被镂空 -->
    <mt-button type="danger" size="large" plain>加载更多</mt-button>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data(){
    return {
      msg:''// 评论输入的内容
    }
  },
  methods:{
    postComment(){

      
       console.log('提交了数据')
       //校验是否为空
       if(this.msg.trim().length === 0){
         return Toast("评论内容不能为空")
       }
       //发表评论
       //参数一 请求的URL地址
       //参数二 提交给服务器的数据对象 { content： this.msg } 
       //参数三 定义提交时候，表单中的数据的格式 { emulateJSON：true } 因为在项目中，我们经常要是用 post 方式请求，所以我们会在全局
       //定义一个参数
       //$route.params.id 获取传过来的 id
      //  this.$http.post(''+ this.$route.params.id, { content: this.msg.trim() })
      // 成功的回调函数
      // .then(function(result){
      //   if(result.body.status === 0){
      //  1. 拼接出一个评论对象
      //  var cmt ={
      //   user_name:"匿名用户",
      //   add_time:Data.now(),
      //   content:this.msg.trim()
      // },
      // this.comments.unshift(cmt)
      // this.msg=""
      // }
      // })
    }
  }
  
}
</script>

<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 18px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0px;
  }

  .cmt-list{
    .cmt-item{
      font-size: 13px;
      .cmt-title{
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body{
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
