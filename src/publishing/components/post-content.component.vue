<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="content">
            <div class="leftcontent">
                <h1>{{this.object.title}}</h1>
                <img :src="object.photoUrl" :alt="object.title" aria-label="post image" style="width:250px; border-radius:30px; height: 200px; "/>
            </div>
            <div class="rightcontent">
                <h3>ID: {{this.object.id}}</h3>
                <h3>SUMMARY: {{this.object.summary}}</h3>
                <h3>{{this.object.content}}</h3>
                <p>LIKES: {{this.object.likes}}      VIEWS: {{this.object.views}}</p>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name:'post-content',
    props: ['id'],
    computed: {
        object() {
            const postId = this.$route.params.id;
            const postPhoto = this.$route.params.photoUrl;
            const postTitle = this.$route.params.title;
            const postSummary = this.$route.params.summary;
            const postContent = this.$route.params.content;
            const postLike = this.$route.params.likes;
            const postViews = this.$route.params.views;

            const postData = JSON.parse(this.$route.query.post);

            return {
                id: postData.id,
                photoUrl: postData.photoUrl,
                title: postData.title,
                summary: postData.summary,
                content: postData.content,
                likes: postData.likes,
                views: postData.views,
            };
        },
    },
}
</script>



<style scoped>
.background{
    background-color:orange;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    border-radius: 10px;
    height: 100%;

}
.content{
    justify-items: center;
    justify-content:center;
    display:flex;
}
.leftcontent{
    width:400px;
}
.rightcontent{
    width:400px;
}
</style>