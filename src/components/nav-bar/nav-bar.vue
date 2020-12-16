<template>
    <div id="nav">
      <template v-for="(item,index) in state.tablist" :key="index">
        <div class="Y-title">
          {{item.title}}
        </div>
        <template v-for="(it,ind) in item.children" :key="ind">
          <div class="Y-lable" v-if="it.lable">
            {{it.lable}}
          </div>
          <template v-for="(i,id) in it.children" :key="id">
            <div class="Y-tab-item">
              <router-link :class="{'Y-tab-active':state.curPath === i.path}" :to="i.path">
                {{i.text}}
              </router-link>
            </div>
          </template>
        </template>
      </template>
    </div>
</template>


<script>
import { defineComponent,getCurrentInstance, reactive, watch, watchEffect } from 'vue';
import tablist from './config'
export default defineComponent({
    name:'navbar',
    setup(props,{}){
        const { ctx } = getCurrentInstance();
        let state = reactive({
          curPath:'/',
          tablist
        })
        watchEffect(() => {
          const path = ctx.$router.currentRoute.value.path
          state.curPath = path
        })
        return {
          state
        }
    }
})
</script>
<style lang="scss" scoped>
    #nav {
        padding: 30px;
        min-width: 280px;
        box-sizing: border-box;
        background: #f7f7f7;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
    }

    .#{$class-prefix} { 
      &title{
        font-weight: bold;
        color:#2c3e50;
        padding: 10px 20px;
        font-size: 14px;
      }
      &lable{
        font-size: 12px;
        padding: 20px 20px 10px;
        color:#000000;
      }
      &tab-item{
          padding: 10px 20px;
          box-sizing: border-box;
          overflow: auto;
          font-size: 14px;
      }
      &tab-active{
        color: $color;
      }
    }
    
</style>