<template>
    <div class="object-page">
        <div class="header-content" align="left">
            <el-button class="button-back-to-list-report" type="primary" icon="el-icon-back"></el-button>
        </div>
        <el-tabs tab-position="left" value="letterOfCredit">
            <el-tab-pane label="Letter of Credit" name="letterOfCredit">
                <el-form class="form" align="left" inline="true" label-position="top" :model="participants" size="mini">
                    <el-form-item class="form-item" label="Issuer Bank">
                        <el-input v-model="participants.issuer_bank"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Advisory Bank">
                        <el-input v-model="participants.advisory_bank"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Seller">
                        <el-input v-model="participants.seller"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Buyer">
                        <el-input v-model="participants.buyer"></el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="Payment" name="payment">配置管理</el-tab-pane>
        </el-tabs>
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
            axios.get('/api/get_trans_lc').then(response => (this.lcData = response.data));
            console.log(response)
            this.participants = this.lcData[0].participants;
            
		},
		beforeDestroy() {},
		destroyed() {},

		data() {
			return {
              lcData: [],
              form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                }
			};
		},
		watch: {},
		computed: {},
		methods: {}
	};
</script>

<style lang="css" scoped>
    .object-page{
        font-family: Arial, Helvetica, sans-serif;
    }
    .header-content{
        justify-content: left;
        align-items: left;
    }
    .button-back-to-list-report{
        font-weight: bold;
		background-color:#BB0000;
		border:none;
		border-radius: 0px;
    }
    .form{
        justify-content: left;
        align-items: left;
    }
    .form-item{
        width: 250px;
    }
</style>