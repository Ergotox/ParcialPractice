import http from '/src/shared/services/http-common.js'
export class PostsApiService{
    getPosts(){
        return http.get('/posts');
    }
}