<template>
    <div>
        <!-- 头部开始 -->
        <!-- <div class="top_nav">
            <div class="top_menu">购物车</div>
            <div id="delete_all" class="top_right">清空</div>
        </div> -->
        <van-nav-bar
            title="购物车"
            right-text="清空"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <!-- 选择类型开始 -->
        <div class="refushcontent">
            <div id="sale_cart_id" class="bottom_cart_list sale_cart_main" style="width:100%;height: 87%;background:#f3f5f7;margin-top:12vw;padding-bottom: 22vw;" >
            </div>
        </div>
        <div class="select_popup_c select_body" data-pid="" style="top: 0px;">
            <div class="close"></div>
            <div class="supernatant txtc select_cate_c">
                <div class="title">请选择类型</div>
                <div id="services_type_id" class="supernatant-select flex wrap">
                    <div class="menu select" data-pid="0A" data-tid="level_C" data-mid="去结算前请仔细逐个检查送装类型">
                        <div class="menu-top">送装</div>
                        <div class="explain">含配送、拆包、安装</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                    <div class="menu" data-pid="1"  data-tid="level_B" data-mid="含打包服务，商家需提供打包材料">
                        <div class="menu-top">下样+送装</div>
                        <div class="explain">商家提供打包材料</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                    <div class="menu" data-pid="0B" data-tid="level_B" data-mid="包括送货、上样安装服务">
                        <div class="menu-top">送货+上样</div>
                        <div class="explain">从仓库提货到门店上样</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                    <div class="menu"  data-pid="4" data-tid="level_C" data-mid="含打包服务，商家需提供打包材料;不包括安装、理货服务">
                        <div class="menu-top">下样+返仓</div>
                        <div class="explain">商家提供打包材料</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                    <div class="menu" data-pid="2" data-tid="level_B" data-mid="不包括拆包、打包、安装等服务">
                        <div class="menu-top">只送货</div>
                        <div class="explain">不含拆包、打包、安装</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                    <div class="menu"  data-pid="3A" data-tid="level_B" data-mid="不包括送货、打包等服务">
                        <div class="menu-top" >只安装</div>
                        <div class="explain">不含送货、打包</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                    <div class="menu"  data-pid="3B" data-tid="level_B"  data-mid="不包括送货、打包等服务">
                        <div class="menu-top">只上样</div>
                        <div class="explain">不送货，只安装</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                    <div class="menu"  data-pid="3C" data-tid="level_B"  data-mid="含打包服务，商家需提供打包材料，不提供送货等其他服务">
                        <div class="menu-top">只下样</div>
                        <div class="explain">商家提供打包材料</div>
                        <div class="ok"><i class="iconfont icon-wancheng"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="why_type_is" style="border:1px solid #aaa9a9;border-radius:10px;margin-top:2vw;box-shadow:0 0 1vh #dedede; position: fixed;">
            <div class="red why_type_is_close"><i class="iconfont icon-round_close_light"></i></div>
            <p style="margin-top: 10vw;font-size: 6vw;text-align: center;">订单类型特别提醒</p>
            <p style="margin-top: 2vw;">1、只安装/只上样/只下样仅提供安装服务 </p>
            <p>2、只送货提供标准送货服务。 </p>
        </div>
        <div id="add_msg"></div>
        <div id="fixed_position_id" class="bottom_cart frame_bottom_cart">
            <div id="select_message" class="message">去结算前请仔细逐个检查送装类型</div>
            <div class="bottom_button_left">合计 : <span id="count_id"></span>  件货品</div>
            <div class="bottom_button" id="next_id">去结算</div>
            <div class="clear"></div>
        </div>
        <div id="menu_buttom_id"></div>
        <div id="my-confirm" class="my-confirm">
            <div class="cfm-body">
                <p class="title"><i class="iconfont icon-tixing"></i><span>确认</span></p>
                <div class="desc">
                </div>
                <div class="btns">
                    <div class="b-cancel">取消</div>
                    <div class="b-ok">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'shoppingCart',
        components: {

        },
        data() {
            return {

            };
        }
    };
</script>

