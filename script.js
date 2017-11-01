/*Server Example*/
console.log('SERVER EXAMPLE ------------------------------------------');
var http = require('http');
var server = http.createServer(function(req, res){
    console.log('a client connected!');
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('<a href="http://www.24h.com.vn">Linh oc cho</a>');
});

server.listen(3000, function(){
    console.log('server start');
});


/*FS example*/
console.log('PROGRAM EXAMPLE ------------------------------------------');
var fs = require('fs');
console.log('Program started!');
var data = fs.readFile('files/test.txt', function (err, _data) {
    if (err) {
        return console.error(err);
    }
    console.log(_data.toString());
});
console.log(data); 
console.log('Program Ended!');

// FS my function example
console.log('FS MY PROGRAM EXAMPLE ------------------------------------------');

var fs_m = require('fs');
var file = 'files/test.txt';

function _readFile(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
}

function _status(err, stat) {
    if (err) {
        throw err;
    }
    if (stat.isFile()) {
        fs.readFile(file, 'UTF-8', _readFile);
    }
}

function fileExists(exists) {
    if (exists) {
        fs.stat(file, _status);
    }
}

fs.exists(file, fileExists);

