/*
    REDUCE
    - Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parâmetros 
        - acumulador
        - valor atual
        - index
        - array completo
*/

const list = [1,2,3,4]

const sum = list.reduce((acc, current) => {
    console.log('Acumulador',acc)
    console.log('Atual',current)
    return acc + current
}, 0)

//console.log(sum)