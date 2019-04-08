<template>
    <div class="form-css">
      <!--<form action="">-->
        <ul>
          <li>
            <label for="">姓名：</label>
            <input v-model="formData.name" type="text" placeholder="请输入你的姓名">
          </li>
          <li>
            <label for="">爱好：</label>
            <input v-model="formData.love" type="text" placeholder="请填入你的爱好">
          </li>
        </ul>
        <button @click="formSubmit">提交</button>
        <button @click="formResult">置空</button>
      <!--</form>-->
    </div>
</template>

<script>
    export default {
      name: "form",
      data() {
        return {
          formData: {
            name: "",
            love: ""
          }
        }
      },
      methods: {
        formSubmit() {
          this.$emit("clickOn", this.formData);
        },
        formResult() {
          for(let item in this.formData){
            this.formData[item] = ""
          }
          console.log(this.formData);
        }
      }
    }
</script>

<style scoped>

</style>
