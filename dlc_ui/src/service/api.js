import service from './service';
import apiset from './apiset';
import _ from 'lodash';
import config from '@/config';
import qs from 'qs';

// 接口请求
const root = config.root;
let inf = {};

// 中间方案
_.merge(inf,apiset);

// 非通用函数: 为后台接口path封装path级前缀
function infWrap(inf) {
    let mode = process.env.VUE_APP_MODE;

    if(mode === 'development') {
        return `${ inf }`;
    } else {
        return inf.split('\/')[2] === 'gw' ? `${ inf }` : `/${ inf.split('\/')[2] }${ inf }`;
    }
}

export default {
     $post(name, param, pih = false) {
     	return new Promise((resolve, reject) => {
            // console.log('post:'+root+inf[name]);
     		service.post(`${ root }${ infWrap(inf[name]) }`, pih ? qs.stringify(param) : param).then((res)=>{
		        if (res.status === 200) {
		          resolve(res.data);
		        } else {
		          reject(res.data);
		        }
     		});
     	});
     },

     $get(name, param) {
     	return new Promise((resolve, reject) => {
            // console.log('get:'+root+inf[name]);
     		service.get(`${ root }${ infWrap(inf[name]) }`, param).then((res)=>{
		        if (res.status === 200) {
		          resolve(res.data);
		        } else {
		          reject(res.data);
		        }
     		});
     	});

     },

     $downloadGet(name, param) {
        return new Promise((resolve, reject) => {
            // console.log('get:'+root+inf[name]);
            service.downloadGet(`${ root }${ infWrap(inf[name]) }`, param).then((res)=>{
                if (res.status === 200) {
                  resolve(res.data);
                } else {
                  reject(res.data);
                }
            });
        });

     }


}