<template>
  <div class="cell">
       <!-- <i class="left iconfont icon-huoche"></i><span>我要送装</span><i class="iconfont icon-jinru"></i> -->
       <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CeelList',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

    .cell div {
			display: -webkit-flex;
			display: flex;
			-webkit-align-items: center;
			align-items: center;
			color: #333;
			font-size: 0.32rem;
            padding: .5rem 0;
            border-bottom: 1px solid #F0F0F0;
        }
     /* .cell div:last-of-type {
        border-bottom: 0;
    } */
    .cell div span{
		 	-webkit-box-flex:1;
			-webkit-flex:1;
			flex:1;
         }
     .cell div i.left{
        font-size: 0.44rem;
			color:#5478C4;
            /* width:1.5em; */
            margin-right: .3rem;
		}
</style>
