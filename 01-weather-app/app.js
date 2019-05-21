const request = require('request')

const url = 'https://api.darksky.net/forecast/00dfabea84ee5d0c8dff9cdfebe95ca6/37.8267,-122.4233?units=si'

// json:true - lib automatically parses json as obj
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

})

// Geocoding
// Address -> Lat/Long -> Weahter

const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Frankfurt%20am%20Main.json?access_token=pk.eyJ1IjoiYWtvenlyZXZhIiwiYSI6ImNqdnhneTNkZjA0bWw0YW1yN2w3d2MwaXoifQ.csE8gLIlxj9QzXu0lGeUUg&limit=1"
request({ url: geoUrl, json:true }, (error, response) => {
    if (error) {
      console.log(error)
      console.log("Unable to connect to the locations")
    } else if (!response.body.features.length) {
      console.log("No results")
    } else {
      const latitude = response.body.features[0].center[1]
      const longtitude  = response.body.features[0].center[0]
      console.log(latitude, longtitude)
    }
})
