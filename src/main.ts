import { createApp,defineComponent,h } from 'vue';
import App from './App.vue';
import router from './router';
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/arduino-light.css'  //导入代码高亮样式
/**
 * darcula.css
 * atelier-cave-dark.css
 * arduino-light.css
 * atelier-forest-dark.css
 * kimbie.light.css
 * pojoaque.css
 * */ 
const app = createApp(App)
//自定义一个代码高亮指令
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})
app.use(router)
app.mount('#app')
