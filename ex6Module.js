// READ DIRECTORY MODULAR

var fs = require('fs');
var path = require('path');

module.exports = function(args, done) {
    var filePath = args[2];
    var fileExt = '.' + args[3];
    var readDirCb = function(err, files) {
        if(err) throw err;
        files.forEach(function(file) {
            if (path.extname(file) === fileExt) {
                console.log(file);
            }
        });
    };

    var readDir = fs.readdir(filePath, readDirCb);

    return readDir;
};
