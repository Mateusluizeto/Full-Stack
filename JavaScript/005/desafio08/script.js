const coinOptions = document.querySelector('#coinOptions')
const buttonAction = document.querySelector('button')
const amountOfMoney = document.querySelector('#inputValue')

const firstValuePosition = document.querySelector('#firstValuePosition')
const seccondValuePosition = document.querySelector('#seccondValuePosition')

const SeccondCoinPositon = document.querySelector('#SeccondCoinPositon')

const imgValue = document.querySelector('#imgValue')

buttonAction.addEventListener('click', convert)

function convert(){

    if(coinOptions.value == 'Dólar'){
       const resultDollar = (Number(amountOfMoney.value) / 5.44).toFixed(2)
            firstValuePosition.innerHTML = `R$ ${Number(amountOfMoney.value).toLocaleString('pt-BR')}`
            seccondValuePosition.innerHTML = `US$ ${Number(resultDollar).toLocaleString('pt-BR')}`
            imgValue.innerHTML = '<img src="./assets/USA.svg" alt="">'
            SeccondCoinPositon.innerHTML = 'Dólar Americano'

    } else if(coinOptions.value == 'Euro'){
        const resultEuro = (Number(amountOfMoney.value) / 6.34).toFixed(2)
            firstValuePosition.innerHTML = `R$ ${Number(amountOfMoney.value).toLocaleString('pt-BR')}`
            seccondValuePosition.innerHTML = `US$ ${Number(resultEuro).toLocaleString('pt-BR')}`
            imgValue.innerHTML = '<img src="./assets/euro.svg" alt="">'
            SeccondCoinPositon.innerHTML = 'Euro'

    } else if(coinOptions.value == 'Bitcoin'){
        const resultBitcoin = (Number(amountOfMoney.value) / 486000).toFixed(2) 
            firstValuePosition.innerHTML = `R$ ${Number(amountOfMoney.value).toLocaleString('pt-BR')}`
            seccondValuePosition.innerHTML = `US$ ${Number(resultBitcoin).toLocaleString('pt-BR')}`
            imgValue.innerHTML = '<img src="./assets/bitcoin.png" alt="">'
            SeccondCoinPositon.innerHTML = 'Bitcoin'
    }

    if(amountOfMoney.value == ""){
        window.alert('Digite algum valor')
    }
}