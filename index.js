const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();

var options = {
	key: fs.readFileSync('/etc/ssl/server.key'),
	cert:fs.readFileSync('/etc/ssl/server.crt'),
};


var server = https.createServer(options, app).listen(8080, () => {
	console.log('Listening on port 8080');
});


app.get('/', (req, res) => {
	res.send('HELLO WORLD');
	console.log('someone make a get request');
});
