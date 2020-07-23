var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?wsdl';


async function init () {
    const client = await createClient()
    const resultadoSoma = await soma(100, 200, client)

    console.log(resultadoSoma)

    const resultadoDivisao = await divide(resultadoSoma, 2, client)
    console.log(resultadoDivisao)

}

async function soma(v1, v2, client){
    const args = {intA: v1, intB: v2}

    const response = await client.AddAsync(args);
    const headers = client.lastResponseHeaders
    console.log(headers)
    return response[0].AddResult
}

async function divide(v1, v2, client){
    const args = {intA: v1, intB: v2}
    const response = await client.DivideAsync(args);
    const headers = client.lastResponseHeaders
    console.log(headers)
    return response[0].DivideResult
    

}

async function createClient(){
    return await soap.createClientAsync(url);
}


init().then(()=>{ }).catch(e => { console.log(e)})

