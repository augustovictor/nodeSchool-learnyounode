
// HTTP REQ ASYNC ORDER

var http = require('http');

var urls = process.argv;

var results = new Array(urls.length-2);

var cbCounter = 0;

var run = function(order) {
    http.get(urls[order], function(res) {

        var stringLine = '';

        res.setEncoding('utf8');

        res.on('data', function(data) {
            stringLine += data;
        });

        res.on('end', function() {
            cbCounter++;
            results[order-2] = stringLine;
            // console.log(cbCounter);
            // console.log(stringLine);
            if(cbCounter === 3) {
                printResults();
            }
        });

        res.on('error', function(error) {
            console.log(error);
        });


    });
};

for(i = 2; i < urls.length; i++) {
    run(i);
}

function printResults() {
    results.forEach(function(result) {
        console.log(result);
    });
}
