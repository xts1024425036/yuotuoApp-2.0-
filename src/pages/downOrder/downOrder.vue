<template>
    <div>
       <div class="Status-bar"></div>
        <div class="nav-bar">
            <div class="search-bar">
                <i class="iconfont icon-ICON-search"></i>
                <div class="search-input"><input id="filter_search" type="text" placeholder="请输入货号、名称搜索"></div>
            </div>
            <div class="sort show_cate"><i class="iconfont icon-fenlei-copy"></i></div>
        </div>
        <div class="select_cate">
            <div id="shop_alltype_id" class="cate_class" style="width: 100%;">
            </div>
        </div>
        <div class="content refushcontent">
            <div id="list_category_id" class="sidebar" style="width: 26vw;    height: 94%;overflow-y: scroll;padding-bottom: 8vw;background-color: #F0F0F0;">
            </div>

            <div class="pro_main">
                <div id="select_cate_now" class="select_now_c">
                    <div class="select_now_item"></div>
                    <div class="select_now_item_delete"><i class="iconfont icon-round_close_light"></i></div>
                </div>
                <div class="clear"></div>
                <div id="shop_list_item" class="left pro_list withCycle">

                </div>
                <div id="add_bottom_id_back" class="btn-background cycle">
                    <div id="add_bottom_id" class="btn"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'downOrder',
        components: {

        },
        data() {
            return {

            };
        }
    };
</script>

<style scoped lang="less">
html{
                font-size: 50px;
            }
    .section_text {
                font-size: 0.24rem;
            }
            .refushcontent {
                margin-top: 0.01rem;
            }
            .btn-background .btn:before{
                content: "添加新品";
            }
            .pro_list.withCycle{
                max-height:100%;
                padding-bottom: 14vw;
            }
            .btn-background.cycle{
                width:auto;
                bottom: 100px;
                right: 15px;
            }
            .btn-background.cycle .btn{
                width: 56px;
                height: 56px;
                border-radius: 50%;
                font-size: 12px;
                background: #5478C4;
                color: #fff;
                margin: 0;
                display: -webkit-flex;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                box-shadow: 0px 2px 14px 0px rgba(84, 120, 196, 0.7);
                padding: 11px;
            }
            .btn-background.cycle .btn:before,.btn-background.cycle .btn:after{
                width:100%;
                line-height: 1;
            }
            .btn-background.cycle .btn:before{
                content: "添 加";
            }
            .btn-background.cycle .btn:after{
                content: "货 品";
            }
</style>