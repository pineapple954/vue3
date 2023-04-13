//axios封装
import axios from 'axios'
const service = axios.create({
    baseURL: '',
    timeout: 5000
})

//请求拦截器
service.interceptors.request.use(config => {
    return config

})

//响应拦截器
service.interceptors.response.use(res => { //成功请求到数据
    return res.data;
}, err => { //响应错误处理
    return Promise.reject(err)
})
 
export default service
