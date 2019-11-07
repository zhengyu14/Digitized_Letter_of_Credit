<template>
    <div class="object-page">
        <div class="header-content" align="left">
            <el-button class="button-back-to-list-report" type="primary" icon="el-icon-back" @click="onCLickBack"></el-button>
        </div>
        <el-tabs tab-position="left" value="letterOfCredit">
            <el-tab-pane label="Letter of Credit" name="letterOfCredit">
                <p align="left" class="form-title">Participants</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Issuer Bank">
                        <el-input v-model="lcData.participants.issuer_bank"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Advisory Bank">
                        <el-input v-model="lcData.participants.advisory_bank"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Seller">
                        <el-input v-model="lcData.participants.seller"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Buyer">
                        <el-input v-model="lcData.participants.buyer"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Identification</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="ID">
                        <el-input v-model="lcData.identification.id"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Letter of Credit Type">
                        <el-input v-model="lcData.identification.lc_type"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Expiry">
                        <el-input v-model="lcData.identification.expiry"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Value</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Amount">
                        <el-input v-model="lcData.value.amount"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Discharge Details</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Address">
                        <el-input v-model="lcData.discharge_details.address"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="City">
                        <el-input v-model="lcData.discharge_details.city"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Country">
                        <el-input v-model="lcData.discharge_details.country"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Product</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Description">
                        <el-input v-model="lcData.product.description"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Quantity">
                        <el-input v-model="lcData.product.quantity"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Weight">
                        <el-input v-model="lcData.product.weight"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Unit of Weight">
                        <el-input v-model="lcData.product.unit_of_weight"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Unit Price">
                        <el-input v-model="lcData.product.unit_price"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Presentation</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Country">
                        <el-input v-model="lcData.presentation.country"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Province">
                        <el-input v-model="lcData.presentation.province"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="City">
                        <el-input v-model="lcData.presentation.city"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Last Ship Date">
                        <el-input v-model="lcData.presentation.last_ship_date"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Period Presentation">
                        <el-input v-model="lcData.presentation.period_presentation"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Upload File</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Insurance Document">
                        <el-button class="form-button" type="text">Browse</el-button>
                        <el-button class="form-button" type="text">View</el-button>
                    </el-form-item>
                </el-form>

                <div align="right">
                    <el-button class="form-submit-button" type="primary">Submit</el-button>
                </div>
            </el-tab-pane>

            <el-tab-pane label="Goods Doc. and Bill of Lading" name="doc">
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Bill of Lading">
                        <el-button class="form-button" type="text">Browse</el-button>
                        <el-button class="form-button" type="text">View</el-button>
                    </el-form-item>
                    <el-form-item class="form-item" label="Insurance Cliam Doc.">
                        <el-button class="form-button" type="text">Browse</el-button>
                        <el-button class="form-button" type="text">View</el-button>
                    </el-form-item>
                    <el-form-item class="form-item" label="Damaged Goods Photos">
                        <el-button class="form-button" type="text">Browse</el-button>
                        <el-button class="form-button" type="text">View</el-button>
                    </el-form-item>
                </el-form>

                <div align="right">
                    <el-button class="form-submit-button" type="primary">Submit</el-button>
                </div>
            </el-tab-pane>

            <el-tab-pane label="Payment" name="payment">Coming Soon</el-tab-pane>
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
			    lcData: {
                    "transaction_id": "",
                    "participants": {
                        "issuer_bank": "",
                        "advisory_bank": "",
                        "seller": "",
                        "buyer": ""
                    },
                    "identification": {
                        "id": "",
                        "lc_type": "",
                        "expiry": "",
                    },
                    "value": {
                        "amount": "",
                    },
                    "discharge_details": {
                        "address": "",
                        "city": "",
                        "country": ""
                    },
                    "product": {
                        "description": "",
                        "quantity": "",
                        "weight": "",
                        "unit_of_weight": "",
                        "nit_price": "",
                    },
                    "presentation": {
                        "country": "",
                        "province": "",
                        "city": "",
                        "ast_ship_date": "",
                        "period_presentation": "",
                    },
                    "upload_file": "",
			    }
			};
		},
		watch: {},
		computed: {},
		methods: {
            onCLickBack(){
                this.$router.push({path:'/listReport/listReport'})
            }
        }
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
    .form-title{
        font-family: Arial, Helvetica, sans-serif;
    }
    .form{
        justify-content: left;
        align-items: left;
    }
    .form-item{
        width: 250px;
    }
    .form-button{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color:  #BB0000;
    }
    .form-submit-button{
        width:100px;
        background-color:#BB0000;
        border:none;
        border-radius: 0px;
    }
</style>