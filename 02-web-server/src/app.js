// nodemon src/app.js - js,hbs
// http://localhost:3000/

const path = require('path')
const express = require('express')
const hbs = require('hbs')


console.log(__dirname)
console.log(__filename)

console.log(path.join(__dirname, '../public'))

// initialize app
const app = express()

// Define paths for Express config
const publiDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlbars and viees location
// we enable hbs module, which we've installed before
app.set('view engine', 'hbs')
// here we specify viewPath for hbs files
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static dir to seve
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
    title: 'Help',
    name: "Anna"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: '20C',
    location: 'Frankfurt'
  })
})

// we can specify 404 for different routes
app.get('/help/*', (req, res) => {
  res.render('404', {
    msg: 'Help article not found',
    title: '404 not found',
    name: "Anna"
  })
})

// make route for everything else in order to generate 404
app.get('*', (req, res) => {
  res.render('404', {
    msg: 'Sorry. Try another page',
    title: '404 not found',
    name: "Anna"
  })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
