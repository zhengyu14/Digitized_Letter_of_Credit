import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import pathAlias from '@/service/apiset';
import base64 from '@/utils/base64';
import { cookie } from '@/utils/cookieStorage';
import { Message } from 'element-ui';
import router from '@/router';
import config from '@/config';
import store from '@/store';

axios.defaults.timeout = 500000;
axios.defaults.baseURL ='';

const root = config.root,
      axiosCommon = axios.create(), // 通用前后端通信axios
      axiosDownload = axios.create(); // 下载专用axios

function configJWT(config) { // JWT通行证配置
  let token = 'Bearer ' + cookie.get('licence-m');

  if(config.url.indexOf(pathAlias['v1-gw-getToken']) < 0 &&
    config.url.indexOf(pathAlias['v1-gw-refreshToken']) < 0) {
    config.headers['X-Authorization'] = token;
  }

  return config;
}

function configResponseCommon(response) { // 通用响应配置
  // console.log(response, '>>>>>>>>>>>>>>>>>>');
  return {
      status: 200,
      data : response.data
  };
}

//http request 拦截器
axiosCommon.interceptors.request.use(
  config => {
    let configGhost = configJWT(config);

    return configGhost;
  },
  error => {
    Message({
      message: '请求异常，请联系管理员',
      type: 'error'
    });

    return Promise.reject(err);
  }
);

//http request 拦截器
axiosDownload.interceptors.request.use(
  config => {
    let configGhost = configJWT(config);

    configGhost.responseType = 'blob';

    return configGhost;
  },
  error => {
    Message({
      message: '请求异常，请联系管理员',
      type: 'error'
    });

    return Promise.reject(err);
  }
);


//http response 拦截器
axiosCommon.interceptors.response.use(
  response => {
    return configResponseCommon(response);
  },
  error => {
    Message({
      message: '响应异常，请联系管理员',
      type: 'error'
    });

    return Promise.reject(error)
  }
);

axiosDownload.interceptors.response.use(
  response => {
	  return configResponseCommon(response);
  },
  error => {
    Message({
      message: '响应异常，请联系管理员',
      type: 'error'
    });

    return Promise.reject(error)
  }
);

