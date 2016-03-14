// HTTP REQUEST - NUMBER OF CHARACTERS AND CONSOLE.LOG FINAL STRING
var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding('utf8');
    var wordsCount;
    var wordsList = '';

    res.on('data', function(data) {
        wordsList += data;
        wordsCount = wordsList.split('').length;


        // console.log('STRING IN A LINE[ %d ]: %s', wordsCount, wordsList);
    });

    res.on('end', function() {
        console.log(wordsCount);
        console.log(wordsList);
    });

    res.on('error', function(error) {
        console.log(error);
    });
});
