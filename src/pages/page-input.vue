<template>
  <div class="about">
    <y-input ></y-input>
  </div>
  <div class="about">
    <y-input disabled></y-input>
  </div>
</template>
<script>
  import { defineComponent } from 'vue'
  import yInput from '@/components/input/input.vue'
  export default defineComponent({
    name: 'input',
    components:{
      yInput
    }
  })
</script>
<style lang="scss" scoped>
.about{
  margin-top: 10px;
}
</style>
