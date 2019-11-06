<template>
	<div id="app" style="height:100%;">
		<router-view />
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'APP',
	};
</script>

<style lang="less">
	@import './styles/less/all';

  	*:focus {
    	outline: none;
  	}
</style>