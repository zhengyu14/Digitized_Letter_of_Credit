import base from './base';

// 引入lodash工具库方便对象和数组的处理
let _ = require('lodash'),
    resultPath = {};

//  合并请求集合
_.merge(
	resultPath,
	base,
);

export default resultPath;