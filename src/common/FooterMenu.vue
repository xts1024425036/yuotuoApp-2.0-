<template>
    <div>
       <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o"> 首页</van-tabbar-item>
            <van-tabbar-item icon="search" dot>售后</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">下单</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
    export default {
         name: 'FooterMenu',
        data() {
            return {
                active: 0
            }
        },
        watch: {
            active:function (val,oldVal){
                console.log(val);
                switch(val){
                    case 0:
                    this.$router.push('/home');
                    break;
                    case 1:
                    this.$router.push('/afterSale');
                    break;
                    case 2:
                    this.$router.push('/downOrder');
                    break;
                    case 3:
                    this.$router.push('/shoppingCart');
                    break;
                    case 4:
                    this.$router.push('/my');
                    break;
                }
            }
        }
}
</script>

<style scoped lang="stylus">
</style>
