/*
	前端路由调度辅助插件

	@info 对前端路由调度进行轻度封装

	@param path 路由地址
	@param paramObj 附带的数据，将会保存到route.query中

	@return none
*/
export default {
	install(Vue, options) {
		Vue.prototype.routerDispatch = function(path, paramObj) {
			let router = options.router,
				hasParamObj = false;

			if(!Boolean(paramObj) || isEmptyObject(paramObj)) {
				paramObj = {};
			} else {
				hasParamObj = true;
			}

			if(hasParamObj) {
				router.push({ path: path, query: paramObj });
			} else {
				router.push({ path: path });
			}
		}
	}
};

function isEmptyObject(o) {
	let len = 0;

	for(let key in o) {
		if(Object.prototype.hasOwnProperty.call(o, key)) {
			len += 1;
		};
	}
	
	if(len === 0) {
		return true;
	} else {
		return false;
	}
}