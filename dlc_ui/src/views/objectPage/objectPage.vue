<template>
    <div class="object-page">
        <div class="header-content" align="left">
            <el-button class="button-back-to-list-report" type="primary" icon="el-icon-back" @click="onCLickBack"></el-button>
        </div>

        <!-- L/C TAB -->
        <el-tabs tab-position="left" value="letterOfCredit">
            <el-tab-pane label="Letter of Credit" name="letterOfCredit">
                <p align="left" class="form-title">Participants</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Issuer Bank">
                        <el-input :disabled="disableLCInput" v-model="lcData.issuer_bank"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Advisory Bank">
                        <el-input :disabled="disableLCInput" v-model="lcData.advisory_bank"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Seller">
                        <el-input :disabled="disableLCInput" v-model="lcData.seller"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Buyer">
                        <el-input :disabled="disableLCInput" v-model="lcData.buyer"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Identification</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="ID">
                        <el-input :disabled="disableLCInput" v-model="lcData.id"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Letter of Credit Type">
                        <el-input :disabled="disableLCInput" v-model="lcData.lc_type"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Expiry">
                        <el-input :disabled="disableLCInput" v-model="lcData.expiry"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Value</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Amount">
                        <el-input :disabled="disableLCInput" v-model="lcData.amount"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Discharge Details</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Address">
                        <el-input :disabled="disableLCInput" v-model="lcData.address"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="City">
                        <el-input :disabled="disableLCInput" v-model="lcData.city"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Country">
                        <el-input :disabled="disableLCInput" v-model="lcData.country"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Product</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Description">
                        <el-input :disabled="disableLCInput" v-model="lcData.description"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Quantity">
                        <el-input :disabled="disableLCInput" v-model="lcData.quantity"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Weight">
                        <el-input :disabled="disableLCInput" v-model="lcData.weight"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Unit of Weight">
                        <el-input :disabled="disableLCInput" v-model="lcData.unit_of_weight"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Unit Price">
                        <el-input :disabled="disableLCInput" v-model="lcData.unit_price"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Presentation</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Country">
                        <el-input :disabled="disableLCInput" v-model="lcData.country"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Province">
                        <el-input :disabled="disableLCInput" v-model="lcData.province"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="City">
                        <el-input :disabled="disableLCInput" v-model="lcData.city"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Last Ship Date">
                        <el-input :disabled="disableLCInput" v-model="lcData.last_ship_date"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Period Presentation">
                        <el-input :disabled="disableLCInput" v-model="lcData.period_presentation"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Upload File</p>
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Insurance Document">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileListInsurance">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                </el-form>

                <div align="right">
                    <el-button class="form-submit-button" type="primary" @click="onClickSubmitLC">Submit</el-button>
                </div>
            </el-tab-pane>

            <!-- DOCUMENT TAB -->
            <el-tab-pane label="Goods Doc. and Bill of Lading" name="doc">
                <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                    <el-form-item class="form-item" label="Bill of Lading">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileListBoL">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item class="form-item" label="Insurance Cliam Doc.">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileListIC">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item class="form-item" label="Damaged Goods Photos">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileListDGP">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                </el-form>

                <div align="right">
                    <el-button class="form-submit-button" type="primary">Submit</el-button>
                </div>
            </el-tab-pane>

            <!-- PAYMENT TAB -->
            <el-tab-pane label="Payment" name="payment">
                <div class="payment-progress">
                    <el-form class="form" align="left" inline="true" label-position="top" size="mini">
                        <el-form-item class="form-item" label="Advising Bank Payment">
                            <el-button class="form-button" type="text" @click="dialogVisible = true">Pay</el-button>
                            <el-button class="form-button" type="text">Status</el-button>
                        </el-form-item>
                        <el-form-item class="form-item" label="Issuing Bank Payment">
                            <el-button class="form-button" type="text">Pay</el-button>
                            <el-button class="form-button" type="text">Status</el-button>
                        </el-form-item>
                        <el-form-item class="form-item" label="Importer Payment">
                            <el-button class="form-button" type="text">Pay</el-button>
                            <el-button class="form-button" type="text">Status</el-button>
                        </el-form-item>
                    </el-form>
                </div>

                <el-dialog
                        class="request-dialog"
                        title="Payment"
                        :visible.sync="dialogVisible">
                    <el-form ref="form" :model="ab_payment" size="mini">
                        <el-form-item class="request-item" label="Payment Amount" >
                            <el-input v-model="ab_payment.amount" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item class="request-item" label="XRP Amount" >
                            <el-input v-model="ab_payment.xrp_amount" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item class="request-item" label="" >
                            <el-checkbox v-model="ab_payment.hedge" class="payment-check-box">Hedge</el-checkbox>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button class="request-dialog-button-cancel" @click="dialogVisible = false">Cancel</el-button>
                        <el-button class="payment-dialog-button-pay" type="primary">Pay</el-button>
                    </div>
                </el-dialog>

            </el-tab-pane>
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
            axios.get('/api/get_transaction_lc?transaction_id='+this.$route.query.transaction_id).then(response => (this.lcData = response.data));
            console.log(this.lcData);
            if(this.$route.query.user === 'exporter' && this.lcData.issuer_bank === '') {
                this.disableLCInput = false;
            }
		},
		beforeDestroy() {},
		destroyed() {},

		data() {
			return {
                dialogVisible: false,
                disableLCInput: true,
			    lcData: {
                    "transaction_id": "",
                    "issuer_bank": "",
                    "advisory_bank": "",
                    "seller": "",
                    "buyer": "",
                    "id": "",
                    "lc_type": "",
                    "expiry": "",
                    "amount": "",
                    "address": "",
                    "city": "",
                    "country": "",
                    "description": "",
                    "quantity": "",
                    "weight": "",
                    "unit_of_weight": "",
                    "nit_price": "",
                    "country": "",
                    "province": "",
                    "city": "",
                    "ast_ship_date": "",
                    "period_presentation": "",
			    },
                fileListInsurance: [
                    {
                        name: 'Insurance.pdf',
                        url: ''
                    }
                ],
                fileListBoL: [
                    {
                        name: 'Bill of Lading.pdf',
                        url: ''
                    }
                ],
                fileListIC: [
                    {
                        name: 'Insurance Claim.pdf',
                        url: ''
                    }
                ],
                fileListDGP: [
                    {
                        name: 'Damaged Goods 1.jpg',
                        url: ''
                    },
                    {
                        name: 'Damaged Goods 2.jpg',
                        url: ''
                    },
                    {
                        name: 'Damaged Goods 3.jpg',
                        url: ''
                    }
                ],
                ab_payment:{
			        "amount": "4283057",
                    "xrp_amount": "42830",
                    "hedge": true
                }
			};
		},
		watch: {},
		computed: {},
		methods: {
            onCLickBack(){
                this.$router.push({path:'/listReport/listReport', query: {'user': this.$route.query.user}})
            },
            onClickSubmitLC(){
                var new_lc = this.lcData;
                axios({
                    method: 'post',
                    url: '/api/add_lc',
                    headers: {
                        transaction_id: new_lc.transaction_id,
                        issuer_bank: new_lc.issuer_bank,
                        advisory_bank: new_lc.advisory_bank,
                        seller: new_lc.seller,
                        buyer: new_lc.buyer,
                        id: new_lc.id,
                        lc_type: new_lc.lc_type,
                        expiry: new_lc.expiry,
                        amount: new_lc.amount,
                        address: new_lc.address,
                        city: new_lc.city,
                        country: new_lc.country,
                        description: new_lc.description,
                        quantity: new_lc.quantity,
                        weight: new_lc.weight,
                        unit_of_weight: new_lc.unit_of_weight,
                        nit_price: new_lc.nit_price,
                        country: new_lc.country,
                        province: new_lc.province,
                        city: new_lc.city,
                        ast_ship_date: new_lc.ast_ship_date,
                        period_presentation: new_lc.period_presentation,
                    }
                });
                axios.get('/api/get_transaction_lc?transaction_id='+this.$route.query.transaction_id).then(response => (this.lcData = response.data));
                this.disableLCInput = true;
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
    .payment-check-box{
        color:#BB0000;
    }
    .payment-dialog-button-pay{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #BB0000;
        border: none;
        border-radius: 0px;
    }
</style>