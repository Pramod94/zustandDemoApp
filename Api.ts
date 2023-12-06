import axios from 'axios';

// helps to create new instance with custom config

export const API = axios.create({
    timeout: 1000
});

export const GitHubApi = API.request({
    url: 'https://api.github.com/repos/tannerlinsley/react-query'
}).then(res => res.data).catch(e => e)