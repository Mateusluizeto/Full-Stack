/*
 [] Escreva um programa onde, você chame uma função enviando um número,
    a função deve imprimir na tela os números de 1 até o número que você enviou
 [] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10)
    e escrever a tabuada de 1 a 10 do valor lido.
 [] Escreva um programa onde, você chame uma função e diga a hora exata
 [] Escreva um programa onde, você chame uma função e diga em que ano estamos
 [] Escreva um programa onde, você chame uma função mandando dois argumentos, e números, e a função responde qual número é maior
 
 [] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
    - média de salário da população
    - média do número de filhos
    - maior salário
- O final da leitura de dados se dará com a entrada de um salário negativo
- Faça isso usando uma função

[] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
   - Você deve enviar como argumentos da função
     - valor inicial investido
     - valor atual do investimento
     - tempo em meses, que o valor está investido
    - A função deve RETORNAR  a taxa de juros, já formatada ex: 2,5%
        -formula: juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
    
    [] Desconto
*/

/*Exercício 1

function antecessores(number){
    for(let i = 0; number >= i; i++){
        console.log(i)
    }
}

antecessores(99)
*/

/*Exercício 2

function multiplicate(number){
    for(let i = 0; i <=10; i++){
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

multiplicate(9)
*/

/*Exercício 3

function hora(){
 const horaAtual = new Date().getHours()
 const minutos = new Date().getMinutes()
 console.log(`A hora atual é ${horaAtual} horas e ${minutos} minutos`)
}

hora()

*/

/*Exercício 4

function whatsYear(){
    let year = new Date().getFullYear()
    console.log(`O ano atual é ${year}`)
}

whatsYear()*/

/*Exercício 5

function largerNumber(number1, number2){
    if(number1 > number2){
        console.log(`${number1} é maior`)
    } else if(number1 == number2){
        console.log('Os números são iguais')
    } else{
        console.log(`${number2} é maior`)
    }
}

largerNumber(2,3)
*/

/*Exercício 6
    [] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
    - média de salário da população
    - média do número de filhos
    - maior salário
- O final da leitura de dados se dará com a entrada de um salário negativo
- Faça isso usando uma função


const people = [
    {
        numberOfChildren: 2,
        salary: 2000
    },
    {
        numberOfChildren: 5,
        salary: 3000
    },
    {
        numberOfChildren: 0,
        salary: 2500
    },
    {
        numberOfChildren: 2,
        salary: 1000
    },
    {
        numberOfChildren: 3,
        salary: 2300
    },
    {
        numberOfChildren: 1,
        salary: 200
    },
    {
        numberOfChildren: 0,
        salary: -2000
    },
]

function findAvarageAndHighestSalary(peopeInformation){
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for(let i = 0; i <= peopeInformation.length; i++){
        const salary = peopeInformation[i].salary
        const children = peopeInformation[i].numberOfChildren

        if(salary > highestSalary) highestSalary = salary

        if(salary < 0){
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior Salário R$${highestSalary}`)
            break
        } else{
            averageSalary = averageSalary + salary
            averageChildren += children
        }
    }
}

findAvarageAndHighestSalary(people)

*/

/*Exercício 7*/

function calculate(valorInicial, valorAtual, tempo){
    const juros = (valorAtual - valorInicial) / (valorInicial * tempo)
    console.log((juros * 100).toFixed(2) + "%")
}

calculate(1000, 1200, 10)