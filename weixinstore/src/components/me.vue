<template>
    <div class="me">
        <button @click="down">{{btn1}}</button>
        <button @click="up">{{btn2}}</button>
        <button @click="togger">{{btn3}}</button>
        <div class="father"></div>
      <div class="url-ipt">
        <label for="">{{lableData}}</label>
        <input @blur="blurClick" v-model="iptMsg" type="text" placeholder="请输入你的w3账号">
      </div>
    </div>
</template>

<script>
export default {
    name: "me",
    data() {
        return {
            btn1: "展开",
            btn2: "收起",
            btn3: "切换",
          lableData: "su/zheng/tang/",
          iptMsg: ""
        }
    },
    methods: {
        down: function(){
            let arrA = ["1","2","3","4","2"];
            let arrB = ["1;111","2;222","3;333","4;444","2;222"]; //判断数组中是否有相同的元素，将相同的元素抛出
            let arrC = [];
            $(".father").slideDown(2000,function(){
                for(let i=0; i<arrB.length-1; i++){
                    for(let j=i+1; j<arrB.length; j++){
                        if(arrB[i] == arrB[j]){
                            arrC.push(arrB[i])
                        }
                    }
                }
                console.log(arrC);
            });
        },
        up: function(){
            $(".father").slideUp(2000);
        },
        togger: function(){
            $(".father").slideToggle(2000,function(){
                alert("我是切换完的回调函数！")
            });
        },
      blurClick(){
          let ipt = this.iptMsg;
          let iptArr = ipt.split('/');
          let iptArrData = [];
          for(let i=0; i<iptArr.length; i++){
            if(iptArr[i] !== ""){
              iptArrData.push(iptArr[i]);
            }
          }
          this.iptMsg = iptArrData.join('/');
      }
    }
}
</script>

<style lang="less" scoped>
.me{
    button{
        color: red;
    }
    .father{
        width: 2rem;
        height: 4rem;
        background: green;
        margin: 0.2rem auto;
    }
  input{
    border: 1px solid green;
    padding: 4px;
    margin-left: 8px
  }
}
</style>


