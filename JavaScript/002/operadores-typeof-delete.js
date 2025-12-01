/* Operadores typeof e delete

    typeof: Possibilita que seja descoberto o tipo de valor de um elemento
    delete: deleta o elemento que for selecionado
*/

const myNumber = 20
const myString = "Olá eu sou uma string"

const myObject ={
    name: "Object",
    age: 20,
    height: 1.70
}

console.log(typeof myNumber) // Number
console.log(typeof myString) // String
console.log(typeof myObject) // Object

delete myObject.age // Deletou o parâmetro age do objeto
delete myObject.name
console.log(myObject) // height: 1.7