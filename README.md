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