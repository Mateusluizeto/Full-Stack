/*const list = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'João', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Julio', vip: false},
];

let newArray = list.map((person) =>{
    if(person.vip == true){
        person.section = 'Black'
    } else{
        person.section = 'Green'
    }

    return person
})

console.log(newArray) */

const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10},
]

const newArray = students.map((person => {
    if(person.testGrade >= 7){
        person.finalResult = 'approved'
    } else{
        person.finalResult = 'disapproved'
    }

    return person
}))

console.log(newArray)




