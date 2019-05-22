// configuration of express.js and starting it
// how to run - in root dir
// node src/app.js
// for running continuously
// nodemon src/app.js
const express = require('express')

// initialize app
const app = express()

// specify main route - what to do?
// req- request
// res - response
// app.com
// app.com/help
// app.com/about
app.get('', (req, res) => {
  res.send('Hello express!')
})

app.get('/help', (req, res) => {
  res.send('Help page')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/weather', (req, res) => {
  res.send('Weather')
})

// start server - specify port
// http://localhost:3000/
app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
