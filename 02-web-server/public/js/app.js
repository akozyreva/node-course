console.log('Client Side js file is loading')

fetch('http://puzzle.mead.io/puzzle').then( (res) => {
    res.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=Moscow').then( res => {
    res.json().then(data => {
        //console.log(data)
        console.log(data.location)
        console.log(data.forecastData)
    }).catch( er => console.log(`Error with retrieving data ${er}`))
}).catch(er => console.log(`Problem with senging req ${er}`))

