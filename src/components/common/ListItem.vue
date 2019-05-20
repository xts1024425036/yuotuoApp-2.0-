<template>
  <div class="list-item">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list-item{
            width:100%;
			background-color: #FFFFFF;
            border-radius: 0.16rem;
            box-shadow:0 .02rem .38rem 0 #DDE8FB;
            padding:0 0.3rem;
            margin: 0 auto;
        }
</style>
