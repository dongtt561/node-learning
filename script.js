var http = require('http');
var server = http.createServer(function(req, res){
	console.log('a client connected!');
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('<a href="http://www.24h.com.vn">test link</a>');
});

server.listen(3000, function(){
	console.log('server start');
});
