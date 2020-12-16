<template>
    <div class="Y-circular">
        <div class="Y-circular-left">
            <div class="Y-cir-active-left"></div>
        </div>
        <div class="Y-circular-right">
            <div class="Y-cir-active-right"></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'y-circular-progress',
  props: {

  },
  mounted(){
      console.log(111)
  },
  components:{

  },
  setup(props, ctx){

  },
});
</script>

<style lang="scss" scoped>
    .#{$class-prefix}{
        &circular{
            width:100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &circular-left{
            position: relative;
            width: 45px;
            height: 100px;
            overflow: hidden;
        }
        &cir-active-left{
            width: 80px;
            height: 80px;
            border:5px solid transparent;
            border-radius: 50%;
            position: absolute;
            top:0;
            left:0;
            border-bottom:5px solid green;
            border-left:5px solid green;
            transform: rotate(-135deg);
            animation: circle_left 5s linear infinite;// 
        }
        &circular-right{
            position: relative;
            width: 45px;
            height: 100px;
            overflow: hidden;
        }
        &cir-active-right{
            width: 80px;
            height: 80px;
            border:5px solid transparent;
            border-radius: 50%;
            position: absolute;
            top:0;
            right: 0;
            border-top:5px solid green;
            border-right:5px solid green;
            transform : rotate(-135deg);
            animation: circle_right 5s linear infinite;// linear infinite /* 动画名称 */
        }
    }
    @keyframes circle_left{
        0%,50%{
            transform: rotate(-135deg);
        }
        100%{
            transform: rotate(45deg);
        }
    }
    @keyframes circle_right{
        0%{
            transform : rotate(-135deg);
        }
        50%,100%{
            transform : rotate(45deg);
        }
    }

</style>