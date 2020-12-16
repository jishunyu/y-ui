<template>
    <div class="wrapper">
        <y-circular-progress></y-circular-progress>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import yCircularProgress from '@/components/circular-progress/circular-progress.vue'
export default defineComponent({
  name:'page-circular-progress',
  props: {
    
  },
  created(){
      console.log('进入额',yCircularProgress)
  },
  components:{
    yCircularProgress
  },
  setup(props, ctx){

  },
});
</script>

<style lang="scss" scoped>

</style>