<template>
    <div class="animate">
        <div class="text">
            <textarea name="" id="taxtArea" v-model="contentText"></textarea>
            <input type="button" value="发布" @click="fabu()">
        </div>
        <div class="content">
            <ul class="content-all">
                <li class="content-li" v-for="item in liArr">
                    <p class="li-text">{{item.liText}}</p>
                    <div class="li-pro">
                        <span class="pro-time">{{item.liTime}}</span>
                        <p class="pro-other">
                            <span class="zhan" @click="zhan()">0</span>
                            <span class="cai" @click="cai()">0</span>
                            <span class="del" @click="del()">删除</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "animate",
    data() {
        return {
            contentText: "11",
            liArr: [
                {liText: "111hkjhk", liTime: "2018-10-10 12:12:12"}
            ]
        }
    },
    created() {

    },
    methods: {
        fabu() {
            if(this.contentText !== ""){
                alert(this.contentText);
            }
        },
        zhan() {
            alert("zhan");
        },
        cai() {
            alert("cai");
        },
        del() {
            alert("del");
        }
    }
}
</script>

<style lang="less" scoped>
    .animate{
        width: 100%;
        height: auto;
        padding: 0.2rem;
        box-sizing: border-box;
        .text{
            width: 100%;
            height: 3rem;
            position: relative;
            textarea{
                width: 100%;
                height: 2rem;
                border: 1px soild #eee;
                resize: none;
                box-sizing: border-box;
                padding: 0.1rem;
                outline: none;
            }
            input{
                padding: 0.1rem 0.2rem;
                background: blue;
                color: #fff;
                position: absolute;
                right: 0;
                top: 2.1rem;
            }
        }
        .content{
            width: 100%;
            height: auto;
            background-color: #eeeeee;
            .content-li{
                width: 100%;
                height: 1.6rem;
                border-bottom: 1px solid #ddd;
                position: relative;
                .li-pro{
                    width: 100%;
                    height: auto;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    .pro-other{
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        span {
                            margin-left: 0.2rem;
                        }
                    }
                }
                
            }
        }
    }
</style>