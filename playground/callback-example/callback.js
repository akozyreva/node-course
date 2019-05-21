setTimeout( ()=> {
  console.log("2 seconds are up")
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter( (name) => {
  return name.length <= 4
})

// callback is every anonumous function
const geocode = (address, callback) => {
  setTimeout( () => {
    const data = {
      lat: 0,
      long: 0
    }
  // in async code return statement doesn't work
  //return data
  // but we can pass data into callback
  callback(data)
  }, 3000)
}

// so how can we return the data??
// for this purpose we use callback
geocode('Philadelphia', (data) => {
  console.log(data)
})
