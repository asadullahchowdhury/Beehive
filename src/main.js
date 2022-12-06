/*
* *******************************************************************
*  Jquery
* *******************************************************************
* */
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
window.jQuery = $;

import {axios} from 'axios'
import {createApp} from "vue";
import App from './App.vue'
import router from "./Router/router";




createApp(App)
    .use(router)
    .use(axios)
    .mount('#app')

