import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import store from './store'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import routerToolsPlugin from './plugins/routerToolsPlugin'
import './permission'
import 'animate.css/animate.min.css'
import './utils/framework/prototype.js'
import 'element-ui/lib/theme-chalk/index.css'

window.$ = $;
window.echarts = echarts;

Vue.use(ElementUI);
Vue.use(routerToolsPlugin, { router });

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
})
.$mount('#app');