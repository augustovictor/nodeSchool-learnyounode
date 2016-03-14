// ASYNC IO
var fs = require('fs');

var readFileCb = function(err, data) {
    if(err) throw err;
    return console.log(data.split('\n').length-1);
};

var file = fs.readFile(process.argv[2], 'utf8', readFileCb);
