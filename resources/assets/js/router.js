import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Pages/Home/index';
import Home from './Pages/Home/home';
import ArticleList from './Pages/Home/articleList';

//后台
import Admin from './Pages/Admin/admin'
import articleeditor from './Pages/Admin/addeditArticle'
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
    {
        path:'/Admin',
        component:Admin,
        children:[
            {path:'',component:articleeditor},
            {path:'/',component:articleeditor},
            {path:'/editArticle',component:articleeditor},
        ]
    }
]
export const router = new VueRouter({routes:routes})
