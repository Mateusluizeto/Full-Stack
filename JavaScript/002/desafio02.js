/*
    [] Faça um programa que compare um número com 10 e imprima na tela "O número é maior, o número é menor, o número é igual"
    [] Faça um programa que verifica se uma pessoa é brasileira ou não
    [] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
       Então ele também irá gerar um número aleatório entre 1 e 10, e verificar se a pessoa ganhou ou não
       Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem

    [] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
    
    [] Crie 5 objetos nesse formato

    {
        nome: ""
        idade: ""
        sexo: ""
        profissão: ""
        nacionalidade: ""
    }
    
    Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo,
    para ser aprovada, a pessoa deve ser maior de idade e brasileira

    [] Faça um programa onde os jurados vão dar a explicação para cada nota dada.
     São permitidos notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

    [] Faça um programa onde leia um número e diga se ele é par ou ímpar
    
    [] Faça um programa onde leia um número e diga se ele é:
     - ímpar
     - par
     - é um número primo e ímpar,
     - é par e divisível por 5.

    [] Faça um programa onde ele leia 4 números. em cada caso, ele deve retornar a mensagem condizente:
        - Todos os números são ímpares => TODOS OS NÚMEROS SÃO IMPARES
        - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES
*/

/* Primeiro 

let number = 10

if(number > 10){
    console.log('é maior')
} else if(number == 10){
    console.log('é igual')
} else{
    console.log('é menor')
}  */

/* Segundo 

    const contryPeople = 'Brasil'

    if(contryPeople == 'Brasil'){
        console.log('é brasileira')
    } else{
        console.log('não é brasileira')
    }
*/

/* Terceiro 

    let randomNumber1 = Math.round(Math.random() * 10)
    let randomNumber2 = Math.round(Math.random() * 10)

   if(randomNumber1 == randomNumber2){
    console.log('Ganhou, caiu números iguais')
   } else{
    console.log('Perdeu')
   }

   console.log(randomNumber1)
   console.log(randomNumber2)
   */

/* Quarto 

let number1 = 5
let number2 = 52
let number3 = 3

let menor = Math.min(number1, number2, number3);
let maior = Math.max(number1, number2, number3);

console.log("Menor número:", menor);
console.log("Maior número:", maior);
*/

/* Quinto 

let persons = [
    {
        nome: "Mateus",
        idade: 18,
        sexo: "Masc",
        profissão: "Programador",
        pais: "Brasil"
    },
    {
        nome: "Nicolly",
        idade: 17,
        sexo: "Fem",
        profissão: "Médica",
        pais: "Brasil"
    },
    {
        nome: "Pedro",
        idade: 23,
        sexo: "Masc",
        profissão: "Jardineiro",
        pais: "Irlanda"
    },
    {
        nome: "Marcela",
        idade: 12,
        sexo: "Fem",
        profissão: "Cozinheira",
        pais: "Brasil"
    },
    {
        nome: "João",
        idade: 23,
        sexo: "Masc",
        profissão: "Motorista",
        pais: "Paraguai"
    }
]

for(let x = 0; x < persons.length; x++){
    if(persons[x].idade >= 18 && persons[x].pais == "Brasil"){
        console.log(`${persons[x].nome} está aprovado`)
    } else{
        console.log(`${persons[x].nome} está reprovado`)
    }
}
*/

/* Sexto

let nota = 9

switch (nota){
    case 1: console.log('Horrivel nota')
    break
    case 2: console.log('Péssima nota')
    break
    case 3: console.log('nota ruim')
    break
    case 4: console.log('Nota quase média')
    break
    case 5: console.log('Nota média')
    break
    case 6: console.log('Mais ou menos 60%')
    break
    case 7: console.log('Bom desempenho 70%')
    break
    case 8: console.log('Ótimo desempenho 80%')
    break
    case 9: console.log('Quase 100%')
    break
    case 10: console.log('Parabéns 100%')
    break
    default: console.log('Nota não registrada')
} 
*/

/* Sétimo 

let number = 49

if(number % 2 == 0){
    console.log(`${number} é par`)
} else{
    console.log(`${number} é ímpar`)
}
*/

/*Oitávo*/

let numbers = [1, 2, 8 , 7 ]

for(let n of numbers){
    if(n % 2 == 0){
        console.log(`${n} é par`)
    } else{
        console.log(`${n} é impar`)
    }
}