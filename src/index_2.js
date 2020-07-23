var soap = require('soap');
var url = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl';
soap.createClient(url, function(err, client) {
    client.DailyDilbert({ ADate: "2019-11-02" }, function(err, result) {
        if(err) return console.log(err);
        console.log(result.DailyDilbertResult);
    });
});