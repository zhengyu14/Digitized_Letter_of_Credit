import layout from '@/views/layout/layout'
import { _load } from '@/router/componentLoader'

const demoRoute = [
	{
		path: '/login',
		component: layout,
		name: 'Login',
		children: [
			{
				path: 'login',
				component: _load('login/login'),
				name: 'Login',
				meta: {}
			}
		],

		meta: {}
	},
	{
		path: '/listReport',
		component: layout,
		name: 'List Report',
		children: [
			{
				path: 'listReport',
				component: _load('listReport/listReport'),
				name: 'List Report',
				meta: {}
			}
		],

		meta: {}
	},
	{
		path: '/objectPage',
		component: layout,
		name: 'Object Page',
		children: [
			{
				path: 'objectPage',
				component: _load('objectPage/objectPage'),
				name: 'Object Page',
				meta: {}
			}
		],

		meta: {}
	},
];

export { demoRoute };