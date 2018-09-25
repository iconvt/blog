import Vue from 'vue'
// 引入element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import 'element-ui/lib/theme-chalk/index.css';
import './css/material_Icons.css';

//引入事件触发器
import {event} from './Module/event.js'    //左侧边栏   使用event_bus来同步不同组件之间的数据

import App from './App'
//使用vuex来管理app的数据
import store from './Store/index'

window._app = new Vue({
    el:'#app',
    store,
    render(h){
        return h(App)
    },
    created(){
        event.init();
    }
})