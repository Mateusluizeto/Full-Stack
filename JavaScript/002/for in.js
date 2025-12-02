/*
    ESTRUTURA DE REPETIÇÃO - for in
*/

const student = {
    name: "Caio",
    age: 26,
    genre: "male",
}

// student["name"] === student.name

for(let property in student){
    console.log(student[property]) // Caio 26 male
}