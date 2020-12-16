<template>
  <div>
    <Anchor id="线性进度条" title="线性进度条" type="max" tablabel="基础的线性进度条。"></Anchor>
    <Anchor id="Calendar1" title="线性进度条" type="min" tablabel="基础的线性进度条用法。"></Anchor>
    <div style="margin-top:50px;">
      <y-line-progress width="100%" progress="30" bgColor="var(--color)"></y-line-progress>
    </div>
    <div style="margin-top:50px;">
      <y-line-progress width="400" progress="100" bgColor="var(--color)"></y-line-progress>
    </div>
    <Profile></Profile>
    <div v-highlight v-html="textCode"></div>
    <div style="height:1000px;"></div>
  </div>
</template>
<script>
import { defineComponent,getCurrentInstance } from "vue";
import yLineProgress from "@/components/line-progress/line-progress.vue";
import Anchor from './page-components/nav';
// import buttons from './docs/button.md';
// import marked from 'marked';
export default defineComponent({
  name: "page-line-progress",
  components: {
    yLineProgress,
    Anchor,
  },
  mounted(){
    // console.log(getCurrentInstance())
    // var renderer = new marked.Renderer();
    // renderer.heading = function(text, level, raw) {
    //   console.log('----',text, level, raw)
    //   return `<a href='#xxx' class="anchor-fix">#</a><h${level} id='xxx'>${text}</h${level}>\n`;
    // };
    // marked.setOptions({
    //   renderer
    // })
    // console.log(marked('## Button 按钮(#divtop)'))
    // this.textCode = marked('## Button 按钮(#divtop)')
  },
  data(){
    return {
      textCode:''
    }
  }
});
</script>
<style lang="scss" scoped>
.#{$class-prefix}{
  &code-pre{
    background: #f7f7f7;
  }
}

</style>
