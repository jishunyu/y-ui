<template>
  <div class="flex" style="height:100%;">
    <nav-bar></nav-bar>
    <div style="padding:20px;"><router-view/></div>
  </div>
</template>
<script>
import navBar from '@/components/nav-bar/nav-bar.vue'
export default {
  components:{
    navBar
  }
}
</script>t>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}


</style>
