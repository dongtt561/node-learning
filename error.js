/*
* @Author: dongtt
* @Date:   2017-11-03 14:00:31
* @Last Modified by:   dongtt
* @Last Modified time: 2017-11-16 16:01:53
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

var _error1 = function() {
    console.log(err1);
};

// process.on('uncaughtException', _error);

var err = 'Domain lỗi kìa mày !';

var domain = require('domain').create();
file1 = 'sfiles/test.txt';
domain.run(function() {
    fs.readFile(file1, 'UTF-8', function(err, data) {
        if (err) {
            throw err
        }
        console.log(data);
    });
});
err1 = 'WTFFFFF';
domain.on('uncaughtException', _error1);
var err = 'Domain lỗi kìa mày !';
domain.on('error', _error);

