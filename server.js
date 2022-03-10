// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
//var accepts = require('accepts');
var useragent = require('express-useragent');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(useragent.express());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", function (req, res) {

  //var accept = accepts(req);

  let response = {
    "ipaddress":req.ip,
    "language":req.headers["accept-language"],
    "software":req.useragent.source
  };
  
  //console.log(req.ip);
  //console.log(req.acceptsLanguages());
  //console.log(accept.languages());
  //console.log(req.headers["accept-language"]);
  
  console.log(response);
  res.json(response);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
