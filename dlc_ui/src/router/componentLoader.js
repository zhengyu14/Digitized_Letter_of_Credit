/*
	vue文件loader

	@info 用来返回指定路径下的vue文件
*/
export function _load(file) {
	return () => import('@/views/' + file + '.vue');
}