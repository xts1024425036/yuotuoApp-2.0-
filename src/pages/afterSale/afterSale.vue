<template>
    <div class="head-bg">
            <div class="head-bg-content new">
                <div class="txtc" style="color:#FFFFFF;">
                    <div class="money-text">售后服务</div>
                </div>
                <div class="list-items">
                    <ListItem>
                         <CeelList>
                            <router-link tag="div" to="/">
                                    <i class="left iconfont icon-test"></i>
                                    <span>取消订单</span>
                                    <i class="iconfont icon-jinru"></i>
                            </router-link>
                        </CeelList>
                         <CeelList>
                            <router-link tag="div" to="/">
                                    <i class="left iconfont icon-repair-line"></i>
                                    <span>我要维修</span>
                                    <i class="iconfont icon-jinru"></i>
                            </router-link>
                        </CeelList>
                    </ListItem>
                </div>
                <a href="tel:4008-135-000" class="customer-service flex">
                    <div class="txtl">客服电话</div>
                    <div class="txtc flex-item">4008-135-000</div>
                    <div class="txtr"><i class="iconfont icon-dianhua"></i></div>	
                </a>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'sfterSale',
        components: {

        },
        data() {
            return {

            };
        }
    };
</script>

<style scoped lang="less">
    body{background: #FFFFFF;}
            .head-bg{
                background:linear-gradient(0deg,#20C4ED,#2B38E5);
                width: 100%; 
                height: 2rem;
            }
            .head-bg-content{
                height: 3.7rem;
                padding: 0.4rem 0rem;
            }
            .money-text{
                font-size: 0.28rem;
                opacity: 0.6;
                margin-bottom: 0.4rem;
            }
            .money-number{
                font-size: 0.72rem;
                font-weight: bold;

            }
            .money-number span{
                font-size: 0.48rem;
                font-weight: bold;
            }
            // 列表开始
            .list-items{
                box-shadow:0 .02rem .38rem 0 #DDE8FB;
                width: 92%;
                margin: 0 auto;
            }
            // 服务电话开始
            .customer-service {
                width: 92%;
                height: 1.2rem;
                background: #fff;
                line-height: 1.2rem;
                margin: .3rem auto;
                border-radius: .6rem;
                padding: 0 0.4rem;
                color: #000;
                position: fixed;
                bottom: 55px;
                left: 3vw;
                box-shadow: 0px 9px 38px 0px rgba(221,232,251,0.6);
            }
            .customer-service .txtr {
                width: .8rem;
                height: .8rem;
                background: #FFE3D5;
                border-radius: 50%;
                line-height: 3.2em;
                text-align: center;
                margin: auto;
            }
            .txtl {
                text-align: left;
                color:#999;
            }
            .customer-service .txtc {
                font-size: .32rem;
                font-weight: bold;
                color: #333;
            }
            .icon-dianhua {
                font-size: .5rem;
                color: #EA6524;
            }
</style>