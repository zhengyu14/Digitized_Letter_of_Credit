//'use strict';
let express = require('express');
//let WebSocketServer = require('ws');
//let basicAuth = require('express-basic-auth')
let http = require('http');
let log4js = require('log4js');
let cors = require('cors');
let bodyParser = require('body-parser');
let markdown = require( "markdown" ).markdown;;
let fs = require("fs");
let mock_data = require("./mock_data");

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
  }
});
let logger = log4js.getLogger('DLC');

let host = 'localhost';
let port = 3000;
let app = express( );
let data = new mock_data( );

// Mock data
let mock_exporter_login = 'exporter';
let mock_importer_login = 'importer';
let mock_exporter_id = 'exporter_id';
let mock_importer_id = 'importer_id';

// Test page
app.get('/', function(req, res){
  logger.info('New visitor: %s',req.headers);
  var readme = fs.readFileSync("README.md", "utf8");
  var htlm = markdown.toHTML( readme );
  res.send(htlm);
})

// Login
app.post('/login', function(req, res) {
  logger.info('Login: %s',req.headers);
  console.log()
  if(req.header('username') == mock_exporter_login && req.header('password') == mock_exporter_login) {
    res.status(200).json({ "id": mock_exporter_id });
  } else if(req.header('username') == mock_importer_login && req.header('password') == mock_importer_login) {
    res.status(200).json({ "id": mock_importer_id });
  } else {
    res.status(400).json({ 'error': 'Invalid user name and password.' });
  };

});

// Get user information
app.get( '/get_user_info', function(req, res ) {
  logger.info('Get Information: %s',req.headers);

  if(req.header('id') == mock_exporter_id) {
    res.status(200).json({
      "imgurl": "https://image.flaticon.com/icons/svg/147/147144.svg",
      "name": 'Great Wall Trading Co.',
      "location": "No. 123 Sheng Li Road, Tianjin, China" });
  } else if (req.header('id') == mock_importer_id) {
    res.status(200).json({
      "imgurl": "https://image.flaticon.com/icons/svg/147/147144.svg",
      "name": 'Great Wall Trading Co.',
      "location": "No. 123 Sheng Li Road, Tianjin, China" });
  } else {
    res.status(400).json({ 'error': 'Invalid identifier.' });
  };
})

// Get transaction list
app.get('/get_list', function(req, res) {
  logger.info('Get list: %s',req.headers);

  //console.log(data.get_transaction_list());
  res.status(200).json(data.get_transaction_list());
});

// Add a new transaction
app.post('/add_to_list', function(req, res) {
  logger.info('Add to list: %s',req.headers);

  var new_item = {
    "transaction_id": req.header('transaction_id'),
    "status": "In Process",
    "description": req.header('description'),
    "importer": req.header('importer'),
    "exporter": req.header('exporter'),
    "amount": req.header('amount'),
    "posting_date": req.header('posting_date')
  };

  data.push_to_transaction_list(new_item);

  res.status(200).json(data.get_transaction_list());
})

// Get transaction L/C
app.get('/get_transaction_lc', function(req, res) {
  logger.info('Get transaction L/C: %s', req.headers);
  logger.info('Parameter: %s', req.query.transaction_id);

  res.status(200).json(data.get_transaction_lc(req.query.transaction_id));
});

// Add transaction L/C
app.post('/add_lc', function(req, res) {
  logger.info('Add to list: %s',req.headers);

  var new_lc = {
    "transaction_id": req.header('transaction_id'),

    // Participants
    "issuer_bank": req.header('issuer_bank'),
    "advisory_bank": req.header('advisory_bank'),
    "seller": req.header('seller'),
    "buyer": req.header('buyer'),

    // Identification
    "id": req.header('id'),
    "lc_type": req.header('lc_type'),
    "expiry": req.header('expiry'),

    // Value
    "amount": req.header('amount'),

    // Discharge Details
    "address": req.header('address'),
    "city": req.header('city'),
    "country": req.header('country'),

    // Product
    "description": req.header('description'),
    "quantity": req.header('quantity'),
    "weight": req.header('weight'),
    "unit_of_weight": req.header('unit_of_weight'),
    "unit_price": req.header('unit_price'),

    // Presentation
    "country": req.header('country'),
    "province": req.header('province'),
    "city": req.header('city'),
    "last_ship_date": req.header('last_ship_date'),
    "period_presentation": req.header('period_presentation')
  };

  data.add_transaction_lc(new_lc);

  res.status(200).json(data.get_transaction_lc(req.header('transaction_id')));
})


/*------------------------
    Express Config.
 -----------------------*/
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  logger.info(' New request for URL %s',req.originalUrl);
  return next();
});

/*------------------------
    Start Server
 -----------------------*/
let server = http.createServer(app).listen(port, function() {});
logger.info('Server started');
logger.info('Listening on: http://%s:%s',host,port);
server.timeout = 240000;

/*--------------------------
    Start Websocket Server
 -------------------------*/
/*
const wss = new WebSocketServer.Server({ server });
wss.on('connection', function connection(ws) {
  logger.info(' Websocket Server - received connection');
  ws.on('message', function incoming(message) {
    console.log('##### Websocket Server received message: %s', message);
  });

  ws.send('something');
});
 */