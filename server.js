// server.js
const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// whoami end point => See who you are
app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.header('accept-language'),
    software: req.header('user-agent')
  });
});

// Setting our PORT address the server listens to
const PORT = process.env.PORT || 3000;

// listen for requests :)
const listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});