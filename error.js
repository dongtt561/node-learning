/*
* @Author: dongtt
* @Date:   2017-11-03 14:00:31
* @Last Modified by:   dongtt
* @Last Modified time: 2017-11-03 17:37:44
*/
// Handle error

var fs = require('fs');
var file = 'ssdata.txt';

// var data = fs.readFile(file, 'UTF-8', function(error, data) {
//     if (error) {
//         throw error
//     }
//     console.log(data.toString());
// });
// var err = 'Lỗi kìa mày !';
var _error = function() {
    console.log(err);
};

// process.on('uncaughtException', _error);

var err = 'Domain lỗi kìa mày !';

var domain = require('domain').create();
file1 = 'files/test.txt';
domain.run(function() {
    fs.readFile(file1, 'UTF-8', function(err, data) {
        if (err) {
            throw err
        }
        console.log(data);
    });
});

domain.on('error', _error);
