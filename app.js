var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.sendFile(_dirname + '/index.html');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function(req, res) {
	console.log("catch te action on localhost:"+port);
});