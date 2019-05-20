const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes....'

// adding note
const addNote = (title, body) => {
  const notes = loadNotes()
  // checking, that title already exists
  noteTitleOccur = NoteAlreadyExist(notes, title)
  // if found occutence, stop execution
  if (noteTitleOccur != -1) {
    console.log('Title already exists')
    return
  }

  notes.push({
    title: title,
    body: body
  })

  saveNotes(notes)
}


// Removing note
const removeNote = title => {
  const notes = loadNotes()
  // checking, that title already exists
  noteTitleOccur = NoteAlreadyExist(notes, title)
  // if no occur, show message, that there is nothing to delete
  if(noteTitleOccur === -1) {
    console.log(chalk.red.inverse("There's nothing to delete"))
    return
  }
  console.log(chalk.green.inverse(`Note was deleted with the following ${title}`))
  notes.splice(noteTitleOccur,1)
  saveNotes(notes)
}

// helper function, which find occur
const NoteAlreadyExist = (notes, title) => {
  // we recive title. let's find occurence
  const noteTitleOccur = notes.findIndex( note => {
    return note.title === title
  })
  return noteTitleOccur
}


// function for saving notes
const saveNotes = notes => {
  // make it like JSON
  const dataJSON = JSON.stringify(notes)
  // and save it in a file
  fs.writeFileSync('notes.json', dataJSON)
}



// function for recieving notes
const loadNotes = () =>  {
    try {
      return JSON.parse(fs.readFileSync("notes.json").toString())
    } catch(e) {
        // if tyy block failes, catch block immediatelly exectue
        // console.log(e)
        return []
    }
}

module.exports = {
  addNote,
  getNotes,
  removeNote
}