<style scoped lang="less">
      .sale_cart_input{
                border-width: 0px;
                color: #ff3333;
                width: 18vw;
                font-weight: 600;
                font-size: 4vw;
            }
            body {
                padding: 0 0 0vw 0;
            }
            html{
                font-size: 50px;
            }
            .right {float: right;width: 41vw;}
            .right_1 img{width: 6vw;}
            .right_1 div{width: 24px;font-size: .24rem;}
            .right_1{
                float: right;
                width: 30%;
                height: auto;
                line-height: 21px;
                margin-top: .24rem;
                text-align: right;
            }
            .right_1 > * {
                text-align: center;
            }
            .left_cart_class {
                width: 68%;
                display: inline-block;
                font-size: 0.24rem;
                line-height: 5vw;
                color: #666;
            }

            #sale_cart_id{
                position: absolute;
                overflow-y: scroll;
                height: 28rem;
            }
            .cart_top_class{
                height: 13%;
                position: fixed;
                bottom: 0vw;
                width: 100%;
                background: #FFF;
                z-index: 150;
                height: 87%;
                overflow-y: scroll;
                border-bottom: solid #ccc 1px;
            }
            .cart_top_class .select_type{
                display: inline-block;
                width: 30%;
                text-align: center;
                height: 6vw;
                font-size: 4.5vw;
                line-height: 6vw;
                margin-top: 2vw;
            } 
            .bottom_cart .cart .count {
                line-height: 8vw;
                height: 8vw;
                width: 8vw;
                font-size: 6vw;
                top: 4vw;
                left: 0;
            }
            .bottom_cart .cart {
                width: 29vw;
            }
            .pop_remind{
                margin-left: 8vw;
                margin-top: 2vw;
                color: #730505;
            }
            .typeshowone{
                width: 89%;
            }
            .list_item_detail .seng_all_c{
                width: 35vw;
                text-align: right;
                color: #3952b1;
                display: inline-block;
                right: 15px;
                position: absolute;
                font-size: .24rem;
            }
            .seng_all_c .iconfont{
                float: right;
                font-size: inherit;
                color: #3952b1;
                margin-left: 1vw;
            }
            .type_why{
                margin: 2vw;
                left:0vw;
                position: absolute;
            }
            .type_why .iconfont{
                font-size: 7vw;
                margin: 0.5vw;

                left: 1vw;
            }
            #why_type_is{
                background-color: #fff;
                width: 96%;
                margin-left: 2vw;
                display: none;
                overflow-y: scroll;
                height: 62%;
                z-index: 999;
                top: 12vw;
            }
            .why_type_is_close{
                margin: 2vw;
                right: 0vw;
                position: absolute;
            }
            #why_type_is .icon-round_close_light{
                color: #ff3333;
                font-size: 7vw;
            }
            .bottom_cart {
                bottom: 1rem;
                position: fixed;
                height: 20vw;
                width: 100%;
                line-height: 8vw;
                border-top: none;
                background: #fff;
            }
            .section_text {
                left: 13vw;
            }
            .bottom_cart .message{
                background: #ffdfdf;
                text-align: center;
                color: #3e0e0e;
                font-size: 0.24rem;
            }
            .bottom_cart .bottom_button {
                background: #5478c4;
                color: #fdfeff;
                width: 28%;
                right: 1vw;
                position: absolute;
                font-size: 4.2vw;
                text-align: center;
                height: 8.3vw;
                line-height: 8.5vw;
                margin-top: 2.5vw;
                text-indent: 1vw;
                border-radius: 5vw;
                font-weight: 500;
                margin-right: 2vw;
                letter-spacing: 4px;
                font-family: PingFang-SC-Medium;
            }
            .bottom_button_left{
                display: block;
                float: left;
                font-size: 0.28rem;
                line-height: 13vw;
                margin-left: 6vw;
            }
            #count_id{
                color: #ff3333;
                font-size: 5vw;
            }
            #sale_cart_id.no_sale_incart:before{
                content: "";
                background: url() no-repeat;
                position: absolute;
                top: 20vw;
                background-size: 41vw;
                right: 14vw;
                width: 50vw;
                height: 52vw;
            }
            .no_sale_incart:after{
                content: "购物车空啦,快去添加货品吧";
                position: absolute;
                top: 65vw;
                right: 1vw;
                width: 73vw;
                font-size: 4vw;
                height: 35vw;
            }
            .bottom_nav .item {
                color: #999999;
            }
            .list_item_detail{
                width: 100%;
                padding: 0.1rem 15px;
                position: relative;
            }
            .list_item_detail .left{
                font-weight: bold;
            }
            .list_item_detail .left span,.list_item_detail .left > div{
                font-weight: normal;
            }
            .list_item_detail .left span{
                width: 17%;
                font-size: 0.24rem;
                color: #333333;
            }
            .content {
                width: 94%;
                border-radius:0.16rem;
                margin-left: 3vw;
                margin-top: 3vw;
                letter-spacing: 0.02rem;
            }
            // 选择类型开始
            .refushcontent{
                height: 11rem;
                overflow-y: scroll;
            }
            .detail_cart{
                background: #F0F0F0;
                color: #999999;
                display: inline-block;
                width: 24px;
                height: 24px;
                border: 1px solid rgba(240,240,240,1);

            }
            .detail_number_delete {
                border-radius: 4px 0 0 4px;
            }
            .detail_number_add {
                border-radius: 0 4px 4px 0;
            }
            .detail_number {
                display: inline-block;
            }
            .close_select, .close_why span {
                font-size: 0.38rem;
            }
            .select_popup_c {
                left: -300vw;
                position: fixed;
                display: block;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.6);
                z-index: 100;
            }
            .add_pro_bt_first {
                width: 36vw;
                top: 75%;
                position: relative;
                margin-left: 32vw;
                padding: 1vw 4vw;
                background: #5478c4;
                color: #fdfeff;
                font-size: 4.2vw;
                height: 8.3vw;
                line-height: 7vw;
                margin-top: 2.5vw;
                text-indent: 1vw;
                z-index: 99;
                border-radius: 5vw;
                font-weight: 500;
                letter-spacing: 4px;
                font-family: PingFang-SC-Medium;
            }

            body{background: #fff;}
            a{color: inherit;}
            .body-bg{
                background: #000;

                height: 100%;
                width: 100%;

            }

            .supernatant{
                position: absolute;
                bottom: 1rem;
                width: 100%;
                background: #f0f0f0;
                opacity: 1;
            }
            .supernatant .title{
                font-size: .36rem;
                color:#333;
                font-weight: 500;
                line-height: 3em;
                letter-spacing: .2em;
            }
            .supernatant-select{
                margin: .1rem 0;
                width: 100%;
                padding: 0 .3rem;

            }
            .menu{
                width: 48%;
                background: #fff;
                margin-bottom: .3rem;
                line-height: 2em;
                padding: .5em 0;
                position: relative;
            }
            .supernatant-select .menu:nth-child(odd){
                margin-right: 4%;
            }
            .menu-top{
                font-size: .28rem;
                color: #333;
                font-weight: bold;
                letter-spacing: .2em;
            }
            .explain{
                font-size: .24rem;
                color: #666;
                white-space: nowrap;
            }
            .ok{
                position: absolute;
                right: 0.4em;
                top: -.6em;
                display:none;
            }
            .icon-wancheng{
                font-size: .5rem;
                color: #5478C4;
            }

            .supernatant-select .select div{
                color:#5478C4;
            }

            .supernatant-select .select .ok{
                display: block;
            }
            .remark_class_{
                display: none;
            }


            /*自定义confirm*/
            .my-confirm{
                position: fixed;
                top:0;
                left: 0;
                width:100%;
                height:100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 200;
                align-items: center;
                display: none;
            }
            .my-confirm.on{
                display: -webkit-flex;
                display: flex;
            }
            .my-confirm .cfm-body{
                width:72%;
                background: #fff;
                margin: auto auto 38vw auto;
                border-radius: .16rem;
                text-align: center;
                padding: 0 .32rem;
            }
            .my-confirm .cfm-body .title{
                font-size: .32rem;
                padding: .48rem 0;
                letter-spacing: .3em;
                font-weight: bold;
            }
            .my-confirm .cfm-body .title i{
                color: #EE1F1F;
                margin-right: .3em;
                font-size: inherit;
                font-weight: normal;
            }
            .my-confirm .cfm-body .desc{
                text-align: left;
                line-height: .36rem;
                font-size: .24rem;
                color: #333;
            }
            .my-confirm .cfm-body .btns{
                padding: .48rem 0;
                display: -webkit-flex;
                display: flex;
            }
            .my-confirm .cfm-body .btns>div{
                font-size: .28rem;
                display: inline-block;
                border: 1px solid #5478C4;
                color: #5478C4;
                line-height: .72rem;
                border-radius: .36rem;
                flex:1;
                letter-spacing: .3em;
                text-indent: .3em;
            }
            .my-confirm .cfm-body .btns>div.b-ok{
                color: #fff;
                background: #5478C4;
                margin-left: 1em;
            }


            // 头部开始
        //  .top_nav{
        //     position: fixed;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 13vw;
        //     line-height: 14vw;
        //     z-index: 100;
        //     padding:0;
        //     background:#ffffff;
        //     color:#000000;
        //     box-shadow: 0 2px 1px #efefef;
        // }
        // .top_nav .top_left{
        //     position:absolute;
        //     left:2vw;
        //     top: 2px;
        //     z-index:1000;
        //     width: 8vw;
        //     height: 12vw;
        // }
        // .top_nav .back{
        //     /*background:url(../images/12.png) center center no-repeat;*/
        //     background-size: 3vw 5vw;
        // }
        // .top_nav .top_right{
        //     position:absolute;
        //     right:0;
        //     top:0;
        //     z-index:1000;
        //     width: 10vw;
        //     height: 14vw;
        // }
        // .top_nav .top_menu{
        //     width: 68vw;
        //     left: 15vw;
        //     display: block;
        //     position: absolute;
        //     font-size: 4.5vw;
        //     text-align: center;
        //     font-family: PingFang-SC-Medium;
        //     letter-spacing: 1vw;
        // }
</style>
