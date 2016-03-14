// SYNC IO
var fs = require('fs');

var linesCount = fs.readFileSync(process.argv[2], 'utf8').split('\n').length -1;
// OR
// var linesCount = fs.readFileSync(process.argv[2]).toString().split('\n').length -1;

console.log(linesCount);
