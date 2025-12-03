/*
    MAP
    - Cria um novo array, a partir do array percorrido(array original)
    - Cria um novo array, com a mesma quantidade de intens do array original
    - Aceita 3 parâmetros
        - itens do array
        - index
        - array completo
*/

const numbers = [1,2,3,4]
const students = [
    {name: "Rodolfo", age: 25},
    {name: "Maria", age: 43},
    {name: "João", age: 21},
    {name: "Bruno", age: 43},
    {name: "Carla", age: 13},
    {name: "Ana", age: 20},
    {name: "Julio", age: 26},
];

const double = number => number * 2 // Isso é uma function
const toReal = number => `R$ ${number.toFixed(2)}`


const newArray = numbers.map(double).map(toReal) // Aqui ele multiplicou e somou
// criei a estrutura fora do map e coloquei ela aqui dentro

console.log(newArray)
