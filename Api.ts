import axios from 'axios';

// helps to create new instance with custom config

export const API = axios.create({
    timeout: 1000
});

export const GitHubApi = API.request({
    url: 'https://api.github.com/repos/tannerlinsley/react-query'
}).then(res => res.data).catch(e => e)

export const getPosts = API.request({
    url: 'https://jsonplaceholder.typicode.com/posts'
});

export const PostMethosPosts = API.request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'post',
    data: {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
});
