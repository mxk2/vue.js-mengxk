/**
 * Created by mengxk on 2016/8/10.
 */
requirejs.config({
    baseUrl: './',
    paths: {
        Vue: '../../../node_modules/vue/dist/vue'
    }
});
require(['Vue'], function(Vue){
    "use strict";
    Vue.component('async-webpack-example', function(resolve){
        setTimeout(function () {
            require(['./my-async-component'], resolve)
        }, 1000)
    });
    new Vue({
        el: 'body'
    });
});
