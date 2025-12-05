const list = [20,3,234,12,17,541,6,87,275,1000]

const companies = [ 
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
]

// Adcionar 10% de valor a todas as companias / map
// filtar as espresas fundadas antes dos anos 2000 e somar a marketValue delas


const plusValue = companies.map((company) => {
    const acressent = company.marketValue = company.marketValue * 1.1
    return acressent.toFixed(0)
})

const before2000 = companies.filter((company) => {
    return company.foundedOn <= 2000
})

const sumBefore2000 = before2000.reduce((acc, elements) => {
    return elements.marketValue + acc
    
}, 0)

console.log(plusValue)
console.log(before2000)
console.log(sumBefore2000.toFixed(0))

