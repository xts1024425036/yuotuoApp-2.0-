<template>
  <div class="wrap">
      <div class="top">
			  <i class="iconfont icon-fanhui"></i>
          注册
      </div>
      <ul>
          <li>
            <i class="iconfont icon-gongyingshangmingxi"></i>
            <div>
                <input type="text" placeholder="经销商名称">
            </div>
          </li>
          <li>
            <i class="iconfont icon-shop"></i>
            <div>
                <input type="text" placeholder="店铺名称">
            </div>
          </li>
          <li>
            <i class="iconfont icon-ren"></i>
            <div>
                <input type="text" placeholder="店铺联系人">
            </div>
          </li>
          <li>
            <i class="iconfont icon-iLinkapp-"></i>
            <div>
                <input type="text" placeholder="联系人电话">
            </div>
          </li>
          <li>
            <i class="iconfont icon-yanzhengma"></i>
            <div>
                <input class="yanzhen" type="text" placeholder="验证码">
                 <button>发送验证码</button>
            </div>
          </li>
          <li class="buttons">
                <button class="register">注册</button>
          </li>
          <li class="botton"><span>Copyright © 2019 YUNTUO</span></li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    ul,li{
        list-style: none;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .wrap{
        background: url(../../assets/images/log-in-bg.png)  no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        .top{
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            font-size:.32rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(255,255,255,1);
            i{
                display:inline-block;
                margin-left: -.5rem;
				float: left;
				font-size: .4rem;
            }
        }
        ul{
            margin-top: 1rem;
             input{
                height: 0.5rem;
                background:transparent;
                border-style: none;
                outline:none;
            }
            input::-webkit-input-placeholder { /* WebKit browsers */ 
               color: white;
                } 
            li{
                display: flex;
                align-items: center;
                margin-bottom: 0.8rem;
                i{
                    display:inline-block;
                    font-size: .45rem;
                    color: white;
                    margin-right: .36rem;
                }
                div{
                    width: 100%;
                    // width: 4.8rem;
                    display:inline-block;
                    // height: .7rem;
                    border-bottom: 1px rgba(255,255,255,1) solid;
                    padding-bottom: .16rem;
                    .yanzhen{
                        width: 50%;
                    }
                    button{
                        display:inline-block;
                        width:1.4rem;
                        height:.6rem;
                        line-height: .6rem;
                        background:rgba(67,115,187,1);
                        border-radius:.10rem;
                        font-size:.22rem;
                        font-family:PingFang-SC-Bold;
                        font-weight:bold;
                        color:rgba(255,255,255,1);
                        border-style: none;
                        float: right;
                        margin-right: .07rem;
                        margin-top: -.02rem;
                    }
                }
            }
             .buttons{
                    margin: 1.45rem 0 .88rem 0;
                    width: 100%;
                    button{
                        display: block;
                        width: 100%;
                        height:.8rem;
                        background:transparent;
                        border-radius:40px;
                        border-style: none;
                        line-height: .8rem;
                        font-size:.32rem;
                        font-family:PingFang-SC-Bold;
                        font-weight:bold;
                        color:rgba(255,255,255,1);
                        border:2px solid rgba(255,255,255,1);
                    }
                    button:first-child {
                        background:rgba(44,73,117,1);
                        border: 0;
                        // margin-bottom: .6rem;
                    }
                }
                .botton{
                    // text-align: center;
                    display: flex;
                    justify-content: center;
                    span{
                        font-size:.22rem;
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                    }
                }
            }
        }
</style>

