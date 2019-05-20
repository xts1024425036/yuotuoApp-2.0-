<!--  -->
<template>
    <div class='lease'>
        <!-- 头部开始 -->
        <van-nav-bar
            title="平台仓储租赁"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            class="nav"
        />
        <!-- 内容开始 -->
        <div class="content">
             <!-- 租期开始 -->
            <ul class="term">
                <li>租期</li>
                <li>月份: 
                    <div class="right">
                        请选择月份
                         <i class="iconfont icon-jinru"></i>
                    </div>
                </li>
            </ul>
            <!-- 租期日期开始 -->
            <ul class="start-drag">
                <li>起租日期</li>
                <li class="begin">开始: 
                    <div class="right">
                        请选择开始时间
                        <i class="iconfont icon-jinru"></i>
                    </div>
                </li>
                <li class="end">结束
                    <div class="right">
                        2019年4月21日
                    </div>
                </li>
            </ul>
            <!-- 数量开始 -->
            <ul class="number">
                <li>格子库数量</li>
                <li class="begin">数量:
                    <div class="right">
                        <input type="number" placeholder="请输入所需数量">
                       格
                    </div>
                </li>
                <li class="area">面积（10平米/格）<div class="right"><span>0</span>平方米</div></li>
                <li class="price">价格（25元/平米）<div class="right"><span>￥0.00</span></div></li>
            </ul>
        </div>
        <!-- 隐藏选月开始 -->
        <div class="show_mouth_number">
            <div class="shadow-title ">
                <div class="top"><i class="iconfont icon-cancel"></i></div>
                <div class="box">
                    <a class="select" href="#" data-pid="1">1个月</a>
                    <a href="#" data-pid="2" >2个月</a>
                    <a href="#" data-pid="3" >3个月</a>
                    <a href="#" data-pid="4" >4个月</a>
                    <a href="#" data-pid="5" >5个月</a>
                    <a href="#" data-pid="6" >6个月</a>
                    <a href="#" data-pid="7" >7个月</a>	
                    <a href="#" data-pid="8" >8个月</a>
                    <a href="#" data-pid="9" >9个月</a>
                    <a href="#" data-pid="10" >10个月</a>
                    <a href="#" data-pid="11" >11个月</a>
                    <a href="#" data-pid="12" >12个月</a>
                </div>	
            </div>
        </div>
        <!-- 底部开始 -->
        <div class="footer-bar">
           <ul>
               <li>
                   合计:
                   <span class="month">1</span>
                   个月
                   <span class="square">100</span>
                   平方
                   <span class="money">￥<span>250</span></span>
               </li>
               <li class="buttton">
                   去支付
               </li>
           </ul>
        </div>
    </div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    onClickLeft(){
        this.$router.back(-1)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

        .lease{
            padding:50px 0 ;
            width: 100%;
            height: 100%;
            position: relative;
            top: 0;
            left: 0;
            // 头部开始
            .nav{
                position:fixed;
                top: 0;
                left: 0;
                width: 100%;
                box-shadow:0px 1px 4px 0px rgba(35,24,21,0.1);
                .van-nav-bar__title{
                    font-size:.36rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                }
                .van-icon{
                    // color: #FF333333;
                    font-size:.36rem;
                }
            }
            // 头部结束
            // 内容开始
                .content{
                    width: 100%;
                    height: 100%;
                    background:rgba(255,255,255,1);
                    padding:.3rem;
                    ul{
                        width: 100%;
                        background:rgba(255,255,255,1);
                        box-shadow:0px 6px 20px 0px rgba(0, 0, 0, 0.1);
                        border-radius:.16rem;
                        margin-bottom: .3rem;
                        padding: .3rem;
                        li{
                            font-size:.32rem;
                            font-family:PingFang-SC-Regular;
                            font-weight:400;
                            color:rgba(51,51,51,1);
                            margin-bottom: .4rem;
                            .right{
                                display: inline-block;
                                float: right;
                                font-size:.28rem;
                                font-family:PingFang-SC-Regular;
                                font-weight:400;
                                color:rgba(187,187,187,1);
                                i{
                                    font-family: "iconfont" !important;
                                    font-size: 16px;
                                    font-style: normal;
                                    -webkit-font-smoothing: antialiased;
                                }
                                input{
                                    width: 1.95rem;
                                    height: .26rem;
                                    margin-right: .59rem;
                                    font-size:.28rem;
                                    font-family:PingFang-SC-Regular;
                                    font-weight:400;
                                    color:rgba(187,187,187,1);
                                }
                            }
                        }
                        li:first-of-type{
                            font-size:.32rem;
                            font-family:PingFang-SC-Bold;
                            font-weight:bold;
                            color:rgba(51,51,51,1);
                        }
                        li:first-of-type:before{
                            content: "";
                            width: 1vw;
                            height: 4vw;
                            background: #5478C4;
                            display: block;
                            float: left;
                            margin-right: 2vw;
                        }
                        .begin{
                            border-bottom:1px rgba(240,240,240,1) solid;
                            padding-bottom: .29rem;
                        }
                        .end{
                            color:rgba(102,102,102,1);
                            margin: 0;
                            .right{

                            font-size:.28rem;
                            font-family:PingFang-SC-Bold;
                            font-weight:bold;
                            color:rgba(51,51,51,1);
                            }
                        }
                    }
                    // 数量
                    .number{
                        .area,.price{
                            font-size:.28rem;
                            font-family:PingFang-SC-Regular;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                        }
                        .area{
                            .right{
                                font-family:PingFang-SC-Regular;
                                font-weight:400;
                                color:rgba(102,102,102,1);
                                span{
                                    font-family:PingFang-SC-Bold;
                                    font-weight:bold;
                                    color:rgba(51,51,51,1);
                                    margin-right: .2rem;
                                }
                            }
                        }
                        .price{
                            margin-bottom: 0;
                            .right{
                                font-family:PingFang-SC-Bold;
                                font-weight:bold;
                                color:rgba(223,47,47,1);
                            }
                        }
                    }
                    
                }
                // 隐藏开始
                .show_mouth_number{
                    left:0;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 101;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 .3rem;
                    .shadow-title{
                        background-color: #fff;
                        border-radius: .16rem;
                        .top{
                            width: 100%;
                            height: .9rem;
                            text-align: right;
                            line-height: .9rem;
                            i{
                                font-size: .64rem;
                                margin-right: .2rem;
                            }
                        }
                        .box{
                            a{
                                display: inline-block;
                                text-align: center;
                                border-radius: .27rem;
                                background: #f0f0f0;
                                font-size: 0.28rem;
                                color: #333333;
                                margin: 4% 3% 4% 3%;
                                width: 26%;;
                                height:.54rem;
                                line-height: .54rem;
                                background:rgba(240,240,240,1);
                            }
                            .select{
                                 background: #5478C4;
                                color: #FFFFFF;
                                font-weight: bold;
                            }
                        }
                    }
                }

            // 底部开始
            .footer-bar{
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                // position: absolute;
                bottom: 0;
                left: 0;
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 8px 0px rgba(35,24,21,0.1);
                padding: 0 .3rem;
                ul{
                    width: 100%;
                    height: 1rem;
                    line-height: 1rem;
                    li{
                        font-size:.28rem;
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        float: left;
                        span{
                            font-size:.35rem;
                            font-weight:bold;
                            color:rgba(51,51,51,1);
                        }
                        .month{
                            margin-left: .3rem;
                        }
                        .square{
                            margin-left: .3rem;
                        }
                        .money{
                            margin-left: .38rem;
                            color:rgba(223,47,47,1);
                            span{
                                color:rgba(223,47,47,1);
                            }
                        }
                    }
                    .buttton{
                        width:1.7rem;
                        height:.64rem;
                        line-height: .64rem;
                        margin-top: .16rem;
                        background:rgba(84,120,196,1);
                        border-radius:.32rem;
                        text-align: center;
                        font-size:.28rem;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        float: right;
                    }
                }
            }
        }

</style>