<!-- 分拨仓订单 -->
<template>
<div class='allocate'>
    <!-- 头部开始 -->
        <van-nav-bar
            title="分拨仓订单"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            class="nav"
        />
        <!-- 选项卡 -->
        <van-tabs 
        v-model="active" 
        swipeable
        title-active-color="#5478C4"
        line-width=130
        >
            <van-tab title="待支付"></van-tab>
            <van-tab title="已支付">内容 2</van-tab>
        </van-tabs>
        {{active}}
        <!-- 内容 -->
        <div class="content">
            <div class="box">
                <div class="top"><i class="left iconfont icon-yiwancheng"></i> 05月20日 10点 <i class="right iconfont icon-lajitong"></i></div>
                <ul>
                    <li>购买数量<span>2格 ( 共20平方 )</span></li>
                    <li>开始时间 <span>2019-05-23 00:00:00</span></li>
                    <li>结束时间 <span>2019-07-23 00:00:00</span></li>
                    <li>购买月份 <span>2 个月</span></li>
                </ul>
            </div>
            <div class="bottom">
                总数:
                <span class="proqtys_c">2</span>
                月
                <span class="qtys_c">2</span>
                格
                总费用:<span class="del_price">￥1000</span>
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
    active:''
};
},
computed: {},
watch: {},
methods: {
    onClickLeft(){
        this.$router.back(-1);
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
    .allocate{
        padding:50px 0 ;
        width: 100%;
        height: 100%;
        // 顶部开始
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
            // 内容开始
            .content{
                width: 100%;
                padding: .3rem;
                background:rgba(255,255,255,1);
                .box{
                    width: 100%;
                    box-shadow:0px 0px 16px 0px rgba(35,24,21,0.1);
                    border-radius:.16rem;
                    overflow: hidden;
                    margin-bottom: .3rem;
                    .top{
                        width:100%;
                        height:.84rem;
                        line-height: .84rem;
                        background:rgba(221,232,255,1);
                        font-size:.28rem;
                        font-family:PingFang-SC-Bold;
                        // font-weight:bold;
                        color:rgba(84,120,196,1);
                        padding: 0 .3rem;
                        .left{
                            margin-right: .19rem;
                        }
                        .right{
                            float: right;
                        }
                    }
                    ul{
                        width: 100%;
                        padding: .15rem .3rem;
                        li{
                            width: 100%;
                            font-size:.24rem;
                            font-family:PingFang-SC-Regular;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                            padding: .15rem 0;
                            span{
                                float: right
                            }
                        }
                    }
                }
                .bottom{
                    font-size:.28rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    text-align: right;
                    margin:.1rem 0;
                    span{
                       color: #5478C4;
                       font-size: .32rem;
                    }
                    .del_price{
                        color: #DF2F2F;
                    }
                }
            }
    }
</style>