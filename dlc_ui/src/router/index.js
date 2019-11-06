import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '@/router/routes'
import layout from '@/views/layout/layout'
import { _load } from '@/router/componentLoader'

Vue.use(Router);

export { routes };

export default new Router({
	// mode: 'history',
	routes
});