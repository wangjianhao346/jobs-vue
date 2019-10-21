import axios from 'axios'
import url from "./url"
import { getToken } from './cookie'

const baseUrl = url.baseUrl;

const service = axios.create({
	baseURL: baseUrl,
	timeout: 5000,
	withCredentials: true,
	headers: {
		Authentication: getToken()
	}
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
	// config.Cookie = "JSESSIONID=" + getToken()
	// config.headers['Content-Type'] = "application/json; charset=utf-8"
	// config.credentials = "include"

	// 在发送请求之前做些什么
	if (config.method === "GET" || config.method === "get") {
		config.params = config.data || config.params
	}
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error)
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	return response;
}, function (error) {
	return Promise.reject(error);
});

export default service
