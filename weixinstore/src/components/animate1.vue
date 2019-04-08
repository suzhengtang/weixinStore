<template>
    <div class="animate1">
        <div class="text">
            <textarea name="" id="taxtArea" v-model="contentText"></textarea>
            <input type="button" value="发布" @click="fabu()">
        </div>
        <div class="content">
            <ul class="content-all">
                <li class="content-li" v-for="item in liArr" id="ceshi">
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
    name: "animate1",
    data() {
        return {
            contentText: "",
            list: {},
            liArr: [
                {liText: "我是测试的文字", liTime: "2018-12-05 00:18:17"}
            ]
        }
    },
    created() {
        this.time();
    },
    methods: {
        fabu() {
            if(this.contentText !== ""){
                this.list.liText = this.contentText;
                this.list.liTime = this.time();
                this.liArr.unshift(this.list);
                this.list = {};
            }else{
              alert("请填写内容！")
            }
        },
        zhan() {
            alert("zhan");
        },
        cai() {
            alert("cai");
        },
        del() {
            $("#ceshi").remove();
        },
        time() {
            let time = "";
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let daty = date.getDate();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            month = month<10 ? "0"+month : month;
            daty = daty<10 ? "0"+daty : daty;
            h = h<10 ? "0"+h : h;
            m = m<10 ? "0"+m : m;
            s = s<10 ? "0"+s : s;
            return year+"-"+month+"-"+daty+" "+h+":"+m+":"+s;
        }
    }
}
</script>

<style lang="less" scoped>
    .animate1{
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
                padding: 0.2rem 0.1rem;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
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
