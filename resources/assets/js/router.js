import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Pages/index';
import Home from './Pages/home';
import ArticleList from './Pages/articleList';
Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        component:Index,
        children:[
            {path: '',component:Home},
            {path: '/',component:Home},
            {path: '/articleList',component:ArticleList},
        ]
    },
]
export const router = new VueRouter({routes:routes})
