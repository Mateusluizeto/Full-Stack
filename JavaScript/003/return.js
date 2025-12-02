/*
    functions

    return
*/



function sum(number1, number2){ // Parâmetros
    const result = number1 + number2
    return result
}

/*const sum = function (number1, number2){ // Parâmetros
    const result = number1 + number2
    return result                       OUTRA MANEIRA DE DELACLARAR A FUNÇÃO (FUNÇÃO ANÔNIMA)
} */

const firstNumber = 10
const seccondNumber = 20

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`E a soma dos dois é ${sum(firstNumber, seccondNumber)}`)
