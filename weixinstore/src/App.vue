<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script src="assets/js/base.js"></script>
<script>
// import { base } from "assets/js/base.js";
export default {
  name: 'App'
}
</script>

<style lang="less">
@import "assets/less/base.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
