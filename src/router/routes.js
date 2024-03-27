// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';

export default [
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/search/:keyword?",
        component: Search,
        name: 'search',
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        name: 'detail',
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        component: AddCartSuccess,
        name: 'addcartsuccess',
        meta: { show: true }
    },
    {
        path: "*",
        redirect: "/home"
    }
]