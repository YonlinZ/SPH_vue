import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
const requests = axios.create({
        baseURL:'/mock',
        timeout:5000,
});

requests.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start();
    return config;
});

requests.interceptors.response.use((res)=>{
    // 进度条结束
    nprogress.done();
     return res.data;
// eslint-disable-next-line no-unused-vars
},(error)=>{
    nprogress.done();
    return Promise.reject(new Error('fail'));
});

export default requests;