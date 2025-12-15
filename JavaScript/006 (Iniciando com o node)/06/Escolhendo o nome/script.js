const coinOptions = document.querySelector('#coinOptions')
const buttonAction = document.querySelector('button')
const amountOfMoney = document.querySelector('#inputValue')

const firstValuePosition = document.querySelector('#firstValuePosition')
const seccondValuePosition = document.querySelector('#seccondValuePosition')

const SeccondCoinPositon = document.querySelector('#SeccondCoinPositon')

const imgValue = document.querySelector('#imgValue')

buttonAction.addEventListener('click', convert)


 async function convert(){ // O async senve para dizer que essa é um função assincrona

    //async await (Só pode ser usado dentro de uma função) // O await abaixo serve pro javascript entender que ele tem que esperar os dados chegarem
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json()) // Aqui está os valores da nossa api em formato .json

    const dollar = data.USDBRL.high // VALOR DE API
    const euro = data.EURBRL.high // VALOR DE API
    const bitcoin = data.BTCBRL.high // VALOR DE API

    if(coinOptions.value == 'Dólar'){
       const resultDollar = (Number(amountOfMoney.value) / dollar).toFixed(2)
            firstValuePosition.innerHTML = `R$ ${Number(amountOfMoney.value).toLocaleString('pt-BR')}`
            seccondValuePosition.innerHTML = `US$ ${Number(resultDollar).toLocaleString('pt-BR')}`
            imgValue.innerHTML = '<img src="./assets/USA.svg" alt="">'
            SeccondCoinPositon.innerHTML = 'Dólar Americano'

    } else if(coinOptions.value == 'Euro'){
        const resultEuro = (Number(amountOfMoney.value) / euro).toFixed(2)
            firstValuePosition.innerHTML = `R$ ${Number(amountOfMoney.value).toLocaleString('pt-BR')}`
            seccondValuePosition.innerHTML = `€ ${Number(resultEuro).toLocaleString('pt-BR')}`
            imgValue.innerHTML = '<img src="./assets/euro.svg" alt="">'
            SeccondCoinPositon.innerHTML = 'Euro'

    } else if(coinOptions.value == 'Bitcoin'){
        const resultBitcoin = (Number(amountOfMoney.value) / bitcoin).toFixed(2) 
            firstValuePosition.innerHTML = `R$ ${Number(amountOfMoney.value).toLocaleString('pt-BR')}`
            seccondValuePosition.innerHTML = `BTC ${Number(resultBitcoin).toLocaleString('pt-BR')}`
            imgValue.innerHTML = '<img src="./assets/bitcoin.png" alt="">'
            SeccondCoinPositon.innerHTML = 'Bitcoin'
    }

    if(amountOfMoney.value == ""){
        window.alert('Digite algum valor')
    }
}