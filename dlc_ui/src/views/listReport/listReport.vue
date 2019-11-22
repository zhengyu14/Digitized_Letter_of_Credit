<template>
	<div class="list-report">
			<el-row class="table-header">
				<el-col :span="1">
					<el-button class="log-out-button" type="primary" @click = "onClickLogOut">Log Out</el-button>
				</el-col>
				<el-col :span="4" :offset="16">
					<el-input class="table-header-search" placeholder="Search" suffix-icon="el-icon-search"></el-input>
				</el-col>
				<el-col :span="3">
					<el-button class="table-header-toolbar" type="text" @click="dialogVisible = true">Request</el-button>
					<el-button class="table-header-toolbar" type="text" @click="onClickRefresh" icon="el-icon-refresh-right"></el-button>
					<el-button class="table-header-toolbar" type="text" icon="el-icon-setting"></el-button>
				</el-col>
			</el-row>

			<el-table
				class="table-item-id"
				:data="tableData"
				@row-click="onClickItem"
				v-loading="loading"
				header-row-class-name = "header-class"
				>
				<el-table-column
					sortable
					prop="transaction_id"
					label="Transaction ID">
				</el-table-column>
				<el-table-column
						prop="status"
						label="Status">
					<template slot-scope="scope">
						<el-tag :type="scope.row.status === 'Closed' ? 'danger' : 'success'" disable-transitions>{{scope.row.status}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column
					prop="description"
					label="Description">
				</el-table-column>
				<el-table-column
					prop="importer"
					label="Importer">
				</el-table-column>
				<el-table-column
					prop="exporter"
					label="Exporter">
				</el-table-column>
				<el-table-column
					prop="amount"
					label="Amount">
				</el-table-column>
				<el-table-column
					prop="posting_date"
					sortable
					label="Posting Date">
				</el-table-column>
			</el-table>

			<el-dialog
					class="request-dialog"
					title="New Letter of Credit"
					:visible.sync="dialogVisible">
				<el-form :label-position="top" ref="form" :model="requestForm" size="mini">
					<el-form-item class="request-item" label="Description" >
						<el-input v-model="requestForm.description" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item class="request-item" label="Importer">
						<el-input v-model="requestForm.importer" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item class="request-item" label="Exporter">
						<el-input v-model="requestForm.exporter" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item class="request-item" label="Amount">
						<el-input v-model="requestForm.amount" class="request-amount">
							<el-select style="width: 80px;" slot="append" v-model="currency.currency" placeholder="USD">
								<el-option label="USD" value="USD"></el-option>
								<el-option label="HKD" value="HKD"></el-option>
								<el-option label="CNY" value="CNY"></el-option>
								<el-option label="GBP" value="GBP"></el-option>
								<el-option label="EUR" value="EUR"></el-option>
								<el-option label="AUD" value="AUD"></el-option>
								<el-option label="CHF" value="CHF"></el-option>
							</el-select>
						</el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button class="request-dialog-button-cancel" @click="dialogVisible = false">Cancel</el-button>
					<el-button class="request-dialog-button-request" type="primary" @click="onClickRequest">Request</el-button>
				</div>
			</el-dialog>
	</div>

</template>

<script type="text/javascript">
	import axios from 'axios';

	export default {
		props: {},
		components: {},
		beforeCreate() {},
		created() {},
		beforeMount() {},
		mounted() {
			axios.get('/api/get_list').then(response => (this.tableData = response.data));
			if(this.$route.query.user === "exporter") {
				this.$notify({
					iconClass: 'el-icon-s-order',
					title: 'New Order',
					message: 'A new order of letter of credit is created by exporter.',
				});
			}
		},
		beforeDestroy() {},
		destroyed() {},
		data() {
			return {
				tableData: [],
				requestForm: {
					"description": "",
					"importer": "",
					"exporter": "",
					"amount": "",
				},
				currency: {
					"currency": "",
				},
				loading: false,
				dialogVisible: false,
			};
		},
		watch: {},
		computed: {},
		methods: {
			onClickLogOut(){
				this.$router.push({path:'/login/login'})
			},
			onClickItem(row, event, column){
				this.$router.push({path:'/objectPage/objectPage', query: {'user': this.$route.query.user, 'transaction_id': row.transaction_id}});
			},
			onClickRefresh(){
				this.loading = true;
				axios.get('/api/get_list').then(response => (this.tableData = response.data))
				this.loading = false;
			},
			onClickRequest() {
				this.loading = true;
				var now = new Date();
				var new_id = Math.ceil(Math.random()*100000000);
				var new_posting_date = now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate();
				if (this.currency.currency === '') {
					var amount_with_currency = this.requestForm.amount + ' USD';
				} else {
					var amount_with_currency = this.requestForm.amount + ' ' + this.currency.currency;
				}

				var new_request = this.requestForm;
				axios({
					method: 'post',
					url: '/api/add_to_list',
					headers: {
						transaction_id: new_id,
						description: new_request.description,
						importer: new_request.importer,
						exporter: new_request.exporter,
						amount: amount_with_currency,
						posting_date: new_posting_date,
					}
				});
				this.onClickRefresh();
				this.dialogVisible = false;
				this.loading = false;
			}
		}
	};
</script>

<style lang="css" >
	.log-out-button{
		width:90px;
		background-color:#BB0000;
		border:none;
		border-radius: 0px;
	}
	.list-report{
		height: 100%;
		width: 100%;
	}
	.table-header {
		padding-top: 5px;
	}
	.table-header-search{

	}
	.table-header-toolbar{
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
		color:  #BB0000;
	}
	.table-item{
		color: #3F5161;
		font-family: Arial, Helvetica, sans-serif;
	}
	.request-dialog {
		font-family: Arial, Helvetica, sans-serif;
	}
	.request-item{
		width: 100%;
	}
	.request-dialog-button-cancel{
		font-family: Arial, Helvetica, sans-serif;
		background-color: #E5E5E5;
		border: none;
		border-radius: 0px;
	}
	.request-dialog-button-request{
		font-family: Arial, Helvetica, sans-serif;
		background-color: #BB0000;
		border: none;
		border-radius: 0px;
	}
</style>