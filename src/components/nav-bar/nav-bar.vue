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
export default defineComponent({
    name:'navbar',
    setup(props,{}){
        const { ctx } = getCurrentInstance();
        let state = reactive({
          curPath:'/',
          tablist : [
            {
              title:'引导',
              children:[
                {
                  children:[
                    {
                      path : '/',
                      text:'安装'
                    }
                  ]
                }
              ]
            },
            {
              title:'组件',
              children:[
                {
                  lable:'基础组件',
                  children:[
                    {
                      path : '/case/button',
                      text:'Button 按钮'
                    }
                  ],
                },
                {
                  lable:'表单组件',
                  children:[
                    {
                      path : '/case/input',
                      text:'Input 输入框'
                    },
                    {
                      path : '/case/calendar',
                      text:'Calendar 日历'
                    },
                    {
                      path : '/case/numberBox',
                      text:'NumberBox 步进器'
                    }
                  ],
                },
                {
                  lable:'数据组件',
                  children:[
                    {
                      path : '/case/line-progress',
                      text:'LineProgress 线形进度条'
                    }
                  ],
                },
                {
                  lable:'反馈组件',
                  children:[
                    {
                      path : '/case/toast',
                      text:'Toast 消息提示'
                    },
                    {
                      path : '/case/noticeBar',
                      text:'NoticeBar 滚动通知 '
                    }
                  ],
                },
                {
                  lable:'导航组件',
                  children:[
                    {
                      path : '/case/tabs',
                      text:'Tabs 标签页 '
                    },
                    {
                      path : '/case/steps',
                      text:'Steps 步骤条 '
                    },
                    {
                      path : '/case/dropdown',
                      text:'Dropdown 下拉菜单'
                    },
                  ],
                },
                {
                  lable:'其他组件',
                  children:[
                    {
                      path : '/case/loading',
                      text:'Loading 数据加载'
                    }
                  ],
                }
              ]
            },
          ]
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
        width: 280px;
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