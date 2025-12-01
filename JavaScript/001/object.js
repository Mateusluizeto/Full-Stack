/*
OBEJECT

Propriedade: valor
marca: Samsung
cor: preta
tamanho: "75"

nome: Mateus
idade: 18
altura: 1.7m
*/

const person = {
    name: "Rodolfo",
    age: 28,
    sex: "maculino",
    height: "1.7",
    address: {
        street: "13 de maio",
        number: 24
    }
}

console.log(`O nome do usuário é ${person.name}, tem ${person.age} anos, é do sexo ${person.sex}, e tem ${person.height} de altura`)
console.log(`Mora na rua ${person.address.street}, numero ${person.address.number}`)