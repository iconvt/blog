
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
//
// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
//
// const app = new Vue({
//     el: '#app'
// });

import Vue from 'vue';
import routes from './route';
// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './components/ExampleComponent.vue';
// import App from './App.vue';

// 路由定义
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

Vue.use(ElementUI);
// Vue.use(test);


const app = new Vue({
        el: '#app',
        routes,
        data:{
            currentRoute:window.location.pathname
        },
        computed:{
            ViewComponent (){
                const matchingView = routes[this.currentRoute];
                console.log(matchingView,1);
                return matchingView?require('./pages/'+matchingView+'.vue'):require('./pages/404.vue');
            }
        },
        render (h) {
            return h(this.ViewComponent)
        }
    });
window._app=app;