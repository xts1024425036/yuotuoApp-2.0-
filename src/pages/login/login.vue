<template>
    <div class="login">
        <div class="wrap">
            <ul>
                <li class="log">
                    <img src="../../assets/images/log-in-logo.png" alt="">
                </li>
                <li class="inputs">
                    <div class="username">
                        <i class="iconfont icon-iLinkapp-"></i>
                        <div class="username-input">
                            <input type="text" placeholder="手机号">
                        </div>
                    </div>
                    <div class="password">
                        <i class="iconfont icon-yanzhengma"></i>
                        <div class="password-input">
                            <input type="text" placeholder="验证码">
                            <button>发送验证码</button>
                        </div>
                    </div>
                    <div class="explain">
                            点击登录，即表示已阅读并同意<router-link to="/login/serviceAgreement" tag="span">《APP用户协议》</router-link> >和<span>《隐私政策》</span>
                    </div>
                </li>
                <li class="buttons">
                    <button class="go">登录</button>
                        <button class="register">注册</button>
                </li>
                <li class="botton"><span>Copyright © 2019 YUNTUO</span></li>
            </ul>
        </div>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'HomeY',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul,li{
        list-style: none;
    }
    .login{
        width:100%; 
        height:100%; 
    }
    .wrap{
        background: url(../../assets/images/log-in-bg.png)  no-repeat;
        // position:fixed; 
        // top: 0; 
        // left: 0; 
        width:100%; 
        height:100%; 
        // min-width: 100px; 
        // z-index:-10; 
        // zoom: 1; 
        // background-color: #fff; 
        // background-repeat: no-repeat; 
        background-size: cover; 
        -webkit-background-size: cover; 
        -o-background-size: cover; 
        background-position: center 0; 
        display: flex;
        align-items: center;
        justify-content:center ;
        padding: 0 1rem;
        .log{
            width: 100%;
            display: flex;
            justify-content:center ;
            margin-bottom: 1.3rem;
            img{
                width: 1.82rem;
                height: 1.26rem;
            }
        }
        .inputs{
            input{
                height: 0.5rem;
                background:transparent;
                border-style: none;
                outline:none;
            }
            input::-webkit-input-placeholder { /* WebKit browsers */ 
               color: white;
                } 
            .username{
                display: flex;
                align-items: center;
                margin-bottom: 0.8rem;
                i{
                    display:inline-block;
                    font-size: .45rem;
                    color: white;
                    margin-right: .36rem;
                }
                .username-input{
                    width: 100%;
                    // width: 4.8rem;
                    display:inline-block;
                    // height: .7rem;
                    border-bottom: 1px rgba(255,255,255,1) solid;
                    padding-bottom: .16rem;

                }
            }
            .password{
                display: flex;
                align-items: center;
                margin-bottom: 0.19rem;
                i{
                    display:inline-block;
                    font-size: .45rem;
                    color: white;
                    margin-right: .36rem;
                }
                .password-input{
                    width: 100%;
                    display:inline-block;
                    border-bottom: 1px rgba(255,255,255,1) solid;
                    padding-bottom: .16rem;
                    input{
                        width: 50%;
                    }
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
            .explain{
                text-indent: 2em;
                font-size:.22rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                // line-height:.48rem;
                padding: 0 0 0 .8rem;
                span{
                    color:rgba(67,115,187,1);
                    font-size:.22rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    line-height:.48rem;
                }
            }
        }
        .buttons{
            margin: .8rem 0 1.9rem 0;
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
                margin-bottom: .6rem;
            }
        }
        .botton{
            text-align: center;
            span{
                 font-size:.22rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
    }
</style>
