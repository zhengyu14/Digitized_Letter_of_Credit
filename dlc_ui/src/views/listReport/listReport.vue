<template>
	<div class="list-report">
		<template>
			<el-row class="table_header">
				<el-col :span="4" :offset="20">
					<el-button class="table-toolbar" type="text">Request</el-button>
					<el-button class="table-toolbar" type="text" @click="onClickCreate">Create</el-button>
					<el-button class="table-toolbar" type="text" @click="onClickRefresh" icon="el-icon-refresh-right"></el-button>
					<el-button class="table-toolbar" type="text" icon="el-icon-setting"></el-button>
				</el-col>
			</el-row>

			<el-table
				class="table-item"
				:data="tableData"
				@row-click="onClickItem"
				style="width: 100%"
				v-loading="loading"
				>
				<el-table-column
					fixed
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
		</template>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios';

	export default {
		props: {},
		components: {},
		// Lifecycles
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
			  loading: false
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
			onClickCreate(){
				alert('Create!')
			}
		}
	};
</script>

<style lang="css" scoped>
	.table-item{
		color: #3F5161;
		font-family: Arial, Helvetica, sans-serif;
	}
	.table-toolbar{
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
		color:  #BB0000;
	}
</style>