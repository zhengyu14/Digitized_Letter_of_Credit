<template>
	<div class="layout-footer">
		<p>&copy; Copyright. The Hongkong and Shanghai Banking Corporation Limited, 2002-2019. All rights reserved.</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {},
		components: {},
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
    .layout-footer{
        background: black;
        color: white;
        font-family: arial;
        font-size: 15px;
		display: flex;
        align-items: center;
        p{
            padding-left: 50px;
        }
    }
</style>