// run it by the following command
// node app.js Moscow
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv.length < 3) {
  console.log("Specify city")
} else {
  geoCode(process.argv[2], (error, data) => {
    if(error) {
      return console.log(error)
    }
    // console.log('Data', data)
    // forecastData is another data, so we need to separate names for geoCode and forecast
    forecast(data.latitude, data.longtitude, (error, forecastData) => {
        if(error) {
          return console.log(error)
        }
        // we have no ability to recieve a location from forecast, so
        // take it from geocode answer
        console.log(data.location)
        console.log(forecastData)
    })
  })
}
