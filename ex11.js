// FILE SERVER
var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filePath = process.argv[3];
// console.log(process.argv);

// req: Access to header and request
// res: Used to send data to client (eg: Header and body)
// Both are node streams
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});

    file = fs.createReadStream(filePath);
    file.pipe(res);
});

server.listen(port, function() {
    console.log('Server created on port: http://localhost:' + port)
});
