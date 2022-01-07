fs = require('fs')

const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
}

// const bookJS = JSON.stringify(book)
// console.log(bookJS)

// const parsedData = JSON.parse(bookJS)
// console.log(parsedData)

// fs.writeFileSync('1-json.json', bookJS)

const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = "The Secret"
data.author = "Rhonde Byrne"
data.age = 24

console.log(data)
fs.writeFileSync('1-json.json', JSON.stringify(data))