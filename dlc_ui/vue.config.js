module.exports = {
	runtimeCompiler: true,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://116.62.202.114:3000',
				changeOrigin: true,
				ws: true,
				pathRewrite: {'^/api': ''}
			}
		}
	},
};