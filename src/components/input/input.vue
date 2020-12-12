<template>
    <input type="text" 
        :class="{'Y-inp-disabled' : disabled}"
        :disabled="disabled" 
        class="Y-inp" 
        :placeholder="placeholder">
</template>
<script lang="ts">
  import { defineComponent,PropType } from 'vue'
  export default defineComponent({
    name:'y-input',
    props:{
        placeholder:{
            type: String as PropType<string>,
            default: '请输入内容'
        },
        disabled:{
            type: Boolean as PropType<boolean>,
            default: false
        }
    }
  })
</script>
<style lang="scss" scoped>
    .#{$class-prefix} {
        &inp{
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 100%;
        }
        &inp-disabled{
            background: #f7f7f7;
        }
    }
</style>
