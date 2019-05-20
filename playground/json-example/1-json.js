// node 1-json.js
const fs = require('fs');
/*
 1 PART OF CODE
 =========
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

// convert obj to js
const bookJSON = JSON.stringify(book)
fs.writeFileSync("1-json.json", bookJSON)
console.log(bookJSON)

// oposite of JSON
const parsedData = JSON.parse(bookJSON)
// from obj we have an access to the key-value propery
console.log(parsedData.title)*/

// it returns dataBuffer data
const dataBuffer = fs.readFileSync('1-json.json')
// in order to recieve strings
console.log(dataBuffer.toString())
// parse to recieve and obj
const data = JSON.parse(dataBuffer.toString())
console.log(data.title)
