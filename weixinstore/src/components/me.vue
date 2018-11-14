<template>
    <div class="me">
        <button @click="down">{{btn1}}</button>
        <button @click="up">{{btn2}}</button>
        <button @click="togger">{{btn3}}</button>
        <div class="father"></div>
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
}
</style>


