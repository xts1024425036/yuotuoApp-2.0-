<template>
    <div>
		<!-- 头部开始 -->
        <div class="head-bg">
            <div class="head-bg-content">
                <div class="flex-item txtc">
                    <img src="../../assets/images/my_head/head-photo.png">
                    <p>云驼宗关门店</p>
                </div>
                <div class="head-user">
                    <i class="iconfont icon-wodedangxuan"><span class="head-bg-title">云驼测试员</span></i>
                </div>
            </div>
        </div>
		<!-- 优惠卷开始 -->
        <div class="select-money">
            <div class="select-money-icon flex">
				<router-link class="money-icon"  tag="div" to="/">
					<div class="balance"><i class="iconfont icon-yue"></i></div>
                    <div class="money-icon-text">余额</div>
				</router-link>
                <div class="money-icon">
                    <div class="balance" style="background: #DFEEFF;"><i class="iconfont icon-youhuiquan"></i></div>
                    <div class="money-icon-text">优惠券</div>
                </div>
                <div class="money-icon">
                    <div class="balance" style="background: #FFE6E6;"><i class="iconfont icon-hongbao"></i></div>
                    <div class="money-icon-text">红包</div>
                </div>
            </div>
        </div>
		<!-- 列表开始 -->
        <div class="info">
			<ListItem>
				<CeelList>
					<router-link tag="div" to="/">
							<i class="left iconfont icon-dingdan"></i>
							<span>货品资料</span>
							<i class="iconfont icon-jinru"></i>
					</router-link>
					<router-link tag="div" to="/">
							<i class="left iconfont icon-dizhi1"></i>
							<span>提货地址管理</span>
							<i class="iconfont icon-jinru"></i>
					</router-link>
					<router-link tag="div" to="/">
							<i class="left iconfont icon-bangzhuyufankui-zqr-"></i>
							<span>帮助与反馈</span>
							<i class="iconfont icon-jinru"></i>
					</router-link>
					<router-link tag="div" to="/">
							<i class="left iconfont icon-shezhi"></i>
							<span>设置</span>
							<i class="iconfont icon-jinru"></i>
					</router-link>
				</CeelList>
			</ListItem>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my',
        components: {

        },
        data() {
            return {

            };
        }
	};
</script>

<style scoped lang="less">
    .head-bg{
			width: 100%;
			background: #ffffff url(../../assets/images/my_head/bg-head.png) no-repeat;
			background-size:100% 100%;
		}
		.head-bg-content{
			height: 3.7rem;
			color:#FFFFFF;
			padding: .8rem .3rem;
			position: relative;
		}
		.head-bg-content .txtc img{
			border: 1px solid #ffffff;
			border-radius: 50%;
		}
		.head-bg-content .txtc p{
			font-size: .36rem;
			margin-top: .4rem;
			font-weight:bold;
			letter-spacing: 0.1rem;
		}
		.head-bg-content .head-user{
			position: absolute;
			bottom:2.6rem;
			right: 0.3rem;
		}
		.head-bg-title{
			font-size: .24rem;
			margin-left: 0.1rem;
		}
		.head-bg-content .txtr .icon-wodedangxuan{
			font-size: .26rem;
		}
		
		.select-money{
			height: 2.1rem;
			background: #ffffff;
			
		}
		.select-money-icon{
			padding: 0.3rem 0;
		}
		.money-icon{
			margin: auto;
		}
		.balance{
			width: 1rem;
			height:1rem;
			background-color:#FFF0CB;
			border-radius: 50%;
			display: flex;
		}
		.icon-yue{
			font-size: .44rem;
			color:#FFB400;
			margin:auto;
			line-height: 1rem;
		}
		.money-icon-text{
			font-size: .28rem;
			color:#333333;
			margin: 0.2rem auto;
			text-align: center;
		}
		.icon-youhuiquan{
			font-size: .44rem;
			color:#3680D3;
			margin:auto;
			line-height: 1rem;
		}
		.icon-hongbao{
			font-size: .44rem;
			color:#FF0000;
			margin:auto;
			line-height: 1rem;
		}
		
		.info{
			margin-top: 0.2rem;
			width: 100%;
			.list-item{
				border-radius: 0;
				margin: 0;
				// line-height: 1.8rem;
				.router-link-active{
					padding: .3rem 0;
				}
			}
		}
</style>