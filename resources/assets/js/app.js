import Vue from 'vue'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './css/material_Icons.css';

//引入路由
import VueRouter from 'vue-router';
//引入事件触发器
import {event} from './Module/event.js'
import App from './App'
Vue.use(ElementUI)
Vue.use(VueRouter)
window._app = new Vue({
    el:'#app',
    render(h){
        return h(App)
    },
    created(){
        event.init();
    }
})