<!-- 订单管理 -->
<template>
    <div>
        <div class="head-bg">
            <div class="head-bg-content">
                <div class="top">
                    <div class="money-text">本周送装费用</div>
                    <div><span>￥</span><span class="money-number">0</span></div>
                </div>
                <!-- 单数开始 -->
                <div class="list-item">
                    <div class="send flex txtc">
                        <div class="send-team">
                            <i class="iconfont icon-daiwancheng"></i>
                            <div class="send-text">待送装单数</div>
                            <div id="need_pay" class="money-r">0</div>
                        </div>
                        <div class="send-team">
                            <i class="iconfont icon-jin_fill"></i>
                            <div class="send-text">今日送装单数</div>
                            <div id="today_del" class="money-r">0</div>
                        </div>
                        <div class="send-team">
                            <i class="iconfont icon-benzhou"></i>
                            <div class="send-text">本周送装单数</div>
                            <div id="week_del" class="money-r">0</div>
                        </div>
                    </div>
                </div>
                <!-- 列表开始 -->
                <div class="list-items">
                    <ListItem>
                            <CeelList>
                                <router-link tag="div" to="/">
                                        <i class="left iconfont icon-daizhifu"></i>
                                        <span>待支付单</span>
                                        <i class="iconfont icon-jinru"></i>
                                </router-link>
                            </CeelList>
                            <CeelList>
                                    <router-link tag="div" to="/home/serve">
                                            <i class="left iconfont icon-dingdangenzong"></i>
                                            <span>订单跟踪</span>
                                            <i class="iconfont icon-jinru"></i>
                                    </router-link>
                            </CeelList>
                            <CeelList>
                                <router-link tag="div" to="/">
                                    <i class="left iconfont icon-dingdanguanli"></i>
                                    <span>订单异常</span>
                                    <i class="iconfont icon-jinru"></i>
                                </router-link>
                            </CeelList>
                            <CeelList>
                                <router-link tag="div" to="/">
                                    <i class="left iconfont icon-dingdanquxiao"></i>
                                    <span>已取消单</span>
                                    <i class="iconfont icon-jinru"></i>
                                </router-link>
                            </CeelList>
                    </ListItem>
                </div>
            </div>
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
     body{background: #FFFFFF;}
            .head-bg{
                background:linear-gradient(0deg,#20C4ED,#2B38E5);
                width: 100%; 
                height: 2.7rem;
            }
            .head-bg-content{
                height: 3.7rem;
                padding: 0.4rem 0rem;
                .top{
                    color: white;
                    text-align: center;
                     .money-text{
                        font-size: 0.28rem;
                        opacity: 0.6;
                        margin-bottom: 0.4rem;
                    }
                    div{
                        font-size: 0.48rem;
                        .money-number{
                             font-size: 0.72rem;
                            font-weight: bold;
                            span{
                                font-size: 0.48rem;
                                font-weight: bold;
                            }
                        }
                    }
                }
                .list-item{
                     box-shadow:0 .02rem .38rem 0 #DDE8FB;
                     margin-top: 0.5rem;
                     padding: 0 .3rem;
                      .send{
                             padding: 0.4rem 0.3rem;
                             background-color: white;
                             border-radius: 0.16rem;
                             .send-team{
                                  margin: auto;
                                 line-height: 0.5rem;
                                 i{
                                     color: #5478C4;
                                 }
                                 .icon-daiwancheng{font-size: .34rem;}
                                 .icon-jin_fill{font-size: .4rem;}
                                 .icon-benzhou{font-size: .38rem;}
                                 .send-text{font-size: .24rem;}
                                 .money-r{font-size: .32rem;}
                             }
                          }
                }
            }
            	// 列表开始
		.list-items{
                    width: 92%;
                    background-color: #FFFFFF;
                    margin: .3rem auto;
                    border-radius: 0.16rem;
                    box-shadow:0 .02rem .38rem 0 #DDE8FB;
                }
           
            // .money-number{
            //     font-size: 0.72rem;
            //     font-weight: bold;

            // }
            // .money-number span{
            //     font-size: 0.48rem;
            //     font-weight: bold;
            // }

           
            
            
            
            // .icon-dingdangenzong,.icon-dingdanguanli{
            //     font-size: 0.36rem;
            //     color:#5478C4;
            //     width:1.8em;
            // }
            // .icon-dingdanquxiao{
            //     font-size: 0.45rem;
            //     color:#5478C4;
            //     width:1.4em;
            // }
            // body.ios .main_top {
            //     height: 60px;
            // }
</style>