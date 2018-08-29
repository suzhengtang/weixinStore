<template>
  <div class="index">
    <div class="head">
      <h4 class="head-title">{{title}}</h4>
    </div>
    <div class="content">
      <p>{{content}}</p>
      <p>{{content}}</p>
    </div>
    <div class="footer">
      <ul class="footer-tab">
        <li class="tab-li">
          <img class="tab-li-img" src="../assets/images/home.png" alt="首页">
          <p class="tab-li-text">首页</p>
        </li>
        <li class="tab-li" @click="tabChange">
          <img class="tab-li-img" src="../assets/images/tongxl.png" alt="通讯录">
          <p class="tab-li-text">通讯录</p>
        </li>
        <li class="tab-li">
          <img class="tab-li-img" src="../assets/images/fax.png" alt="发现">
          <p class="tab-li-text">发现</p>
        </li>
        <li class="tab-li">
          <img class="tab-li-img" src="../assets/images/me.png" alt="我的">
          <p class="tab-li-text">我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: '微信',
      content: "我是内容",
      footer: "我是底部栏",
    }
  },
  methods: {
    tabChange() {
      alert("标签切换！");
    }
  }
}
</script>

<style lang="less" scoped>

  // 单位换算；
  //0.28rem = 14px; 0.24rem  = 12px;

  .index{
    width: 100%;
    height: 100%;
    background-color: #fff;
    .head{
      width: 100%;
      height: 0.88rem;
      background-color: #000;
      .head-title{
        text-align: center;
        line-height: 0.88rem;
        color: #fff;
        font-size: 0.34rem;
      }
    }
    .content{
      width: 100%;
      height: auto;
      background-color: #ccc;
    }
    .footer{
      width: 100%;
      height: 0.89rem;
      background-color: #fff;
      position: fixed;
      left: 0;
      bottom: 0;
      .footer-tab{
        width: 100%;
        height: 100%;
        border-top: 1px solid #dddddd;
        .tab-li{
          width: 25%;
          height: 100%;
          float: left;
          text-align: center;
          padding-top: 0.07rem;
          .tab-li-img{
            height: 0.48rem;
            width: auto;
            vertical-align: top;
          }
          .tab-li-text{
            font-size: 0.1rem;
          }
        }
      }
    }
  }
</style>
