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
	    top: 0;
	    width: 100%;
	    height: 75px;
	}
	.layout-main{
		flex:1;
	    display: flex;
    	align-items: center;
	}
	.layout-footer{
		overflow: hidden;
		width: 100%;
		height:60px;
	}
	.layout{
	    height: 100%;
	    font-size: 1.1rem;
	    display: flex;
	    flex-direction: column;
	}
</style>