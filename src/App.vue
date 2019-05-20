<template>
  <div id="app">
     <!-- 页面开始 -->
    <keep-alive>
        <router-view/>
    </keep-alive>

    <!-- 底部开始 -->
    <footer-menu v-if='0'></footer-menu>
  </div>
</template>

<script>
import FooterMenu from '@/common/FooterMenu';
export default {
  name: 'App',
   components: {
            FooterMenu
        }
}
</script>

<style>
      #app{
        width: 100%;
        height: 100%;
      }
</style>
