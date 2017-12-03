import Vuex from 'vuex';
import Vue from 'vue';
import datagrid from './../clientComponents/datagrid/datagrid.js';
import buyCar from '../clientComponents/buyCar/buyCar.js'
import pay from '../clientComponents/pay/pay.js';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        datagrid,
        buyCar,
        pay
    }
})
