const request = require('request')

const url = 'https://api.darksky.net/forecast/00dfabea84ee5d0c8dff9cdfebe95ca6/37.8267,-122.4233'

// json:true - lib automatically parses json as obj
request({ url: url, json:true }, (error, response) => {
    // we parsed the body of recieving json
    // response.body - root directory
    const data = response.body.currently
    console.log(`It's currently ${data.temperature} degreess out. There is a ${data.precipProbability}% chance of rain`)
})
