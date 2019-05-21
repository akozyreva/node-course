const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(37.8267, -122.4233, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


geoCode('Frankfurt am Main', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
