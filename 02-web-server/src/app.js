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

// we enable hbs module, which we've installed before
app.set('view engine', 'hbs')

app.use(express.static(publiDir))

// for rendering template we need to add router and render inside of it
app.get('', (req, res) => {
  // and we can change the content of html to make it dynamically
  res.render('index', {
    title: 'Weather App',
    name: 'Anna'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Weather App',
    name: 'Anna'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    msg: 'Help msg',
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: '20C',
    location: 'Frankfurt'
  })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
