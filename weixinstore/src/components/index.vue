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
          <input type="text" class="search-text" v-model="searchText" @blur="onBlur()" @focus="onFocus()">
          <p class="search-placeholder" :class="{'status':statusShow}">{{search}}</p>
          <span class="search-icon"></span>
        </div>
      </div>
      <div class="content-main">
        <ul class="main-all">
          <li class="main-all-li" v-for="(item, index) in dataMsg">
            <div class="li-left">
              <img src="../assets/images/head.png" :alt="item.title" class="li-left-head">
            </div>
            <div class="li-right">
              <div class="li-right-title">
                <h5>{{item.name}}</h5>
                <span>{{item.time}}</span>
              </div>
              <p class="li-right-dis">{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <ul class="footer-tab">
        <li class="tab-li" @click="tabChange()">
          <img class="tab-li-img" src="../assets/images/home.png" alt="首页">
          <p class="tab-li-text">{{home}}</p>
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
  name: "index",
  data() {
    return {
      title: "微信",
      home: "首页",
      tongxl: "通讯录",
      fax: "发现",
      me: "我的",
      search: "搜索",
      contentLi: "内容部分明天开始做！",
      searchText: "",
      statusShow: false,
      dataMsg: []
    };
  },
  created() {
    // this.$http.post('http://localhost:8088/post', formData).then((response) => {
    //     // success callback
    //     console.log(response.data);
    // }, (response) => {
    //       console.log("error");
    //     // error callback
    // });
    this.$http.get("/api/appData").then(
      response => {
        this.dataMsg = response.data.data.dataList;
      },
      response => {
        console.log("error");
      }
    );

    this.sortArr();
  },
  methods: {
    tabChange() {
      // alert("我是单页面还是多页面开发呢！");
      //以下是我上班（9/29）遇到的问题，解决方法如下：
      let arr = [];
      let arrA = [{ id: "1" }, { id: "2" }];
      let arrB = [
        { name: "zs", age: "20", like: "che", id: "1" },
        { name: "ls", age: "22", like: "fang", id: "2" }
      ];
      for (let i = 0; i < arrA.length; i++) {
        debugger;
        for (let item in arrA[i]) {
          if (item == "name") {
            arr = arrA;
          } else {
            arr = arrB;
          }
        }
      }
      console.log(arr);
    },
    onBlur() {
      //失去焦点
      if (this.searchText == "") {
        this.statusShow = false;
      } else {
        this.statusShow = true;
      }
    },
    onFocus() {
      //获得焦点
      this.statusShow = true;
    },

    // 以下是我上班（10/12）遇到的问题，解决方法如下：

// 传入一个数组
// 按照特定方式格式化
sortArr() {
    var arr=[
        {Code:'x',Quantity:1,ItemType:'normal'},
        {Code:'x',Quantity:2,ItemType:'normal'},
        {Code:'y',Quantity:1,ItemType:'spec'},
        {Code:'x',Quantity:5,ItemType:'normal'},
        {Code:'y',Quantity:2,ItemType:'spec'},
        {Code:'z',Quantity:1,ItemType:'normal'}
    ];
    var _arr = [],
        _t = [],
        _tmp;
        var newArr = [];
    // 按照特定的参数将数组排序将具有相同值得排在一起
    arr = arr.sort(function(a, b) {
        var s = a["Code"],
            t = b["Code"];
        return s < t ? -1 : 1;
    });
    if ( arr.length ){
        _tmp = arr[0]["Code"];
    }
    // 将相同类别的对象添加到统一个数组
    for (var i in arr) {
        if ( arr[i]["Code"] === _tmp ){
            _t.push( arr[i] );
        } else {
            _tmp = arr[i]["Code"];
            _arr.push( _t );
            _t = [arr[i]];
        }
    }
    // 将最后的内容推出新数组
    _arr.push( _t );
    console.log(_arr.length);
    newArr = _arr[0].concat(_arr[1],_arr[2]);
    console.log(newArr);
}
  }
};
</script>

<style lang="less" scoped>
// 单位换算；
//0.28rem = 14px; 0.24rem  = 12px;

.index {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .head {
    width: 100%;
    height: 0.88rem;
    background-color: #000;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    .head-title {
      text-align: center;
      line-height: 0.88rem;
      color: #fff;
      font-size: 0.34rem;
    }
    .icon-more {
      width: 0.4rem;
      height: 0.4rem;
      position: absolute;
      top: 50%;
      margin-top: -0.2rem;
      right: 0.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .content {
    width: 100%;
    height: auto;
    background-color: #eee;
    margin-top: 0.88rem;
    .content-search {
      width: 100%;
      height: 1.1rem;
      border-bottom: 1px solid #cccccc;
      padding-top: 0.2rem;
      box-sizing: border-box;
      .search-main {
        width: 7.15rem;
        height: 0.7rem;
        margin: 0 auto;
        position: relative;
        .search-text {
          width: 100%;
          height: 100%;
          border-radius: 0.1rem;
          background-color: #fff;
          padding: 0 0.2rem;
          box-sizing: border-box;
        }
        .search-placeholder {
          font-size: 0.32rem;
          color: #888;
          position: absolute;
          left: 3.2rem;
          top: 0.12rem;
          &:before {
            content: "";
            width: 0.32rem;
            height: 0.32rem;
            background: url("../assets/images/search.png") 0 0;
            background-size: 0.32rem auto;
            display: inline-block;
            position: relative;
            left: -0.1rem;
            top: 0.04rem;
          }
        }
        .status {
          display: none;
        }
        .search-icon {
          width: 0.32rem;
          height: 0.32rem;
          background: url("../assets/images/spick.png") 0 0;
          background-size: 0.32rem auto;
          display: block;
          position: absolute;
          top: 0.18rem;
          right: 0.2rem;
        }
      }
    }
    .content-main {
      width: 100%;
      height: 100%;
      background-color: #fff;
      padding-left: 0.2rem;
      box-sizing: border-box;
      .main-all {
        width: 100%;
        height: 100%;
        .main-all-li {
          width: 100%;
          height: 1.36rem;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          .li-left {
            float: left;
            width: 1.2rem;
            height: 100%;
            position: relative;
            .li-left-head {
              width: 1.01rem;
              height: 1.01rem;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              margin: auto;
            }
          }
          .li-right {
            float: left;
            width: 5.9rem;
            height: 100%;
            padding-top: 0.2rem;
            box-sizing: border-box;
            .li-right-title {
              width: 100%;
              height: 0.5rem;
              h5 {
                float: left;
                font-size: 0.34rem;
                font-weight: 400;
                color: #000;
              }
              span {
                float: right;
                font-size: 0.2rem;
                color: #aaa;
              }
            }
            .li-right-dis {
              color: #888;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 0.89rem;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    .footer-tab {
      width: 100%;
      height: 100%;
      border-top: 1px solid #dddddd;
      .tab-li {
        width: 25%;
        height: 100%;
        float: left;
        text-align: center;
        padding-top: 0.07rem;
        .tab-li-img {
          height: 0.48rem;
          width: auto;
          vertical-align: top;
        }
        .tab-li-text {
          font-size: 0.1rem;
        }
      }
    }
  }
}
</style>
