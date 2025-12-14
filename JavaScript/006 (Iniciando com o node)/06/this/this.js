/*
    THIS

    this em inglês significa => este, esta, isto

    No JavaScript, o this faz referência:

    Node => module.exports
    Web => window

    Escopo:
        => Global -> quando começamos a escrever nossa aplicação
            No contexto global, o this faz referência ao objeto global,
            que é  objeto window no navegador de internet ou ao objeto global no Node.js.

        => Local -> Por exemplo, dentro de uma função!
*/

console.log(this == module.exports)

// const name = "Mateus" // Escopo global

/*function myName() {
    const myname = "Mateus"  // Escopo local
}*/

const person = {
    name: "Rodolfo",
    age: 25,
    talk: function(){
        console.log(this.name, this.age)
    }
}

person.talk()
