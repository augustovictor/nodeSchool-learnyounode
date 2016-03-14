// HTTP REQUEST
var http = require('http');

var url = process.argv[2];

var done = function(res) {
    res.setEncoding('utf8');

    res.on('data', function(data) {
        console.log(data);
    });

    res.on('error', function(error) {
        console.log(error);
    })
}

http.get(url, done);
