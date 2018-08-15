<template>
  <div class="box">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '我是测试的文字'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .box{
    p {
      color: red;
    }
  }
</style>