export default {
  async post(url, data, silent) {
    let option = {},
      licence = '',
      refresh = '',
      payload = {},
      iat = 0,
      exp = 0,
      now = 0;

    if (url.indexOf(pathAlias['v1-gw-getToken']) > -1 ||
      url.indexOf(pathAlias['v1-gw-refreshToken']) > -1) {
      option = {
        url: url,
        data,
        method: 'post'
      };

      return await axiosCommon(option);
    }

    try {
      licence = cookie.get('licence-m');
      refresh = cookie.get('refresh-m');
      payload = JSON.parse(base64.decode(licence.split('.')[1]));
      iat = payload.iat;
      exp = payload.exp;
      now = Date.parse(new Date()) / 1000;

      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      // console.log('iat: ', new Date(iat * 1000).toLocaleString().substr(0,19));
      // console.log('exp: ', new Date(exp * 1000).toLocaleString().substr(0,19));
      // console.log('now: ', new Date(now * 1000).toLocaleString().substr(0,19));
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

      // access token 过期
      if (now > exp) {
        payload = JSON.parse(base64.decode(refresh.split('.')[1]));
        iat = payload.iat;
        exp = payload.exp;
        now = Date.parse(new Date()) / 1000;

        // refresh token 过期
        if (now > exp) {
          cookie.remove('licence-m');
          cookie.remove('refresh-m');
          cookie.remove('loginPage');

          store.dispatch('clearAllTree');

          router.push({ path: '/' });
        } else {
          return await new Promise((resolve, reject) => {
            axiosCommon({
              url: `${ root }${ pathAlias['v1-gw-refreshToken'] }`,
              method: 'get',
              headers: {
                'X-Authorization': `Bearer ${ refresh }`
              }
            })
            .then(result => {
              if(result.data.code === 0) {
                cookie.set('licence-m', result.data.data.accessToken);
                cookie.set('refresh-m', result.data.data.refreshToken);

                option = {
                  url: url,
                  data,
                  method: 'post'
                };

                resolve(axiosCommon(option));
              } else {
                Message({
                  type: 'warning',
                  message: result.data.message
                });
              }
            });
          });
        }
      }

      option = {
        url: url,
        data,
        method: 'post'
      };

      return await axiosCommon(option);
    } catch (e) {
      return Promise.reject(e);
    }
    
  },
  async get(url, data, silent) {
    let option = {},
      licence = '',
      refresh = '',
      payload = {},
      iat = 0,
      exp = 0,
      now = 0;

    if (url.indexOf(pathAlias['v1-gw-getToken']) > -1 ||
      url.indexOf(pathAlias['v1-gw-refreshToken']) > -1) {
      option = {
        url: url,
        method: 'get',
        params: data,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return await axiosCommon(option);
    }
    
    try {
      licence = cookie.get('licence-m');
      refresh = cookie.get('refresh-m');
      payload = JSON.parse(base64.decode(licence.split('.')[1]));
      iat = payload.iat;
      exp = payload.exp;
      now = Date.parse(new Date()) / 1000;

      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      // console.log('iat: ', new Date(iat * 1000).toLocaleString().substr(0,19));
      // console.log('exp: ', new Date(exp * 1000).toLocaleString().substr(0,19));
      // console.log('now: ', new Date(now * 1000).toLocaleString().substr(0,19));
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

      // access token 过期
      if (now > exp) {
        payload = JSON.parse(base64.decode(refresh.split('.')[1]));
        iat = payload.iat;
        exp = payload.exp;
        now = Date.parse(new Date()) / 1000;

        // refresh token 过期
        if (now > exp) {
          cookie.remove('licence-m');
          cookie.remove('refresh-m');
          cookie.remove('loginPage');

          store.dispatch('clearAllTree');

          router.push({ path: '/' });
        } else {
          return await new Promise((resolve, reject) => {
            axiosCommon({
              url: `${ root }${ pathAlias['v1-gw-refreshToken'] }`,
              method: 'get',
              headers: {
                'X-Authorization': `Bearer ${ refresh }`
              }
            })
            .then(result => {
              if(result.data.code === 0) {
                cookie.set('licence-m', result.data.data.accessToken);
                cookie.set('refresh-m', result.data.data.refreshToken);

                option = {
                  url: url,
                  method: 'get',
                  params: data,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };

                resolve(axiosCommon(option));
              } else {
                Message({
                  type: 'warning',
                  message: result.data.message
                });
              }
            });
          });
        }
      }

      option = {
        url: url,
        method: 'get',
        params: data,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return await axiosCommon(option);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async downloadGet(url, data) {
    let option = {},
      licence = '',
      refresh = '',
      payload = {},
      iat = 0,
      exp = 0,
      now = 0;

    if (url.indexOf(pathAlias['v1-gw-getToken']) > -1 ||
      url.indexOf(pathAlias['v1-gw-refreshToken']) > -1) {
      option = {
        url: url,
        method: 'get',
        params: data,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return await axiosCommon(option);
    }

    try {
      licence = cookie.get('licence-m');
      refresh = cookie.get('refresh-m');
      payload = JSON.parse(base64.decode(licence.split('.')[1]));
      iat = payload.iat;
      exp = payload.exp;
      now = Date.parse(new Date()) / 1000;

      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      // console.log('iat: ', new Date(iat * 1000).toLocaleString().substr(0,19));
      // console.log('exp: ', new Date(exp * 1000).toLocaleString().substr(0,19));
      // console.log('now: ', new Date(now * 1000).toLocaleString().substr(0,19));
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

      // access token 过期
      if (now > exp) {
        payload = JSON.parse(base64.decode(refresh.split('.')[1]));
        iat = payload.iat;
        exp = payload.exp;
        now = Date.parse(new Date()) / 1000;

        // refresh token 过期
        if (now > exp) {
          cookie.remove('licence-m');
          cookie.remove('refresh-m');
          cookie.remove('loginPage');

          store.dispatch('clearAllTree');
          
          router.push({ path: '/' });
        } else {
          return await new Promise((resolve, reject) => {
            axiosCommon({
              url: `${ root }${ pathAlias['v1-gw-refreshToken'] }`,
              method: 'get',
              headers: {
                'X-Authorization': `Bearer ${ refresh }`
              }
            })
            .then(result => {
              if(result.data.code === 0) {
                cookie.set('licence-m', result.data.data.accessToken);
                cookie.set('refresh-m', result.data.data.refreshToken);

                option = {
                  url: url,
                  method: 'get',
                  params: data,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                };

                resolve(axiosDownload(option));
              } else {
                Message({
                  type: 'warning',
                  message: result.data.message
                });
              }
            });
          });
        }
      }

      option = {
        url: url,
        method: 'get',
        params: data,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      return await axiosDownload(option);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
