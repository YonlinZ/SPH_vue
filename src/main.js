import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// #region 全局组件

import TypeNav from '@/components/TypeNav'; 
// 引入轮播图
import Carousel from '@/components/Carousel'; 
import Pagination from '@/components/Pagination'; 

// #endregion
import store from '@/store'
import '@/mock/mockServe.js'
// 引入swiper样式
import "swiper/css/swiper.css";


// import {reqGetSearchInfo} from "@/api";
// console.log(reqGetSearchInfo({}))


Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount('#app')
