const input = document.getElementById('input');
const botao = document.getElementById('button');

const inputValue = input.value;


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
    let realDolar = (inputValue * cotacao(res));
    console.log(realDolar);
}

const callback_euro = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.EURBRL['bid']
    dia = json.EURBRL['create_date']
    console.log('Euro = R$ ' + cotacao + ' em: ' + dia)
}

const callback_bitcoin = function(erro, res, body) {
    let json = JSON.parse(body)
    cotacao = json.BTCBRL['bid']
    dia = json.BTCBRL['create_date']
    console.log('Bitcoin = R$ ' + cotacao + ' em: ' + dia)
}

setInterval(() => {
    request(options, callback_dolar)
    request(options, callback_euro)
    request(options, callback_bitcoin)    
}, 30000);

botao.addEventListener("click", ()  => {
    callback_dolar().realDolar;
})
