const request = require('request')
// json:true - lib automatically parses json as obj
/*const url = 'https://api.darksky.net/forecast/00dfabea84ee5d0c8dff9cdfebe95ca6/37.8267,-122.4233?units=si'
request({ url: url, json:true }, (error, response) => {
    // we parsed the body of recieving json
    // response.body - root directory
    if (error) {
      console.log("Unable to locate to weather service")
    } else if (response.body.error) {
      // for example, invalid request
      console.log('Unable to find location')
    } else {
      const data = response.body.currently
      console.log(response.body.daily.data[0].summary)
      console.log(`It's currently ${data.temperature} degreess out. There is a ${data.precipProbability}% chance of rain`)
    }

})*/
const forecast = (lat, long, callback) => {
  const url =`https://api.darksky.net/forecast/00dfabea84ee5d0c8dff9cdfebe95ca6/${lat},${long}?units=si`
  request({ url: url, json:true }, (error, response) => {
    if (error) {
      callback("Unable to locate to weather service", undefined)
    } else if (response.body.error) {
      // for example, invalid request
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degreess out. There is a ${response.body.currently.precipProbability}% chance of rain`)
    }
  })
}

module.exports = forecast
