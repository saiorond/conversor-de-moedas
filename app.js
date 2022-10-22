const request = require('request')

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method:
    headers:
}