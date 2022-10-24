const request = require('request')

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    headers: {
        'Accept': 'aplication/json',
        'Accept-Charset': 'utf-8'
    }   
}

const callback_todas_cotacoes = function(erro, res, body) {
    let json = JSON.parse(body)
    console.log(json)
}

const callback_dolar = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.USDBRL['bid']
    dia = json.USDBRL['create_date']
    console.log('Dólar = R$ ' + cotacao + ' em: ' + dia)
}

request(options, callback_dolar)