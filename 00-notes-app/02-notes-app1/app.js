// importing this file allows me to execute it immideatelly
// we need to assign variable, which we return from require
const {add, getNotes} = require('./utils')
// format of importing preinstalled npm
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
//const name = 'Anna'

console.log(add(1,2))
console.log(getNotes())

// email validation - this example return false
console.log(validator.isEmail('test'))

// chalk challendge
const msg = chalk.bold.green.inverse;
console.log(msg("Success"))

// hot to install package globally
// npm i nodemon -g
// nodemon restarts every time, when code change

// it shows arguments, especially arguments, which were inputed from cmd
// run this:      node app.js Anna
// and you see Anna in console
console.log("===============")
console.log(process.argv);
const command = process.argv[2]
if (command === "add") {
  console.log('Adding note')
} else if (command === "remove") {
  console.log("Removing note")
}
// node app.js add --title="This is my title"
// but we need it parse somehow
