<template>
    <div class="object-page">
        <div class="header-content" align="left">
            <el-button class="button-back-to-list-report" type="primary" icon="el-icon-back" @click="onCLickBack"></el-button>
        </div>

        <!-- L/C TAB -->
        <el-tabs tab-position="left" value="letterOfCredit">
            <el-tab-pane label="Letter of Credit" name="letterOfCredit">
                <p align="left" class="form-title">Participants</p>
                <el-form class="form" align="left" inline label-position="top" size="mini">
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
                <el-form class="form" align="left" inline label-position="top" size="mini">
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
                <el-form class="form" align="left" inline label-position="top" size="mini">
                    <el-form-item class="form-item" label="Amount">
                        <el-input :disabled="disableLCInput" v-model="lcData.amount"></el-input>
                    </el-form-item>
                </el-form>

                <p align="left" class="form-title">Discharge Details</p>
                <el-form class="form" align="left" inline label-position="top" size="mini">
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
                <el-form class="form" align="left" inline label-position="top" size="mini">
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
                <el-form class="form" align="left" inline label-position="top" size="mini">
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
                <el-form class="form" align="left" inline label-position="top" size="mini">
                    <el-form-item class="form-item" label="Insurance Document">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"

                                multiple
                                :limit="3"

                                :file-list="fileListInsurance">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                </el-form>

                <div align="right">
                    <el-button class="form-submit-button" type="primary" @click="onClickSubmitLC">Issue</el-button>
                </div>
            </el-tab-pane>

            <!-- DOCUMENT TAB -->
            <el-tab-pane label="Documents" name="doc">
                <el-form class="form" align="left" inline label-position="top" size="mini" style = "display: flex;justify-content: space-around;">
                    <el-form-item style="width: 20%;" label="Commercial invoice">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple
                                :limit="3"
                                :file-list="fileCommercialInvoice">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item style="width: 20%;" label="Packing list">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple
                                :limit="3"
                                :file-list="filePackingList">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item style="width: 20%;" label="Certificate">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple
                                :limit="3"
                                :file-list="fileCert">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item style="width: 20%;" label="Bill">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple
                                :limit="3"
                                :file-list="fileBill">
                            <el-button class="form-button" size="small" type="text">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                </el-form>

                <div align="right">
                    <el-button class="form-submit-button" type="primary" @click = 'onClickSubmitDoc'>Submit</el-button>
                </div>
            </el-tab-pane>

            <!-- PAYMENT TAB -->
            <el-tab-pane label="Payment" name="payment">
                <div class="payment-progress">
                    <el-form class="form" align="left" inline label-position="top" size="mini">
                        <el-form-item class="form-item" label="Advising Bank Payment">
                            <el-button class="form-button" type="text"  @click = "showDia">Pay</el-button>
                            <el-button class="form-button-active" type="text" @click = "showStatusDia" >Status</el-button>
                        </el-form-item>
                        <el-form-item class="form-item" label="Issuing Bank Payment">
                            <el-button class="form-button" type="text" @click = "showDia" >Pay</el-button>
                            <el-button class="form-button-active" type="text" @click = "showStatusDia" >Status</el-button>
                        </el-form-item>
                        <el-form-item class="form-item" label="Importer Payment">
                            <el-button class="form-button" type="text" @click = "showLockedDia" >Pay</el-button>
                            <el-button class="form-button-active" type="text" @click = "showStatusDia" >Status</el-button>
                        </el-form-item>
                    </el-form>
                </div>

                <el-dialog
                        class="request-dialog"
                        title="Payment"
                        :visible.sync="dialogVisible">
                    <el-form ref="form" :model="ab_payment" size="mini">
                        <el-form-item class="request-item" label="Payment Amount" >
                            <el-input v-model="ab_payment.amount" auto-complete="off">
                                <el-select style="width: 80px;" slot="append" placeholder="HKD">
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
                        <el-form-item class="request-item" label="XRP Amount" >
                            <el-input v-model="ab_payment.xrp_amount" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item class="request-item" label="" >
                            <el-checkbox v-model="ab_payment.hedge" class="payment-check-box">Hedge (Recommended by Recent Volatility)</el-checkbox>
                        </el-form-item>
                    </el-form>
                    <el-form ref="form" :model="ab_payment" size="mini">
                        <el-form-item class="request-item" label="Hedging Period" >
                            <el-input v-model="hdg.period" auto-complete="off">
                                <el-select style="width: 100px;" slot="append" placeholder="Month">
                                    <el-option label="Month" value="Month"></el-option>
                                    <el-option label="Days" value="Days"></el-option>
                                </el-select>
                            </el-input>
                        </el-form-item>
                    </el-form><br>
                    <span>
                        <p style="color: #427cac; padding:0px; margin:0px; display: inline;">HKD Rate: 2.4%   /   </p>
                        <p style="color: #427cac; padding:0px; margin:0px; display: inline;">XRP Rate: 4.3%</p>
                    </span><br><br>
                    <span>
                        <p style="font-weight: bold; font-size: 120%; padding:0px; margin:0px; display: inline;">XRP Price: HK$1.80  </p>
                        <p style="color: #BB0000; padding:0px; margin:0px; display: inline;">-HK$0.07(3.66%)</p>
                    </span>
                    <div id="line" class="line" style="width: 100%;height: 200px;"></div>
                    <div slot="footer" class="dialog-footer">
                        <el-button class="request-dialog-button-cancel" @click="dialogVisible = false">Cancel</el-button>
                        <el-button class="payment-dialog-button-pay" type="primary" @click="dialogVisible = false">Pay</el-button>
                    </div>
                </el-dialog>

                <el-dialog
                        class="request-dialog"
                        title="Payment Status"
                        :visible.sync="statusDialogVisible">
                    <p>Payment Amount: 4,283,057.00 HKD</p>
                    <p>Payment Status: Success</p>
                </el-dialog>

                <el-dialog
                        class="request-dialog"
                        title="Payment Status"
                        :visible.sync="lockedDialogVisible">
                    <el-input v-model="ab_payment.amount" :disabled="true" auto-complete="off">
                        <el-select style="width: 80px;" :disabled="true" slot="append" placeholder="HKD">
                            <el-option label="USD" value="USD"></el-option>
                            <el-option label="HKD" value="HKD"></el-option>
                            <el-option label="CNY" value="CNY"></el-option>
                            <el-option label="GBP" value="GBP"></el-option>
                            <el-option label="EUR" value="EUR"></el-option>
                            <el-option label="AUD" value="AUD"></el-option>
                            <el-option label="CHF" value="CHF"></el-option>
                        </el-select>
                    </el-input>
                    <div slot="footer" class="dialog-footer">
                        <el-button class="request-dialog-button-cancel" @click="lockedDialogVisible = false">Cancel</el-button>
                        <el-button class="payment-dialog-button-pay" type="primary" @click="lockedDialogVisible = false">Pay</el-button>
                    </div>
                </el-dialog>

            </el-tab-pane>
        </el-tabs>
    </div>


