import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index";
import Api from "@/views/api";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: "index",
        component: Index
    },{
        path: "/apis/:component",
        name: "apis",
        component: Api
    }]
});
