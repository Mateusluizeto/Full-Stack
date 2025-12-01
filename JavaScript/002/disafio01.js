/*
[] Faça um prgrama que SOME 2 números
[] Faça um programa que multiplique 2 números e adcione 10 no resultado
[] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33
[] Faça um programa que inicie com dois nomes, e o programa imprima o seguinte dado:
    Olá, meu nome é (nome 1) e o nome do meu amigo é (nome 2)

[] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
[] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado

[] Faça um programa que imprima na tela se um nome é igual ao outro nome gitado.
    Porém, os dois nomes devem estar em um Array.

[] Faça um programa que imprima na tela se um nome é diferente ao outro nome gitado.
    Porém, os dois nomes devem estar em um Array.
*/

const number1 = 20
const number2 = 10
console.log(number1 + number2)

let multiplique = (4 * 8) + 10
console.log(multiplique)

let raiz = (Math.sqrt(25) * 10) / 33
console.log(raiz)

const name1 = "Mateus"
const name2 = "Luis"
console.log(`Olá, meu nome é ${name1} e o nome do meu amigo é ${name2}`)

console.log(name1 == name2)
console.log(name1 != name2)

const names = ["Mateus", "Luis"]
console.log(names[0] == names[1])
console.log(names[0] != names[1])

let randomNumber = (Math.random() * 100).toFixed(0)

console.log(randomNumber)