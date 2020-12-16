<template>
  <div>
    <div :id="id" class="Y-title" :class="[`Y-${type}`]">
      <a :href="`#${id}`" class="Y-miao">#</a>
      {{title}}
    </div>
    <p class="Y-lable">{{tablabel}}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Anchor',
    props: {
        id:{
            type:String,
        },
        type:{
          type:String,
          default:'max'
        },
        title:{
            type:String,
            default:'Calendar日历'
        },
        tablabel:{
            type:String,
            default:'常用的日历组件。'
        }
    },
    setup(){

    },
});
</script>

<style lang="scss" scoped>
    
  .#{$class-prefix}{
    &title{
      font-weight: bold;
      position: relative;
      padding: 20px 0;
    }
    &title:hover &miao{
      opacity: 1;
    }
    &max{
      font-size: 25px;
    }
    &min{
      font-size: 20px;
    }
    &miao{
      opacity: 0;
      color:$color;
      position: absolute;
      left: -16px;
    }
    &lable{
      font-size: 14px;
      color: #888888;
    }
  }
</style>