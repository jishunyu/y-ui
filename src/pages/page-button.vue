<template>
    <div>
      <y-button>默认按钮</y-button>
      <y-button type="primary">蓝色按钮</y-button>
      <y-button type="success">绿色按钮</y-button>
      <y-button type="info">灰色按钮</y-button>
      <y-button @click="btnClick" :loading="loading.loading">loading按钮</y-button>
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue';
import yButton from '@/components/button/button.vue'
export default defineComponent({
  name: 'button',
  components: {
    yButton
  },
  setup(){
    const loading = reactive({
      loading:true
    })
    const btnClick = ()=>{
      loading.loading = !loading.loading
    }
    return {
      loading,
      btnClick
    }
  }
});
</script>
<style lang="scss">
  .flex button{
    margin-left: 10px;
  }
</style>