var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;  // Use the PORT environment variable or default to 3000

app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});
