<!--  -->
<template>
  <div class='serve'>
      <!-- 头部开始 -->
    <van-nav-bar
        title="仓储服务"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        class="nav"
    />
      <!-- 列表开始 -->
      <div class="list-items">
        <ListItem style="border-radius: 0;">
            <CeelList>
							<router-link tag="div" to="/">
									<i class="left iconfont icon-homepage"></i>
									<span>平台仓租赁</span>
									<i class="iconfont icon-jinru"></i>
							</router-link>
						</CeelList>
            <CeelList>
                    <router-link tag="div" to="/">
                            <i class="left iconfont icon-activity"></i>
                            <span>分拨仓订单</span>
                            <i class="iconfont icon-jinru"></i>
                    </router-link>
            </CeelList>
        </ListItem>
    </div>
        <!-- 列表结束 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
  .serve{
    .nav{
      position:fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    padding:50px 0 0 0 ;
    .router-link-active{
      padding: .35rem 0;
      .left{
        font-size: .55rem;
      }
    }
  }
  
</style>