<template>
	<div class="layout-left">
		<el-menu
			default-active="1"
			text-color="#42b883">
			<template v-for="(item, index) in routes">
				<el-menu-item
					v-if="!item.hidden && !item.expand"
					:index="`${ index + 1 }`"
					@click="routerDispatch(`${ item.path }/${ item.children[0].path }`)">
					<i class="el-icon-menu"></i>
					<span slot="title">{{ item.name }}</span>
				</el-menu-item>
				<el-submenu
					v-if="!item.hidden && item.expand"
					:index="`${ index + 1 }`">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>{{ item.name }}</span>
					</template>
					<template v-for="(jtem, jndex) in item.children">
						<el-menu-item
							v-if="!jtem.hidden && !jtem.expand"
							:index="`${ index + 1 }-${ jndex + 1 }`"
							@click="routerDispatch(`${ item.path }/${ jtem.path }`)">
							{{ jtem.name }}
						</el-menu-item>
						<recursive-submenu
							v-if="jtem.children && !jtem.hidden && jtem.expand"
							:submenu="jtem.children"
							:pPath="`${ item.path }/${ jtem.path }`"
							:pname="jtem.name"
							:pindex="`${ index + 1 }-${ jndex + 1 }`"/>
					</template>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex'
	import recursiveSubmenu from '@/views/layout/components/stLeftSubmenu'

	export default {
		/* 组件自定义属性 */
		props: {},
		/* 包含的自定义子组件 */
		components: {
			recursiveSubmenu
		},
		/* 组件生命周期 */
		beforeCreate() {},
		created() {},
		beforeMount() {},
		mounted() {},
		beforeDestroy() {},
		destroyed() {},
		/* 组件内数据模型 */
		data() {
			return {};
		},
		/* 组件内数据模型监听器 */
		watch: {},
		/* 组件内计算属性 */
		computed: {
			... mapState({
				routes(state) {
					return state.stLeft.routes
				}
			})
		},
		/* 组件内函数 */
		methods: {}
	};
</script>

<style lang="less"></style>