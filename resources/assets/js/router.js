import VueRouter from 'vue-router';
import Index from './Pages/index';
import Home from './Pages/home';
const routes = [
    {
        path:'/',
        component:Index,
        children:[
            {path: '',component:Home},
            {path: '/',component:Home}
        ]
    },
]
export const router = new VueRouter({routes:routes})
