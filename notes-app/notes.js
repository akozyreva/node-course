const fs = require('fs')


const getNotes = () => 'Your notes....'

// adding note
const addNote = (title, body) => {
  const notes = loadNotes()

  // checking, that title already exists
  noteTitleOccur = notes.find( note => {
    return note.title === title
  })
  // if found occutence, stop execution
  if (noteTitleOccur != undefined) {
    console.log('Title already exists')
    return
  }

  notes.push({
    title: title,
    body: body
  })

  saveNotes(notes)
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
  getNotes
}
