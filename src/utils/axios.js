
import { nextTick } from 'vue'
import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus';
import _ from 'lodash';
import { getToken } from "@/utils/auth.js";
import router from '@/router'
import API from '@/api/index'




let loadingInstance; //loading 实例
let needLoadingRequestCount = 0; //当前正在请求的数量
const loadOption = { fullscreen: true, lock: true, text:'loading', spinner: 'el-loading', } // el-icon-my-loading

function showLoading() {
  let main = document.querySelector('#app')
  if (main) {
    if (needLoadingRequestCount === 0 && !loadingInstance) {
      loadingInstance = ElLoading.service(loadOption);
    }
    needLoadingRequestCount++;
  }
}
function closeLoading() {
  nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
    needLoadingRequestCount--;
    needLoadingRequestCount = Math.max(needLoadingRequestCount, 0); // 保证大于等于0
    if (needLoadingRequestCount === 0) {
      if (loadingInstance) {
        hideLoading()
      }
    }
  });
}

var hideLoading = _.debounce(() => {
  loadingInstance.close();
  loadingInstance = null;
}, 300);

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 40000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if(!config.noLoading) {
      showLoading()
    }
    console.log('config', config)
    if (!config.noToken) {
      if (getToken()) {
        config.headers['Authorization'] = getToken();
      } else {
         return router.push({ path: '/login' })
      // return ElMessage.error('you should login first!')
     }
    }
    config.headers['Accept-Language'] = 'EN'; // CH 1， EN 2
    // do something before request is sent
    // config.headers['Authorization'] ='123456789999999';
    return config
  },
  error => {
    // do something with request error
    closeLoading()
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    closeLoading()
    if (res.code == 9999) { // 公共请code拦截
      // return res
      ElMessage.error(res.msg)
    } else if(res.code == 1 || res.code == 2) {
      // ElMessage.warning('AccessToken has expired, please refresh AccessToken')
      ElMessage.warning('AccessToken has expired, please login again')
      sessionStorage.clear()
      return router.push({ path: '/login' })
    } else {
      return res
    } 

    // if the custom code is not 20000, it is judged as an error.

  },
  error => {
    closeLoading()
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)


//export default service

export {
  service as request,
}