</template>
i
<script type="text/javascript">
	import axios from 'axios';
    import echarts from 'echarts';
	export default {
		props: {},
		components: {},
		// Lifecycles
		beforeCreate() {},
		created() {},
		beforeMount() {},
		mounted() {
            axios.get('/api/get_transaction_lc?transaction_id='+this.$route.query.transaction_id,)
                .then((response) => {
                    this.lcData = response.data
                    if(this.$route.query.user === 'importer' && this.lcData.issuer_bank === '') {
                        this.disableLCInput = false;
                    }
                });
		},
		beforeDestroy() {},
		destroyed() {},

		data() {
			return {
                dialogVisible: false,
                disableLCInput: true,
                statusDialogVisible: false,
                lockedDialogVisible: false,
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
                fileCommercialInvoice: [
                    {
                        name: 'Commercial Invoice.pdf',
                        url: ''
                    }
                ],
                filePackingList: [
                    {
                        name: 'Packing List.pdf',
                        url: ''
                    }
                ],
                fileCert: [
                    {
                        name: 'Certificate of inspection.pdf',
                        url: ''
                    },
                    {
                        name: 'Certificate of origin.pdf',
                        url: ''
                    },
                    {
                        name: 'Insurance certificate/policy.pdf',
                        url: ''
                    }
                ],
                fileBill: [
                    {
                        name: 'Bill of Lading.pdf',
                        url: ''
                    },
                    {
                        name: 'Airway Bill.pdf',
                        url: ''
                    },
                    {
                        name: 'Bill of Exchange.pdf',
                        url: ''
                    }
                ],
                ab_payment:{
			        "amount": "4,283,057.00",
                    "xrp_amount": "7,966,486.02",
                    "hedge": true
                },
                hdg:{
                    "period": "3"
                },
                line:null
			};
		},
		watch: {},
		computed: {},
		methods: {
            onCLickBack(){
                this.$router.push({path:'/listReport/listReport', query: {'user': this.$route.query.user}})
            },
            onClickSubmitLC(){
                if (this.lcData.issuer_bank === '') {
                    this.$message.error('Please fill the mandatory information: Issuer Bank');
                } else {
                    var new_lc = this.lcData;
                    axios({
                        method: 'post',
                        url: '/api/add_lc',
                        headers: {
                            transaction_id: this.$route.query.transaction_id,
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

                    //axios.get('/api/get_transaction_lc?transaction_id='+this.$route.query.transaction_id).then(response => (this.lcData = response.data));
                    this.disableLCInput = true;

                    this.$message({
                        message: 'This letter of credit is successfully issued.',
                        type: 'success'
                    });
                }
            },
            onClickSubmitDoc() {
                this.$message({
                    message: 'Your documents have been successfully submitted',
                    type: 'success'
                });
            },
            showDia(){
                let vm = this;
                this.dialogVisible = true;
                var fileListInsurance
                this.$nextTick(()=>{
                    vm.line = echarts.init(document.getElementById('line'));
                    let option = {
                        xAxis: {
                            type: 'category',
                            data: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28']
                        },
                        yAxis: {
                            max: 1.9,
                            min: 1.8,
                            type: 'value',
                        },
                        series: [{
                            data: [1.86, 1.82, 1.89, 1.88, 1.85, 1.82, 1.87, 1.85, 1.89, 1.82, 1.87, 1.83, 1.88, 1.81],
                            type: 'line'
                        }]
                    };

                    vm.line.setOption(option,true);
                })
            },
            showStatusDia() {
                this.statusDialogVisible = true;
            },
            showLockedDia() {
                this.lockedDialogVisible = true;
            }
        }
	};
</script>

<style lang="css" scoped>
    .object-page{
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
        .el-tabs__content{
            height: 100%;
        }

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
    .form-button-active{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color:  #BB0000;
    }
    .form-button{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color:  #EBEBEB;
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