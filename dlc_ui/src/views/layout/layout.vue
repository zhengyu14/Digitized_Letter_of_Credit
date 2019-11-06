<template>
	<div class="layout">
		<st-top />
		<div class="layout-group">
			<st-main />
		</div>
		<st-footer />		
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

<style lang="less"></style>