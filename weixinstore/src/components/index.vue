<template>
  <div class="index">
    <div class="head">
      <h4 class="head-title">{{title}}</h4>
      <span class="icon-more">
        <img src="../assets/images/add.png" alt="更多">
      </span>
    </div>
    <div class="content">
      <div class="content-search">
        <div class="search-main">
          <input type="text" class="search-text">
          <p class="search-placeholder">{{search}}</p>
          <span class="search-icon"></span>
        </div>
      </div>
      <div class="content-main">
        <ul class="main-all">
          <li class="main-all-li">{{contentLi}}</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <ul class="footer-tab">
        <li class="tab-li" @click="tabChange()">
          <img class="tab-li-img" src="../assets/images/home.png" alt="首页">
          <p class="tab-li-text">{{home}}}</p>
        </li>
        <li class="tab-li" @click="tabChange">
          <img class="tab-li-img" src="../assets/images/tongxl.png" alt="通讯录">
          <p class="tab-li-text">{{tongxl}}</p>
        </li>
        <li class="tab-li" @click="tabChange">
          <img class="tab-li-img" src="../assets/images/fax.png" alt="发现">
          <p class="tab-li-text">{{fax}}</p>
        </li>
        <li class="tab-li" @click="tabChange">
          <img class="tab-li-img" src="../assets/images/me.png" alt="我的">
          <p class="tab-li-text">{{me}}</p>
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
      home: "首页",
      tongxl: "通讯录",
      fax: "发现",
      me: "我的",
      search: "搜索",
      contentLi: "内容部分明天开始做！",
    }
  },
  methods: {
    tabChange() {
      alert("我是单页面还是多页面开发呢！");
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
      position: relative;
      .head-title{
        text-align: center;
        line-height: 0.88rem;
        color: #fff;
        font-size: 0.34rem;
      }
      .icon-more{
        width: 0.4rem;
        height:0.4rem;
        position: absolute;
        top: 50%;
        margin-top: -0.2rem;
        right: 0.2rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .content{
      width: 100%;
      height: auto;
      background-color: #eee;
      .content-search{
        width: 100%;
        height: 1.10rem;
        border-bottom: 1px solid #cccccc;
        padding-top: 0.2rem;
        box-sizing: border-box;
        .search-main{
          width: 7.15rem;
          height: 0.7rem;
          margin: 0 auto;
          position: relative;
          .search-text{
            width: 100%;
            height: 100%;
            border-radius: 0.10rem;
            background-color: #fff;
          }
          .search-placeholder{
            font-size: 0.32rem;
            color: #888;
            position: absolute;
            left: 3.2rem;;
            top: 0.12rem;
            &:before{
              content: '';
              width: 0.32rem;
              height: 0.32rem;
              background: red;
              display: inline-block;
              position: relative;
              left: -0.1rem;
              top: 0.04rem;
            }
          }
          .search-icon{
            width: 0.32rem;
            height: 0.32rem;
            background-color: red;
            display: block;
            position: absolute;
            top: 0.18rem;
            right: 0.2rem;
          }
        }
      }
      .content-main{
        color: red;
        font-size: 0.4rem;
      }
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
