var express = require('express');
var path = require('path');
var app = express();

// Sert les fichiers (CSS, HTML, JS)
app.use("/assets", express.static("client"));

//Route qui gère la page index
app.get('/', function (req, res) {
res.sendFile(__dirname + '/client/indexex1.html');
});

app.listen(7777, function () {
  console.log('Hello, you are connected on port 7777')
})