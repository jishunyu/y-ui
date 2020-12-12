<template>
    <div class="flex">
      <Y-button text="默认按钮"></Y-button>
      <Y-button type="primary" text="蓝色按钮"></Y-button>
      <Y-button type="success" text="绿色按钮"></Y-button>
      <Y-button type="info" text="灰色按钮"></Y-button>
      <Y-button text="默认按钮" @click="btnClick" :loading="loading.loading"></Y-button>
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue';
import YButton from '@/components/button/button.vue'
export default defineComponent({
  name: 'Home',
  components: {
    YButton
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