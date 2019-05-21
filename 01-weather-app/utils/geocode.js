const request = require('request')
/* Geocoding
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
})*/

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoiYWtvenlyZXZhIiwiYSI6ImNqdnhneTNkZjA0bWw0YW1yN2w3d2MwaXoifQ.csE8gLIlxj9QzXu0lGeUUg&limit=1`
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to the locations', undefined)
    } else if (!response.body.features.length) {
      callback("No results", undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longtitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geoCode
