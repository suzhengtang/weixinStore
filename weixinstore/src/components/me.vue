<template>
    <div class="me" @click="ceshi">
        {{me}}
    </div>
</template>

<script>
export default {
    name: "me",
    data() {
        return {
            me: "jquery的学习"
        }
    },
    methods: {
        ceshi: function(){
            $(".me").hide(2000);
        }
    }
}
</script>

<style lang="less" scoped>
.me{
    color: red;
}
</style>


