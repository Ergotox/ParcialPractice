import {createRouter, createWebHistory} from "vue-router";
import HomeContentComponent from "../public/components/home-content.component.vue";
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {path:'/home', name:'home', alias:'/', component: HomeContentComponent}
    ]
})
export default router