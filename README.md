### RESTful API for Digitised Letter of Credit
#### How-To Guide
###### Install Modules
* npm install
###### Start Server
* node server.js
#### API Details
http://116.62.202.114:3000
###### Login
* POST /login
* Headers: "username", "password" (e.g. exporter/exporter importer/importer)
* Response (JSON): "id"
###### Get user Information
* GET /get_user_info
* Headers: "id" (e.g. exporter_id importer_id)
* Response (JSON): "imgurl", "name", "location"
###### Get transaction list
* GET /get_list
* Response (JSON): "transaction_id", "description", "importer", "exporter", "amount", "posting_date"
###### Get transaction letter of credit
* GET /get_transaction_lc
* Response (JSON):
[
"transaction_id",
"participants": {"issuer_bank","advisory_bank","seller","buyer"},
"identification": {"id","lc_type",expiry"},
"value": {"amount"},
"discharge_details": {"address","city","country": "China"},
"product": {"description","quantity","weight","unit_of_weight",nit_price"},
"presentation": {"country","province","city",ast_ship_date","period_presentation"},
"upload_file"
]

