<template>
	<el-submenu
		:index="pindex">
		<template slot="title">
			<i class="el-icon-menu"></i>
			<span>{{ pname }}</span>
		</template>
		<template v-for="(item, index) in submenu">
			<el-menu-item
				v-if="!item.hidden && !item.expand"
				:index="`${ pindex }-${ index + 1 }`"
				@click="routerDispatch(`${ pPath }/${ item.path }`)">
				{{ item.name }}
			</el-menu-item>
			<st-left-submenu
				v-if="item.children && !item.hidden && item.expand"
				:submenu="item.children"
				:pPath="`${ pPath }/${ item.path }`"
				:pname="item.name"
				:pindex="`${ pindex }-${ index + 1 }`"/>
		</template>
	</el-submenu>
</template>

<script type="text/javascript">
	export default {
		name: 'stLeftSubmenu',
		/* 组件自定义属性 */
		props: {
			submenu: {
				type: Array
			},
			pPath: {
				type: String
			},
			pname: {
				type: String
			},
			pindex: {
				type: String
			}
		},
		/* 包含的自定义子组件 */
		components: {},
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
		computed: {},
		/* 组件内函数 */
		methods: {}
	};
</script>

<style lang="less"></style>