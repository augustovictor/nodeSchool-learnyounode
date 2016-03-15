// TIME SERVER
var net = require('net');
var port = process.argv[2];
// console.log(params);

var date = new Date();
date = date.getFullYear() + '-' + ("0" + (date.getMonth()+1)).slice(-2) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';

var server = net.createServer(function(socket) {

    socket.end(date);
});

server.listen(port);
