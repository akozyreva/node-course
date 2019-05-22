const https = require('https')

const url =`https://api.darksky.net/forecast/00dfabea84ee5d0c8dff9cdfebe95ca6/40,-35?units=si`

const request = https.request(url, (response) => {
  let data = ''
  response.on("data", (chunk) => {
    // it runs for several times and returns parts of answer. we collect them
    data = data + chunk.toString()
    //console.log(data)
  })

  response.on("end", () => {
    // in the end we recieve final json
    const body  = JSON.parse(data)
    console.log(body)
  })
})

// handling for error
request.on('error', (error) => {
  console.log(error)
})

request.end()
