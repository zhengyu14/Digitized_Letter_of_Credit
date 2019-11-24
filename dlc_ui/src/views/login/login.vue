<template>
	<div class="login">
		<el-card shadow="never" class="box-card-login">
			<p class="login-title" align="left">Log on to Digitised Letter of Credit</p>
			<div class="login-box">
				<div class="login-item">
					<el-input
						placeholder="User Name"
						v-model="userName"
						clearable>
					</el-input>
				</div>
				<div class="login-item">
					<el-input
						show-password
						placeholder="Password"
						v-model="passWord"
						clearable>
					</el-input>
				</div>
				<br><br><br><br><br><br><br><br>
				<el-divider></el-divider>
				<div align="right" class="login-operation-area">
					<el-button class="login-button" type="primary" @click = "onClickLogin">Login</el-button>
				</div>
			</div>
		</el-card>
		<el-card shadow="never" class="box-card-help">
			<p align="left" class="help-title">Help and Support</p>
			<p align="left" class="help-sub-title">Username help</p>
			<p align="left" class="help-content">Forget your username? Call our customer service hotline on (852) 2748 8288.</p>
			<p align="left" class="help-sub-title">Have you registered for online banking?</p>
			<p align="left" class="help-content">Not a registered user? Please click here to register.<i class="el-icon-arrow-right"></i></p>
			<p align="left" class="help-content">Logon securely with the latest browser.<i class="el-icon-arrow-right"></i></p>
			<el-divider></el-divider>
			<p align="left" class="help-sub-title">Maintenance Schedule <i class="el-icon-arrow-down"></i></p>
			<el-divider></el-divider>
			<img class="help-image" src = "../../assets/img_logon_business_express_en.jpg"></img>
		</el-card>
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
			return {
				userName:'',
				passWord:''
			};
		},
		watch: {},
		computed: {},
		methods: {
			onClickLogin(){
				if(this.userName !== '' && (this.userName==='exporter' || this.userName==='importer' || this.userName==='issuingbank' || this.userName==='advisingbank')) {
					this.$router.push({path: '/listReport/listReport', query: {'user': this.userName}})
				} else {

				}
			}
		}
	};
</script>

<style lang="less" scoped>
	.login{
		display: flex;
		justify-content: center;
	    height: 100%;
	    width:100%;
        align-items: center;
		background-image: url('../../assets/login_bg.jpg');
		background-size: 100% 100%;
	}
	.box-card-login{
		border-radius: 0px;
		width: 600px;
	    height: 520px;
		.login-box{
			display: flex;
			flex-direction: column;
			justify-content: left;
		}
		.login-title{
			font-family: Arial, Helvetica, sans-serif;
			font-size: 25px;
		}
		.login-item{
			width:450px;
			height:26px;
			margin-bottom:40px;	
		}
		.login-operation-area{
			justify-content: right;
			.login-button{
				width:100px;
				background-color:#BB0000;
				border:none;
				border-radius: 0px;
			}  
		}
		
	}
	.box-card-help{
		background-color: #EBEBEB;
		border-radius: 0px;
		width: 400px;
		height:520px;
		font-family: Arial, Helvetica, sans-serif;
		justify-content: left;
		align-items: left;
		.help-title{
			font-family: Arial, Helvetica, sans-serif;
			font-size: 20px;
			font-weight: bold;
			justify-content: left;
			align-items: left;
		}
		.help-sub-title{
			font-family: Arial, Helvetica, sans-serif;
			font-size: 15px;
			font-weight: bold;
			justify-content: left;
			align-items: left;
		}
		.help-content{
			font-family: Arial, Helvetica, sans-serif;
			font-size: 15px;
			justify-content: left;
			align-items: left;
		}
		.help-image{
			width: 370px;
		}
	}
</style>