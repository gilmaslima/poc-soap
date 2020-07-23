var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?wsdl';
soap.createClient(url, function(err, client) {
    if(err) return console.log(err);
    console.log(client)

    
    client.Add({intA: 200, intB: 25}, function(error, result){
        if(error){
            console.log(error)
        }
        console.log(result)

    })

});