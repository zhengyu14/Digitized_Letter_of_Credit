<template>
	<div class="layout-top">
		<img src="@/assets/logo_hsbc.png">
		<span>HSBC</span>
		<div class="top-right-label">
			<img src="@/assets/icon_hong_kong.png">
			<span>English</span>
			<i class="el-icon-arrow-down"></i>
		</div>
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
	.layout-top{
		background: black;
		align-items: center;
		font-family: Arial, Helvetica, sans-serif;
		height: 75px;
		img{
	    	width: 50px;
		    height: 40px;
		    margin-left: 40px;
		}
		span{
			color:#fff;
	    	margin-left: 7px;
		}
		.top-right-label{
			position:absolute;
			right:20px;
		    margin-right:10px;
		    display:flex;
		    align-items:center;
		    img{
			    width: 30px;
			    height: 18px;
		    }
		    i{
		    	color:#fff;
		    }
		    span{
		    	font-size:14px;
		    	margin-right:5px;
		    }
		}

	}
</style>