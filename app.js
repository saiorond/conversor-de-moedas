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