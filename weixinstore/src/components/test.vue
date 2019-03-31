<template>
  <form action="">
    <div class="name">
      <label for="">姓名：</label><input v-model="formData.name" type="text">
    </div>
    <div class="discirption">
      <label for="">描述：</label><input v-model="formData.dis" type="text">
    </div>
    <div>
      <button @click="submit">提交</button>
      <button @click="kong">重置</button>
    </div>
  </form>
</template>

<script>
    export default {
        name: "test",
      data(){
          return {
            formData: {

            }
          }
      },
      methods:{
          kong() {
            for(let item in this.formData){
              delete this.formData[item]
            }
            console.log(this.formData)
          },
        submit() {
            console.log(this.formData);
        }
      }

    }
</script>

<style scoped>

</style>
