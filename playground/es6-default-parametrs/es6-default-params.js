// for running 
// node es6-default-params.js
const greeter = (name = "Jake") => {
    console.log(`Hello ${name}`)
}

greeter()

// in destructuring we can also set default values
// I mean - specify values of obj, for example
const transactions = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transactions('order')