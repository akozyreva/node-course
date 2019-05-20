const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// Customize yargs version
yargs.version('1.1.0')
// and if we run node app.js --version, we recive 1.1.0
// we can run   node app.js --help    and see description of cmd
// Create add command
// node app.js add
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  // specify the arguments of our command
  builder: {
    title: {
      describe: 'Note title',
      // renquired argument
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  // from handler we have an access to builder via argv obj
  // and run the commmand to see results
  // node app.js add --title=2 --body=sss
  handler(argv) {
    console.log(`Title is ${argv.title}`)
    console.log(`Body is ${argv.body}`)
    notes.addNote(argv.title, argv.body)
  }
})

//  node app.js remove --title=2
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note title',
      // renquired argument
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log(`Removing the note ${argv.title}`)
    notes.removeNote(argv.title)
  }
})

// node app.js read --title=222
yargs.command({
  command: 'read',
  describe: 'Reading note',
  builder: {
    title: {
      describe: 'Note title',
      // renquired argument
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

// node app.js list
yargs.command({
  command: 'list',
  describe: 'Listing notes',
  handler() {
    notes.getNotes()
  }
})

yargs.parse()

// add, remove, read, list

// show yargs argv
