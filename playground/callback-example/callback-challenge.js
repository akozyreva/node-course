const add = (a, b, callback) => {
  setTimeout( () => {
    const sum = a + b
    callback(sum)
  }, 1000, a, b)
}

add(1, 4, sum => {
    console.log(sum)
})
