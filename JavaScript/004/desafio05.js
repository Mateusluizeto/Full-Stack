/*const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000] // Apenas os pares e divisíveis por 5


let onlyEvenNumbersAndDivisibleBy5 = list.filter(number => {
    return number % 2 == 0 && number % 5 == 0
})

console.log(onlyEvenNumbersAndDivisibleBy5) */


const companies = [ // Funadada apenas dps de 1975 com minimo de 200 de valor de mercado
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
]

const only1975 = companies.filter((companie) => {
   const comapanie75 = companie.foundedOn >= 1975
   const marketMinValue = companie.marketValue >= 200
   return comapanie75 && marketMinValue
})

console.log(only1975)