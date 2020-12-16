<template>
  <div class="flex" style="height:100%;">
    <nav-bar></nav-bar>
    <section class="section">
      <router-view/>
    </section>
  </div>
</template>
<script>
import navBar from '@/components/nav-bar/nav-bar.vue'
import { defineComponent } from 'vue';

export default {
  components:{
    navBar,
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.section{
  padding:30px;
  overflow: hidden;
  overflow-y: scroll;
  width:100%;
}
body{
  --color:#FF9500
}
</style>
