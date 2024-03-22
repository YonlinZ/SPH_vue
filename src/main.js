import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'; 
// 引入轮播图
import Carousel from '@/components/Carousel'; 

import store from '@/store'
import '@/mock/mockServe.js'
// 引入swiper样式
import "swiper/css/swiper.css";


// import {reqGetSearchInfo} from "@/api";
// console.log(reqGetSearchInfo({}))


Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount('#app')
