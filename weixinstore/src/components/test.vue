<template>
  <div class="box">
    <form action="">
      <div class="name">
        <label for="">姓名：</label><input v-model="formDataTest.name" type="text">
      </div>
      <div class="discirption">
        <label for="">描述：</label><input v-model="formDataTest.dis" type="text">
      </div>
      <div>
        <button>提交</button>
        <button>重置</button>
      </div>
    </form>

    <item-vue @clickOn = "submit"></item-vue>
  </div>
</template>

<script>
  import itemVue from "./formPage.vue"
    export default {
        name: "test",
      components: {
        itemVue
      },
      data(){
          return {
            formDataTest: {
              name: "",
              dis: ""
            }
          }
      },
      methods:{
        submit(pa) {
          console.log(pa)
        }
      }

    }
</script>

<style scoped>

</style>
