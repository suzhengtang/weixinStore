<template>
  <div class="box">
    <p class="ceshi1">{{ msg }}</p>
    <p class="ceshi2">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '今天把单位换算搞清楚了，明天开始写页面！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  // 单位换算；
  //0.28rem = 14px; 0.24rem  = 12px;

  .box{
    .ceshi1 {
      color: red;
      font-size: 14px;
    }
    .ceshi2{
      color: green;
      font-size: 0.28rem;
    }
  }
</style>
