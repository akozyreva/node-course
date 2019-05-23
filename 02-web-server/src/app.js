// nodemon src/app.js
// http://localhost:3000/

const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(__filename)

console.log(path.join(__dirname, '../public'))

// initialize app
const app = express()
const publiDir = path.join(__dirname, '../public')
app.use(express.static(publiDir))


app.get('/weather', (req, res) => {
  res.send({
    forecast: '20C',
    location: 'Frankfurt'
  })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
