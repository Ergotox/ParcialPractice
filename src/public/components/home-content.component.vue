<template>
    <div class="background">
        <h1>Popular posts</h1>
        <br>
        <div class="content">
            <div class="prueba" v-for="(post, index) in topThree">
                <pv-card class="postcards">
                    <template #title class="custom-title">{{ post.title }}</template>
                    <template #content>
                        <img :src="post.photoUrl" :alt="post.title" aria-label="post image" style="width:250px; border-radius:30px; height: 200px; "/>
                    </template>
                </pv-card>
            </div>
        </div>
        <br>
        <h1>Our Posts</h1>
        <br>
        <div class="content">
            <div class="prueba" v-for="(post, index) in noTop">
                <pv-card class="postcards">
                    <template #title class="custom-title">{{ post.title }}</template>
                    <template #content>
                        <img :src="post.photoUrl" :alt="post.title" aria-label="post image" style="width:250px; border-radius:30px; height: 200px; "/>
                    </template>
                </pv-card>
            </div>
        </div>

    </div>

</template>

<script>
import {PostsApiService} from "../../publishing/services/posts-api.service.js";

export default{
    name:"home-content",
    data() {
        return {
            posts: [],
            topThree:[],
            noTop:[],
            errors:[],
            postsApi:new PostsApiService(),
        };
    },
    created() {
        this.getPosts();
        console.log("Created")

    },
    methods:{
        getPosts(){
            this.postsApi.getPosts()
                .then(response=>{
                    this.posts=response.data;
                    console.log("Posts obtenidos: ", response.data);
                    this.getTopThreePosts();
                    this.getNonTopPosts();
                })
                .catch(e=>{
                    this.errors.push(e)
                })
        },
        getTopThreePosts() {
            this.posts.sort((a, b) => b.views - a.views);
            this.topThree = this.posts.slice(0, 3);
            console.log("Top 3 posts:", this.topThree);
        },
        getNonTopPosts() {
            this.noTop = this.posts.filter((post) => !this.topThree.includes(post));
            console.log("Posts que no están en el top 3:", this.noTop);
        },
    },
}
</script>

<style scoped>
.background{
    text-align: center;
    background-color:orange;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    height: 100%;
}
.content{
    display:flex;
    margin-right: 50px;
    margin-left: 50px;
    border-radius: 10px;

}
.postcards{
    margin:30px;
    width:400px;
    height: 350px;
}
.custom-title {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
}
</style>