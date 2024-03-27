// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
// 使用插件
Vue.use(VueRouter);

//配置路由 

export default new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
});
