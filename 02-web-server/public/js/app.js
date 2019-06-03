console.log('Client Side js file is loading')

fetch('http://puzzle.mead.io/puzzle').then( (res) => {
    res.json().then((data) => {
        console.log(data)
    })
})


const weatherForm = document.querySelector('form')


weatherForm.addEventListener('submit', (event) => {
    // it's for not reloading page after submit btn
    event.preventDefault()
    // retrieve val from input
    const search = document.querySelector('input').value
    if(!search) {
        return
    }
    fetch(`http://localhost:3000/weather?address=${search}`).then( res => {
        res.json().then(data => {
            //console.log(data)
            console.log(data.location)
            console.log(data.forecastData)
        }).catch( er => console.log(`Error with retrieving data ${er}`))
    }).catch(er => console.log(`Problem with senging req ${er}`))
})