/*
* @Author: dongtt
* @Date:   2017-12-14 13:35:24
* @Last Modified by:   dongtt
* @Last Modified time: 2017-12-15 13:56:41
*/

// console.log("filename: " + __filename);
// console.log("directory: " + __dirname);
// console.log("current working in directory: " + process.cwd());

// try {
//     process.chdir('/Users');
// } catch(exception) {
//     console.error(exception.message);
// }
// console.log("current working in directory: " + process.cwd());
// 
var path = require('path');

// var directories = ['Users', 'dongtt', 'Desktop', 'node-learning'];

// var directory = directories.join(path.sep);

// var filename = directory + path.sep + 'fileStream.js'; // or var filename = __filename , or var filename = process.cwd();

// console.log(path.basename(filename));
// var extension = filename.
// 


var fs = require('fs');
var pathSep = path.sep;
var filePath = process.cwd() + pathSep +  'files' + pathSep + 'test.txt';

// check file exists
fs.exists(filePath, function(exists) {
    console.log(exists);
});

// Read file
fs.readFile(filePath, 'utf-8', function(error, data) {
    if (!error) {
        console.log(data);
    } else {
        console.error(error.message);
    }
});


// write file
var filePathWrite = __dirname + pathSep + 'files' + pathSep + 'writeFile.txt';
var data = 'File was changed sadasd !';

fs.writeFile(filePathWrite, data, function(error) {
    if (error) {
        console.error(error.message);
    } else {
        console.log('Write file success');
    }
})


// rename, move file location
var oldName = filePathWrite;
var newName = __dirname + pathSep + 'files' + pathSep + 'fileRename.txt';
fs.rename(oldName, newName, function(error) {
    if (error) {
        console.error(error.message);
    } else {
        console.log('Renmae file success !');
    }
});

// Make directory
var directory = __dirname + pathSep + 'test';
fs.mkdir(directory, function(error) {
    if (error) {
        console.error(error.message);
    } else {
        console.log('Make directory success: ' + directory);
    }
})


