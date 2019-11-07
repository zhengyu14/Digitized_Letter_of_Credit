<template>
	<div class="list-report">
		<template>
			<el-row class="table-header">
				<el-col :span="4" :offset="17">
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
				>
				<el-table-column
					sortable
					prop="transaction_id"
					label="Transaction ID">
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
				<el-form ref="form" :model="requestForm" size="mini">
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
						<el-input v-model="requestForm.amount" auto-complete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button class="request-dialog-button-cancel" @click="dialogVisible = false">Cancel</el-button>
					<el-button class="request-dialog-button-request" type="primary" @click="onClickRequest">Request</el-button>
				</div>
			</el-dialog>
		</template>
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
			axios.get('/api/get_list').then(response => (this.tableData = response.data))
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
				loading: false,
				dialogVisible: false,
			};
		},
		watch: {},
		computed: {},
		methods: {
			onClickItem(){
				this.$router.push({path:'/objectPage/objectPage'})
			},
			onClickRefresh(){
				this.loading = true;
				axios.get('/api/get_list').then(response => (this.tableData = response.data))
				this.loading = false;
			},
			onClickRequest() {
				var now = new Date();
				var new_id = Math.ceil(Math.random()*100000000);
				var new_posting_date = now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate();
				var new_request = this.requestForm;
				console.log(new_id)
				console.log(new_request)
				console.log(new_posting_date)

				axios.post('/api/get_list', {
					transaction_id: this.new_id,
					description: this.new_request.description,
					importer: this.new_request.importer,
					exporter: this.new_request.exporter,
					posting_date: this.new_posting_date,
				})
				this.onClickRefresh();
				this.dialogVisible = false;
			}
		}
	};
</script>

<style lang="css" scoped>
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

	}
	.dialog-footer{

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