import axios from 'axios'

export function request(config) {
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 请求拦截
    instance1.interceptors.request.use(config => {
        return config
    }, err => {
        return err
    })

    // 响应拦截
    instance1.interceptors.response.use(config => {
        return config.data
    }, err => {
        return err
    })

    return instance1(config)
}