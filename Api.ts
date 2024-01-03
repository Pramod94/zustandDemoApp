import axios from "axios";

// helps to create new instance with custom config

export const API = axios.create({
  timeout: 1000,
});

export const GitHubApi = API.request({
  url: "https://api.github.com/repos/tannerlinsley/react-query",
})
  .then((res) => res.data)
  .catch((e) => e);

export const getPosts = (pageNum: number) =>
  API.request({
    url: `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`,
  })
    .then((res) => res.data)
    .catch((e) => e);

export const getComments = (postId: string) =>
  API.request({
    url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  })
    .then((res) => res.data)
    .catch((e) => e);

export const deletePost = (postId: any) =>
  API.request({
    url: `https://jsonplaceholder.typicode.com/postId/${postId}`,
    method: "DELETE",
  })
    .then((res) => res.data)
    .catch((e) => e);
