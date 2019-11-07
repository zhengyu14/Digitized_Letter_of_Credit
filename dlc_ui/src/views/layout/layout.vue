<template>
	<div class="layout">
		<div class="layout-header" >
			<st-top />
		</div>
		<div class="layout-main" >
			<st-main />
		</div>
		<div class="layout-footer" >
			<st-footer />
		</div>
	</div>
</template>

<script>
	import { stTop, stMain, stFooter } from '@/views/layout/components'

	export default {
		props: {},
		components: {
			stTop,
			stMain,
			stFooter
		},
		beforeCreate() {},
		created() {},
		beforeMount() {},
		mounted() {},
		beforeDestroy() {},
		destroyed() {},
		data() {
			return {};
		},
		watch: {},
		computed: {},
		methods: {}
	};
</script>

<style lang="less">
	.layout-header{
		display: block;
		position: fixed;
		top: 0;
		width: 100%;
		height: 75px;
	}
	.layout-main{
		padding: 16px;
		margin-top: 30px;
	}
	.layout-footer{
		overflow: hidden;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>