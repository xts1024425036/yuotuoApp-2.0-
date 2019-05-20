<template>
  <div class="home">

    <!-- 轮播开始 -->
			<van-swipe :autoplay="3000" style="height: 4.2rem">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img v-lazy="image" :src="image" />
				</van-swipe-item>
			</van-swipe>
    <!-- 轮播结束 -->

    <!-- 中间图开始 -->
    <div class="main">
      <div class="head-photo">
        <img src="../../assets/images/home_page/head-portrait.png">
        <span class="head-title">云驼宗关门店</span>
      </div>
      <div class="list-item-top" style="box-shadow:0 .06rem .3rem 0 #D8F0FE">
        <div class="main-massage flex">
          <div class="massage-left">
            <img src="../../assets/images/home_page/message.png">
          </div>
          <div class="massage-right flex-item">
            <div class="notification flex">
              <span class="dot"></span>
              <span class="flex-item">今日订单已送达</span>
              <span class="txtr">1小时前</span>
            </div>
            <div class="notification flex">
              <span class="dot"></span>
              <span class="flex-item">您有一个订单已延时</span>
              <span class="txtr">8分钟前</span>
            </div>
          </div>
        </div>
      </div>
		</div>
      <!-- 中间结束 -->

      <!-- 列表开始 -->
      <div class="list-items">
          <ListItem>
						<CeelList>
							<router-link tag="div" to="/">
									<i class="left iconfont icon-huoche"></i>
									<span>我要送装</span>
									<i class="iconfont icon-jinru"></i>
							</router-link>
						</CeelList>
						<CeelList>
								<router-link tag="div" to="/home/serve">
										<i class="left iconfont icon-cangku"></i>
										<span>仓储服务</span>
										<i class="iconfont icon-jinru"></i>
								</router-link>
						</CeelList>
						<CeelList>
							<router-link tag="div" to="/">
								<i class="left iconfont icon-repair-line"></i>
								<span>订单管理</span>
								<i class="iconfont icon-jinru"></i>
							</router-link>
						</CeelList>
				 </ListItem>
      </div>
         <!-- 列表结束 -->
				 
    <router-view></router-view>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  name: 'home',
   data() {
    return {
      images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  /* 轮播开始 */
  .myswipe{
    height: 4.2rem;
    img{
      width: 100%;
      height: 4.2rem;
    }
  }
  /* 轮播结束 */
  body{background: #FFFFFF;}
		.head-bg{
			width: 100%;
			background: #ffffff url(../../assets/images/home_page/banner.png) no-repeat;
			background-size:100% 100%;
		}
		.head-bg-content{
			height: 4.2rem;
			padding: 1.2rem 0rem;
			
		}
		.head-bg-content .txtc li{
			width:.16rem;
			height:.16rem;
			background:#D6D6D6;
			border-radius:50%;
			margin: .1rem;
			display: inline-block;
			margin-top: 2.6rem;
		}
		.head-bg-content .txtc .current{
			width:.2rem;
			height:.2rem;
			background: #fff;
		}
		.main{
			margin-top: -0.3rem;
		}
		.head-photo{padding: 0 0.3rem;position: relative}
		.head-photo img{
			border: .03rem solid #ffffff;
			border-radius: 50%;
			width:1rem;
		}
		.head-title{
			font-size: .24rem;
			font-weight: bold;
			color:#333333;
			margin: 0.1rem;
			position: absolute;
			top: 1.8em;
		}
		.main-massage{
			width: 100%;
			background:url(../../assets/images/home_page/background.png) no-repeat;
			background-size:100% 100%;
			height: 1.5rem;
			
		}
		.massage-left{
			margin: auto 0.3rem;
			width:.8rem;
			height:.8rem;
			background:#FFEDD9;
			border-radius:50%;
			text-align: center;
			line-height: .8rem;
		}
		.massage-right{margin: auto 0;}
		.notification{
			-webkit-align-items: center;
			align-items: center;
			color: #333;
			font-size: 0.32rem;
			padding: 0.6em 1.2em 0.6em 0;
			width: 100%;
		}
		.notification span{
			font-size: 0.26rem;
			color:#333333;
			
		}
		.dot{
			width:5px;
			height:5px;
			background:#333;
			border-radius:50%;
			margin-right: 0.3rem;
			display: inline-block;
		}
		.notification .txtr{
			color:#999999;
			
		}
		// 中间图结束
			.list-item-top{
			width: 92%;
			background-color: #FFFFFF;
			margin: .3rem auto;
			border-radius: 0.16rem;
		}

		// 列表开始
		.list-items{
			width: 92%;
    background-color: #FFFFFF;
    margin: .3rem auto;
    border-radius: 0.16rem;
			box-shadow:0 .02rem .38rem 0 #DDE8FB;
		}
</style>
