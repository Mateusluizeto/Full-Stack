/*

    CLASSES (Toda classe deve começar com letra maiúscula)

*/

/*const person = {
    name: "Rodolfo",
    age: 28,
    talk: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}*/


class Person {
    constructor (name, age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const newPerson = new Person('Mateus', 18) // Hello, I'm Mateus
const newPerson1 = new Person('João', 50) // Hello, I'm João
const newPerson2 = new Person('Maria', 28) // Hello, I'm Maria

newPerson.talk() // Hello, my name is Mateus
newPerson1.talk() // Hello, my name is João
newPerson2.talk() // Hello, my name is Maria