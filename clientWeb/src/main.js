import Vue from 'vue';

import App from './App.vue';
import router from './router/';
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import $ from "jquery";
import store from "./store/store.js"



Vue.use(Element);



new Vue({
  el: '#app',
  router,
  store,//实例化Vue对象时加入store对象
  render: h => h(App)
})