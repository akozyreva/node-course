const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')
// and if we run node app.js --version, we recive 1.1.0
// we can run   node app.js --help    and see description of cmd
// Create add command
// node app.js add
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log("Adding a new note!")
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove note',
  handler: function() {
    console.log("Removing the note")
  }
})

yargs.command({
  command: 'read',
  describe: 'Reading note',
  handler: function() {
    console.log("Reading the note")
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing note',
  handler: function() {
    console.log("Listing the note")
  }
})
console.log(yargs.argv)

// add, remove, read, list

// show yargs argv
