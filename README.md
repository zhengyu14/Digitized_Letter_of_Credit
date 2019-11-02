# RESTful API
Express: https://expressjs.com/
#### How-To Guide
###### Install Modules
* npm install
###### Start Server
* node server.js
#### API Details
###### Login
* POST localhost:3000/login
* Headers: "username", "password" (e.g. exporter/exporter importer/importer)
* Response (JSON): "id"
###### Get user Information
* GET localhost:3000/get_user_info
* Headers: "id" (e.g. exporter_id importer_id)
* Response (JSON): "imgurl", "name", "location"