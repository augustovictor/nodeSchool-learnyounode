// READ DIRECTORY ASYNC
var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = '.' + process.argv[3];

// console.log(extension);
var readdirCb = function(err, files) {
    if(err) throw err;
    files.forEach(function(file) {
        if(path.extname(file) === extension) {
            console.log(file);
        }
    });
};

var readDirectory = fs.readdir(directory, readdirCb);
