import {createRouter, createWebHistory} from "vue-router";
import HomeContentComponent from "../public/components/home-content.component.vue";
import PostContentComponent from "../publishing/components/post-content.component.vue";
import PagenotfoundComponent from "../public/components/pagenotfound.component.vue";
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {path:'/home', name:'home', alias:'/', component: HomeContentComponent},
        {path:'/post/:id', name:'post', component: PostContentComponent},
        {path:'/:pathMatch(.*)*',name:'PageNotFound', component: PagenotfoundComponent}
    ]
})
export default router